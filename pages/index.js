import Image from 'next/image';
import { Meta } from '../components';
import { Skills, Projects } from '../blocks';
import avatar from '../assets/avatar.svg';

export default function Home() {
  return (
    <>
      <Meta
        title="Jayanta Samaddar | Developer Portfolio"
        description="Jayanta Samaddar's developer portfolio website."
        keywords="full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />
      <div className="main-content flex-col">
        <section className="introduction p-16">
          <div className="introduction__content flex flex-col gap-4">
            <h1 className="introduction__headline flex justify-center items-center">
              Designer, Creative Director and Developer
            </h1>
            <h3 className="introduction__byline flex justify-center items-center">
              I design and code beautifully simple things, and I love what I do.
            </h3>
            <div className="introduction__hero-image flex justify-center items-center py-8">
              <Image src={avatar} />
            </div>
          </div>
        </section>

        <section className="about py-28 lg:py-48 bg-[#7510F7]">
          <div className="about__content flex flex-col gap-6 text-white">
            <h2 className="about__headline flex justify-center items-center text-white px-10 md:px-20">
              Hi, I’m Jayanta. Nice to meet you.
            </h2>
            <p className="px-10 md:px-20 lg:px-60">
              Since beginning my journey as a freelance designer nearly 10 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
        </section>

        <Skills />
        <Projects />
      </div>
    </>
  );
}
