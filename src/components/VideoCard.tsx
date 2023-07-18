import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constans";

const VideoCard = () => {
  return (
    <div className="cursor-pointer min-w-[240px] h-[340px] py-2 flex flex-col items-center">
      <img
        src={demoThumbnailUrl}
        alt="thumbnail"
        className="hover:rounded-none rounded-2xl h-[200px]"
      />
      <div className="flex flex-row p-5">
        <img
          src={demoProfilePicture}
          alt="profile-picture"
          className="w-[32px] h-[32px] rounded-full mr-3"
        />
        <span className="max-w-[315px] min-w-[200px]">
          <h4 className="text-mainWhite ">{demoVideoTitle}</h4>
          <p className="hover:text-mainWhite text-mainGray">
            {demoChannelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
