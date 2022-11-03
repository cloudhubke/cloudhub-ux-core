import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Divider from '@mui/material/Divider';

import { useLocation } from '../customhooks';
import { Link } from '../reach';

const useStyles = makeStyles((theme: any) => {
  return {
    root: {},
    listItem: {
      ...theme.typography.body2,
      minHeight: 48,
      textTransform: 'capitalize',
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      color: theme.palette.text.secondary,
    },
    isActiveListItem: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
      },
    },
  };
});

const CustomListItem = ({ button, ...props }: any) => {
  if (button) {
    return <ListItemButton {...props} />;
  }

  return <ListItem {...props} />;
};

const ListMenuItem = ({
  icon,
  avatar,
  primary,
  secondary,
  action,
  children,
  style,
  divider,
  dividerColor,
  iconStyle,
  textProps,
  actionProps,
  linkto = '',
  color,
  className,
  button = true,
  ...rest
}: {
  [x: string]: any;
  icon?: React.ReactChild;
  avatar?: React.ReactNode;
  primary?: React.ReactNode | string;
  secondary?: React.ReactNode | string;
  action?: React.ReactNode | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  divider?: boolean;
  dividerColor?: string;
  iconStyle?: React.CSSProperties;
  textProps?: any;
  actionProps?: any;
  linkto?: string;
  color?: string;
  className?: string;
  button?: boolean;
}) => {
  const { location } = useLocation();
  const classes = useStyles();

  const isActive = Boolean(linkto) && `${location.pathname}`.endsWith(linkto);

  return (
    <React.Fragment>
      {children && (
        <CustomListItem
          style={{ flex: 1, display: 'flex', ...style }}
          className={clsx(
            classes.listItem,
            {
              [classes.isActiveListItem]: isActive,
            },
            className
          )}
          button
          component={linkto ? Link : 'div'}
          to={linkto}
          {...rest}
        >
          {children}
        </CustomListItem>
      )}

      {!children && (
        <CustomListItem
          button
          component={linkto ? Link : 'div'}
          to={linkto}
          className={clsx(
            classes.listItem,
            {
              [classes.isActiveListItem]: isActive,
            },
            className
          )}
          styles={{ flex: 1, display: 'flex', ...style }}
          {...rest}
        >
          {icon && (
            <ListItemIcon
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: color || 'inherit',
                ...iconStyle,
              }}
            >
              {icon}
            </ListItemIcon>
          )}
          {avatar && <ListItemAvatar>{avatar}</ListItemAvatar>}

          <ListItemText
            primary={primary}
            secondary={secondary}
            style={{ color: color || 'inherit' }}
          />

          {action && (
            <ListItemSecondaryAction {...actionProps}>
              {action}
            </ListItemSecondaryAction>
          )}
        </CustomListItem>
      )}
      {divider && !dividerColor && <Divider />}
      {divider && dividerColor && (
        <Divider style={{ backgroundColor: dividerColor }} />
      )}
    </React.Fragment>
  );
};

export default ListMenuItem;
