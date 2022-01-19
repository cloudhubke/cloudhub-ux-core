import React from 'react';
import axios from 'axios';
import BaseWebSelect from './BaseWebSelect';
import useDebounce from '../customhooks/useDebounce';

const BasewebRemoteSelect = ({
  axiosinstance,
  url,
  debounceTime,
  params,
  filterkey = 'filter',
  readOnly,
  ...rest
}) => {
  const cachedResults = React.useRef({});
  const [isLoading, setisLoading] = React.useState(false);
  const [filter, setfilter] = React.useState('');
  const [options, setoptions] = React.useState([]);
  const [dropdownOpen, setdropdownOpen] = React.useState(false);

  const debouncedFilter = useDebounce(filter, debounceTime);
  const debouncedParams = useDebounce(params, debounceTime);

  const getOptions = React.useCallback(async () => {
    try {
      const resultkey = `${url}${debouncedFilter || ''}${JSON.stringify(
        debouncedParams
      )}`;
      if (url && dropdownOpen) {
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
  }, [url, debouncedFilter, JSON.stringify(debouncedParams), dropdownOpen]);

  React.useEffect(() => {
    getOptions();
  }, [getOptions]);

  return (
    <BaseWebSelect
      options={options}
      onInputChange={(event) => {
        if (readOnly) {
          return;
        }
        const { target } = event;
        setfilter(target.value);
      }}
      onOpen={() => {
        if (!readOnly) {
          setdropdownOpen(true);
        }
      }}
      onClose={() => {
        setdropdownOpen(false);
        setfilter('');
      }}
      isLoading={isLoading}
      readOnly={readOnly}
      {...rest}
    />
  );
};

BasewebRemoteSelect.defaultProps = {
  axiosinstance: () => axios.create({}),
  debounceTime: 1000,
  params: {},
  readOnly: false,
};

export default BasewebRemoteSelect;
