import React from "react";
import NavLink from "./NavLink";

const NavLinks = ({ isOpen }) => {
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#profissionais", label: "Profissionais" },
    { href: "#missao", label: "Missão" },
    { href: "#contato", label: "Agende", isButton: true },
  ];

  return (
    <div
      className={`${
        isOpen ? "absolute top-16 right-0 bg-white shadow-md z-10" : "hidden"
      } md:flex md:items-center md:space-x-6 rounded-b-[] menu`}
    >
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} isButton={link.isButton}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
