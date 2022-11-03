import React from 'react';
import debounce from 'lodash/debounce';

const hasWindow = typeof window !== 'undefined';

const useMetrics = (debounceDuration = 1000) => {
  const [width, setWidth] = React.useState<number>(
    hasWindow ? window.innerWidth : 0
  );
  const [height, setHeight] = React.useState<number>(
    hasWindow ? window.innerHeight : 0
  );
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (navigator) {
      const isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      setIsMobile(isMobile ? true : false);
    }
  }, []);

  React.useEffect(() => {
    const getMaxWidth = (width) => {
      if (width < 600 || isMobile) {
        return 'sm';
      }
      if (width < 960) {
        return 'md';
      }
      if (width < 1280) {
        return 'lg';
      }

      return 'lg';
    };

    const resize = debounce(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setMaxWidth(getMaxWidth(window.innerWidth));
    }, debounceDuration);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return { height, width, maxWidth, isMobile };
};

export default useMetrics;
