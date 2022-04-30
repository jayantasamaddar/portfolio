import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jayanta Samaddar" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
};

export default Meta;
