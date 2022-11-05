import React from 'react';
import Block from '../Block';
import ThemeContext from '../theme/ThemeContext';

const DialogActions: React.FC<{
  [x: string]: any;
  children?: any;
}> = ({ children, ...props }) => {
  const { sizes } = React.useContext(ThemeContext);

  const childbuttons = React.Children.map(children, (child, index) => {
    if (!child) {
      return null;
    }

    return React.cloneElement(child, {
      ...child.props,
      style: {
        overflow: 'hidden',
        ...(child.props.style || {}),
        marginLeft: index > 0 ? 10 : 0,
      },
    });
  });

  return (
    <Block
      flex={false}
      row
      right
      middle
      padding={sizes.padding}
      style={{ position: 'relative' }}
      {...props}
    >
      {childbuttons}
    </Block>
  );
};

export default DialogActions;
