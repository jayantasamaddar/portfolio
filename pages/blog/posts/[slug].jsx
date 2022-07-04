import groq from 'groq';
import Image from 'next/image';
import { Meta, Embed } from '../../../components';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../lib/sanity';
import { getClient } from '../../../lib/sanity.server';

const PostComponents = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="py-2 px-4">{children}</ul>,
    number: ({ children }) => <ol className="py-2 px-4">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => <ol className="py-2">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li className={`py-1 blog__block_list`}>{children}</li>
    ),
    number: ({ children }) => <li className="py-1 list-decimal">{children}</li>,
    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li className="py-1">✅ {children}</li>,
  },
  types: {
    break: () => (
      <div className="py-4">
        <hr className="divider border-slate-300" />
      </div>
    ),
    image: ({ value }) => {
      return (
        // <img
        //   src={urlFor(value).width(600).url()}
        //   alt={value.alt || ''}
        //   className="post__image"
        // />
        <Image
          src={urlFor(value).width(600).url()}
          alt={value.alt || ''}
          className="post__image"
        />
      );
    },
    embed: ({ value: { url } }) => {
      return (
        <div className="post__embed py-10">
          <Embed url={url} />
        </div>
      );
    },
  },
};

const Post = ({ post }) => {
  const { title, categories, body, author, published_at, cover } = post ?? '';

  return (
    <>
      {post && (
        <Meta
          title={`${title} | Blog | Jayanta Samaddar`}
          description={`${author}'s blog article about ${
            categories?.join(', ') ?? ''
          }`}
          keywords="creative director, entrepreneur, full stack developer, web developer, react, nextjs, mongodb, expressjs"
        />
      )}

      <div className="main-content flex flex-col lg:flex-row gap-10">
        {post && (
          <article className="post flex flex-col basis-8/12 gap-10 p-10">
            <h1 className="font-bold text-center">{title}</h1>
            <div className="post__breadcrumbs flex gap-10 justify-center">
              <p className="post__published-date text-sm md:text-base">
                {new Date(published_at).toLocaleDateString('en-IN', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="post__author text-sm md:text-base">
                {author?.name ?? ''}
              </p>
              <p className="post___categories text-sm md:text-base">
                {categories.map(category => (
                  <>
                    {category && (
                      <span key={category.id}>{category?.name ?? ''}</span>
                    )}
                  </>
                ))}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="post__image">
                <Image
                  src={urlFor(cover).url()}
                  width={1200}
                  height={628}
                  layout="responsive"
                  alt={cover?.alt ?? ''}
                />
              </div>
              <PortableText value={body} components={PostComponents} />
            </div>
          </article>
        )}
        <aside className="post__sidebar flex flex-col basis-4/12 gap-10 p-10"></aside>
      </div>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "author": author->{name, bio, avatar},
  "categories": categories[]->{id, name},
  body,
  published_at,
  cover,
}`;

export async function getStaticProps({ params, preview = false }) {
  const client = getClient(preview);
  const post = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
    revalidate: 60 * 5,
  };
}

export async function getStaticPaths() {
  const client = getClient();
  const posts = await client.fetch(groq`*[_type == "post"]{ slug }`);
  const paths = posts.map((post, indx) => ({
    params: {
      slug: post.slug.current,
      key: indx,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export default Post;
