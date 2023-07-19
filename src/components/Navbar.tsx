import { Link } from "react-router-dom";
import { demoProfilePicture, logo } from "../utils/constans";
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./SearchBar";

interface Props {
  handleToggle: () => void;
  searchedPhrase: string;
  setSearchedPhrase: (value: string) => void;
}

const Navbar = ({ handleToggle, searchedPhrase, setSearchedPhrase }: Props) => {
  const buttonStyle =
    "hover:bg-buttonGray rounded-full px-2 text-center text-mainWhite text-[22px] h-[32px]";

  return (
    <div className="flex flex-1 flex-row justify-between items-center p-5 cursor-pointer">
      <div className="flex flex-row justify-between items-center w-[90px]">
        <button className={buttonStyle} onClick={handleToggle}>
          <AiOutlineMenu />
        </button>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[36px] h-[36px]" />
        </Link>
      </div>
      <SearchBar
        searchedPhrase={searchedPhrase}
        setSearchedPhrase={setSearchedPhrase}
      />
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
