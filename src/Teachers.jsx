import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import "./Style/Teachers.css";
import Slider from "react-slick";
import Title from "./Title";
import { FormatQuote } from "@mui/icons-material";
import { rubik } from "./fonts/fonts";
const Teachers = () => {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    cssEase: "linear",

    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          top: "30px",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <ul style={{ display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ThemeProvider theme={rubik}>
      <Box className="teachers">
        <Box className="container">
          <Box
            sx={{
              overflow: "hidden",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: "30px",
              }}
            >
              <Title color={"#000"} titleText={"Bizning o'qituvchilarimiz"} />
            </Box>
            <Slider {...settings}>
              <Box>
                <Box>
                  <Box className="tr_card">
                    <Box height={"60%"} p={"15px"}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                        src="https://devsaidul.com/tf/images/team_4.jpg"
                        alt=""
                      />
                    </Box>
                    <Box className="tr_footer">
                      <Typography fontWeight={"600"}>
                        Azimjon Temirov
                      </Typography>
                      <Typography
                        fontWeight={"300"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Ingliz tili o'qituvchisi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>{" "}
              <Box>
                <Box>
                  <Box className="tr_card">
                    <Box height={"60%"} p={"15px"}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                        src="https://devsaidul.com/tf/images/team_1.jpg"
                        alt=""
                      />
                    </Box>
                    <Box className="tr_footer">
                      <Typography fontWeight={"600"}>
                        Alisher Bahronov
                      </Typography>
                      <Typography
                        fontWeight={"300"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Ona tili o'qituvchisi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>{" "}
              <Box>
                <Box>
                  <Box className="tr_card">
                    <Box height={"60%"} p={"15px"}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                        src="https://devsaidul.com/tf/images/team_2.jpg"
                        alt=""
                      />
                    </Box>
                    <Box className="tr_footer">
                      <Typography fontWeight={"600"}>Furqat Azimov</Typography>
                      <Typography
                        fontWeight={"300"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        MAtematika o'qituvchisi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>{" "}
              <Box>
                <Box>
                  <Box className="tr_card">
                    <Box height={"60%"} p={"15px"}>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                        src="https://devsaidul.com/tf/images/team_3.jpg"
                        alt=""
                      />
                    </Box>
                    <Box className="tr_footer">
                      <Typography fontWeight={"600"}>
                        Aziza Davronova
                      </Typography>
                      <Typography
                        fontWeight={"300"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Ona tili o'qituvchisi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Teachers;
