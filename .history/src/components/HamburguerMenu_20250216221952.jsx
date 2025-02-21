import React from "react";
import { use } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <a href="#inicio">
                <img src={logoNous} alt="Logo NOUS" className="h-16" />
              </a>
            </div>
            {/* Botão do menu hamburguer */}
            <button
              className="md:hidden text-[#5e4031] focus:outline-none shadow-md p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    !isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>

            {/* Links do menu */}
            <div
              className={`${
                isOpen
                  ? "absolute top-16 right-0 bg-white shadow-md z-10"
                  : "hidden"
              } md:flex md:items-center md:space-x-6 menu`}
            >
              <a
                href="#inicio"
                className="block px-4 py-2 md:px-0 hover:text-[#bb947e]"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block px-4 py-2 md:px-0 hover:text-[#bb947e]"
              >
                Sobre
              </a>
              <a
                href="#profissionais"
                className="block px-4 py-2 md:px-0 hover:text-[#bb947e]"
              >
                Profissionais
              </a>
              <a
                href="#missao"
                className="block px-4 py-2 md:px-0 hover:text-[#bb947e]"
              >
                Missão
              </a>
              <a
                href="#contato"
                className="block bg-[#bb947e] text-white px-4 py-2 rounded hover:bg-[#c79165]"
              >
                Agende
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
