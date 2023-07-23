import React from "react";
import { categories } from "../utils/constans";
import { VideoProps } from "../interfaces/Video";

interface Props {
  toggle: boolean;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  setVideos: (value: VideoProps[]) => void;
}

const SideBar = ({ toggle, setSelectedCategory }: Props) => {
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
              index === categories.length - 1 ? "mb-10" : "mb-0.2"
            } w-[160px] h-[50px] hover:bg-buttonGray text-mainWhite font-light text-[16px] flex flex-row items-center rounded-xl  px-4 py-3 `}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="mr-2">{React.createElement(category.icon)}</div>
            <div>{category.name}</div>
          </button>
        ))}
      </div>

      <div
        className={`fixed top-[76px] z-[20] bg-primary ${
          !toggle ? "lg:block hidden" : "hidden"
        } w-[5%] min-w-[95px] px-5 border-r border-buttonGray`}
      >
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`${
              index === categories.length - 1 ? "mb-10" : "mb-0.2"
            } w-[40px] h-[50px] hover:bg-buttonGray text-mainWhite font-light text-[16px] relative flex flex-row justify-center items-center rounded-xl px-4 py-2  `}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div>{React.createElement(category.icon)}</div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SideBar;
