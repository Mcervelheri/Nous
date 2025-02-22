import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="relative flex flex-col justify-between w-10 h-10 p-2 md:hidden"
      onClick={onClick}
    >
      <span
        className={`block w-8 h-1 bg-[#5e4031] rounded transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-[#5e4031] rounded transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-[#5e4031] rounded transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
