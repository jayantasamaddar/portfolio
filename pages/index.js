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
              Creative Director and Frontend/Fullstack Engineer
            </h1>
            <h3 className="introduction__byline flex justify-center items-center">
              I take great pleasure in building aesthetically pleasing yet
              functional products.
            </h3>
            <div className="introduction__hero-image flex justify-center items-center py-8">
              <Image src={avatar} alt="Avatar of Jayanta Samaddar" />
            </div>
          </div>
        </section>

        <section className="about py-28 lg:py-48 bg-[#7510F7]">
          <div className="about__content flex flex-col gap-6 text-white">
            <h2 className="about__headline flex justify-center items-center text-white px-10 md:px-20">
              Hi, I’m Jayanta. Nice to meet you.
            </h2>
            <p className="px-10 md:px-20 lg:px-60">
              I started my journey 6 years ago as the Founder and Creative
              Director of Kollab - a streetwear brand. The love for building
              aesthetically pleasing products led me to the digital world. Fast
              forward to today's date, I am a Frontend and Fullstack Engineer,
              who has built functional applications that solved real-world
              problems of a business. I'm currently working on a few independent
              projects, including a component library, an
              ecommerce-backend-as-a-service application. I I'm an extremely
              fast learner and aim at nothing short of mastery, naturally
              curious, and perpetually building my repertoire one design problem
              at a time.
            </p>
          </div>
        </section>

        <Skills />
        <Projects />
      </div>
    </>
  );
}
