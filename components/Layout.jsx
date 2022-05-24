import React from 'react';
import { Header, Footer } from './';

const Layout = ({ children, className }) => {
  return (
    <div className={`flex-col min-h-full w-full ${className || ''}`}>
      <Header />
      <main className="min-h-[calc(100vh-150px)] w-full pt-[60px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
