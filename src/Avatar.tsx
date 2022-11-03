import React from 'react';
import { MAvatar } from './@material-extend';

const Avatar: React.FC<{
  [x: string]: any;
  size?: any;
  sx?: any;
}> = ({ size = 32, sx = {}, ...props }) => {
  const sX = { width: size, height: size, ...sx };

  return <MAvatar sx={sX} {...props} />;
};

export default Avatar;
