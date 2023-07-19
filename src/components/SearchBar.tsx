import { FormEvent, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {
  searchedPhrase: string;
  setSearchedPhrase: (value: string) => void;
}

const SearchBar = ({ searchedPhrase, setSearchedPhrase }: Props) => {
  const userSearchInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userSearchInput.current && searchedPhrase.length !== 0) {
      navigate(`/search/${searchedPhrase}`);
      setSearchedPhrase("");
    }
  };

  return (
    <form
      id="search-form"
      onSubmit={(e) => handleSubmit(e)}
      className="border-none rounded-3xl bg-mainWhite w-[60%] min-w-[120px] h-[36px] mx-5 md:flex hidden flex-row justify-between items-center overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-mainWhite w-[95%] h-[32px] rounded-l-3xl p-5"
        value={searchedPhrase}
        onChange={(e) => setSearchedPhrase(e.target.value)}
        ref={userSearchInput}
      />
      <button
        type="submit"
        className="hover:opacity-60 text-[20px] transition duration-150 ease-in-out bg-mainWhite text-primary h-[32px] rounded-r-3xl px-4 text-center border-l-2 border-l-mainGray"
      >
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
