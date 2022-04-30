import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Button } from './';

const Card = ({ className, image, buttons, title }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className={`card cursor-pointer ${className || ''}`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <figure className="flex-col relative justify-center">
        <div className="flex justify-center">
          <Image
            className="w-full rounded-3xl"
            src={image || `https://via.placeholder.com/300`}
            alt={title}
            width={500}
            height={300}
          />
        </div>

        {hoverState && (
          <figcaption className="absolute top-0 w-full h-full flex flex-col gap-6 justify-center items-center bg-[#141c3a] text-white rounded-3xl transition ease-in-out duration-500">
            <h1 className="text-white text-lg md:text-lg text-center">
              {title}
            </h1>
            <div className="flex gap-4">
              {buttons.map((button, indx) => (
                <Fragment key={indx}>{button}</Fragment>
              ))}
            </div>
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Card;
