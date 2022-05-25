const FormError = ({ children, className }) => {
  return (
    <p className={`${className || ''} text-sm text-red-500`}>{children}</p>
  );
};

export default FormError;
