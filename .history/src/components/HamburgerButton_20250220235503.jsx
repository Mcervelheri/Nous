import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className="md:hidden text-[#5e4031] focus:outline-none shadow-md p-2"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 transition-transform duration-300 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="transition-all duration-300 ease-in-out"
        d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
      />
    </svg>
  </button>
);

export default HamburgerButton;
