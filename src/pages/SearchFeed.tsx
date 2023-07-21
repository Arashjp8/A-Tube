import SearchFeedVideoCard from "../components/SearchFeedVideoCard";
import { divStyle, noToggleDivStyle, toggleDivStyle } from "./Feed";

interface Props {
  toggle: boolean;
  searchFeedPhrase: string;
}

const SearchFeed = ({ toggle, searchFeedPhrase }: Props) => {
  return (
    <>
      <h2
        className={`${
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle} font-semibold text-3xl lg:mx-[20%] sm:mx-10 mx-0 mt-4 mb-1 px-10`}
      >
        Results for <span className="text-secondary">{searchFeedPhrase}</span>
      </h2>
      <div
        className={`${
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle}`}
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
