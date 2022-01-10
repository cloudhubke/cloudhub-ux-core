import React from 'react';
import axios from 'axios';
import AutoComplete from './AutoComplete';
import useDebounce from '../customhooks/useDebounce';

const AsyncAutocomplete = (props) => {
  const { axiosinstance, url, readOnly, ...rest } = props;
  const cachedResults = React.useRef({});
  const [loading, setloading] = React.useState(false);
  const [filter, setfilter] = React.useState('');
  const [options, setoptions] = React.useState([]);

  const debouncedFilter = useDebounce(filter, 1000);

  const getOptions = React.useCallback(async () => {
    try {
      const filterkey = `${url}${filter || ''}`;
      if (url && !readOnly) {
        if (cachedResults.current[filterkey]) {
          setoptions(cachedResults.current[filterkey]);
          return;
        }
        setloading(true);
        const { data } = await axiosinstance().get(url, {
          params: { filter: debouncedFilter },
        });
        if (data && Array.isArray(data.items)) {
          setoptions(data.items);
          cachedResults.current[filterkey] = data.items;
        }
        if (Array.isArray(data)) {
          setoptions(data);
          cachedResults.current[filterkey] = data;
        }
        setloading(false);
      }
    } catch (error) {}
  }, [url, debouncedFilter, readOnly]);

  React.useEffect(() => {
    getOptions();
  }, [getOptions]);

  return (
    <AutoComplete
      options={options}
      onInputChange={(val) => {
        setfilter(val || '');
      }}
      loading={loading}
      {...rest}
    />
  );
};

AsyncAutocomplete.defaultProps = {
  axiosinstance: () => axios.create({}),
};

export default AsyncAutocomplete;
