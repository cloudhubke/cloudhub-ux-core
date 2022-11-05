import React from 'react';
import clsx from 'clsx';
// @mui/material components
import { makeStyles, withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles: any = makeStyles((theme: any) => ({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    margin: 0,
    padding: 0,
    /* flexBasis: "auto" */
  },
}));

const GridItem: React.FC<{
  [x: string]: any;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}> = ({ ...props }) => {
  const classes = useStyles();

  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={clsx(classes.grid, className)}>
      {children}
    </Grid>
  );
};

export default GridItem;
