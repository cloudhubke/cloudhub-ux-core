import React from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(({ direction, ...props }, ref) => (
  <Slide direction={direction} ref={ref} {...props} />
));

Transition.defaultProps = {
  direction: 'up',
};

export default Transition;
