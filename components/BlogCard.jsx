import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({
  className,
  image,
  title,
  published_at,
  align,
  showExcerpt,
  href,
}) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <Link href={href} passHref>
      <div
        className={`card cursor-pointer ${className || ''}`}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <div className={`post__cover flex justify-${align || 'start'}`}>
          <Image
            className={`w-full rounded-3xl ${
              hoverState ? 'opacity-95' : 'opacity-100'
            }`}
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
          <h5 className="post__title text-2xl font-bold text-center">
            {title}
          </h5>
          {showExcerpt && (
            <p className="post__excerpt text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quisquam cumque doloribus eligendi dolor dolorem saepe omnis
              doloremque, placeat molestias!
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
