import { useState, useRef, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('scrollUp');
  const scrollRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handler = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollRef.current) setScrollDirection('scrollDown');
      else setScrollDirection('scrollUp');
      scrollRef.current = currentScrollY;
      return;
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return { direction: scrollDirection, scrollY: scrollRef.current };
};
