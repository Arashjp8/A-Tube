import SideBar from "./SideBar";
import VideoCard from "./VideoCard";

const Feed = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full text-mainWhite grid grid-cols-4 gap-5 px-10">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Feed;
