import { useState, useEffect } from 'react';

export const useWindowResize = () => {
  const [size, setSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  /** Load Default */
  useEffect(() => {
    if (size.windowWidth === 0 && size.windowHeight === 0) {
      if (typeof window !== 'undefined') {
        setSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }
    }
  }, [size]);

  /** Modify on Resize */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = ({ target }) => {
        setSize({
          windowWidth: target.innerWidth,
          windowHeight: target.innerHeight,
        });
      };

      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    }
  }, []);

  return size;
};
