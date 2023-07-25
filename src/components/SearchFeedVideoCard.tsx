import { useNavigate } from "react-router-dom";
import { VideoProps } from "../interfaces/Video";

interface Props {
  video: VideoProps;
  setSelectedVideo: (value: VideoProps | undefined) => void;
}

const SearchFeedVideoCard = ({ video, setSelectedVideo }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setSelectedVideo(video);
        navigate(`/video/${video.id.videoId}`);
      }}
      className="cursor-pointer min-w-[240px] ssm:h-[250px] h-[340px] py-2 lg:mx-[20%] sm:mx-10 mx-0 my-5 px-10 flex sm:flex-row flex-col items-center"
    >
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className="hover:rounded-none rounded-2xl md:h-[260px] h-[220px]"
      />
      <div className="md:ml-20 ml-5 flex flex-row p-5">
        <span className="w-[200px] ssm:w-[350px]">
          <h4 className="text-mainWhite ">
            {video.snippet.title.slice(0, 40)}{" "}
            {video.snippet.title.length > 40 ? "..." : ""}
          </h4>
          <p className="hover:text-mainWhite text-mainGray">
            {video.snippet.channelTitle.slice(0, 40)}
            {video.snippet.channelTitle.length > 40 ? "..." : ""}
          </p>
        </span>
      </div>
    </div>
  );
};

export default SearchFeedVideoCard;
