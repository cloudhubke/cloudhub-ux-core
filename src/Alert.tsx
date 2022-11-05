import * as React from 'react';
import Loadable from '@react-loadable/revised';
import Box from '@mui/material/Box';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import mui from '@mui/material/package.json';
import Loading from './Loading';

const useStyles = makeStyles({
  alert: {
    '& .MuiAlert-message': {
      flex: 1,
    },
  },
});

const MuiAlert = mui.version.includes('4.')
  ? Loadable({
      loader: () =>
        import(/* webpackChunkName: "BaseTheme" */ '@mui/material/Alert'),
      loading: () => (
        <Box justifyContent="center" alignItems="center">
          <Loading />
        </Box>
      ),
    })
  : Loadable({
      loader: () =>
        import(/* webpackChunkName: "BaseTheme" */ '@mui/material/Alert'),
      loading: () => (
        <Box justifyContent="center" alignItems="center">
          <Loading />
        </Box>
      ),
    });

const Alert: React.FC<{
  [x: string]: any;
  danger?: boolean;
  info?: boolean;
  success?: boolean;
  error?: boolean;
  warning?: boolean;
  message?: string | React.ReactNode;
  description?: string | React.ReactNode;
  closable?: boolean;
  noclose?: any;
  children?: React.ReactNode;
  onClose?: any;
  showIcon?: boolean;
  title?: string | React.ReactNode;
  open?: boolean;
}> = ({
  danger,
  info,
  success,
  error,
  warning,
  message,
  description,
  closable,
  noclose,
  children,
  onClose,
  showIcon,
  title,
  open = true,
  ...props
}) => {
  const [alertopen, setAlertOpen] = React.useState(open);
  const classes = useStyles();
  let type: any = 'info';

  if (info) {
    type = 'info';
  }
  if (danger || error) {
    type = 'error';
  }
  if (success) {
    type = 'success';
  }
  if (warning) {
    type = 'warning';
  }

  let closeProps: any = {
    onClose: () => {
      setAlertOpen(false);
      if (typeof onClose === 'function') {
        onClose();
      }
    },
  };

  if (!closable || noclose) {
    closeProps = {};
  }

  return (
    <Box
      sx={{
        width: '100%',
        '& > * + *': {
          mt: 2,
        },
      }}
    >
      <Collapse in={alertopen}>
        <MuiAlert
          className={classes.alert}
          severity={type}
          {...closeProps}
          {...props}
        >
          <AlertTitle>{`${title || type}`}</AlertTitle>
          {message || description || children}
        </MuiAlert>
      </Collapse>
    </Box>
  );
};

Alert.defaultProps = {
  closable: true,
  onClose: null,
  showIcon: true,
};

export default Alert;
