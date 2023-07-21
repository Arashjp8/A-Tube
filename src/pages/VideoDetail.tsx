import Comments from "../components/Comments";
import VideoDetailSideBar from "../components/VideoDetailSideBar";
import Video from "../components/Video";
import { divStyle } from "./Feed";

interface Props {
  toggle: boolean;
}

const VideoDetail = ({ toggle }: Props) => {
  return (
    <div
      className={`${
        toggle ? `opacity-50` : ``
      } ${divStyle} relative left-[0px] lg:left-[250px] z-[0] w-full lg:w-[95%] grid grid-cols-6`}
    >
      <Video />
      <VideoDetailSideBar />
      <Comments />
    </div>
  );
};

export default VideoDetail;
