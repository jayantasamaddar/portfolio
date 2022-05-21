import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { BlogCard } from '../components';

const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const BlogLayout1 = ({ data }) => {
  return (
    <div className="main-content flex flex-col gap-10">
      <section className="featured__section flex flex-col gap-10 p-10">
        <h1 className="text-4xl font-bold">The Blog</h1>
        <div className="featured__posts flex">
          <div className="flex flex-col grow basis-1/2">
            {data && (
              <BlogCard
                className="sm:basis-1/2 md:basis-1/3 drop-shadow-lg"
                image={urlFor(data[0].cover).url()}
                title={data[0].title}
                published_at={new Date(data[0].published_at).toLocaleDateString(
                  'en-IN',
                  dateOptions
                )}
                align="center"
                showExcerpt={true}
                excerpt={data[0].excerpt}
                href={`/blog/posts/${data[0].slug.current}`}
              />
            )}
          </div>
          <div className="flex flex-col basis-1/2 gap-10">
            {data &&
              data
                .slice(1, 3)
                .map(({ _id, title, cover, published_at, slug }) => (
                  <BlogCard
                    key={_id}
                    className="flex sm:basis-1/2 md:basis-1/3 drop-shadow-lg"
                    image={urlFor(cover).url()}
                    title={title}
                    published_at={new Date(published_at).toLocaleDateString(
                      'en-IN',
                      dateOptions
                    )}
                    href={`/blog/posts/${slug.current}`}
                  />
                ))}
          </div>
        </div>
      </section>

      <section className="blog__cards flex p-10">
        {data &&
          data.map(({ _id, title, cover, published_at, slug }) => (
            <BlogCard
              key={_id}
              className="sm:basis-1/2 md:basis-1/3 drop-shadow-lg"
              image={urlFor(cover).url()}
              title={title}
              published_at={new Date(published_at).toLocaleDateString(
                'en-IN',
                dateOptions
              )}
              align="center"
              href={`/blog/posts/${slug.current}`}
            />
          ))}
      </section>
    </div>
  );
};

export default BlogLayout1;
