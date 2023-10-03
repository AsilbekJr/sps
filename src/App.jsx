import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import WhyChooseMe from "./WhyChooseMe";
import { Box } from "@mui/material";
import ModernStudy from "./ModernStudy";
import Opportunities from "./Opportunities";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#fff4f4" }}>
      <Navbar />
      <Banner />
      <WhyChooseMe />
      <ModernStudy />
      <Opportunities />
      <Testimonials />
    </Box>
  );
};

export default App;
