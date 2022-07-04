import { Card, Button } from '../components';
import Portfolio from '../assets/portfolio.png';
import UrsaUI from '../assets/ursa-ui.png';
import Zenius from '../assets/zenius.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: Portfolio,
    code: 'https://www.github.com/jayantasamaddar/portfolio',
    blog: '/blog/projects/portfolio-website',
  },
  {
    title: 'UI Kit Monorepo',
    image: UrsaUI,
    code: 'https://github.com/jayantasamaddar/ursa',
    blog: '/blog/projects/ui-kit',
  },
  {
    title: 'Omni-Channel Shipping Solution',
    image: Zenius,
    code: 'https://github.com/jayantasamaddar/zenius-omni--frontend',
    blog: '/blog/projects/ui-kit',
  },
];

const Projects = () => {
  return (
    <section className="my-projects py-20">
      <div className="flex flex-col justify-center items-center gap-6 px-10 lg:px-20">
        <h2>My Projects</h2>
        <p>
          Here are a few sample projects I've built that showcase my skills.
          Want to see more? Email me.
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 p-10">
        {projects.map(({ title, image, code, blog }, indx) => (
          <Card
            key={indx}
            className="sm:basis-full md:basis-1/3 drop-shadow-lg"
            image={image}
            title={title}
            buttons={[
              <Button title="View Code" to={code || '#'} key={indx} external />,
              <Button title="Read Blog" to={blog || '#'} key={indx} />,
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
