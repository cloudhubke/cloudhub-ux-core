import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const PleaseWait: React.FC<{
  [x: string]: any;
  size?: number;
}> = ({ size = 16 }) => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginRight: 5 }}>
        <CircularProgress size={size} />
      </div>
      <Typography variant="subtitle1" style={{ fontSize: size }}>
        Please wait
      </Typography>
    </div>
  );
};
export default PleaseWait;
