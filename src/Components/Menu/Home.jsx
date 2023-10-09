import { Box } from "@mui/material";
import React from "react";
import Banner from "../../Banner";
import WhyChooseMe from "../../WhyChooseMe";
import ModernStudy from "../../ModernStudy";
import Opportunities from "../../Opportunities";
import Testimonials from "../../Testimonials";
import VideoInfo from "../../VideoInfo";
import Teachers from "../../Teachers";

const Home = () => {
  return (
    <Box>
      <Banner />
      <WhyChooseMe />
      <ModernStudy />
      <Opportunities />
      <Testimonials />
      <VideoInfo />
      <Teachers />
    </Box>
  );
};

export default Home;
