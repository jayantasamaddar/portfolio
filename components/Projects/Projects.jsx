import { Card, Link } from '..';
import projects from '../../settings/cms/projects';

export const Projects = () => {
  return (
    <section className="my-projects py-20">
      <div className="flex flex-col justify-center items-center gap-6 px-10 lg:px-20">
        <h2 id="projects" className="text-gray-300">
          My Projects
        </h2>
        <p className="text-gray-400">
          Here are a few projects I've built that showcase my skills. Want to
          see more?&nbsp;
          <Link href="mailto:jayanta@zenius.one">Email me</Link>.
        </p>
      </div>

      <section className="flex flex-wrap gap-4 p-10 justify-center items-center">
        {projects.map(({ id, title, image, actions }) => (
          <Card
            key={id}
            className="sm:basis-full md:basis-1/3"
            image={image}
            title={title}
            actions={actions}
          />
        ))}
      </section>
    </section>
  );
};
