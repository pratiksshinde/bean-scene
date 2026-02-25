const Button = ({
  children,
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "bg-[#F9C06A] text-stone-900 font-semibold tracking-widest rounded-full transition-all hover:bg-[#F9C06A]/70 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-300/30";

  const sizes = {
    sm: "text-sm px-6 py-2.5",
    md: "text-sm px-8 py-3.5",
    lg: "text-base px-10 py-4",
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;