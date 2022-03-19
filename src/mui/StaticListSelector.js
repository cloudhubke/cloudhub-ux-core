import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import Block from '../Block';
import Text from '../Text';
import MuiSelect from './MuiSelect';

const MuiStaticListSelector = (props) => {
  const {
    options,
    input,
    value,
    meta,
    isMulti,
    displayField,
    returnkeys,
    showError = true,
    style,
    ...rest
  } = props;

  const val = input.value || value;

  let labelExtractor = rest.labelExtractor || null;
  let valueExtractor = rest.valueExtractor || null;

  if (returnkeys) {
    if (Array.isArray(returnkeys)) {
      valueExtractor = (item) => {
        const obj = {};
        returnkeys.forEach((k) => {
          obj[k] = item[k];
        });
        return obj;
      };
    }
  }

  if (displayField) {
    labelExtractor = (item) =>
      isPlainObject(item) ? item[displayField] : item;
  }

  return (
    <Block>
      <MuiSelect
        options={options || []}
        value={val}
        onChange={(val) => {
          input.onChange(val);
          input.onBlur();
        }}
        isMulti={isMulti}
        {...rest}
        labelExtractor={labelExtractor}
        valueExtractor={valueExtractor}
      />
      {showError && (
        <Text small error style={{ height: 10 }}>
          {meta.touched && meta.error && meta.error}
        </Text>
      )}
    </Block>
  );
};

MuiStaticListSelector.defaultProps = {
  input: {
    value: null,
    onChange: () => {},
    onBlur: () => {},
  },
  meta: {},
  options: [],
  valueExtractor: (item) => item,
  labelExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
  keyExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
};

export default MuiStaticListSelector;
