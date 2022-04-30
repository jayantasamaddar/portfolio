import React from 'react';
import { Skillset, NavItem } from '../components';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGraphql,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiFirebase,
  SiNeo4J,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiStrapi,
  SiRedis,
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiWebpack,
  SiVite,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiShopify,
  SiZoho,
  SiAsana,
  SiNotion,
  SiTrello,
  SiMailchimp,
} from 'react-icons/si';
import { FaNodeJs, FaFigma, FaGit } from 'react-icons/fa';

const tools = [
  { title: 'HTML5', icon: <SiHtml5 /> },
  { title: 'CSS3', icon: <SiCss3 /> },
  { title: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { title: 'JavaScript', icon: <SiJavascript /> },
  { title: 'TypeScript', icon: <SiTypescript /> },
  { title: 'Nodejs', icon: <FaNodeJs /> },
  { title: 'Express', icon: <SiExpress /> },
  { title: 'Fastify', icon: <SiFastify /> },
  { title: 'React', icon: <SiReact /> },
  { title: 'Redux', icon: <SiRedux /> },
  { title: 'Nextjs', icon: <SiNextdotjs /> },
  { title: 'GraphQL', icon: <SiGraphql /> },
  { title: 'MongoDB', icon: <SiMongodb /> },
  { title: 'VS Code', icon: <SiVisualstudiocode /> },
  { title: 'Firebase', icon: <SiFirebase /> },
  { title: 'Redis', icon: <SiRedis /> },
  { title: 'Neo4j', icon: <SiNeo4J /> },
  { title: 'PostgreSQL', icon: <SiPostgresql /> },
  { title: 'Prisma', icon: <SiPrisma /> },
  { title: 'Strapi', icon: <SiStrapi /> },
  { title: 'Cypress', icon: <SiCypress /> },
  { title: 'Webpack', icon: <SiWebpack /> },
  { title: 'Vite', icon: <SiVite /> },
  { title: 'Git', icon: <FaGit /> },
  { title: 'Figma', icon: <FaFigma /> },
  { title: 'Photoshop', icon: <SiAdobephotoshop /> },
  { title: 'Illustrator', icon: <SiAdobeillustrator /> },
  { title: 'InDesign', icon: <SiAdobeindesign /> },
  { title: 'Shopify', icon: <SiShopify /> },
  { title: 'Zoho', icon: <SiZoho /> },
  { title: 'Asana', icon: <SiAsana /> },
  { title: 'Notion', icon: <SiNotion /> },
  { title: 'Trello', icon: <SiTrello /> },
  { title: 'Mailchimp', icon: <SiMailchimp /> },
];

const Skills = () => {
  return (
    <section className="skills w-full h-full -mt-16 lg:-mt-28 px-10 md:px-20">
      <div className="skills__container bg-white sm:flex-col md:flex lg:flex-row justify-center items-stretch border border-slate-300 rounded-3xl drop-shadow-md">
        <Skillset className="skills__developer" title="Full Stack Developer">
          <p>
            I like to code things from scratch, and enjoy bringing ideas to
            life.
          </p>
          <h5 className="py-4">Focus Areas:</h5>
          <p className="">UI/UX Development, Web, APIs, Apps</p>
          <h5 className="py-8">Tools I have worked with:</h5>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            {tools
              .filter((tool) =>
                [
                  'HTML5',
                  'CSS3',
                  'Tailwind CSS',
                  'JavaScript',
                  'TypeScript',
                  'Nodejs',
                  'Express',
                  'Fastify',
                  'React',
                  'Nextjs',
                  'GraphQL',
                  'MongoDB',
                  'Neo4j',
                  'PostgreSQL',
                  'Prisma',
                  'Redis',
                  'Strapi',
                  'Cypress',
                  'Webpack',
                  'Git',
                ].includes(tool.title)
              )
              .map(({ title, icon }, indx) => (
                <NavItem
                  className="text-[24px] p-3 rounded-full border border-slate-600 hover:bg-slate-200"
                  key={indx}
                  name={title}
                  icon={icon}
                  unlink
                />
              ))}
          </ul>
          <h5 className="py-8">Other tooling I've worked with:</h5>
          <ul>
            <li>Koa</li>
            <li>Mongoose</li>
            <li>React Hook Form</li>
            <li>React Query</li>
            <li></li>
          </ul>
        </Skillset>

        <Skillset
          className="skills__creative-director border-y lg:border-y-0 lg:border-x border-slate-300"
          title="Creative Director"
        >
          <p>
            I started my professional career as a Creative Director in fashion
            and simultaneously as a UI/UX Designer for the fashion brand.
          </p>
          <h5 className="py-8">Focus Areas:</h5>
          <p>
            UI/UX Design, Merchandising, Creative Solutions involving Business
            and Tech
          </p>
          <h5 className="py-8">Tools I have worked with:</h5>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            {tools
              .filter((tool) =>
                [
                  'Photoshop',
                  'Illustrator',
                  'InDesign',
                  'Shopify',
                  'Figma',
                ].includes(tool.title)
              )
              .map(({ title, icon }, indx) => (
                <NavItem
                  className="text-[24px] p-3 rounded-full border border-slate-600 hover:bg-slate-200"
                  key={indx}
                  name={title}
                  icon={icon}
                  unlink
                />
              ))}
          </ul>
          <h5 className="py-8">Other tooling I've worked with:</h5>
          <ul>
            <li>Flow Charts</li>
            <li></li>
          </ul>
        </Skillset>

        <Skillset className="skills__other-skills" title="Other Skills">
          <p>I have founded and worked at a startup for over 5 years.</p>
          <h5 className="py-8">Focus Areas:</h5>
          <p>Business Development, ERP Software</p>
          <h5 className="py-8">Tools I have worked with:</h5>
          {/* <ul>
            <li>Zoho Finance Suite / Zoho One</li>
            <li>Zoho CRM</li>
            <li>Zoho Creator</li>
          </ul> */}
          <ul className="flex flex-wrap justify-center items-center gap-4">
            {tools
              .filter((tool) =>
                ['Zoho', 'Asana', 'Notion', 'Trello', 'Mailchimp'].includes(
                  tool.title
                )
              )
              .map(({ title, icon }, indx) => (
                <NavItem
                  className="text-[24px] p-3 rounded-full border border-slate-600 hover:bg-slate-200"
                  key={indx}
                  name={title}
                  icon={icon}
                  unlink
                />
              ))}
          </ul>
        </Skillset>
      </div>
    </section>
  );
};

export default Skills;
