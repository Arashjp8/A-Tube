import { useNavigate } from "react-router-dom";
import SearchFeedVideoCard from "../components/SearchFeedVideoCard";
import { divStyle, noToggleDivStyle, toggleDivStyle } from "./Feed";

interface Props {
  toggle: boolean;
  searchFeedPhrase: string;
}

const SearchFeed = ({ toggle, searchFeedPhrase }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <h2
        className={`${
          toggle
            ? `${toggleDivStyle} lg:mx-[17%]`
            : `${noToggleDivStyle} lg:mx-[20%]`
        } ${divStyle} font-semibold text-3xl  sm:mx-10 mx-0 mt-4 mb-1 px-10`}
      >
        Results for <span className="text-secondary">{searchFeedPhrase}</span>
      </h2>
      <div
        className={`${
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle}`}
        onClick={() => navigate(`/video/1`)} // TODO: make it dynamic
      >
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
        <SearchFeedVideoCard />
      </div>
    </>
  );
};

export default SearchFeed;
