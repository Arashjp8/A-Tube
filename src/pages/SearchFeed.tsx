import SearchFeedVideoCard from "../components/SearchFeedVideoCard";
import { divStyle, noToggleDivStyle, toggleDivStyle } from "./Feed";

interface Props {
  toggle: boolean;
}

const SearchFeed = ({ toggle }: Props) => {
  return (
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
  );
};

export default SearchFeed;
