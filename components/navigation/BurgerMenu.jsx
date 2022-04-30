import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const BurgerMenu = ({ onClick, onToggle, className }) => {
  return (
    <div
      className={`burger-menu absolute flex justify-center ${className || ''}`}
      onClick={onClick}
    >
      {onToggle ? <FaTimes size="1.25em" /> : <GiHamburgerMenu size="1.25em" />}
    </div>
  );
};

export default BurgerMenu;
