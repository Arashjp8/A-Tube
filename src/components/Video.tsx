import {
  AiFillDislike,
  AiFillLike,
  AiOutlineBell,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useState } from "react";
import { AiFillBell } from "react-icons/ai";
import { VideoProps } from "../interfaces/Video";

interface Props {
  selectedVideo: VideoProps | undefined;
}

const Video = ({ selectedVideo }: Props) => {
  const [subscribed, setSubscribed] = useState(false);
  const [notified, setNotified] = useState(false);

  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);

  const buttonStyle =
    "bg-buttonGray py-2 px-3 flex flex-row items-center gap-2 text-lg hover:opacity-70 opacity-100 transition duration-150 ease-in-out";

  return (
    <div className="md:col-span-4 col-span-3 flex flex-col gap-3">
      <img
        src={selectedVideo?.snippet.thumbnails.medium.url}
        alt="player"
        className="md:w-[98%] w-[95%] lg:w-[1200px] h[1rem] max-h-[720px]"
      />

      <div className="flex flex-col gap-2">
        <h4 className="text-[2rem] leading-[2.8rem] max-w-5xl">
          {selectedVideo?.snippet.title}
        </h4>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-5 justify-between">
          <div className="flex flex-row gap-4 items-center">
            <p className="text-lg">{selectedVideo?.snippet.channelTitle}</p>
            <div className="flex flex-row">
              <button
                className={`${
                  subscribed ? "block" : "hidden"
                } ${buttonStyle} rounded-l-3xl border-r-2 border-primary`}
                onClick={() => setNotified((prev) => !prev)}
              >
                {notified ? <AiFillBell /> : <AiOutlineBell />}
              </button>
              <button
                className={`${buttonStyle} ${
                  subscribed ? "rounded-r-3xl" : "rounded-3xl"
                }`}
                onClick={() => setSubscribed((prev) => !prev)}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-0 md:mr-5 mr-12">
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
