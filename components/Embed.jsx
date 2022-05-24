import { useEffect, useState } from 'react';
import Gist from 'super-react-gist';
import { Loader } from '.';

const Embed = ({ url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) setLoading(false);
  }, [url]);

  const site = url
    .slice(0, url.indexOf('.com'))
    .replace(/^https?:\/\//, '')
    .split('.')
    .splice(-1)[0];

  return (
    <>
      {loading ? (
        <Loader />
      ) : site === 'github' ? (
        <Gist
          url={url}
          onError={() => console.log('Gist could not be fetched!')}
        />
      ) : null}
    </>
  );
};

export default Embed;
