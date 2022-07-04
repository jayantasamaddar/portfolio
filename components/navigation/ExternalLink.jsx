import React from 'react';

const ExternalLink = ({ href, children }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href}>
      {children}
    </a>
  );
};

export default ExternalLink;
