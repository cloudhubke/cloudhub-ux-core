import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import logo from './assets/logo_single.svg';

// ----------------------------------------------------------------------

const Logo: React.FC<{
  [key: string]: any;
  className?: string;
  src: string;
}> = ({ className, src = logo, ...other }: any) => {
  return (
    <Box
      component="img"
      alt="logo"
      src={src}
      height={40}
      className={className}
      {...other}
    />
  );
};

export default Logo;
