/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import moment from 'moment';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from '../reach';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const UserActionListItem: React.FC<{
  [x: string]: any;
  primary?: any;
  secondary?: any;
  avatar?: any;
  timestamp?: any;
  rightComponent?: any;
  linkto?: string;
  imgUrl?: string;
}> = ({
  primary = '',
  secondary = '',
  avatar,
  timestamp,
  rightComponent,
  linkto,
  imgUrl,
  ...props
}) => {
  const classes = useStyles();

  const otherProps: any = {
    component: linkto ? Link : 'div',
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>{avatar}</ListItemAvatar>
      <ListItemText
        {...otherProps}
        to={linkto}
        primary={
          <React.Fragment>
            {primary}
            {timestamp && (
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                {` ${moment(timestamp).fromNow()}`}
              </Typography>
            )}
          </React.Fragment>
        }
        secondary={<React.Fragment>{secondary}</React.Fragment>}
      />
      <ListItemSecondaryAction>{rightComponent}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default UserActionListItem;
