import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { forwardRef } from 'react';
// import { Icon } from '../../Icon';
import { Button } from '../../Button/Button';

const BurgerMenu = forwardRef(
  ({ onClick, onKeyUp, active = false, ariaControls }, ref) => {
    return (
      <Button
        unstyled
        id="JS-BurgerMenu"
        className="min-w-fit w-16 px-5 absolute z-1000"
        onClick={onClick}
        onKeyUp={onKeyUp}
        ref={ref}
        ariaLabel={!active ? 'Open the Menu' : 'Close the Menu'}
        ariaControls={ariaControls}
        ariaExpanded={active}
        ariaPressed={active}
      >
        {/* <div id="JS-BurgerIcon">
          <Icon src={!active ? GiHamburgerMenu : FaTimes} size="1.25em" />
        </div> */}
        <div id="JS-BurgerIcon">
          {!active ? (
            <GiHamburgerMenu size="1.25em" />
          ) : (
            <FaTimes size="1.25em" />
          )}
        </div>
      </Button>
    );
  }
);

BurgerMenu.displayName = 'BurgerMenu';
export { BurgerMenu };
