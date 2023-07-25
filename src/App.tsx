import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { VideoProps } from "./interfaces/Video";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle((prev: boolean): boolean => !prev);

  const [searchedPhrase, setSearchedPhrase] = useState("");
  const [searchFeedPhrase, setSearchFeedPhrase] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<VideoProps[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const [selectedVideo, setSelectedVideo] = useState<VideoProps | undefined>();

  useEffect(() => {
    console.log(videos);
    console.log(error);
  }, [videos]);

  return (
    <BrowserRouter>
      <div className="bg-primary font-poppins">
        <div className="sticky top-0 z-[5] bg-primary">
          <Navbar
            handleToggle={handleToggle}
            searchedPhrase={searchedPhrase}
            setSearchedPhrase={setSearchedPhrase}
            setSearchFeedPhrase={setSearchFeedPhrase}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="relative">
          <SideBar toggle={toggle} setSelectedCategory={setSelectedCategory} />
          <Routes>
            <Route
              path="/"
              element={
                <Feed
                  toggle={toggle}
                  selectedCategory={selectedCategory}
                  videos={videos}
                  setVideos={setVideos}
                  isLoading={isLoading}
                  error={error}
                  setSelectedVideo={setSelectedVideo}
                  setIsLoading={setIsLoading}
                  setError={setError}
                />
              }
            />
            <Route
              path="/video/:id"
              element={
                <VideoDetail
                  toggle={toggle}
                  selectedVideo={selectedVideo}
                  setSelectedVideo={setSelectedVideo}
                  videos={videos}
                />
              }
            />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route
              path="/search/:searchTerm"
              element={
                <SearchFeed
                  toggle={toggle}
                  searchFeedPhrase={searchFeedPhrase}
                  videos={videos}
                  setVideos={setVideos}
                  setSelectedVideo={setSelectedVideo}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
