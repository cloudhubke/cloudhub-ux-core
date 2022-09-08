import React, { useState, useEffect } from 'react';

import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import axios from 'axios';

import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CircularProgress from '@mui/material/CircularProgress';
import useDebounce from '../customhooks/useDebounce';
import ThemeContext from '../theme/ThemeContext';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = ({ sizes, colors }) =>
  makeStyles({
    margin: {
      marginTop: 0,
      marginBottom: 0,
    },
    input: {},
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: colors.primary,
      },
      '&.MuiInputBase-sizeSmall': {
        minHeight: sizes.inputHeight,
      },
    },
    notchedOutline: {
      margin: 0,
    },
    cssFocused: {},
    cssLabel: {},
  });

const RemoteSelector = React.forwardRef(
  (
    {
      value,
      onChange,
      onSelectChange,
      axiosinstance,
      Graphqlmodel,
      returnkeys,
      valueField,
      displayField,
      labelExtractor,
      keyExtractor,
      valueExtractor,
      filterKey = 'filter',
      menuPlacement,
      disabled,
      placeholder,
      url,
      params,
      isMulti,
      creatable,
      debounceTime = 1000,
      otheroptions,
      renderOption,
      options: OPTIONS,
      ...props
    },
    ref
  ) => {
    const { sizes, colors } = React.useContext(ThemeContext);
    const [loading, setLoading] = React.useState(false);
    const [loaded, setLoaded] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [firstoptions, setFirstOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);

    const classes = useStyles({ sizes, colors })();

    const selectRef = React.useRef();

    const debouncedSearchText = useDebounce(searchText, debounceTime);

    const getOptions = React.useMemo(
      () => async (searchText) => {
        try {
          if (!loaded) {
            setLoaded(true);
          }
          setLoading(true);

          let data;
          if (Graphqlmodel) {
            try {
              data = await Graphqlmodel()
                .find({
                  ...params,
                  filter: `${searchText || ''}`.trim(),
                })
                .toJson();
            } catch (error) {
              console.log(error.toString());
            }
          } else {
            const { data: axiosdata } = await axiosinstance().get(url, {
              params: { ...params, [filterKey]: `${searchText || ''}`.trim() },
            });

            data = axiosdata;
          }

          const array = data ? data.items || data : [];
          let valoptions = [];
          if (!isEmpty(value)) {
            valoptions = Array.isArray(value) ? value : [value];
          }

          const options = uniqBy(
            [...array, ...valoptions, ...otheroptions].map((item, index) => ({
              value: keyExtractor(item, index),
              label: labelExtractor(item, index),
              item,
            })),
            'value'
          );

          if (firstoptions.length === 0) {
            setFirstOptions(options);
            setOptions(options);
          } else {
            setOptions(options);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          // do nothing
        }
      },
      [JSON.stringify(params), loaded, axiosinstance, url, firstoptions.length]
    );

    useEffect(() => {
      if (!loaded) {
        return;
      }

      if (!debouncedSearchText) {
        if (firstoptions.length > 0) {
          setOptions([...firstoptions]);
        }
      } else {
        getOptions(debouncedSearchText);
      }
    }, [debouncedSearchText, firstoptions.length]);

    useEffect(() => {
      if (!value || isEmpty(value)) {
        setSelectedValue([]);
        return;
      }

      if (Array.isArray(value)) {
        const valoptions = [...value].map((item, index) => ({
          value: keyExtractor(item, index),
          label: labelExtractor(item, index),
          item,
        }));

        setOptions(uniqBy([...valoptions, ...options], 'value'));
        setSelectedValue(valoptions);
      } else {
        const valoptions = [value].map((item, index) => ({
          value: keyExtractor(item, index),
          label: labelExtractor(item, index),
          item,
        }));
        setOptions(uniqBy([...valoptions, ...options], 'value'));
        setSelectedValue(valoptions);
      }
    }, [JSON.stringify(value), isMulti]);

    const logChange = (val) => {
      if (!val || isEmpty(val)) {
        onSelectChange(isMulti ? [] : null);
        return onChange(isMulti ? [] : null);
      }
      if (isMulti) {
        if (val && Array.isArray(val)) {
          const options = val.map((item) => {
            if (!isPlainObject(item.item)) {
              return item.item;
            }
            const objValue = { ...item.item };
            return valueExtractor(objValue);
          });
          onChange(options);
          onSelectChange(val || []);
          return true;
        }
        onChange(val || []);
        onSelectChange(val || []);
        return true;
      }
      if (val && val.value) {
        if (!isPlainObject(val.item)) {
          onSelectChange(val.item);
          return onChange(val.item);
        }
        const objValue = { ...val.item };

        onChange(valueExtractor(objValue));
        onSelectChange(objValue);
        return true;
      }
    };

    const onMenuOpen = () => {
      if (!loaded) {
        getOptions(debouncedSearchText || '');
      }
    };

    React.useImperativeHandle(ref, () => ({
      reload: () => {
        getOptions(searchText);
      },
      focus: () => {
        if (selectRef && selectRef.current) {
          if (typeof selectRef.current.focus === 'function') {
            selectRef.current.focus();
          }
        }
      },
    }));

    return (
      <React.Fragment>
        <Autocomplete
          ref={selectRef}
          multiple={Boolean(isMulti)}
          id="mui-async-selector"
          size="small"
          value={
            isMulti ? selectedValue || [] : (selectedValue || [])[0] || null
          }
          options={options}
          onOpen={onMenuOpen}
          onChange={(e, val) => {
            logChange(val);
          }}
          disabled={disabled}
          disableCloseOnSelect={Boolean(isMulti)}
          getOptionLabel={(item) => item.label || item}
          filterOptions={(val) => val}
          isOptionEqualToValue={(option, value) => {
            if (option) {
              return option.value === value.value;
            }
            return false;
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option.value}>
              {renderOption ? (
                renderOption({ option: option.item, selected })
              ) : (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </React.Fragment>
              )}
            </li>
          )}
          style={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder={placeholder}
              style={{
                minHeight: sizes.inputHeight,
              }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              InputProps={{
                ...params.InputProps,
                classes: {
                  input: classes.input,
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          {...(isMulti ? { limitTags: 2 } : {})}
          {...props}
        />
      </React.Fragment>
    );
  }
);

RemoteSelector.defaultProps = {
  isMulti: false,
  params: {},
  axiosinstance: () => axios.create({}),
  value: null,
  otheroptions: [],
  onChange: () => {},
  onSelectChange: () => {},
  returnkeys: [],
  url: '',
  placeholder: 'Select...',
  disabled: false,
};

export default RemoteSelector;
