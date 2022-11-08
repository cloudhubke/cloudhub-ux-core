import React from 'react';
import Loadable from '@react-loadable/revised';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Loading from '../Loading';
import Block from '../Block';
import ThemeContext from '../theme/ThemeContext';

const DEditor = Loadable({
  loader: () => import(/* webpackChunkName: "DEditor" */ './deditor'),
  loading: Loading,
});

const Container = ({ children, container, style }) => {
  if (container === 'block') {
    return <Box style={style}>{children}</Box>;
  }

  return <Card style={{ display: 'flex', ...style }}>{children}</Card>;
};

const DraftEditor = ({
  subject = '',
  input,
  container = 'card',
  editorContainerStyle = {
    minHeight: 420,
    display: 'flex',
    flexDirection: 'column',
  },
  ...props
}) => {
  const { sizes } = React.useContext(ThemeContext);

  return (
    <Container container={container} style={editorContainerStyle}>
      {subject && (
        <Block flex={false} padding={sizes.padding}>
          {subject}
        </Block>
      )}
      <Block>
        <Block absolute padding={sizes.padding}>
          <DEditor {...input} {...props} />
        </Block>
      </Block>
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
