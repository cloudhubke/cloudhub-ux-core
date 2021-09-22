import React from 'react';
import PropTypes from 'prop-types';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
import ThemeContext from './theme/ThemeContext';

// ----------------------------------------------------------------------

Label.propTypes = {
  title: PropTypes.string,
};

export function Label({ title }) {
  return (
    <Typography
      variant="overline"
      component="p"
      gutterBottom
      sx={{ color: 'text.secondary' }}
    >
      {title}
    </Typography>
  );
}

CardBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default function CardBlock({ title, cardStyles, sx, children }) {
  const { sizes } = React.useContext(ThemeContext);
  return (
    <Card
      sx={{
        overflow: 'unset',
        position: 'unset',
        flex: 1,
      }}
      style={{
        margin: sizes.margin,
        ...cardStyles,
      }}
    >
      {title && <CardHeader title={title} />}
      <Box
        sx={{
          p: 3,
          minHeight: 180,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
