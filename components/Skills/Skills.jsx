import { Skill } from './components';
import skills from '../../settings/cms/skills.json';
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
  SiAmazonaws,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiStrapi,
  SiRedis,
  SiJest,
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiRollupdotjs,
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
  SiElectron,
} from 'react-icons/si';
import { FaNodeJs, FaFigma, FaGit } from 'react-icons/fa';

const TOOLS = [
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
  { title: 'Amazon Web Services', icon: <SiAmazonaws /> },
  { title: 'PostgreSQL', icon: <SiPostgresql /> },
  { title: 'Prisma', icon: <SiPrisma /> },
  { title: 'Strapi', icon: <SiStrapi /> },
  { title: 'Electron', icon: <SiElectron /> },
  { title: 'Jest', icon: <SiJest /> },
  { title: 'Cypress', icon: <SiCypress /> },
  { title: 'Webpack', icon: <SiWebpack /> },
  { title: 'Rollup', icon: <SiRollupdotjs /> },
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

export const Skills = () => {
  return (
    <section className="JS-SkillsSection w-full h-full mt-16 lg:-mt-28 px-10 md:px-20">
      <div
        role="group"
        className="JS-Skills bg-white flex-col md:flex lg:flex-row justify-center items-stretch border border-slate-300 rounded-3xl drop-shadow-md"
      >
        {skills.map(({ id, title, description, focus, tools, others }) => (
          <Skill
            key={id}
            id={`JS-Skill-${title.trim()}`}
            className="middle:border-y middle:lg:border-y-0 middle:lg:border-x middle:border-slate-300"
            title={title}
            description={description}
            focus={focus}
            tools={TOOLS.filter(tool => tools.includes(tool.title))}
            others={others}
          />
        ))}
      </div>
    </section>
  );
};
