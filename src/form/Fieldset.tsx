import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = ({ color, bordercolor, style }) => {
  const styles = makeStyles({
    fieldsetBorder: {
      border: `1px solid ${bordercolor || '#ddd'} !important`,
      borderRadius: 5,
      margin: '0 0 1.5em 0 !important',
      boxShadow: '0px 0px 0px 0px #000',
      padding: 5,
      ...style,
    },
    legendBorder: {
      fontSize: '1.2em !important',
      ...(color && { color }),
    },
  });

  return styles();
};

const Fieldset: React.FC<{
  [x: string]: any;
  children?: any;
  bordercolor?: any;
  color?: any;
  label?: string;
  style?: React.CSSProperties;
}> = ({ children, bordercolor, color, label = 'Fields', style }) => {
  const classes = useStyles({ color, bordercolor, style });

  return (
    <fieldset className={classes.fieldsetBorder}>
      <legend className={classes.legendBorder}>{label}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
