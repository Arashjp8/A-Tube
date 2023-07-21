import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constans";

const SearchFeedVideoCard = () => {
  return (
    <div className="cursor-pointer min-w-[240px] ssm:h-[250px] h-[340px] py-2 lg:mx-[20%] sm:mx-10 mx-0 my-5 px-10 flex sm:flex-row flex-col items-center">
      <img
        src={demoThumbnailUrl}
        alt="thumbnail"
        className="hover:rounded-none rounded-2xl h-[200px]"
      />
      <div className="md:ml-20 ml-5 flex flex-row p-5">
        <img
          src={demoProfilePicture}
          alt="profile-picture"
          className="w-[32px] h-[32px] rounded-full mr-3"
        />
        <span className="w-[200px] ssm:w-[350px]">
          <h4 className="text-mainWhite ">{demoVideoTitle}</h4>
          <p className="hover:text-mainWhite text-mainGray">
            {demoChannelTitle}
          </p>
        </span>
      </div>
    </div>
  );
};

export default SearchFeedVideoCard;
