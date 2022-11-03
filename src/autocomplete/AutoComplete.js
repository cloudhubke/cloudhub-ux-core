import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import ThemeContext from '../theme/ThemeContext';
import Block from '../Block';
import Text from '../Text';
import { useDebounce } from '../customhooks';

const useStyles = ({ sizes, colors }) =>
  makeStyles({
    margin: {
      marginTop: 0,
      marginBottom: 0,
    },
    input: {
      paddingTop: 0,
      paddingBottom: 0,
      height: sizes.inputHeight,
      marginTop: -sizes.padding,
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: colors.primary,
      },
      height: sizes.inputHeight,
    },
    notchedOutline: {
      margin: 0,
    },
    cssFocused: {},
    cssLabel: {},
  });

const AutoComplete = ({
  options,
  input,
  value,
  onChange,
  size,
  showError = true,
  meta,
  readOnly,
  valueExtractor,
  labelExtractor,
  keyExtractor,
  getOptionLabel,
  onInputChange,
  ...rest
}) => {
  const incomingValue = value || input.value;
  const [InputValue, setInputValue] = React.useState(incomingValue || '');
  const { sizes, colors } = React.useContext(ThemeContext);
  const debouncedInputValue = useDebounce(InputValue, 1000);

  React.useEffect(() => {
    if (typeof onInputChange === 'function') {
      onInputChange(debouncedInputValue);
    }
    // eslint-disable-next-line
  }, [InputValue]);

  const debouncedValue = useDebounce(incomingValue, 1000);

  useEffect(() => {
    if (typeof debouncedValue === 'string') {
      setInputValue(debouncedValue);
    }
  }, [debouncedValue]);

  const classes = useStyles({ sizes, colors })();
  return (
    <Block>
      <Autocomplete
        options={options}
        id="auto-complete"
        size={size || 'medium'}
        onChange={(event, val) => {
          let returnedVal = val;
          if (typeof valueExtractor === 'function') {
            returnedVal = valueExtractor(val);
          }
          if (typeof input.onChange === 'function') {
            input.onChange(returnedVal);
          }
          if (typeof onChange === 'function') {
            onChange(returnedVal);
          }
          if (typeof labelExtractor === 'function') {
            setInputValue(labelExtractor(val));
          } else {
            setInputValue(getOptionLabel(val));
          }
        }}
        inputValue={InputValue || ''}
        value={input.value || value || ''}
        renderInput={(params) => (
          <TextField
            margin="none"
            size="medium"
            variant="outlined"
            {...params}
            InputProps={{
              ...(params.InputProps || {}),
              classes: {
                input: classes.input,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            autoComplete="off"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            inputProps={{
              ...(params.inputProps || {}),
              autocomplete: 'off',
            }}
            {...meta}
          />
        )}
        getOptionLabel={(option) => {
          if (typeof labelExtractor === 'function') {
            return labelExtractor(option);
          }
          return getOptionLabel(option);
        }}
        onInputChange={(event, val) => {
          setInputValue(val, ((event || {}).target || {}).value);
        }}
        onBlur={() => {
          if ((rest || {}).freeSolo && InputValue) {
            if (typeof onChange === 'function') {
              onChange(InputValue);
            }
            if (typeof input.onChange === 'function') {
              input.onChange(InputValue);
            }
          }
        }}
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
AutoComplete.defaultProps = {
  options: [],
  input: {
    onChange: () => {},
  },
  onChange: () => {},
  getOptionLabel: (option) => (option && option.id ? option.id : `${option}`),
  valueExtractor: (option) => option,
};
export default AutoComplete;
