import { useNavigate } from "react-router-dom";
import { demoProfilePicture } from "../utils/constans";
import { Video } from "../interfaces/Video";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`cursor-pointer min-w-[240px] max-w-[400px] h-[340px] py-2 flex flex-col  justify-start`}
      onClick={() => navigate(`/video/1`)} // TODO: make it dynamic
    >
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className={`hover:rounded-none rounded-2xl h-[220px]`}
      />
      <div className="flex flex-row p-5">
        <img
          src={demoProfilePicture}
          alt="profile-picture"
          className="w-[32px] h-[32px] rounded-full mr-3"
        />
        <span className="max-w-[315px] min-w-[200px]">
          <h4 className="text-mainWhite ">
            {video.snippet.title.slice(0, 40)}
            {video.snippet.title.length > 40 ? "..." : ""}
          </h4>
          <p className="hover:text-mainWhite text-mainGray">
            {video.snippet.channelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
