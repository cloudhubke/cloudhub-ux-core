import { alpha } from '@mui/material/styles';
// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS

// SETUP COLORS
// prettier-ignore
const GREY = {
  // eslint-disable-next-line prettier/prettier
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  '500_8': alpha('#919EAB', 0.08),
  '500_12': alpha('#919EAB', 0.12),
  '500_16': alpha('#919EAB', 0.16),
  '500_24': alpha('#919EAB', 0.24),
  '500_32': alpha('#919EAB', 0.32),
  '500_48': alpha('#919EAB', 0.48),
  '500_56': alpha('#919EAB', 0.56),
  '500_80': alpha('#919EAB', 0.8)
};

const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY['800'],
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY['800'],
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const ALTERNATE = {
  main: '#1a2138',
  dark: '#151a30',
};

const getColors = (colors) => {
  const {
    primaryColors,
    secondaryColors,
    tertiaryColors,
    warningColors,
    dangerColors,
    successColors,
    infoColors,

    textColors,
    backgroundColors,
  } = colors || {};

  const PRIMARY_COLORS = {
    ...PRIMARY,
    ...primaryColors,
  };
  const SECONDARY_COLORS = {
    ...SECONDARY,
    ...secondaryColors,
  };
  const TERTIARY_COLORS = {
    ...ALTERNATE,
    ...tertiaryColors,
  };

  const WARNING_COLORS = {
    ...WARNING,
    ...warningColors,
  };

  const ERROR_COLORS = {
    ...ERROR,
    ...dangerColors,
  };

  const SUCCESS_COLORS = {
    ...SUCCESS,
    ...successColors,
  };

  const INFO_COLORS = {
    ...INFO,
    ...infoColors,
  };

  const GRADIENTS = {
    primary: createGradient(PRIMARY_COLORS.light, PRIMARY_COLORS.main),
    info: createGradient(INFO_COLORS.light, INFO_COLORS.main),
    success: createGradient(SUCCESS_COLORS.light, SUCCESS_COLORS.main),
    warning: createGradient(WARNING_COLORS.light, WARNING_COLORS.main),
    danger: createGradient(ERROR_COLORS.light, ERROR_COLORS.main),
    error: createGradient(ERROR_COLORS.light, ERROR_COLORS.main),
  };

  const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
  };

  const COMMON = {
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY_COLORS, contrastText: '#fff' },
    secondary: { ...SECONDARY_COLORS, contrastText: '#fff' },
    tertiary: { ...tertiaryColors },
    alternate: { main: '#f7f9fc', dark: '#edf1f7', ...TERTIARY_COLORS },
    background: { ...backgroundColors },
    text: { ...textColors },
    info: { ...INFO_COLORS, contrastText: '#fff' },
    success: { ...SUCCESS_COLORS, contrastText: GREY['800'] },
    warning: { ...WARNING_COLORS, contrastText: GREY['800'] },
    danger: { ...ERROR_COLORS, contrastText: '#fff' },
    error: { ...ERROR_COLORS, contrastText: '#fff' },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY['500_24'],
    action: {
      hover: GREY['500_8'],
      selected: GREY['500_16'],
      disabled: GREY['500_80'],
      disabledBackground: GREY['500_24'],
      focus: GREY['500_24'],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };

  return COMMON;
};

export const getLightColors = (colors) => ({
  ...getColors(colors),
  mode: 'light',
  text: {
    primary: GREY['800'],
    secondary: GREY['600'],
    disabled: GREY['500'],
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY['200'],
  },
  action: {
    active: GREY['600'],
    ...getColors(colors).action,
  },
});

// DARK MODE
export const getDarkColors = (colors) => ({
  ...getColors(colors),
  mode: 'dark',
  text: {
    primary: '#fff',
    secondary: GREY['500'],
    disabled: GREY['600'],
  },
  background: {
    paper: GREY['800'],
    default: GREY['900'],
    neutral: GREY['500_16'],
    level2: '#333',
    level1: '#2D3748',
  },
  action: {
    active: GREY['500'],
    ...getColors(colors).action,
  },
});
