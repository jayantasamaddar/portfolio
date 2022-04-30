import Link from 'next/link';
import React from 'react';

const Button = ({ to, title }) => {
  return (
    <Link href={to || '#'}>
      <button
        className={`button py-3 px-6 md:px-3 lg:px-6 text-sm rounded-3xl border border-[#7510F7] hover:bg-[#7510F7] hover:text-[#fff]`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
