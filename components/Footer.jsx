import React from 'react';
import { Logo, SocialIcons } from './';
import { SiNextdotjs } from 'react-icons/si';
import LogoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer mt-auto w-full bg-[#7510F7] text-white p-10">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="logo flex justify-center items-center">
          <Logo src={LogoWhite} />
        </div>
        <div className="quote flex justify-center items-center">
          "Artist of Life"
        </div>
        <SocialIcons />
        <div className="copyright flex justify-center items-center">
          © 2022 Jayanta Samaddar
        </div>
        <div className="next-icon flex justify-center items-center">
          <p className="flex gap-2">
            Built with{' '}
            <span className="text-[24px]">
              <SiNextdotjs />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
