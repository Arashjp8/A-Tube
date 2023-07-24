import Comments from "../components/Comments";
import VideoDetailSideBar from "../components/VideoDetailSideBar";
import Video from "../components/Video";
import { divStyle } from "./Feed";
import { VideoProps } from "../interfaces/Video";

interface Props {
  toggle: boolean;
  selectedVideo: VideoProps | undefined;
  setSelectedVideo: (value: VideoProps) => void;
  videos: VideoProps[] | undefined;
}

const VideoDetail = ({
  toggle,
  selectedVideo,
  setSelectedVideo,
  videos,
}: Props) => {
  return (
    <div
      className={`${
        toggle ? `opacity-50` : ``
      } ${divStyle} relative left-[0px] lg:left-[150px] z-[0] w-full lg:w-[95%] md:grid grid-cols-6 flex flex-col gap-4 mt-5 mx-2.5`}
    >
      <Video selectedVideo={selectedVideo} />
      <VideoDetailSideBar videos={videos} setSelectedVideo={setSelectedVideo} />
      <Comments />
    </div>
  );
};

export default VideoDetail;
