import { useState, useEffect, useRef, createElement } from 'react';
import Link from 'next/link';

import { Logo } from '../../components';
import { BurgerMenu } from './components';
import { useWindowResize, useScrollDirection } from '../../hooks';

import navigation from '../../settings/cms/navigation.json';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  /**********************************************************************************/
  /** Handle SideEffects */
  /**********************************************************************************/

  const { windowWidth } = useWindowResize();
  const { direction } = useScrollDirection();

  /** Show Hide Menu based on windowWidth */
  useEffect(() => {
    if (windowWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [windowWidth]);

  /** Add classes based on Burger Menu open/close state */
  useEffect(() => {
    if (showMenu) {
      menuRef.current?.classList.add('open');
      menuRef.current?.classList.remove('close');
    } else {
      menuRef.current?.classList.add('close');
      menuRef.current?.classList.remove('open');
    }
  }, [showMenu]);

  /** Enable feature: Click outside to close (also closes if clicked on menu links) */
  useEffect(() => {
    const handler = ({ target }) => {
      if (
        (target.closest('nav#JS-HeaderMenu') === menuRef.current &&
          target.tagName !== 'A') ||
        target.closest('button#JS-BurgerMenu') === burgerRef.current
      )
        return;
      else setShowMenu(false);
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  /**********************************************************************************/
  /** Accessibility */
  /**********************************************************************************/

  const menuOrientation = {
    'aria-orientation': windowWidth > 768 ? 'horizontal' : 'vertical',
    'aria-hidden': windowWidth < 768 && !showMenu ? 'true' : 'false',
  };

  /** Enable Key Accessibility */
  const handleKeys = e => {
    switch (e.key) {
      // Close expanded mobile menu
      case 'Escape':
        if (showMenu) setShowMenu(false);
        break;
      default:
        break;
    }
  };

  /**********************************************************************************/
  /** Render JSX */
  /**********************************************************************************/

  return (
    <header
      className="col-span-full fixed flex justify-between items-center w-full h-[60px] m-0 px-5 bg-slate-100 z-1000 shadow transition-transform duration-300"
      role="region"
      aria-label="Header Region"
      data-scroll={direction}
    >
      {windowWidth < 768 && (
        <BurgerMenu
          ref={burgerRef}
          onClick={() => setShowMenu(prev => !prev)}
          active={showMenu}
          onKeyUp={handleKeys}
          ariaControls="JS-HeaderMenu"
        />
      )}
      <div className="JS-HeaderLogo relative flex items-center justify-center w-full md:w-auto md:static">
        <Logo className="absolute md:static" />
      </div>

      {showMenu && (
        <nav
          id="JS-HeaderMenu"
          role="menubar"
          className="JS-Navigation absolute max-h-screen w-1/2 left-0 right-0 top-[60px] md:static md:w-auto md:max-h-full"
          ref={menuRef}
          {...menuOrientation}
        >
          <ul
            className="JS-NavigationMenuList flex flex-col gap-5 bg-theme-primary-2 p-5 h-screen md:h-auto md:flex-row md:bg-transparent"
            role="menu group"
            {...menuOrientation}
          >
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a'
                  ? { href: url }
                  : { passHref: true, href: url, state };
              return createElement(
                'li',
                {
                  key: id,
                  name,
                  role: 'menuitem',
                  className:
                    'border-b py-4 font-bold text-gray-400 hover:text-white md:text-black md:hover:text-theme-accent-2 md:py-0 md:border-0 transition-colors animate-fade-in',
                },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};
