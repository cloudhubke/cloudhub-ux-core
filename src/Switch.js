/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import { styled } from '@mui/styles';
import Block from './Block';

const IOSSwitch = styled((props) => (
  <MuiSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.themeMode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.themeMode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.themeMode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.themeMode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Switch = ({
  value,
  input,
  onChange,
  labelPlacement = 'start',
  label,
  containerProps = {
    flex: false,
  },
  ...props
}) => {
  const val = input.value || value;

  const [checked, setChecked] = React.useState(val);

  const handleChange = (event) => {
    const val = event.target.checked;

    if (typeof onChange === 'function') {
      onChange(val);
    }

    if (typeof input.onChange === 'function') {
      input.onChange(val);
    }
  };

  React.useEffect(() => {
    setChecked(val);
  }, [val]);

  //   const disabledProps = !checked ? {} : { classes };

  return (
    <Block {...containerProps}>
      <FormControlLabel
        control={
          <IOSSwitch checked={checked} {...props} onChange={handleChange} />
        }
        label={label}
        labelPlacement={labelPlacement}
      />
    </Block>
  );
};
Switch.defaultProps = {
  input: {
    value: false,
    onChange: () => null,
  },
  value: false,
  onChange: () => null,
};

export default Switch;
