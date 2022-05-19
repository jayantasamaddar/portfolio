import { Card, Button } from '../components';
import ProjectImg1 from '../assets/wfdesignbuild.png';
import ProjectImg2 from '../assets/awg2020.png';
import ProjectImg3 from '../assets/chronicled.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: ProjectImg1,
    code: 'https://www.github.com/jayantasamaddar',
    blog: '/blog/projects/portfolio-website',
  },
  {
    title: 'UI Kit',
    image: ProjectImg2,
    code: 'https://www.github.com/jayantasamaddar',
    blog: '/blog/projects/ui-kit',
  },
  {
    title: 'Authentication System',
    image: ProjectImg3,
    code: 'https://www.github.com/jayantasamaddar',
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
      {/* <div className="flex-col md:flex md:flex-row gap-4 p-10"></div> */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 p-10">
        {projects.map(({ title, image, code, blog }, indx) => (
          <Card
            key={indx}
            className="sm:basis-full md:basis-1/3 drop-shadow-lg"
            image={image}
            title={title}
            buttons={[
              <Button title="View Code" to={code || '#'} />,
              <Button title="Read Blog" to={blog || '#'} />,
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
