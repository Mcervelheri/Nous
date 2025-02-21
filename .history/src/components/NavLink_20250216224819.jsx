import React from "react";

const NavLink = ({ href, children, isButton }) => {
  const baseClasses = "block px-4 py-2";
  const regularClasses = `${baseClasses} hover:text-[#bb947e]`;
  const buttonClasses = `${baseClasses} bg-[#bb947e] text-white px-4 py-2 rounded hover:bg-[#c79165]`;

  return (
    <a href={href} className={isButton ? buttonClasses : regularClasses}>
      {children}
    </a>
  );
};
export default NavLink;
