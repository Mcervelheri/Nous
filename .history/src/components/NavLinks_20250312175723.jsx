/* eslint-disable react/prop-types */
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
      absolute right-0 transform transition-all duration-300 ease-in-out
      md:flex md:items-center md:space-x-6 rounded-b-[1vw] menu
      ${
        isOpen
          ? "opacity-100 visible top-16 bg-white shadow-md z-10"
          : "opacity-0 invisible -top-96 md:visible md:opacity-100 md:static"
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
