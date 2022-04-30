import { useState, useEffect } from 'react';

const useResizeTracker = (maxWidth) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(
    windowWidth < maxWidth ? true : false
  );

  useEffect(() => setWindowWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      setIsMobile(currentWidth < maxWidth ? true : false);
    });
  }, [maxWidth]);

  return { windowWidth, isMobile };
};

export default useResizeTracker;
