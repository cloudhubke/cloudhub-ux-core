import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import logo from './assets/logo_single.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  className: PropTypes.string,
};

function Logo({ className, src = logo, ...other }) {
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
}

export default Logo;
