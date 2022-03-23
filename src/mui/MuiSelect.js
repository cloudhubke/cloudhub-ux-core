import React, { useState, useEffect } from 'react';
import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { makeStyles } from '@mui/styles';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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

const MuiSelect = React.forwardRef(
  (
    {
      options,
      value,
      onChange,
      onSelectChange,
      axiosinstance,
      returnkeys,
      menuPlacement,
      disabled,
      placeholder,
      url,
      params,
      keyExtractor,
      valueExtractor,
      labelExtractor,
      isMulti,
      creatable,
      renderOption,
      ...props
    },
    ref
  ) => {
    const { sizes, colors } = React.useContext(ThemeContext);

    const [list, setList] = React.useState([]);
    const [listVal, setListVal] = React.useState(null);

    const [opts, setOpts] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const selectRef = React.useRef();

    const classes = useStyles({ sizes, colors })();

    useEffect(() => {
      if (!isEqual(options, list) && Array.isArray(options)) {
        setList(options);
        setOpts(
          [...options].map((item, index) => ({
            value: keyExtractor(item, index),
            label: labelExtractor(item, index),
            item,
          }))
        );
      }
    }, [JSON.stringify(options)]);

    useEffect(() => {
      if (isEqual(listVal, value)) {
        return;
      }

      setListVal(value);

      if (!value) {
        setSelectedValue([]);
        return;
      }

      if (Array.isArray(value)) {
        setSelectedValue(
          [...value].map((item, index) => ({
            value: keyExtractor(item, index),
            label: labelExtractor(item, index),
            item,
          }))
        );
      } else {
        setSelectedValue(
          [value].map((item, index) => ({
            value: keyExtractor(item, index),
            label: labelExtractor(item, index),
            item,
          }))
        );
      }
    }, [JSON.stringify(value)]);

    const logChange = (val) => {
      if (!val || isEmpty(val)) {
        onSelectChange(isMulti ? [] : null);
        return onChange(isMulti ? [] : null);
      }

      if (isMulti) {
        if (val && Array.isArray(val)) {
          const options = val.map((item, index) => {
            if (!isPlainObject(item.item)) {
              return item.item;
            }
            const objValue = { ...item.item };
            return valueExtractor(objValue, index);
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

    React.useImperativeHandle(ref, () => ({
      focus: () => {
        if (selectRef && selectRef.current) {
          if (typeof selectRef.current.focus === 'function') {
            selectRef.current.focus();
          }
        }
      },
    }));

    return (
      <Autocomplete
        ref={selectRef}
        multiple={Boolean(isMulti)}
        id="mui-selector"
        size="small"
        value={isMulti ? selectedValue || [] : (selectedValue || [])[0] || null}
        options={opts}
        onChange={(e, val) => {
          logChange(val);
        }}
        disabled={disabled}
        disableCloseOnSelect={Boolean(isMulti)}
        getOptionLabel={(item) => item.label || item}
        isOptionEqualToValue={(option, value) => {
          if (option) {
            return option.value === value.value;
          }
          return false;
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
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
            InputProps={{
              ...params.InputProps,
              classes: {
                input: classes.input,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        )}
        {...(isMulti ? { limitTags: 2 } : {})}
        {...props}
      />
    );
  }
);

MuiSelect.defaultProps = {
  isMulti: false,
  params: {},
  value: null,
  options: [],
  onChange: () => {},
  onSelectChange: () => {},
  returnkeys: [],
  url: '',
  placeholder: 'Select...',
  disabled: false,
};

export default MuiSelect;
