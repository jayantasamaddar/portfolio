import { getClient } from '../../lib/sanity.server';
import groq from 'groq';
import { Meta } from '../../components';
import { BlogLayout1 } from '../../layouts';

const Blog = ({ posts }) => {
  return (
    <>
      <Meta
        title="Jayanta Samaddar | Blog"
        description="Jayanta Samaddar's blog featuring Creative Direction, Full Stack Development and Entrepreneurship."
        keywords="creative director, entrepreneur, full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />

      <BlogLayout1 data={posts} />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview)
    .fetch(groq`*[_type == "post" && published_at <= now()] | order(published_at desc) {
    _id,
    title,
    "categories": categories[]->{id, name},
    body,
    cover,
    slug,
    published_at
  }`);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;

/**
 * [
    {
        "_id": "b2899bbf-24cc-4e4f-9046-c822e5ed78ab",
        "body": [
            {
                "_key": "57f8e743a617",
                "_type": "block",
                "children": [
                    {
                        "_key": "aad7761028fd",
                        "_type": "span",
                        "marks": [],
                        "text": "If you have just started out as a Shopify App Developer, the first tricky part that you encounter is authentication the app you are building with Shopify. In an attempt to make things simple for App Developers, Shopify offers a ready-to-go "
                    },
                    {
                        "_key": "4d2584653875",
                        "_type": "span",
                        "marks": [
                            "strong",
                            "d1dd88c39cc4"
                        ],
                        "text": "Shopify Node App"
                    },
                    {
                        "_key": "5d7ec0d223ae",
                        "_type": "span",
                        "marks": [],
                        "text": ". The problem is, the Shopify developers maintaining this app, update this app often. As of this article, they have recently changed frameworks from Next-Koa to React-Express-Vite. This kind of breaking changes, makes updating the app via Shopify Node App, practically impossible and very hard to maintain.\n\nThe solution, I am suggesting is to develop the Oauth independently. This article will not only guide you to building independent Oauth 2.0 connections with Shopify but we will explore how we can do so with and without the Shopify API, using universal Oauth 2.0 concepts and serverside frameworks like Koa, Fastify and Express. This is a complete guide."
                    }
                ],
                "markDefs": [
                    {
                        "_key": "d1dd88c39cc4",
                        "_type": "link",
                        "href": "https://github.com/Shopify/shopify-app-node"
                    }
                ],
                "style": "normal"
            }
        ],
        "categories": [
            {
                "id": null,
                "name": "Development"
            }
        ],
        "cover": {
            "_type": "image",
            "asset": {
                "_ref": "image-0088fa363cb8409370c0ca8d737cdbe070e2b6db-760x590-jpg",
                "_type": "reference"
            }
        },
        "published_at": "2022-05-17T15:30:03.831Z",
        "slug": {
            "_type": "slug",
            "current": "a-complete-guide-to-shopify-app-authentication-for-shopify-developers"
        },
        "title": "A Complete Guide to Shopify App Authentication for Shopify Developers"
    }
]
 */
