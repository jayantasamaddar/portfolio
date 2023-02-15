import { createElement } from 'react';
import { Logo, Heading, SocialIcons } from '../../components';
import Link from 'next/link';
import navigation from '../../settings/cms/navigation.json';

export const Footer = () => {
  return (
    <footer
      className="col-span-full flex justify-between gap-5 flex-wrap py-[2.25rem] min-h-[80px] w-100 h-100"
      role="region"
      aria-label="Footer Section"
    >
      <Logo
        className="JS-FooterLogo"
        src="https://ik.imagekit.io/zenius/Coursera/html-css/Asset_14_4x_d1Yk7QBPiW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270880"
        height="60px"
      />

      <section className="JS-FooterMenu">
        <Heading tag="h4" size="base">
          Menu
        </Heading>
        <nav className="JS-Navigation JS-FooterNavigation">
          <ul>
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="JS-FooterContact">
        <Heading tag="h4" size="base">
          Contact
        </Heading>
        <article>
          <p>2548 Matthews Street, Chicago, Illinois - 60631</p>
          <p>815-582-5830</p>
          <p>contact@littlelemon.com</p>
        </article>
      </section>

      <section className="JS-FooterSocial">
        <Heading tag="h4" size="base">
          Social Media
        </Heading>
        <nav className="JS-Navigation JS-FooterNavigation">
          <SocialIcons />
        </nav>
      </section>
    </footer>
  );
};
