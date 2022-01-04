import React from 'react';
// material
import { Card, CardHeader, Typography } from '@mui/material';
import ThemeContext from './theme/ThemeContext';
import Block from './Block';

// ----------------------------------------------------------------------

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

export default function CardBlock({ title, cardStyles, style, children }) {
  const { sizes } = React.useContext(ThemeContext);
  return (
    <Card
      sx={{
        overflow: 'unset',
        position: 'unset',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
      style={{
        margin: sizes.margin,
        ...cardStyles,
        ...style,
      }}
    >
      {title && <CardHeader title={title} />}
      <Block>{children}</Block>
    </Card>
  );
}
