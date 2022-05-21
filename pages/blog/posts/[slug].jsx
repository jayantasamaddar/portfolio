import groq from 'groq';
import { Meta } from '../../../components';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../lib/sanity';
import { getClient } from '../../../lib/sanity.server';

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          src={urlFor(value).width(600).url()}
          alt={value.alt || ''}
          className="post__image"
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const { title, categories, body, author, published_at, cover } = post;

  return (
    <>
      <Meta
        title="Jayanta Samaddar | Blog"
        description="Jayanta Samaddar's blog featuring Creative Direction, Full Stack Development and Entrepreneurship."
        keywords="creative director, entrepreneur, full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />

      <div className="main-content flex gap-10">
        {post && (
          <article className="post flex flex-col basis-3/5 gap-10 p-10">
            <div className="post__breadcrumbs flex gap-10">
              <p className="post__published-date">
                {new Date(published_at).toLocaleDateString('en-IN', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="post__author">{author.name}</p>
              <p className="post___categories">
                {categories.map(category => (
                  <>
                    {category && <span key={category.id}>{category.name}</span>}
                  </>
                ))}
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">{title}</h1>
              <PortableText value={body} components={PostComponents} />
            </div>
          </article>
        )}
        <aside className="post__sidebar flex flex-col basis-2/5 gap-10 p-10"></aside>
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
  };
}

export async function getStaticPaths() {
  const client = getClient();
  const posts = await client.fetch(groq`*[_type == "post"]{ slug }`);
  const paths = posts.map(post => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Post;
