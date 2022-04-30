import React from 'react';

const NavBar = ({ children, className }) => {
  return (
    <nav className="h-full">
      <ul className={className}>{children}</ul>
    </nav>
  );
};

export default NavBar;
