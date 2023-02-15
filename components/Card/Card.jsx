import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button';

export const Card = ({ className, image, actions, title }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <article
      className={`card cursor-pointer ${className ?? ''}`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <figure className="flex-col relative justify-center rounded-3xl">
        <div className="flex justify-center">
          <Image
            className="w-full rounded-3xl object-cover"
            src={image || 'https://via.placeholder.com/300'}
            alt={title}
            width={500}
            height={300}
          />
        </div>

        {hoverState && (
          <figcaption className="absolute top-0 w-full h-full flex flex-col gap-6 justify-center items-center bg-theme-primary text-white rounded-3xl transition ease-in-out duration-500">
            <h1 className="text-white text-lg md:text-lg text-center">
              {title}
            </h1>
            <div className="flex gap-4 flex-wrap justify-center" role="group">
              {actions.map(({ id, label, url }) => (
                <Button key={id} url={url} primary external>
                  {label}
                </Button>
              ))}
            </div>
          </figcaption>
        )}
      </figure>
    </article>
  );
};
