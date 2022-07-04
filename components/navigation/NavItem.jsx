import React from 'react';
// import Link from 'next/link';
import { Link } from '../';

const NavItem = ({
  id,
  name,
  className,
  icon,
  index,
  to,
  unlink,
  external,
  onClick,
  nested,
}) => {
  return (
    <>
      {unlink ? (
        <li
          title={name}
          className={`nav-item cursor-pointer ${className || ''}`}
          onClick={onClick}
        >
          {icon || name}
          {nested}
        </li>
      ) : (
        <Link
          href={
            to
              ? to
              : `/${name
                  .replace(/[^a-zA-Z ]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`
          }
          passHref
          external={external}
        >
          <li
            id={id}
            title={name}
            data-index={index}
            className={`nav-item cursor-pointer ${className || ''}`}
            onClick={onClick}
          >
            {icon || name}
          </li>
        </Link>
      )}
    </>
  );
};

export default NavItem;
