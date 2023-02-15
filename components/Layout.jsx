import React from 'react';
import { Footer, Main } from '.';
import { Header } from './Header/Header';

const Layout = ({ children, className }) => {
  return (
    <div className={`flex-col min-h-full w-full ${className || ''}`}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
