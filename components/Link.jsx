/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import { Link as NextLink } from 'next/link';
import React, { forwardRef } from 'react';

const Link = forwardRef(({ external, ...props }, ref) => {
  const LinkElement = external ? 'a' : 'NextLink';
  const extraProps = {
    rel: `${external ? 'noopener noreferrer' : undefined}`,
    target: `${external ? '_blank' : undefined}`,
    ...props,
  };

  return <LinkElement ref={ref} {...extraProps} />;
});

export default Link;
