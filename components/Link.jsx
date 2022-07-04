import Link from 'next/link';
import React from 'react';
import { ExternalLink } from '.';

const MasterLink = ({ external, children, ...props }) => {
  const extraProps = {
    rel: `${external ? 'noopener noreferrer' : undefined}`,
    target: `${external ? '_blank' : undefined}`,
    ...props,
  };

  return external ? (
    <ExternalLink passHref {...extraProps}>
      {children}
    </ExternalLink>
  ) : (
    <Link passHref {...extraProps}>
      {children}
    </Link>
  );
};

export default MasterLink;
