import "react";
/*import logoGrande from "/src/asset/logos/logo-nous-grande.png";*/

const Home = () => {
  return (
    <div id="inicio" className="relative h-screen">
      <div className="inicio fixed inset-0 flex items-center bg-[#bb947e] justify-center z-10 pointer-events-none">
        <div className="max-w-xl"></div>
        <p className="text-xl max-w-2xl text-black mx-auto">
          Reconheça, compreenda, transforme-se.
        </p>
      </div>
    </div>
  );
};

export default Home;
