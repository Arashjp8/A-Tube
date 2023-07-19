import VideoCard from "./VideoCard";

interface Props {
  toggle: boolean;
}

const Feed = ({ toggle }: Props) => {
  return (
    <div
      className={` ${
        toggle
          ? "relative left-[0px] lg:left-[250px] z-[0] w-full lg:w-[85%]"
          : "relative w-full"
      } bg-primary text-mainWhite grid xl:grid-cols-4 lg:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-4 px-10 xl:mr-20 mr-0 overflow-hidden`}
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default Feed;
