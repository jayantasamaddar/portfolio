import React from 'react';
import { Logo, SocialIcons } from './';
import { SiNextdotjs } from 'react-icons/si';
import LogoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer
      role="region"
      className="footer mt-auto w-full bg-theme-primary text-gray-500 p-10"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <section className="logo flex justify-center items-center">
          <Logo src={LogoWhite} />
        </section>
        <div className="quote flex justify-center items-center">
          "Artist of Life"
        </div>
        <SocialIcons />
        <div className="copyright flex justify-center items-center">
          © {new Date().getYear() + 1900} Jayanta Samaddar
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
