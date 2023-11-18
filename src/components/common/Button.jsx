const Button = ({ className, children }) => {
  return (
    <button
      className={`rounded-full font-medium text-white leading-normal ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
