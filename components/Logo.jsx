import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.svg';

const Logo = ({ src, width, height, className, link }) => {
  return (
    <Link href={link ?? '/'} passHref>
      <Image
        className={`Logo flex justify-center items-center cursor-pointer ${
          className ?? ''
        }`}
        title={link ?? 'Jayanta Samaddar | Home'}
        src={src ?? logo}
        width={50 || width}
        height={50 || height}
        objectFit
        alt="Jayanta Samaddar | Logo"
      />
    </Link>
  );
};

export default Logo;
