import { Box, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Style/Teachers.css";
import Slider from "react-slick";
import Title from "./Title";
import { Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { rubik } from "./fonts/fonts";
const TeachersHelp = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 50 ? setScroll(true) : setScroll(false);
    }
  };
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

  const data = [
    {
      id: 1,
      img: "https://devsaidul.com/tf/images/team_1.jpg",
      name: "Azimjon Temirov",
      profession: "Tarix O'qituvchisi",
    },
    {
      id: 2,
      img: "https://devsaidul.com/tf/images/team_3.jpg",
      name: "Aziza Husenova",
      profession: "Ona tili va Adabiyot fani o'qituvchisi",
    },
    {
      id: 3,
      img: "https://devsaidul.com/tf/images/team_4.jpg",
      name: "Akbarshoh Oripov",
      profession: "Dasturlash kursi o'qituvchisi",
    },
    {
      id: 4,
      img: "https://devsaidul.com/tf/images/team_2.jpg",
      name: "Davron Komilov",
      profession: "Fransuz tili o'qituvchisi",
    },

    {
      id: 5,
      img: "https://img.freepik.com/free-photo/asian-woman-teacher-with-notebooks-smiling-looking-confident-isolated-white-background_1258-166523.jpg?w=1060&t=st=1698119857~exp=1698120457~hmac=f3535da12d6e32f8b34d9d446eb054553199d57fef0cb4362c6d2da9b16edeab",
      name: "Iroda Halimova",
      profession: "Ingliz tili o'qituvchisi",
    },
  ];

  return (
    <ThemeProvider theme={rubik}>
      <Box
        className="teachers"
        sx={{
          mt: scroll ? "100px" : "0",
        }}
      >
        <Box className="container">
          <Box
            sx={{
              overflow: "hidden",
              padding: "30px 10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                mb: "30px",
              }}
            >
              <Title color={"#000"} titleText={"Bizning o'qituvchilarimiz"} />
              <Typography
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  fontSize: {
                    lg: "1.2rem",
                    md: "1.14rem",
                    sm: "1rem",
                    xs: ".97rem",
                  },
                }}
              >
                O'quvchilar xoxlagan payt o'qituvchilardan yordam olishi mumkin.
                Bu, o'quv jarayonini yanada samarali qiladi, chunki o'quvchilar
                o'zlarining savol va qiyinchiliklarini tez va samarali hal
                qilish uchun o'qituvchilarga murojaat qilishadi.
              </Typography>
            </Box>
            <Slider {...settings}>
              {data.map((item) => (
                <Box key={item.id}>
                  <Box>
                    <Box className="tr_card">
                      <Box className="social-box">
                        <Box className="social-item one">
                          <Telegram className="card-icon" />
                        </Box>
                        <Box className="social-item two">
                          <Instagram className="card-icon" />
                        </Box>
                        <Box className="social-item tree">
                          <LinkedIn className="card-icon" />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "430px",
                        }}
                        p={"15px"}
                      >
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "20px",
                          }}
                          src={item.img}
                          alt=""
                        />
                      </Box>
                      <Box className="tr_footer">
                        <Typography fontWeight={"600"}>{item.name}</Typography>
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
                          {item.profession}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TeachersHelp;
