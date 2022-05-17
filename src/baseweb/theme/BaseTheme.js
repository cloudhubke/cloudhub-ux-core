import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import customBaseuiTheme from './BaseWebTheme';
import ThemeContext from '../../theme/ThemeContext';

const engine = new Styletron({});

const BaseTheme = ({ children }) => {
  const { colors, fonts, sizes } = React.useContext(ThemeContext);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        overrides={{
          AppContainer: {
            style: {
              height: '100%',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
        theme={customBaseuiTheme({
          colors,
          fonts,
          sizes,
        })}
      >
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
};

export default BaseTheme;
