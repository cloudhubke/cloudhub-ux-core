import React from 'react';

import Fonts from './Fonts';
import Colors from './Colors';
import Sizes from './Sizes';

interface ThemeContextProps {
  colors: typeof Colors;
  fonts: typeof Fonts;
  sizes: typeof Sizes;
  theme?: any;
  themeMode?: string;
  CONFIG?: any;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  colors: Colors,
  fonts: Fonts,
  sizes: Sizes,
  CONFIG: {},
  themeMode: 'light',
  theme: {},
});

export default ThemeContext;
