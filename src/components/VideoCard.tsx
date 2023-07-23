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
      className="cursor-pointer min-w-[240px] h-[340px] py-2 flex flex-col items-center"
      onClick={() => navigate(`/video/1`)} // TODO: make it dynamic
    >
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className={`hover:rounded-none rounded-2xl h-[200px] w-[${video.snippet.thumbnails.high.width}px] h-[${video.snippet.thumbnails.high.height}px]`}
      />
      <div className="flex flex-row p-5">
        <img
          src={demoProfilePicture}
          alt="profile-picture"
          className="w-[32px] h-[32px] rounded-full mr-3"
        />
        <span className="max-w-[315px] min-w-[200px]">
          <h4 className="text-mainWhite ">{video.snippet.title}</h4>
          <p className="hover:text-mainWhite text-mainGray">
            {video.snippet.channelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
