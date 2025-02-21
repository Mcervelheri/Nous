import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className="md:hidden text-[#5e4031] focus:outline-none shadow-md p-2"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
    >
      <rect x="0" y="3" fill="#19388a" width="32" height="5" rx="3" ry="3" />
      <rect x="0" y="14" fill="#19388a" width="32" height="5" rx="3" ry="3" />
      <rect x="0" y="25" fill="#19388a" width="32" height="5" rx="3" ry="3" />
    </svg>
  </button>
);

export default HamburgerButton;
