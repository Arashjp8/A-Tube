import { VideoProps } from "../interfaces/Video";
import VideoCard from "../components/VideoCard";
import { useEffect } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";
import _shuffle from "lodash/shuffle";

interface Props {
  toggle: boolean;
  selectedCategory: string;
  videos?: VideoProps[];
  setVideos: (value: VideoProps[]) => void;
  isLoading: boolean;
  error: string;
  setSelectedVideo: (value: VideoProps) => void;
  setIsLoading: (value: boolean) => void;
  setError: (value: string) => void;
}

export const toggleDivStyle =
  "relative left-[0px] lg:left-[250px] z-[0] w-full lg:w-[85%] lg:opacity-100 opacity-50";

export const noToggleDivStyle =
  "relative lg:left-[5%] left-[0] lg:w-[95%] w-full";

export const divStyle = "bg-primary text-mainWhite overflow-hidden";

const Feed = ({
  toggle,
  selectedCategory,
  videos,
  setVideos,
  isLoading,
  error,
  setSelectedVideo,
  setIsLoading,
  setError,
}: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        const shuffledVideos = _shuffle(data.items);

        setVideos(shuffledVideos);

        setIsLoading(false);
      } catch (error: any) {
        setError(error.response.statusText);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

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
          toggle ? `${toggleDivStyle}` : `${noToggleDivStyle}`
        } ${divStyle} font-semibold text-3xl my-5 px-10`}
      >
        <span className="text-secondary">{selectedCategory}</span> Videos
      </h2>
      {/* videoGrid */}
      {videos && (
        <div
          className={` ${
            toggle
              ? `${toggleDivStyle} xl:grid-cols-4 lg:grid-cols-3 ssm:grid-cols-3`
              : `${noToggleDivStyle} xl:grid-cols-5 lg:grid-cols-4 ssm:grid-cols-3`
          } ${divStyle} grid ss:grid-cols-2 grid-cols-1 gap-4 px-10 xl:mr-20 mr-0`}
        >
          {videos?.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              setSelectedVideo={setSelectedVideo}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Feed;
