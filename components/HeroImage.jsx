import React from 'react';
import Image from 'next/image';
import avatar from '../assets/avatar.svg';

const HeroImage = () => {
  return <Image src={avatar} alt="Hero Image" width={200} height={200} />;
};

export default HeroImage;
