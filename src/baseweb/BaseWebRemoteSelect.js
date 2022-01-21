import React from 'react';
import axios from 'axios';
import BaseWebSelect from './BaseWebSelect';
import { useDebounce } from '../customhooks';

const BasewebRemoteSelect = React.forwardRef(
  (
    { axiosinstance, url, debounceTime, params, filterkey = 'filter', ...rest },
    ref
  ) => {
    const controlRef = React.useRef();
    const cachedResults = React.useRef({});
    const [isLoading, setisLoading] = React.useState(false);
    const [filter, setfilter] = React.useState('');
    const [options, setoptions] = React.useState([]);
    const [dropdownOpen, setdropdownOpen] = React.useState(false);

    const debouncedFilter = useDebounce(filter, debounceTime);
    const debouncedParams = useDebounce(params, debounceTime);

    const getOptions = React.useCallback(
      async (menuOpen = dropdownOpen) => {
        try {
          const resultkey = `${url}${debouncedFilter || ''}${JSON.stringify(
            debouncedParams
          )}`;

          if (url && menuOpen) {
            setisLoading(true);
            if (cachedResults.current[resultkey]) {
              setoptions(cachedResults.current[resultkey]);
            } else {
              const { data } = await axiosinstance().get(url, {
                params: { ...debouncedParams, [filterkey]: debouncedFilter },
              });
              if (data && Array.isArray(data.items)) {
                setoptions(data.items);
                cachedResults.current[resultkey] = data.items;
              }
              if (Array.isArray(data)) {
                setoptions(data);
                cachedResults.current[resultkey] = data;
              }
            }
            setTimeout(() => {
              setisLoading(false);
            }, 200);
          }
        } catch (error) {}
      },
      [url, debouncedFilter, JSON.stringify(debouncedParams), dropdownOpen]
    );

    React.useEffect(() => {
      getOptions();
    }, [getOptions]);

    React.useImperativeHandle(ref, () => ({
      reload: () => {
        cachedResults.current = {};
        getOptions(true);
      },
      focus: () => {
        if (controlRef.current) {
          controlRef.current.focus();
        }
      },
    }));

    return (
      <BaseWebSelect
        options={options}
        onInputChange={(event) => {
          const { target } = event;
          setfilter(target.value);
        }}
        onOpen={() => setdropdownOpen(true)}
        onClose={() => {
          setdropdownOpen(false);
          setfilter('');
        }}
        isLoading={isLoading}
        controlRef={controlRef}
        {...rest}
      />
    );
  }
);

BasewebRemoteSelect.defaultProps = {
  axiosinstance: () => axios.create({}),
  debounceTime: 1000,
  params: {},
};

export default BasewebRemoteSelect;
