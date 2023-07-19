import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle((prev: boolean): boolean => !prev);

  return (
    <BrowserRouter>
      <div className="bg-primary font-poppins">
        <div className="sticky top-0 z-[5] bg-primary">
          <Navbar handleToggle={handleToggle} />
        </div>
        <div className="relative">
          {toggle && <SideBar toggle={toggle} />}
          <Routes>
            <Route path="/" element={<Feed toggle={toggle} />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
