/* eslint-disable react/prop-types */
const NavLink = ({ href, children, isButton }) => {
  const baseClasses = "block px-4 py-2";
  const regularClasses = `${baseClasses} md:px-0 hover:text-[#bb947e]`;
  const buttonClasses = `${baseClasses} bg-[#bb947e] text-white px-4 py-2 rounded hover:bg-[#c79165] transition-transform duration-300 hover:scale-105`;

  return (
    <a href={href} className={isButton ? buttonClasses : regularClasses}>
      {children}
    </a>
  );
};
export default NavLink;
