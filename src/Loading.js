import React from 'react';
import spinner from './assets/images/spinner.gif';
import Text from './Text';

function Loading({ size = 16, ...props }) {
  if (props.error) {
    console.log(props.error);
    return (
      <div
        style={{
          flex: 1,
          minHeight: '100%',
          maxHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text error>Error!</Text>
      </div>
    );
  }
  return (
    <div
      style={{
        flex: 1,
        minHeight: '100%',
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <CircularProgress color="secondary" /> */}
      <img alt="loading...." src={spinner} style={{ height: size * 2 }} />
    </div>
  );
}

export default Loading;
