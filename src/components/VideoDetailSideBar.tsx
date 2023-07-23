import { VideoProps } from "../interfaces/Video";
import VideoDetailSideBarVideoCard from "./VideoDetialSideBarVideoCard";

interface Props {
  videos: VideoProps[] | undefined;
  setSelectedVideo: (value: VideoProps) => void;
}

const VideoDetailSideBar = ({ videos, setSelectedVideo }: Props) => {
  const randomStartingPoint = Math.floor(Math.random() * 39);
  const sideBarVideos = videos?.slice(
    randomStartingPoint,
    randomStartingPoint + 10
  );

  return (
    <div className="col-span-2">
      {sideBarVideos?.map((sideBarVideo, index) => (
        <VideoDetailSideBarVideoCard
          key={index}
          sideBarVideo={sideBarVideo}
          setSelectedVideo={setSelectedVideo}
        />
      ))}
    </div>
  );
};

export default VideoDetailSideBar;
