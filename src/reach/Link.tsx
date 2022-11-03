import React from 'react';
import { Link as ReachRouterLink } from '@reach/router';
import ThemeContext from '../theme/ThemeContext';

const Link: React.FC<any> = React.forwardRef((props, ref) => {
  const { Link }: any = React.useContext(ThemeContext);

  if (Link) {
    return <Link ref={ref} {...props} />;
  }
  return <ReachRouterLink ref={ref} {...props} />;
});

export default Link;
