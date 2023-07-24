import { useNavigate } from "react-router-dom";
import { VideoProps } from "../interfaces/Video";

interface Props {
  sideBarVideo: VideoProps;
  setSelectedVideo: (value: VideoProps) => void;
}

const VideoDetialSideBarVideoCard = ({
  sideBarVideo,
  setSelectedVideo,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`cursor-pointer h-[50px] py-10 mt-2 mb-10 mr-5 flex flex-row items-center gap-5`}
      onClick={() => {
        setSelectedVideo(sideBarVideo);
        navigate(`/video/${sideBarVideo.id.videoId}`);
      }}
    >
      <img
        src={sideBarVideo.snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="hover:rounded-none rounded-xl w-[168px] h-[94px]"
      />
      <span className="flex flex-col max-w-[200px] min-w-[150px] gap-2">
        <h4 className="text-mainWhite text-sm ">
          {sideBarVideo.snippet.title.slice(0, 40)}
          {sideBarVideo.snippet.title.length > 40 ? "..." : ""}
        </h4>
        <p className="hover:text-mainWhite text-mainGray text-sm">
          {sideBarVideo.snippet.channelTitle}
        </p>
      </span>
    </div>
  );
};

export default VideoDetialSideBarVideoCard;
