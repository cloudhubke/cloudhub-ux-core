import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
});

const Clearfix = () => {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
};

export default Clearfix;
