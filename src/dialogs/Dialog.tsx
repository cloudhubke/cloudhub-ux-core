import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { makeStyles } from '@mui/styles';
import SlideComponent from '../SlideComponent';
import useMetrics from '../customhooks/useMetrics';
import ThemeContext from '../theme/ThemeContext';

const getAnimation: any = (animation) => {
  switch (animation) {
    case 'slide':
      return {
        TransitionComponent: SlideComponent,
      };

    default:
      return {};
  }
};

const getStyles = ({
  minHeight,
  maxHeight,
  height = 'auto',
  fullScreen,
  colors,
  ...style
}: any) => {
  const useStyles = makeStyles({
    paper: {
      ...(!fullScreen ? { minHeight, maxHeight, height } : {}),
      backgroundColor: colors.milkyWhite,
      ...style,
    },
  });

  return {
    useStyles,
  };
};

const Dialog: React.FC<{
  [x: string]: any;
  paper?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  minHeight?: number | string;
  maxHeight?: number | string;
  fullScreen?: boolean;
  open?: boolean;
  animation?: any;
  children?: React.ReactNode;
  title?: any;
  style?: React.CSSProperties;
}> = ({
  paper,
  maxWidth = 'lg',
  fullWidth = true,
  minHeight = 1000,
  maxHeight = 700,
  fullScreen = false,
  open = false,
  animation,
  children,
  title,
  style = {},
  ...props
}) => {
  const { colors } = React.useContext(ThemeContext);
  const { height } = useMetrics();
  const classes = getStyles({
    minHeight: minHeight > height ? height : minHeight,
    maxHeight: maxHeight > height ? height : maxHeight,
    fullScreen,
    colors,
    ...style,
  }).useStyles();

  const dialogprops = {
    ...(!fullScreen && { maxWidth }),
    fullScreen,
  };

  const closeDialog = () => {
    props.onClose();
  };

  const fn = (child) => {
    if (!child) {
      return null;
    }
    if (child.props.onClose && typeof child.props.onClose === 'function') {
      return React.cloneElement(child, {
        ...child.props,
        onClose: closeDialog,
      });
    }

    return child;
  };
  const childitems = React.Children.map(children, fn);

  if (!open) {
    return null;
  }

  return (
    <MuiDialog
      open={open}
      onClose={props.onClose}
      fullWidth={fullWidth}
      {...dialogprops}
      {...getAnimation(animation)}
      classes={{ paper: classes.paper }}
      {...props}
    >
      {childitems}
    </MuiDialog>
  );
};

export default Dialog;
