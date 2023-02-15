import { useEffect } from 'react';

const Main = ({ children }) => {
  useEffect(() => {
    const handler = window.scrollTo(0, 0);
    window.addEventListener('unload', handler);
    return () => window.removeEventListener(this, handler);
  }, []);

  return (
    <main
      role="region"
      className="col-span-full w-full h-full pt-[60px] flex flex-col"
    >
      {children}
    </main>
  );
};

Main.displayName = 'Main';
export { Main };
