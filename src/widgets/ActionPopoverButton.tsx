import React, { useState } from 'react';
import clsx from 'clsx';
import Popover from '@mui/material/Popover';
import { makeStyles } from '@mui/styles';
import Close from '@mui/icons-material/Close';
import Scrollbars from '../Scrollbars';
import Text from '../Text';
import Block from '../Block';
import IconButton from '../IconButton';
import CardToolbar from './CardToolbar';
import useMetrics from '../customhooks/useMetrics';

const useStyles = makeStyles((theme: any) => ({
  root: {
    '& .MuiTimelineItem-missingOppositeContent:before': {
      display: 'none',
    },
    margin: theme.sizes.margin,
  },
  actionsComponent: {
    padding: theme.sizes.padding,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  contentArea: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.sizes.padding,
    height: '100%',
  },
}));

const ActionPopoverButton: React.FC<{
  [x: string]: any;
  anchorComponent: any;
  onOpen?: () => any;
  actionsComponent?: any;
  headerComponent?: any;
  children?: any;
  useCloseButton?: boolean;
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  width?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  onOpenDialog?: () => void;
  onCloseDialog?: () => void;
  className?: string;
}> = React.forwardRef(
  (
    {
      anchorComponent: AnchorComponent,
      onOpen = () => null,
      actionsComponent,
      headerComponent,
      children,
      useCloseButton = true,
      size = 'md',
      width = 'xl',
      onOpenDialog = () => null,
      onCloseDialog = () => null,
      className,
      ...props
    },
    ref
  ) => {
    const { width: WIDTH } = useMetrics();
    const classes = useStyles();
    const anchorRef = React.useRef<any>();
    const [anchorEl, setAnchorEl] = useState(null);

    //   function openUserMenu(event) {
    //     console.log('====================================');
    //     console.log(event);
    //     console.log('====================================');
    //     setAnchorEl(event.currentTarget);
    //   }
    function handleClose(event, reason) {
      // reason Can be: "escapeKeyDown", "backdropClick"
      if (reason === 'escapeKeyDown') {
        setAnchorEl(null);
        onCloseDialog();
      }
      if (reason === 'backdropClick' && !useCloseButton) {
        setAnchorEl(null);
        onCloseDialog();
      }
    }

    const onMenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (handleClose) {
          handleClose(event, 'escapeKeyDown');
        }
      }
    };

    const Anchor = React.useMemo(
      () => () => {
        if (!AnchorComponent) {
          return null;
        }
        if (typeof AnchorComponent === 'function') {
          return AnchorComponent();
        }

        return React.cloneElement(AnchorComponent, {
          ...AnchorComponent.props,
          onClick: () => {
            setAnchorEl(anchorRef.current);
            onOpen();
            onOpenDialog();
          },
        });
      },
      [AnchorComponent]
    );

    React.useImperativeHandle(ref, () => ({
      close: () => {
        onCloseDialog();
        setAnchorEl(null);
      },
    }));

    React.useEffect(() => {
      return () => {
        onCloseDialog();
      };
    }, []);

    return (
      <>
        <div ref={anchorRef}>
          <Anchor />
        </div>
        <Popover
          anchorEl={anchorEl}
          keepMounted
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          {...props}
        >
          <div
            className={`size-${width}`}
            style={{
              maxWidth: WIDTH - 30,
              overflowY: 'auto',
            }}
          >
            <Block flex={false} className={`scroll-area-${size}`}>
              <CardToolbar>
                <Block>
                  {typeof headerComponent === 'string' ? (
                    <Text header>{headerComponent}</Text>
                  ) : (
                    headerComponent
                  )}
                </Block>
                <Block flex={false}>
                  <IconButton
                    onClick={() => {
                      setAnchorEl(null);
                      onCloseDialog();
                    }}
                  >
                    <Close />
                  </IconButton>
                </Block>
              </CardToolbar>

              <Block>
                <Scrollbars className={classes.contentArea} absolute>
                  {Boolean(anchorEl) && children}
                </Scrollbars>
              </Block>

              <div className={classes.actionsComponent}>{actionsComponent}</div>
            </Block>
          </div>
        </Popover>
      </>
    );
  }
);

export default ActionPopoverButton;
