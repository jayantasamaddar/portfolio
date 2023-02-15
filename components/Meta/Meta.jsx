import Head from 'next/head';

export const Meta = ({
  title,
  description,
  keywords,
  image = 'https://ik.imagekit.io/zenius/Personal/jayantasamaddar_kDR_-d4tkb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676463761228',
}) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jayanta Samaddar" />
      <meta name="og:type" content="website" />
      <meta
        name="og:site_name"
        content="Jayanta Samaddar | Developer Portfolio"
      />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:title" content={title} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};
