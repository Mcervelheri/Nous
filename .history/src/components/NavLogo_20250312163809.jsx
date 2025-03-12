const NavLogo = ({ logoSrc, alt }) => (
  <div className="transition-transform duration-300 hover:scale-105">
    <a href="#inicio">
      <img src={logoSrc} alt={alt} className="h-16" />
    </a>
  </div>
);

export default NavLogo;
