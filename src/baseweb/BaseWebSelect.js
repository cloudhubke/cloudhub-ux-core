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
    valueExtractor,
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
    onInputChange,
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
  // const [tagProps, settagProps] = React.useState({});

  const containerRef = React.useRef();

  React.useEffect(() => {
    const items = options.map((option, index) => {
      if (
        typeof option === 'string' ||
        typeof option === 'number' ||
        typeof option === 'boolean'
      ) {
        return {
          label: labelExtractor(option, index) || option,
          item: option,
          id: option,
        };
      }
      if (isPlainObject(option)) {
        const optionObj = {
          item: option,
        };
        optionObj.label = labelExtractor(option, index) || option;
        if (option.id) {
          optionObj.id = option.id;
        } else {
          optionObj.id = keyExtractor(optionObj, index);
        }
        return optionObj;
      }
      return option;
    });
    setitemOptions(items);
    // eslint-disable-next-line
  }, [JSON.stringify(options)]);

  // React.useEffect(() => {
  //   if (multi || isMulti) {
  //     settagProps({
  //       Tag: {
  //         props: {
  //           onActionClick: (event) => {
  //             let deletedText;
  //             try {
  //               deletedText = event.currentTarget.previousSibling.textContent;
  //               setValue((currentVal) => {
  //                 const newVal = currentVal
  //                   .map((val) => {
  //                     if (
  //                       (val && val === deletedText) ||
  //                       (typeof labelExtractor === 'function' &&
  //                         labelExtractor(val) === deletedText) ||
  //                       componentLabelExtractor({ option: val }) === deletedText
  //                     ) {
  //                       return null;
  //                     }
  //                     return val;
  //                   })
  //                   .filter(Boolean);

  //                 if (deletedText && typeof input.onChange === 'function') {
  //                   input.onChange(newVal);
  //                 }
  //                 if (deletedText && typeof onChange === 'function') {
  //                   onChange(newVal);
  //                 }
  //                 return newVal;
  //               });
  //             } catch (error) {}
  //           },
  //         },
  //       },
  //     });
  //   }
  // }, [multi, isMulti]);

  const componentLabelExtractor = ({ option }) => {
    const item = (option || {}).item || option;
    const key = keyExtractor(item);
    let labelFunction = labelExtractor;

    if (typeof labelFunction === 'function' && item && key) {
      const label = labelFunction(item);
      if (typeof label === 'string') {
        labelFunction = () => <div>{label}</div>;
      } else {
        labelFunction = () => label;
      }
    }

    if (displayField) {
      labelFunction = () => {
        const label = isPlainObject(item)
          ? item[displayField] || `option-${key}`
          : `${item}`;

        return <div>{label}</div>;
      };
    }

    return labelFunction();
  };

  const customFilter = (opts) => {
    const availableOptions = (opts || [])
      .map((opt) => {
        if ((multi || isMulti) && Array.isArray(initialValue)) {
          const ind = initialValue.findIndex((val) => val && val.id === opt.id);
          if (ind > -1) {
            return null;
          }
          return opt;
        }
        return opt;
      })
      .filter((opt) => opt !== null);
    if (filterOptions) {
      return filterOptions(availableOptions);
    }
    if (searchTerm) {
      return availableOptions
        .map((option) =>
          JSON.stringify(option || {})
            .toLowerCase()
            .includes((searchTerm || '').toLowerCase())
            ? option
            : null
        )
        .filter(Boolean);
    }
    return availableOptions;
  };

  const handleInputChange = (event) => {
    if (typeof onInputChange === 'function') {
      onInputChange(event);
    } else {
      const { target } = event;
      setsearchTerm((target || {}).value || '');
    }
  };

  const logChange = (params) => {
    let val;
    let selectvalue;

    if (params && Array.isArray(params.value)) {
      val = [...params.value].map((v) => v.item);
      selectvalue = [...params.value].map((v) => v.item);

      if (Array.isArray(returnkeys)) {
        if (multi || isMulti) {
          val = val.map((item) => {
            const obj = {};
            for (const key of returnkeys) {
              obj[key] = item.item[key];
            }

            return obj;
          });
        } else {
          const opt = val[0];
          if (opt && opt.item) {
            val = {};
            for (const key of returnkeys) {
              val[key] = opt.item[key];
            }
          }
        }
      } else {
        val =
          multi || isMulti
            ? val.map((item) => valueExtractor(item))
            : valueExtractor(val[0] || null);
      }
    }

    if (typeof onChange === 'function') {
      onChange(val);
    }

    onSelectChange(multi || isMulti ? selectvalue : selectvalue[0]);
    input.onChange(val);
    input.onBlur();
    setValue(params.value);
  };

  return (
    <Block ref={containerRef}>
      <Select
        options={itemOptions}
        value={initialValue}
        onChange={logChange}
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
          // ...tagProps,
        }}
        getOptionLabel={componentLabelExtractor}
        getValueLabel={componentLabelExtractor}
        labelKey={labelKey || labelField}
        valueKey={valueKey || valueField}
        filterOptions={customFilter}
        onInputChange={handleInputChange}
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
  valueExtractor: (item) => (item || {}).item || item,
  labelExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
  keyExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `option-${index}`,
  onSelectChange: () => {},
  dropDownStyle: { maxHeight: '350px' },
  readOnly: false,
  openOnClick: true,
  clearable: true,
  filterOutSelected: true,
};

export default BaseWebSelect;
