import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Facilities from "./pages/Facilities";
import About from "./pages/About";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <ScrollToTop />

      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <MusicPlayer />
    </div>
  );
};

export default App;