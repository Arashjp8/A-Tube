import { demoProfilePicture, logo } from "../utils/constans";
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

interface Props {
  handleToggle: () => void;
}

const Navbar = ({ handleToggle }: Props) => {
  const buttonStyle =
    "hover:bg-buttonGray rounded-full px-2 text-center text-mainWhite text-[22px] h-[32px]";

  return (
    <div className="flex flex-1 flex-row justify-between items-center p-5 cursor-pointer">
      <div className="flex flex-row justify-between items-center w-[90px]">
        <button className={buttonStyle} onClick={handleToggle}>
          <AiOutlineMenu />
        </button>
        <img src={logo} alt="logo" className="w-[36px] h-[36px]" />
      </div>
      <form
        id="search-form"
        className="border-none rounded-3xl bg-mainWhite w-[60%] min-w-[120px] h-[36px] mx-5 md:flex hidden flex-row justify-between items-center overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-mainWhite w-[95%] h-[32px] rounded-l-3xl p-5"
        />
        <button className="hover:opacity-60 text-[20px] transition duration-150 ease-in-out bg-mainWhite text-primary h-[32px] rounded-r-3xl px-4 text-center border-l-2 border-l-mainGray">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex flex-row justify-between md:w-[40px] w-[140px] border-none">
        <button className={`${buttonStyle} md:hidden block`}>
          <AiOutlineSearch />
        </button>
        <button className={`${buttonStyle} md:hidden block`}>
          <AiOutlineBell />
        </button>
        <img
          src={demoProfilePicture}
          alt="profile-picture"
          className="w-[32px] h-[32px] rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
