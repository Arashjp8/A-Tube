import React from "react";
import { categories } from "../utils/constans";

interface Props {
  toggle: boolean;
}

const SideBar = ({ toggle }: Props) => {
  return (
    <>
      <div
        className={`fixed top-[76px] z-[20] bg-primary ${
          toggle ? "block" : "hidden"
        } w-[200px] px-3 border-r border-buttonGray`}
      >
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`${
              index === categories.length - 1 ? "mb-20" : "mb-2"
            } w-[160px] h-[40px] hover:bg-buttonGray text-mainWhite font-light text-[16px] flex flex-row items-center rounded-xl  px-4 py-3 `}
          >
            <div className="mr-2">{React.createElement(category.icon)}</div>
            <div>{category.name}</div>
          </button>
        ))}
      </div>
      {/* <div
        className={`fixed top-[76px] z-[20] bg-primary lg:block hidden w-[200px] px-3 border-r border-buttonGray`}
      >
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`${
              index === categories.length - 1 ? "mb-20" : "mb-2"
            } w-[160px] h-[40px] hover:bg-buttonGray text-mainWhite font-light text-[16px] flex flex-row items-center rounded-xl  px-4 py-3 `}
          >
            <div className="mr-2">{React.createElement(category.icon)}</div>
            <div>{category.name}</div>
          </button>
        ))}
      </div> */}

      {/* <div className="fixed top-[76px] bg-primary lg:hidden xxs:hidden ss:hidden ssm:block block w-[100px] px-5 border-r border-buttonGray">
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`${
              index === categories.length - 1 ? "mb-20" : "mb-2"
            } w-[40px] h-[40px] hover:bg-buttonGray text-mainWhite font-light text-[16px] flex flex-row items-center justify-center rounded-xl px-4 py-2  `}
          >
            <div>{React.createElement(category.icon)}</div>
          </button>
        ))}
      </div> */}
    </>
  );
};

export default SideBar;
