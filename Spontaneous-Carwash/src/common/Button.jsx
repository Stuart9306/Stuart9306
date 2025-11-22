const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const base =
    "px-5 py-2 rounded-xl font-medium transition-all duration-300";
  const styles = {
    primary: `${base} bg-primary text-white hover:bg-primary/90`,
    secondary: `${base} bg-secondary text-white hover:bg-secondary/90`,
    outline: `${base} border border-primary text-primary hover:bg-primary hover:text-white`,
  };

  return (
    <button className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;