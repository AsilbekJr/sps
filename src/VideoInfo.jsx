import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import "./Style/VideoInfo.css";
import { PlayArrow } from "@mui/icons-material";
import { font } from "./fonts/fonts";

const VideoInfo = () => {
  return (
    <ThemeProvider theme={font}>
      <Box className="video_info">
        <Box className="container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: { lg: "50%", md: "60%", sm: "70%", xs: "85%" },
              gap: "1rem",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { lg: "42px", md: "40px", sm: "28px", xs: "28px" },
              }}
            >
              {" "}
              Maktabimiz haqida{" "}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { lg: "18px", md: "16px", sm: "15px", xs: "15px" },
              }}
            >
              Maktabimiz haqida barcha ma'lumotlarni quyidagi tugmani bosib
              bilib olishingiz mumkin.
            </Typography>
            <Box
              className="video_btn"
              component={"a"}
              href="https://youtu.be/7WuA4jdLZyQ"
              target="_blank"
            >
              <PlayArrow sx={{ color: "#5586f7", fontSize: "30px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VideoInfo;
