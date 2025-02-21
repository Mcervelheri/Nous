import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
