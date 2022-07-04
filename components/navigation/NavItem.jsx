import React from 'react';
import Link from 'next/link';

const NavItem = ({
  id,
  name,
  responsive,
  className,
  icon,
  index,
  to,
  unlink,
  onClick,
  nested,
}) => {
  let listItem = name;
  if (responsive === true) {
    listItem =
      name === 'Login' ? (
        <i className="fas fa-user-circle fa-2x"></i>
      ) : name === 'Search' ? (
        <i className="fas fa-search fa-lg"></i>
      ) : (
        listItem
      );
  }
  return (
    <>
      {unlink ? (
        <li
          title={name}
          className={`nav-item cursor-pointer ${className ? className : ''}`}
          onClick={onClick}
        >
          {icon ? icon : listItem}
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
        >
          <li
            id={id}
            title={name}
            data-index={index}
            className={`nav-item cursor-pointer ${className ? className : ''}`}
            onClick={onClick}
          >
            {icon ? icon : listItem}
          </li>
        </Link>
      )}
    </>
  );
};

export default NavItem;
