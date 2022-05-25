const SubmitButton = ({ className, title }) => {
  return (
    <input
      type="submit"
      value={title}
      className={`button cursor-pointer py-3 px-6 md:px-3 lg:px-6 text-base font-bold text-[#7510F7] rounded-full border border-[#7510F7] hover:bg-[#7510F7] hover:text-[#fff] ${
        className || ''
      }`}
    />
  );
};

export default SubmitButton;
