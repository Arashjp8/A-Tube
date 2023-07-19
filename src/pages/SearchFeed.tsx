interface Props {
  toggle: boolean;
  searchedPhrase: string;
}

const SearchFeed = ({ toggle, searchedPhrase }: Props) => {
  return (
    <div className="bg-primary">
      <h1>
        Results for <span>{searchedPhrase}</span>
      </h1>
    </div>
  );
};

export default SearchFeed;
