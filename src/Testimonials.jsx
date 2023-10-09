import { Avatar, Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import "./Style/Testimonials.css";
import Statistics from "./Statistics";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "./Title";
import { FormatQuote } from "@mui/icons-material";
import { rubik } from "./fonts/fonts";
const Testimonials = () => {
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
      <Box className="testimonials">
        <Box className="container">
          <Box
            sx={{
              overflow: "hidden",
              padding: "10px",
              position: "relative",
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
              <Title color={"#fff"} titleText={"Talabalar fikri"} />
            </Box>
            <Slider {...settings}>
              <Box>
                <Box>
                  <Box className="tm_card">
                    <Box className="tm_icon">
                      <FormatQuote
                        sx={{
                          color: "#5586f7 ",
                          fontSize: {
                            lg: "60px",
                            md: "60px",
                            sm: "50px",
                            xs: "48px",
                          },
                        }}
                      />
                    </Box>
                    <Box className="tm_body">
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "14px",
                          },
                        }}
                      >
                        Kurs nafaqat teorik bilimlarni, balki amaliy
                        tajribalarni ham o'z ichiga olgan. Ustozlar har bir
                        talabaga individual yondashishdi va har birimizning
                        o'zimizga xos savollari va muammolari bilan
                        shug'ullanishga vaqt ajratdilar.
                      </Typography>
                      <Avatar
                        alt="Aziz Samiyev"
                        src="https://devsaidul.com/tf/images/client_img_2.png"
                        sx={{ width: "80px", height: "80px", my: "1rem" }}
                      />
                      <Typography fontWeight={"600"}>Aziz Samiyev</Typography>
                      <Typography
                        fontWeight={"300"}
                        fontStyle={"italic"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Toshkent Jahon Tillari Unversiteti talabasi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box className="tm_card">
                    <Box className="tm_icon">
                      <FormatQuote
                        sx={{ color: "#5586f7 ", fontSize: "60px" }}
                      />
                    </Box>
                    <Box className="tm_body">
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "14px",
                          },
                        }}
                      >
                        Bu kursni tugatganimdan so'ng, men o'z sohamda yanada
                        ishonchli bo'ldim. Kursdagi har bir dars meni yangi
                        bilimlar bilan tanishtirdi va meni o'z sohamda yanada
                        mukammal bo'lishga yo'l qo'ydi
                      </Typography>
                      <Avatar
                        alt="Abdulaziz Jalilov"
                        src="https://i.pinimg.com/736x/c8/ff/88/c8ff88ba5d7c2844bfbeaaa0837d1de5.jpg"
                        sx={{ width: "80px", height: "80px", my: "1rem" }}
                      />
                      <Typography fontWeight={"600"}>
                        Abdulaziz Jalilov
                      </Typography>
                      <Typography
                        fontWeight={"300"}
                        fontStyle={"italic"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Qarshi Davlat Unversisteti talabasi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box className="tm_card">
                    <Box className="tm_icon">
                      <FormatQuote
                        sx={{ color: "#5586f7 ", fontSize: "60px" }}
                      />
                    </Box>
                    <Box className="tm_body">
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "14px",
                          },
                        }}
                      >
                        Bu kursni bitirganimdan so'ng, men o'zimni yangi va
                        qiziqarli ishlar qilishga tayyor his etdim. Ustozlar har
                        bir darsni tushunishga yordam berdilar va har doim
                        savollarga javob berishga tayyor edilar.
                      </Typography>
                      <Avatar
                        alt="Usmon Sultonov"
                        src="https://us.123rf.com/450wm/juiceteam2013/juiceteam20131701/juiceteam2013170100251/69289878-casual-man-posing-casually-over-white.jpg?ver=6"
                        sx={{ width: "80px", height: "80px", my: "1rem" }}
                      />
                      <Typography fontWeight={"600"}>Usmon Sultonov</Typography>
                      <Typography
                        fontWeight={"300"}
                        fontStyle={"italic"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Buxoro Davlat Unversisteti talabasi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box className="tm_card">
                    <Box className="tm_icon">
                      <FormatQuote
                        sx={{ color: "#5586f7 ", fontSize: "60px" }}
                      />
                    </Box>
                    <Box className="tm_body">
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "14px",
                          },
                        }}
                      >
                        O'quv markazidagi ustozlar o'z sohasida aniq va
                        tushunarli. Ular har bir mavzuni qanday o'rganish
                        kerakligini tushuntirishga yordam berdilar. Men bu
                        kursni do'stlarimga ham tavsiya qilaman.
                      </Typography>
                      <Avatar
                        alt="Aziza Husenova"
                        src="https://static.vecteezy.com/system/resources/previews/007/525/740/original/portrait-of-girl-with-beautiful-long-hair-isolated-on-white-background-portrait-of-young-woman-without-face-avatar-for-social-network-mobile-app-minimalist-vector.jpg"
                        sx={{ width: "80px", height: "80px", my: "1rem" }}
                      />
                      <Typography fontWeight={"600"}>Aziza Husenova</Typography>
                      <Typography
                        fontWeight={"300"}
                        fontStyle={"italic"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Toshkent Til va Adabiyot Instituti talabasi
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box className="tm_card">
                    <Box className="tm_icon">
                      <FormatQuote
                        sx={{ color: "#5586f7 ", fontSize: "60px" }}
                      />
                    </Box>
                    <Box className="tm_body">
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "14px",
                          },
                        }}
                      >
                        Bu o'quv markazini bitirganimdan so'ng, men o'zimni
                        yangi va qiziqarli ishlar qilishga tayyor his etdim.
                        Kursdagi ustozlar har bir darsni tushunishga yordam
                        berdilar va har doim savollarga javob berishga tayyor
                        edilar.
                      </Typography>
                      <Avatar
                        alt="Hilola G'afforova"
                        src="https://img.freepik.com/premium-vector/female-avatar-icon-flat-illustration-female-avatar-vector-icon-isolated-white-background_98396-5730.jpg?w=360"
                        sx={{ width: "80px", height: "80px", my: "1rem" }}
                      />
                      <Typography fontWeight={"600"}>
                        Hilola G'afforova
                      </Typography>
                      <Typography
                        fontWeight={"300"}
                        fontStyle={"italic"}
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        Buxoro Davlat Unversiteti talabasi
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

export default Testimonials;
