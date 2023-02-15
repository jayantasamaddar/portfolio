export const Error = ({ children, className }) => {
  return (
    <p className={`JS-Error text-sm text-red-500 ${className ?? ''}`}>
      {children}
    </p>
  );
};
