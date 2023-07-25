import { useParams } from "react-router-dom";
import SearchFeedVideoCard from "../components/SearchFeedVideoCard";
import { divStyle, noToggleDivStyle, toggleDivStyle } from "./Feed";
import { useEffect, useState } from "react";
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);

        setVideos(data.items);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.response.status);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  if (isLoading)
    return (
      <h2
        className={`${
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle} font-semibold text-3xl my-5 px-10 h-[100vh]`}
      >
        Loading...
      </h2>
    );

  if (error) {
    return (
      <h2
        className={`${
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle} font-semibold text-3xl my-5 px-10 h-[100vh]`}
      >
        {error}
      </h2>
    );
  }

  return (
    <>
      <h2
        className={`${
          toggle
            ? `${toggleDivStyle} lg:mx-[17%]`
            : `${noToggleDivStyle} lg:mx-[19%]`
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
