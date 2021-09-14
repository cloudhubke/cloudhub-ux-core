import React from 'react';
import { Card, CardHeader, Box, CardContent } from '@material-ui/core';
import DEditor from './deditor';
import Block from '../Block';
import ThemeContext from '../theme/ThemeContext';

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
