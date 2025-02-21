import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className="md:hidden text-[#5e4031] focus:outline-none shadow-md p-2"
    onClick={onClick}
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
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "rotate-45 translate-x-[8px]" : ""
        }`}
        d="M4 6h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        d="M4 12h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "-rotate-45 -translate-x-[8px] translate-y-2" : ""
        }`}
        d="M4 18h16"
      />
    </svg>
  </button>
);

export default HamburgerButton;
