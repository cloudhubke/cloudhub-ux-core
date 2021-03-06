import React, { useState } from 'react';
import clsx from 'clsx';
import { Popover } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Close } from '@mui/icons-material';
import Scrollbars from '../Scrollbars';
import Text from '../Text';
import Block from '../Block';
import IconButton from '../IconButton';
import CardToolbar from './CardToolbar';
import useMetrics from '../customhooks/useMetrics';

const useStyles = makeStyles((theme) => ({
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
  },
}));

const ActionPopoverButton = React.forwardRef(
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
      className,
      ...props
    },
    ref
  ) => {
    const { width: WIDTH } = useMetrics();
    const classes = useStyles();
    const anchorRef = React.useRef();
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
      }
      if (reason === 'backdropClick' && !useCloseButton) {
        setAnchorEl(null);
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
          },
        });
      },
      [AnchorComponent]
    );

    React.useImperativeHandle(ref, () => ({
      close: () => setAnchorEl(null),
    }));

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
                  }}
                >
                  <Close />
                </IconButton>
              </Block>
            </CardToolbar>

            <Scrollbars
              className={clsx(`scroll-area-${size}`, classes.contentArea)}
            >
              {Boolean(anchorEl) && children}
            </Scrollbars>

            <div className={classes.actionsComponent}>{actionsComponent}</div>
          </div>
        </Popover>
      </>
    );
  }
);

export default ActionPopoverButton;
