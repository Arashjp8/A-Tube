import React from "react";
import { categories } from "../utils/constans";

const SideBar = () => {
  return (
    <div className="w-[200px] px-3 border-r border-buttonGray">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`w-[160px] h-[40px] hover:bg-buttonGray text-mainWhite font-light text-[16px] flex flex-row items-center rounded-xl mb-2 px-4 py-3 `}
        >
          <div className="mr-2">{React.createElement(category.icon)}</div>
          <div>{category.name}</div>
        </button>
      ))}
    </div>
  );
};

export default SideBar;
