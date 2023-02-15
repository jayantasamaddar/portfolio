import Image from 'next/image';
import { Meta, Skills, Projects } from '../components';
import data from '../settings/cms/home';
import jayanta from '../assets/jayantasamaddar.jpg';

export default function Home() {
  return (
    <>
      <Meta
        title="Jayanta Samaddar | Developer Portfolio"
        description="Jayanta Samaddar's developer portfolio website."
        keywords="full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />
      <div className="main-content flex-col bg-black">
        <section className="JS-Introduction p-16">
          <div className="JS-IntroductionContent flex flex-col gap-4">
            <h1 className="JS-IntroductionHeadline text-gray-200 flex justify-center items-center text-center md:text-left">
              {data.heading}
            </h1>
            <h2 className="JS-IntroductionByline text-gray-500 flex justify-center items-center text-center text-base font-semibold md:text-left">
              {data.subheading}
            </h2>
            <div className="JS-IntroductionHeroImageContainer flex justify-center items-center py-8">
              <Image
                className="object-cover h-full rounded-full"
                src={jayanta}
                alt="Photo of Jayanta Samaddar"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="JS-About py-28 lg:py-48 bg-theme-primary"
        >
          <div className="JS-AboutContent flex flex-col gap-6 text-gray-500">
            <h2 className="JS-AboutHeadline flex justify-center items-center text-gray-300 text-center px-10 md:px-20">
              {data.about.heading}
            </h2>
            <p className="JS-AboutDescription px-10 text-center md:px-20 md:text-left lg:px-60">
              {data.about.text}
            </p>

            <ul
              className="JS-Certifications flex gap pt-4 px-10 justify-center items-center flex-wrap md:gap-6"
              role="group"
            >
              {data.certifications.map(({ id, title, url, image }) => (
                <li key={id} className="JS-Certification" role="listitem">
                  <a href={url} title={title} target="_blank" rel="noreferrer">
                    <Image
                      src={image}
                      alt={title}
                      objectFit="contain"
                      width={100}
                      height={100}
                      role="presentation"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Skills />
        <Projects />
      </div>
    </>
  );
}
