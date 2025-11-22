const Navigation = ({ mobile = false, onLinkClick }) => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav>
      <ul
        className={`${
          mobile
            ? "flex flex-col space-y-4 px-6 py-4 text-dark"
            : "hidden md:flex md:space-x-8 text-dark"
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={onLinkClick}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;