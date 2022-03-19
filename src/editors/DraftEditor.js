import React from 'react';
import Loadable from '@react-loadable/revised';

import { Card, Box, CardContent } from '@mui/material';
import Loading from '../Loading';
import Block from '../Block';
import ThemeContext from '../theme/ThemeContext';

const DEditor = Loadable({
  loader: () => import(/* webpackChunkName: "DEditor" */ './deditor'),
  loading: Loading,
});

const Container = ({ children, container }) => {
  if (container === 'block') {
    return <Box>{children}</Box>;
  }

  return <Card style={{ overflow: 'visible' }}>{children}</Card>;
};

const DraftEditor = ({ subject = '', input, container = 'card', ...props }) => {
  const { sizes } = React.useContext(ThemeContext);

  return (
    <Container container={container}>
      {subject && (
        <Block flex={false} padding={sizes.padding}>
          {subject}
        </Block>
      )}
      <CardContent>
        <DEditor {...input} {...props} />
      </CardContent>
    </Container>
  );
};

DraftEditor.defaultProps = {
  input: {
    onChange: () => null,
    value: '',
  },
};

export default DraftEditor;
