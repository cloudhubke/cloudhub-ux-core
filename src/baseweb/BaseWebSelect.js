import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import isEqual from 'lodash/isEqual';
import { Select, TYPE } from 'baseui/select';
import Block from '../Block';
import Text from '../Text';

const BaseWebSelect = (props) => {
  const {
    options,
    input,
    value,
    onChange,
    meta,
    multi,
    isMulti,
    returnkeys,
    showError = true,
    search,
    select,

    labelExtractor,
    keyExtractor,

    displayField,
    onSelectChange,
    placeholder,
    labelKey,
    valueKey,
    labelField,
    valueField,
    filterOptions,
    dropDownStyle,
    openOnClick,
    readOnly,
    clearable,
    ...rest
  } = props;

  const val = input.value || value || [];
  const [initialValue, setValue] = React.useState(
    Array.isArray(val) ? val : [val]
  );
  const [searchTerm, setsearchTerm] = React.useState('');

  // Effect clears displayed value on form reinitialize
  React.useEffect(() => {
    const initVal = Array.isArray(val) ? val : [val];
    if (!isEqual(initVal, initialValue)) {
      setValue(initVal);
    }
    // eslint-disable-next-line
  }, [JSON.stringify(val)]);
  const [itemOptions, setitemOptions] = React.useState(options);
  const [tagProps, settagProps] = React.useState({});

  const containerRef = React.useRef();

  if (returnkeys) {
    if (Array.isArray(returnkeys)) {
      rest.valueExtractor = (item) => {
        if (item) {
          const obj = {};
          returnkeys.forEach((k) => {
            obj[k] = item[k];
          });
          return obj;
        }
        return item;
      };
    }
  }
  if (
    Array.isArray(options) &&
    (typeof options[0] === 'string' ||
      typeof options[0] === 'number' ||
      typeof options[0] === 'boolean')
  ) {
    rest.valueExtractor = (item) => (item && item.id ? item.id : item);
  }
  React.useEffect(() => {
    if (
      Array.isArray(options) &&
      (typeof options[0] === 'string' ||
        typeof options[0] === 'number' ||
        typeof options[0] === 'boolean')
    ) {
      setitemOptions(
        options.map((item) =>
          typeof options[0] === 'string' ||
          typeof options[0] === 'number' ||
          typeof options[0] === 'boolean'
            ? { id: item }
            : item || { id: item }
        )
      );
    } else {
      setitemOptions(
        options.map((item, index) => {
          if ((item || {}).id || !item) {
            return item;
          }
          return { ...item, id: keyExtractor(item, index) };
        })
      );
    }
    // eslint-disable-next-line
  }, [JSON.stringify(options)]);

  React.useEffect(() => {
    if (multi || isMulti) {
      settagProps({
        Tag: {
          props: {
            onActionClick: (event) => {
              let deletedText;
              try {
                deletedText = event.currentTarget.previousSibling.textContent;
                setValue((currentVal) => {
                  const newVal = currentVal
                    .map((val, index) => {
                      if (
                        (val && val === deletedText) ||
                        (typeof labelExtractor === 'function' &&
                          labelExtractor(val) === deletedText) ||
                        componentLabelExtractor({ option: val }) === deletedText
                      ) {
                        return null;
                      }
                      return val;
                    })
                    .filter(Boolean);

                  if (deletedText && typeof input.onChange === 'function') {
                    input.onChange(newVal);
                  }
                  if (deletedText && typeof onChange === 'function') {
                    onChange(newVal);
                  }
                  return newVal;
                });
              } catch (error) {}
            },
          },
        },
      });
    }
  }, [multi, isMulti]);

  const componentLabelExtractor = ({ option }) => {
    const key = keyExtractor(option);
    let labelFunction = labelExtractor;

    if (typeof labelFunction === 'function' && option && key) {
      const label = labelFunction(option);
      if (typeof label === 'string') {
        labelFunction = () => <div>{label}</div>;
      } else {
        labelFunction = () => label;
      }
    }

    if (displayField) {
      labelFunction = () => {
        const label = isPlainObject(option)
          ? option[displayField] || `option-${key}`
          : `${option}`;

        return <div>{label}</div>;
      };
    }

    return labelFunction();
  };

  const customFilter = (opts) => {
    if (Array.isArray(opts) && searchTerm) {
      return opts
        .map((option) =>
          JSON.stringify(option || {})
            .toLowerCase()
            .includes((searchTerm || '').toLowerCase())
            ? option
            : null
        )
        .filter(Boolean);
    }
    return opts;
  };
  const handleInputChange = (event) => {
    const { target } = event;
    setsearchTerm((target || {}).value || '');
  };

  return (
    <Block ref={containerRef}>
      <Select
        options={(itemOptions || []).filter((item) => {
          const itemValue = rest.valueExtractor(item);
          if ((multi || isMulti) && Array.isArray(initialValue)) {
            const ind = initialValue.findIndex((val) =>
              isEqual(val, itemValue)
            );
            return ind === -1;
          }
          return !isEqual(itemValue, initialValue);
        })}
        value={initialValue}
        onChange={(params) => {
          let val;

          if (params && params.option) {
            val =
              multi || isMulti
                ? params.value.map((item) => rest.valueExtractor(item))
                : rest.valueExtractor(params.value[0] || null);
          }

          if (typeof onChange === 'function') {
            onChange(val);
          }
          onSelectChange(
            multi || isMulti ? params.value : (params.value || [])[0]
          );
          input.onChange(val);
          input.onBlur();
          setValue(params.value);
        }}
        multi={Boolean(multi || isMulti)}
        type={search ? TYPE.search : TYPE.select}
        overrides={{
          Popover: {
            props: {
              mountNode: containerRef.current,
            },
          },
          Dropdown: {
            // pass sizes as strings, "10px" rather than 10
            style: dropDownStyle,
          },
          ...tagProps,
        }}
        getOptionLabel={componentLabelExtractor}
        getValueLabel={componentLabelExtractor}
        labelKey={labelKey || labelField}
        valueKey={valueKey || valueField}
        filterOptions={
          filterOptions ||
          ((options || [])[0] &&
            typeof (options || [])[0] === 'object' &&
            !labelKey &&
            !valueKey &&
            !labelField &&
            !valueField)
            ? customFilter
            : undefined
        }
        onInputChange={rest.onInputChange || handleInputChange}
        openOnClick={openOnClick === true && readOnly === false}
        clearable={!readOnly && clearable}
        {...rest}
      />

      {showError && (
        <Text small error style={{ height: 10 }}>
          {meta.touched && meta.error && meta.error}
        </Text>
      )}
    </Block>
  );
};

BaseWebSelect.defaultProps = {
  input: {
    value: null,
    onChange: () => {},
    onBlur: () => {},
  },
  multi: false,
  meta: {},
  options: [],
  valueExtractor: (item) => item,
  labelExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
  keyExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `option-${index}`,
  onSelectChange: () => {},
  dropDownStyle: { maxHeight: '350px' },
  readOnly: false,
  openOnClick: true,
  clearable: true,
};

export default BaseWebSelect;
