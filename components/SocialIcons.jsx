import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { NavBar, NavItem } from '.';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/jayantasamaddar91',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/jayantasamaddar',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/jayantasamaddar',
  },
  {
    name: 'Github',
    icon: <FaGithub />,
    link: 'https://www.github.com/jayantasamaddar',
  },
  {
    name: 'Dribbble',
    icon: <FaDribbble />,
    link: 'https://www.dribbble.com/jayantasamaddar',
  },
  {
    name: 'Email',
    icon: <MdEmail />,
    link: 'mailto:jayanta@zenius.one',
  },
];

const SocialIcons = ({ className }) => {
  return (
    <NavBar
      className={`social-links flex justify-center items-center gap-4 ${
        className || ''
      }`}
    >
      {socialLinks
        .filter(icon => ['LinkedIn', 'Github', 'Email'].includes(icon.name))
        .map(({ name, icon, link }, indx) => (
          <NavItem
            key={indx}
            className="text-[24px] p-3 rounded-full border border-gray-500 hover:bg-gray-500 hover:text-theme-primary hover:transition-colors hover:duration-300"
            name={name}
            icon={icon}
            to={link}
            external
          />
        ))}
    </NavBar>
  );
};

export default SocialIcons;
