import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import WhyChooseMe from "./WhyChooseMe";
import { Box } from "@mui/material";
import ModernStudy from "./ModernStudy";
import Opportunities from "./Opportunities";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import VideoInfo from "./VideoInfo";
import Teachers from "./Teachers";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./Components/Menu/About";
import Home from "./Components/Menu/Home";
import Directions from "./Components/Menu/Directions";

const App = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <Box sx={{ backgroundColor: "#fff4f4" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="directions" element={<Directions />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
