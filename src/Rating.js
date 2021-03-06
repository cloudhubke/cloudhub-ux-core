import React from 'react';
import Rating from '@mui/material/Rating';

const MuiRating = ({ input, value, onChange, ...props }) =>
  input && input.name ? (
    <Rating
      name={input.name}
      {...props}
      onChange={input.onChange}
      value={Number(input.value)}
    />
  ) : (
    <Rating {...props} value={Number(value)} onChange={onChange} />
  );
MuiRating.defaultProps = {
  input: {
    value: 0,
    onChange: () => {},
  },
};
export default MuiRating;
