const ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const SIZE_OPTIONS = [
  'xs',
  'sm',
  'standard',
  'base',
  'm',
  'lg',
  'xl',
  '2xl',
  '3xl',
];

export const Heading = ({
  className,
  tag = 'h2',
  size,
  align = 'left',
  children,
}) => {
  let computedSize = 'text-';
  const computedAlign = ['left', 'right', 'center'].includes(align)
    ? `text-${align}`
    : 'text-left';
  const Element = ELEMENTS.includes(tag) ? tag : 'h2';

  if (size && SIZE_OPTIONS.includes(size)) computedSize += size;
  else {
    switch (Element) {
      case 'h1':
        computedSize += '3xl';
        break;
      case 'h2':
        computedSize += '2xl';
        break;
      case 'h3':
        computedSize += 'xl';
        break;
      case 'h4':
        computedSize += 'lg';
        break;
      case 'h5':
        computedSize += 'base';
        break;
      case 'h6':
        computedSize += 'standard';
        break;
      default:
        break;
    }
  }

  const classList = `${computedSize} ${computedAlign} ${className ?? ''}`;

  return <Element className={classList}>{children}</Element>;
};
