import React from "react";
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
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#fff4f4" }}>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <WhyChooseMe />
        <ModernStudy />
        <Opportunities />
        <Testimonials />
        <VideoInfo />
        <Teachers />
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
