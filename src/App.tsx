import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { Video } from "./interfaces/Video";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle((prev: boolean): boolean => !prev);

  const [searchedPhrase, setSearchedPhrase] = useState("");
  const [searchFeedPhrase, setSearchFeedPhrase] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<Video[]>();

  useEffect(() => {
    console.log(videos);
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
          />
        </div>
        <div className="relative">
          <SideBar
            toggle={toggle}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setVideos={setVideos}
          />
          <Routes>
            <Route path="/" element={<Feed toggle={toggle} />} />
            <Route
              path="/video/:id"
              element={<VideoDetail toggle={toggle} />}
            />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route
              path="/search/:searchTerm"
              element={
                <SearchFeed
                  toggle={toggle}
                  searchFeedPhrase={searchFeedPhrase}
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
