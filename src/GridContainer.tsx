import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// @mui/material components
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  grid: {
    width: '100%',
    margin: 0,
    padding: 0,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

function GridContainer({
  children,
  className,
  ...rest
}: {
  [x: string]: any,
  children?: React.ReactNode,
  className?: string,
}) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      {...rest}
      className={clsx(classes.grid, className)}
    >
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: '',
  children: null,
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default GridContainer;
