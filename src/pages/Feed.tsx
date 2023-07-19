import VideoCard from "../components/VideoCard";

interface Props {
  toggle: boolean;
}

const Feed = ({ toggle }: Props) => {
  return (
    <div
      className={` ${
        toggle
          ? "relative left-[0px] lg:left-[250px] z-[0] w-full lg:w-[85%] lg:opacity-100 opacity-50 xl:grid-cols-4 lg:grid-cols-3"
          : "relative lg:left-[5%] left-[0] lg:w-[95%] w-full xl:grid-cols-5 lg:grid-cols-4 ssm:grid-cols-3"
      } bg-primary text-mainWhite grid  ss:grid-cols-2 grid-cols-1 gap-4 px-10 xl:mr-20 mr-0 overflow-hidden`}
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
