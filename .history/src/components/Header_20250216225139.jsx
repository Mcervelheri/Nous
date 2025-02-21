import React from "react";
import { useState } from "react";
import NavLogo from "./NavLogo";
import HamburgerButton from "./HamburgerButton.jsx";
import NavLinks from "./NavLinks";
import logoNous from "/src/assets/logos/logo-nous.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <NavLogo logoSrc={logoNous} alt="Logo NOUS" />
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <NavLinks isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
