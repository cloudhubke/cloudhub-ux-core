import React from 'react';
import Close from '@mui/icons-material/Close';
import Block from '../Block';
import IconButton from '../IconButton';
import Text from '../Text';
import ThemeContext from '../theme/ThemeContext';

const DialogHeader: React.FC<{
  [x: string]: any;
  children?: any;
  height?: number;
  showCancel?: boolean;
  onClose?: () => any;
  cancelButtonProps?: any;
  iconProps?: any;
}> = ({
  children,
  height = 45,
  showCancel = false,
  onClose = () => {},
  cancelButtonProps = {},
  iconProps = {},
  ...props
}) => {
  const { sizes } = React.useContext(ThemeContext);

  return (
    <Block
      middle
      flex={false}
      style={{ height }}
      padding={[0, sizes.margin]}
      row
      {...props}
    >
      <Block>
        {typeof children === 'string' ? (
          <Text header>{children}</Text>
        ) : (
          children
        )}
      </Block>
      {showCancel && (
        <Block flex={false}>
          <IconButton
            style={{ marginRight: -sizes.margin }}
            onClick={() => {
              onClose();
            }}
            {...cancelButtonProps}
          >
            <Close {...iconProps} />
          </IconButton>
        </Block>
      )}
    </Block>
  );
};
export default DialogHeader;
