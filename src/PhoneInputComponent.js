import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneNumber from 'awesome-phonenumber';

import PickCountry from './countrypicker/PickCountry';
import countries from './countrypicker/data/countries.json';

import Block from './Block';
import Text from './Text';
import ThemeContext from './theme/ThemeContext';

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

const PhoneInputComponent = ({
  input,
  value,
  type,
  onPhoneChanged,
  meta,
  readOnly,
  marginRight,
  showCode,
  disabled,
  style,
  placeholder: PLACEHOLDER,
  validatePhone = true,
  ...props
}) => {
  const mobilenumberInput = React.useRef();
  const { sizes, colors } = React.useContext(ThemeContext);

  const classes = useStyles({ sizes, colors })();

  const [cca2, setCca2] = React.useState(props.cca2 || 'KE');
  const [callingCode, setCallingCode] = React.useState(
    props.callingCode || '254'
  );
  const [currency, setCurrency] = React.useState(props.currency || 'KES');
  const [country, setCountry] = React.useState(props.country || 'Kenya');
  const [phone, setPhone] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState(PLACEHOLDER || '');

  React.useEffect(() => {
    let phone = input.value || value;

    function getPhone() {
      if (phone) {
        const pn = new PhoneNumber(phone);

        if (pn.isValid()) {
          phone = pn.getNumber();
          setPhone(phone);
          setCca2(pn.getRegionCode());
        }
      }
    }

    function getPlaceHolder() {
      if (!PLACEHOLDER) {
        const placeholder = PhoneNumber.getExample(
          cca2 || 'KE',
          'mobile'
        ).getNumber('national');

        return setPlaceholder(placeholder);
      }
      return true;
    }

    getPhone();
    getPlaceHolder();
  }, [input.value, value]);

  const onCallingCodeChanged = ({ cca2, callingCode }) => {
    const country = countries[cca2 || 'KE'];
    const countrynames = country.name || {};
    const countryName = countrynames.common || 'Kenya';

    const placeholder = PhoneNumber.getExample(
      cca2 || 'KE',
      'mobile'
    ).getNumber('national');

    setCallingCode(callingCode || '254');
    setCca2(cca2 || 'KE');
    setCurrency(country.currency || 'KES');
    setCountry(countryName);
    setPlaceholder(placeholder);

    mobilenumberInput.current.focus();
  };

  const onPhoneChange = (phone) => {
    if (phone) {
      const pn = new PhoneNumber(phone, cca2);

      const cc = pn.getRegionCode();

      const country = countries[cc || cca2 || 'KE'];
      const countrynames = country.name || {};

      const currency = country.currency || 'KES';
      const countryName = countrynames.common || 'Kenya';
      const placeholder = PhoneNumber.getExample(
        cc || cca2 || 'KE',
        'mobile'
      ).getNumber('national');

      setCca2(cc || cca2 || 'KE');
      setCountry(countryName);
      setCurrency(currency);
      setCallingCode(country.callingCode || '254');

      setPlaceholder(placeholder);

      if (pn.isValid() && !`${phone}`.includes('/')) {
        onPhoneChanged({
          text: phone,
          phone: pn.getNumber(),
          cca2: cc || cca2,
          currency,
          country: countryName,
        });
        input.onChange(pn.getNumber());
        input.onBlur();
        props.onChange(pn.getNumber());
      } else if (validatePhone) {
        onPhoneChanged({
          text: phone,
          phone: '',
          cca2: cc || cca2,
          currency,
          country: countryName,
        });
        input.onChange('');
        props.onChange('');
        input.onBlur();
      } else {
        onPhoneChanged({
          text: phone,
          phone,
          cca2: cc || cca2,
          currency,
          country: countryName,
        });
        input.onChange(phone);
        props.onChange(phone);
        input.onBlur();
      }
    } else {
      onPhoneChanged({
        text: phone,
        phone: '',
        cca2,
        currency,
        country,
      });
      input.onChange('');
      props.onChange('');
      input.onBlur();
    }

    setPhone(phone);
  };

  return (
    <ThemeContext.Consumer>
      {({ sizes, colors }) => {
        const inputStyles = {
          backgroundColor: colors.white,
          height: sizes.inputHeight,
          ...style,
        };
        return (
          <Block>
            <TextField
              type={Number(phone) ? 'tel' : type || 'text'}
              variant="outlined"
              placeholder={placeholder}
              className={classes.margin}
              inputRef={mobilenumberInput}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                readOnly,
                classes: {
                  input: classes.input,
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PickCountry
                      onCallingCodeChanged={onCallingCodeChanged}
                      callingCode={callingCode}
                      cca2={cca2}
                      size={24}
                      showCode={showCode}
                    />
                  </InputAdornment>
                ),
              }}
              style={inputStyles}
              error={Boolean(meta.touched && meta.error)}
              disabled={disabled}
              value={phone}
              onChange={(e) => {
                e.preventDefault();
                onPhoneChange(e.target.value);
              }}
            />
            <Text small error style={{ height: 10 }}>
              {meta.touched && meta.error && meta.error}
            </Text>
          </Block>
        );
      }}
    </ThemeContext.Consumer>
  );
};

PhoneInputComponent.defaultProps = {
  meta: {},
  input: {
    onChange: () => {},
    onBlur: () => {},
    value: '',
  },
  onPhoneChanged: () => {},
  onChange: () => {},
  showCode: false,
  cca2: 'KE',
  callingCode: '254',
  currency: 'KES',
  country: 'Kenya',
};

export default PhoneInputComponent;
