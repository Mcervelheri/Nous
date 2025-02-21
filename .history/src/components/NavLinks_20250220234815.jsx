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
      className={`
      transform transition-all duration-300 ease-in-out
      md:flex md:items-center md:space-x-6 rounded-b-[1vw] menu
      ${
        isOpen
          ? "opacity-100 translate-y-0 absolute top-16 right-0 bg-white shadow-md z-10"
          : "opacity-0 -translate-y-full md:translate-y-0 md:opacity-100 hidden md:block"
      }
    `}
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
