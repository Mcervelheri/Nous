import React from "react";

const EssenceItem = ({ item, text, text2, text3, mainIcon, icon, type }) => {
  return (
    <>
      <div className="bg-[#bb947e] shadow-lg rounded py-5">
        {type === "Informations" && (
          <div className="relative">
            <div className="absolute -top-10  left-1/2 transform -translate-x-1/2 -translate-y-5 bg-[#fff] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <img width="36" height="36" src={mainIcon} alt="brain--v1" />
            </div>
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">{item}</h3>
        <hr className="border-t border-[#5e4031] my-2 mx-8" />
        <div className="flex flex-col px-2">
          <div className="flex flex-row items-center py-2">
            {icon && <img src={icon} alt="Ícone" className="py-2 w-4 h-4" />}
            <p className="whitespace-pre-line">{text}</p>
          </div>
          <div className="flex flex-row items-center py-2">
            {icon && <img src={icon} alt="Ícone" className="w-4 h-4" />}
            {text2 && <p className="whitespace-pre-line">{text2}</p>}
          </div>
          <div className="flex flex-row items-center py-2">
            {text3 && icon && (
              <img src={icon} alt="Ícone" className="w-4 h-4" />
            )}
            {text3 && <p className="whitespace-pre-line">{text3}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default EssenceItem;
