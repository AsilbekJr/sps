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
            <Box
              className="video_btn"
              component={"a"}
              href="https://youtu.be/7WuA4jdLZyQ"
              target="_blank"
            >
              <PlayArrow sx={{ color: "#5586f7", fontSize: "30px" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { lg: "42px", md: "40px", sm: "28px", xs: "28px" },
              }}
            >
              {" "}
              O'quv markazimiz haqida{" "}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { lg: "18px", md: "16px", sm: "15px", xs: "15px" },
              }}
            >
              O'quv markazimiz haqida barcha ma'lumotlarni quyidagi tugmani
              bosib bilib olishingiz mumkin.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#ef7a0e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: {
                  lg: ".9rem",
                  md: ".8rem",
                  sm: ".7rem",
                  xs: ".7rem",
                },
                // width: { lg: "70%", md: "60px", sm: "50%", xs: "50%" },
                p: {
                  lg: "1rem 3rem",
                  md: ".9rem 2rem",
                  sm: ".7rem 2rem",
                  xs: ".7rem 1.8rem",
                },
                margin: "1rem",
                borderRadius: "30px",
                fontWeight: "700",
                letterSpacing: "1.3px",
                "&:hover": {
                  background: "#fff4f4",
                  color: "#ef7a0e",
                },
              }}
              variant={"contained"}
            >
              Batafsil
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VideoInfo;
