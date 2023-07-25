import { useParams } from "react-router-dom";
import SearchFeedVideoCard from "../components/SearchFeedVideoCard";
import { divStyle, noToggleDivStyle, toggleDivStyle } from "./Feed";
import { useEffect } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";
import { VideoProps } from "../interfaces/Video";

interface Props {
  toggle: boolean;
  searchFeedPhrase: string;
  videos: VideoProps[] | undefined;
  setVideos: (value: VideoProps[] | undefined) => void;
  setSelectedVideo: (value: VideoProps | undefined) => void;
}

const SearchFeed = ({
  toggle,
  searchFeedPhrase,
  videos,
  setVideos,
  setSelectedVideo,
}: Props) => {
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    console.log(searchTerm);
  }, [searchTerm]);

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
      >
        {videos?.map((video, index) => (
          <SearchFeedVideoCard
            key={index}
            video={video}
            setSelectedVideo={setSelectedVideo}
          />
        ))}
      </div>
    </>
  );
};

export default SearchFeed;
