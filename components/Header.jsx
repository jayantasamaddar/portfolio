import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavBar, NavItem, BurgerMenu, Logo } from './';
import useResizeTracker from '../hooks/useResizeTracker';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { windowWidth } = useResizeTracker(768);
  const burgerMenuRef = useRef();

  const toggleMenu = useCallback(() => setShowMenu(prev => !prev), []);

  // console.log(burgerMenuRef.current);

  /***********************************************************************************/
  // useEffect
  /***********************************************************************************/
  /* Hide Burger Menu on Resize to larger screen */
  useEffect(() => {
    if (windowWidth > 640) setShowMenu(false);
  }, [windowWidth]);

  /* Burger Menu Dropdown onClick Handling */
  useEffect(() => {
    const handler = ({ target }) => {
      // console.log(target.closest('.mobile-navbar'));
      if (target.closest('.burger-menu')) toggleMenu();
      else if (target.closest('.mobile-navbar') !== burgerMenuRef.current)
        setShowMenu(false);
      else return;
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [toggleMenu]);

  /* onKeyup Escape Dropdown */
  useEffect(() => {
    if (showMenu) {
      const handler = ({ key }) => {
        if (key === 'Escape') setShowMenu(false); //Alternative: keyCode === 27 is same as key === 'Escape'
      };
      document.addEventListener('keyup', handler);
      return () => document.removeEventListener('keyup', handler);
    }
    return;
  }, [showMenu]);

  return (
    /* With Flexbox-Mobile */
    <header className="header fixed w-full z-50">
      <div className="flex relative flex-wrap justify-between items-center h-[60px] bg-slate-300 px-4">
        <BurgerMenu
          className="burger-menu md:hidden lg:flex-col cursor-pointer p-3"
          onToggle={showMenu}
        />
        <div className="logo flex sm:basis-full md:basis-1/3 lg:basis-1/2 w-full justify-center md:justify-start items-center px-10 py-3">
          <div className="cursor-pointer px-2 flex justify-center items-center absolute">
            <Logo />
          </div>
        </div>
        {windowWidth > 768 && (
          <div className="navbar col-span-5 px-4">
            <NavBar className="flex gap-10 h-full items-center">
              <NavItem name="Home" to="/" />
              <NavItem name="About Me" to="/about" />
              <NavItem name="Projects" />
              <NavItem name="Blog" />
              <NavItem name="Contact" />
            </NavBar>
          </div>
        )}
      </div>

      {showMenu && (
        <div className="mobile-navbar col-span-5 px-4" ref={burgerMenuRef}>
          <NavBar className="flex flex-col gap-10 min-h-full absolute left-0 bg-slate-200 border p-10">
            <NavItem name="Home" to="/" />
            <NavItem name="About Me" to="/about" />
            <NavItem name="Projects" />
            <NavItem name="Blog" />
            <NavItem name="Contact" />
          </NavBar>
        </div>
      )}
    </header>
  );
};

export default Header;
