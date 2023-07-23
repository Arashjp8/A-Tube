import { useNavigate } from "react-router-dom";
import { demoProfilePicture } from "../utils/constans";
import { VideoProps } from "../interfaces/Video";

interface Props {
  video: VideoProps;
  setSelectedVideo: (value: VideoProps) => void;
}

const VideoCard = ({ video, setSelectedVideo }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`cursor-pointer min-w-[240px] max-w-[400px] h-[360px] py-2 flex flex-col  justify-start mb-2`}
      onClick={() => {
        setSelectedVideo(video);
        navigate(`/video/${video.id.videoId}`);
      }}
    >
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className={`hover:rounded-none rounded-2xl h-[250px]`}
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
          <p className="hover:text-mainWhite text-mainGray overflow-hidden whitespace-nowrap text-ellipsis">
            {video.snippet.channelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
