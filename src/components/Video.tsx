import {
  AiFillDislike,
  AiFillLike,
  AiOutlineBell,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constans";
import { useState } from "react";
const Video = () => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);

  const buttonStyle =
    "bg-buttonGray py-2 px-3 flex flex-row items-center gap-2 text-lg hover:opacity-70 opacity-100 transition duration-150 ease-in-out";

  return (
    <div className="md:col-span-4 col-span-3 flex flex-col gap-3">
      <img
        src={demoThumbnailUrl}
        alt="player"
        className="w-[1200px] h-[660px]"
      />

      <div className="flex flex-col gap-2">
        <h4 className="text-[2rem] leading-[2.8rem] max-w-5xl">
          {demoVideoTitle}
        </h4>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={demoProfilePicture}
                alt="profile-picture"
                className="w-[48px] h-[48px] rounded-full cursor-pointer"
              />
              <p className="text-lg">{demoChannelTitle}</p>
            </div>
            <button className={`${buttonStyle} rounded-3xl`}>
              <AiOutlineBell />
              Subscribe
            </button>
          </div>
          <div className="flex flex-row gap-0 mr-3">
            <button
              className={`${buttonStyle} rounded-l-3xl border-r-2 border-primary`}
              onClick={() => {
                setDisLiked(false);
                setLiked((prev) => !prev);
              }}
            >
              {liked && !disLiked ? <AiFillLike /> : <AiOutlineLike />}
              Like
            </button>
            <button
              className={`${buttonStyle} rounded-r-3xl`}
              onClick={() => {
                setLiked(false);
                setDisLiked((prev) => !prev);
              }}
            >
              {disLiked && !liked ? <AiFillDislike /> : <AiOutlineDislike />}
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
