import React from "react";

const NavLogo = ({ logoSrc, alt }) => (
  <div>
    <a href="#inicio">
      <img src={logoSrc} alt={alt} className="h-16" />
    </a>
  </div>
);

export default NavLogo;
