import { isValidElement } from 'react';

export const Icon = ({ src: Element, role, title, ...props }) => {
  const iconProps = isValidElement(Element) ? (
    <Element title={title} {...props} />
  ) : (
    Element
  );
  return (
    <div
      className="JS-Icon"
      aria-label={title}
      role={role ?? 'presentation'}
      {...props}
    >
      {iconProps}
    </div>
  );
};
