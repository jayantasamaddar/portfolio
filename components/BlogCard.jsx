import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Button } from './';

const BlogCard = ({
  className,
  image,
  title,
  published_at,
  layout,
  align,
  showExcerpt,
}) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className={`card cursor-pointer ${className || ''}`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className={`post__cover flex justify-${align || 'start'}`}>
        <Image
          className="w-full rounded-3xl"
          src={image || `https://via.placeholder.com/300x180.png`}
          alt={title}
          width={300}
          height={180}
        />
      </div>

      <div
        className={`post__details flex flex-col items-${
          align || 'stretch'
        } gap-2 py-2`}
      >
        <p className="post__published__date text-center">{published_at}</p>
        <h5 className="post__title text-2xl font-bold text-center">{title}</h5>
        {showExcerpt && (
          <p className="post__excerpt text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quisquam cumque doloribus eligendi dolor dolorem saepe omnis
            doloremque, placeat molestias!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
