// import Link from 'next/link';
import { Link } from '.';
import React from 'react';

const Button = ({ to, type, className, title, external }) => {
  return (
    <Link href={to || '#'} passHref external={external}>
      <button
        type={type || 'button'}
        className={`button py-3 px-6 md:px-3 lg:px-6 text-sm font-bold text-[#7510F7] rounded-3xl border border-[#7510F7] hover:bg-[#7510F7] hover:text-[#fff] ${
          className || ''
        }`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
