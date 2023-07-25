import { VideoProps } from "../interfaces/Video";

interface Props {
  video: VideoProps;
}

const SearchFeedVideoCard = ({ video }: Props) => {
  return (
    <div className="cursor-pointer min-w-[240px] ssm:h-[250px] h-[340px] py-2 lg:mx-[20%] sm:mx-10 mx-0 my-5 px-10 flex sm:flex-row flex-col items-center">
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className="hover:rounded-none rounded-2xl h-[200px]"
      />
      <div className="md:ml-20 ml-5 flex flex-row p-5">
        <span className="w-[200px] ssm:w-[350px]">
          <h4 className="text-mainWhite ">{video.snippet.title}</h4>
          <p className="hover:text-mainWhite text-mainGray">
            {video.snippet.channelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default SearchFeedVideoCard;
