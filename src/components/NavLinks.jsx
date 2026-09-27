/* eslint-disable react/prop-types */
import NavLink from "./NavLink";

const NavLinks = ({ isOpen }) => {
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#profissionais", label: "Profissionais" },
    { href: "#missao", label: "Missão" },
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
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
      <a
        href="https://wa.me/554498379833"
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-4 my-2 md:my-0 bg-[#5e4031] text-white px-5 py-2 rounded-full text-sm font-medium
                   hover:bg-[#4a3328] transition-all duration-300 hover:scale-105 hover:shadow-md text-center"
      >
        Agendar Consulta
      </a>
    </div>
  );
};

export default NavLinks;

