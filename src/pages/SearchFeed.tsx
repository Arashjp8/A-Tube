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
    ></div>
  );
};

export default SearchFeed;
