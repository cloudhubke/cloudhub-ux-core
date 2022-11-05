import React from 'react';
import Block from '../Block';
import LayersManager from '../baseweb/LayersManager';

import ThemeContext from '../theme/ThemeContext';

const DialogContent: React.FC<{
  [x: string]: any;
  children?: any;
  dialog?: boolean;
  style?: React.CSSProperties;
}> = ({ children, dialog = true, style, ...props }) => {
  const { sizes } = React.useContext(ThemeContext);

  return (
    <LayersManager
      zIndex={1301}
      style={{
        position: 'relative',
        margin: `${sizes.margin}px, ${sizes.margin}px, 0px, ${sizes.margin}px]`,
        ...style,
      }}
    >
      {dialog ? (
        <Block
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            padding: sizes.padding,
            ...style,
          }}
          {...props}
        >
          {children}
        </Block>
      ) : (
        { children }
      )}
    </LayersManager>
  );
};
export default DialogContent;
