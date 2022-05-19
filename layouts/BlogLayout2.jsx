import Image from 'next/image';
import { NavBar, NavItem, BlogCard } from '../components';

const BlogLayout2 = ({ data }) => {
  return (
    <div className="main-content flex-col">
      <section className="hero__section">
        <div className="hero__image">
          <Image
            src="https://via.placeholder.com/1366x400.png?text=Blog+Slideshow+Hero+Image"
            alt="Blog Slideshow Hero Image"
            width={1366}
            height={400}
          />
        </div>
      </section>

      <section className="blog__navigation m-0">
        <div className="blog__navigation__list py-4 px-10 bg-black text-white">
          <NavBar className="flex gap-20 items-center">
            <NavItem name="Most Recent" />
            <NavItem name="Creator" />
            <NavItem name="Developer" />
            <NavItem name="Entrepreneur" />
          </NavBar>
        </div>
      </section>

      <section className="introduction p-16">
        <h1 className="font-bold">Blog</h1>
      </section>

      <section className="blog__cards flex">
        {data &&
          data.map(({ _id, title, cover, published_at }) => (
            <BlogCard
              key={_id}
              className="sm:basis-1/2 md:basis-1/3 drop-shadow-lg"
              image={cover.asset.ref}
              title={title}
              published_at={new Date(published_at).toUTCString()}
              align="center"
              showExcerpt={true}
            />
          ))}
      </section>
    </div>
  );
};

export default BlogLayout2;
