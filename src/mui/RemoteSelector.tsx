import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import Block from '../Block';
import Text from '../Text';
import MuiAsyncSelect from './MuiAsyncSelect';

const MuiRemoteSelector: React.FC<{
  input?: any;
  onChange?: (item: any) => any;
  Graphqlmodel?: any;
  meta?: any;
  isMulti?: boolean;
  displayField?: string;
  returnkeys?: string[];
  showError?: boolean;
  onSelectChange?: (item?: any, index?: number) => any;
  valueExtractor?: (item?: any, index?: number) => any;
  labelExtractor?: (item?: any, index?: number) => any;
  keyExtractor?: (item?: any, index?: number) => any;
}> = React.forwardRef(
  (
    {
      input,
      onChange,
      meta,
      isMulti,
      displayField,
      returnkeys,
      showError = true,
      ...rest
    },
    ref
  ) => {
    let labelExtractor: any = rest.labelExtractor || null;
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
        <MuiAsyncSelect
          ref={ref}
          value={input.value}
          onChange={(val) => {
            input.onChange(val);
            input.onBlur();
          }}
          meta={meta}
          isMulti={isMulti}
          {...rest}
          labelExtractor={labelExtractor}
          valueExtractor={valueExtractor}
        />
        {showError && (
          <Text small error style={{ height: 10 }}>
            {meta.touched && meta.error ? meta.error : ''}
          </Text>
        )}
      </Block>
    );
  }
);

MuiRemoteSelector.defaultProps = {
  input: {
    value: null,
    onChange: () => {},
    onBlur: () => {},
  },
  onChange: () => {},
  onSelectChange: () => {},
  meta: {},
  valueExtractor: (item) => item,
  labelExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
  keyExtractor: (item, index) =>
    isPlainObject(item) ? item.id || `option-${index}` : `${item}`,
};

export default MuiRemoteSelector;
