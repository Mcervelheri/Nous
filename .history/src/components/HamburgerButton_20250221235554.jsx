import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className="md:hidden text-[#5e4031] focus:outline-none shadow-md p-2"
    onClick={onClick}
  >
    <svg
      className="w-8 h-8 transition-all duration-300 ease-in-out" // ⬅️ Aumentei um pouco para melhor visualização
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Linha superior */}
      <line
        x1="5"
        y1="7"
        x2="19"
        y2="7"
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      />
      {/* Linha do meio (desaparece) */}
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Linha inferior */}
      <line
        x1="5"
        y1="17"
        x2="19"
        y2="17"
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      />
    </svg>
  </button>
);

export default HamburgerButton;
