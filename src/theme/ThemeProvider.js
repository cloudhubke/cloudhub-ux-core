import React from 'react';
// import Loadable from '@react-loadable/revised';
// import Box from '@mui/material/Box';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import { getLightColors, getDarkColors } from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalCss from './GlobalCss';
import useSettings from './context/useSettings';
import shadows, { customShadows } from './shadows';
import shape from './shape';
import Block from '../Block';

import ThemeContext from './ThemeContext';
import localsizes from './Sizes';
import localcolors from './Colors';
import localfonts from './Fonts';
import { ToastContainer } from '../toastr';
import './theme.css';

const ThemeProvider = ({
  children,
  fonts,
  colors,
  sizes,
  addBaseWeb,
  componentsOverride,
  globalStyles = {},
  ssr = false,
  ...props
}) => {
  const newfonts = { ...localfonts, ...fonts };
  const newcolors = { ...localcolors, ...colors };
  const newsizes = { ...localsizes, ...sizes };

  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = React.useMemo(
    () => ({
      themeMode,
      palette: isLight ? getLightColors(newcolors) : getDarkColors(newcolors),
      shape,
      typography: typography({ fonts }),
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
      fonts,
      sizes,
      colors,
      globalStyles,
      zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1800,
      },
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  if (typeof componentsOverride === 'function') {
    theme.components = componentsOverride(theme);
  }

  return (
    // Apply theme for designs (Premium themes)
    <MuiThemeProvider theme={theme}>
      <GlobalCss />
      {!ssr && (
        <ThemeContext.Provider
          value={{
            theme,
            fonts: newfonts,
            colors: newcolors,
            sizes: newsizes,
            CONFIG: props.CONFIG || {},
            ...props,
          }}
        >
          <Block>{children}</Block>

          <div style={{ zIndex: 9999 }}>
            <ToastContainer />
          </div>
        </ThemeContext.Provider>
      )}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
