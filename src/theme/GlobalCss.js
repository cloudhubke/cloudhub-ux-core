import React from 'react';
import { alpha } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import scrollAreaStyles from './scrollAreaStyles';
// ----------------------------------------------------------------------
const containerWidth = 276;
const GlobalCss = () => (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        width: '100%',
        height: '100%',
        msTextSizeAdjust: '100%',
        WebkitOverflowScrolling: 'touch',
      },
      body: {
        width: '100%',
        height: '100%',
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          width: 8,
          height: 6,
          backgroundColor: theme.palette.divider,
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          border: 'none',
          borderRadius: 8,
          backgroundColor: alpha(theme.palette.grey['600'], 0.48),
        },
      },
      '#root': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      '#___gatsby': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
        },
      },
      textarea: {
        '&::-webkit-input-placeholder': { color: theme.palette.text.disabled },
        '&::-moz-placeholder': {
          opacity: 1,
          color: theme.palette.text.disabled,
        },
        '&:-ms-input-placeholder': { color: theme.palette.text.disabled },
        '&::placeholder': { color: theme.palette.text.disabled },
      },
      a: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        textDecoration: 'none',
      },
      img: { display: 'block', maxWidth: '100%' },

      // icons
      'MuiTypography-root > .MuiSvgIcon-root': {
        fontSize: 'inherit',
      },

      // Lazy Load Img
      '.blur-up': {
        WebkitFilter: 'blur(5px)',
        filter: 'blur(5px)',
        transition: 'filter 400ms, -webkit-filter 400ms',
      },
      '.blur-up.lazyloaded ': {
        WebkitFilter: 'blur(0)',
        filter: 'blur(0)',
      },
      'fieldset.scheduler-border': {
        border: '1px solid #ddd !important',
        borderRadius: 5,
        padding: 5,
      },
      '.size-lg': {
        maxWidth: containerWidth * 1.5,
      },

      '.size-md': {
        width: containerWidth * 1.5,
        maxWidth: containerWidth * 1.5,
      },

      '.size-xl': {
        width: containerWidth * 2,
        maxWidth: containerWidth * 2,
      },

      '.size-xxl': {
        width: containerWidth * 3,
        maxWidth: containerWidth * 3,
      },

      ...scrollAreaStyles(theme),
    })}
  />
);

export default GlobalCss;
