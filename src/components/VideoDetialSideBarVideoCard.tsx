import { useNavigate } from "react-router-dom";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constans";

const VideoDetialSideBarVideoCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`cursor-pointer h-[50px] py-10 mt-2 mb-10 mr-5 flex flex-row items-center gap-5`}
      onClick={() => navigate(`/video/1`)} // TODO: make it dynamic
    >
      <img
        src={demoThumbnailUrl}
        alt="thumbnail"
        className="hover:rounded-none rounded-xl w-[168px] h-[94px]"
      />
      <span className="flex flex-col max-w-[330px] gap-2">
        <h4 className="text-mainWhite text-sm ">{demoVideoTitle}</h4>
        <p className="hover:text-mainWhite text-mainGray text-sm">
          {demoChannelTitle}
        </p>
      </span>
    </div>
  );
};

export default VideoDetialSideBarVideoCard;
