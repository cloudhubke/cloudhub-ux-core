import React from 'react';
import Block from './Block';
import ThemeContext from './theme/ThemeContext';

const Divider: React.FC<{
  [x: string]: any;
  children?: React.ReactNode;
  height?: number;
  style?: React.CSSProperties;
}> = ({ children, height = 1, style, ...props }) => {
  const { sizes } = React.useContext(ThemeContext);

  if (children) {
    return (
      <Block flex={false} row middle>
        <Block
          style={{ height, marginRight: sizes.margin, ...style }}
          {...props}
        />
        <Block flex={false}>{children}</Block>
        <Block
          style={{ height, marginLeft: sizes.margin, ...style }}
          {...props}
        />
      </Block>
    );
  }

  return <Block flex={false} style={{ height, ...style }} {...props} />;
};

export default Divider;
