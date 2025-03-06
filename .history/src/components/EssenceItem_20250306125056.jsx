import React from "react";

const EssenceItem = ({ item, text, type }) => {
  return (
    <>
      <div className="bg-[#bb947e] shadow-lg rounded py-5">
        {type === "Informations" && (
          <div className="relative">
            <div className="absolute -top-30 left-1/2 transform -translate-x-1/2 bg-[#fff] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/doodle/48/brain--v1.png"
                alt="brain--v1"
              />
            </div>
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">{item}</h3>
        <p className="px-5">{text}</p>
      </div>
    </>
  );
};

export default EssenceItem;
