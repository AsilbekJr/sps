import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import Title from "../../Title";
import Statistics from "../../Statistics";
import { rubik } from "../../fonts/fonts";
import Teachers from "../../Teachers";
import FAQ from "../../FAQ";

const About = () => {
  const [scroll, setScroll] = useState(false);

  React.useEffect(() => {
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
  return (
    <ThemeProvider theme={rubik}>
      <Box
        className="about"
        sx={{
          mt: scroll ? "100px" : "0",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: { lg: "3rem", md: "2rem", sm: "1rem", xs: "1rem" } }}>
            <Title titleText={"Biz haqimizda"} color="#071952" />
          </Box>
          <Box>
            <Grid container spacing={4}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{ width: "100%" }}>
                  <img
                    style={{ width: "100%" }}
                    src="./images/about_us.jpg"
                    alt="about us photo"
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.6rem",
                      md: "1.5rem",
                      sm: "1.4rem",
                      xs: "1.4rem",
                    },
                  }}
                >
                  Ta'lim Sifatini Oshirishga Qaratilgan Jahon Standartlari
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.1rem",
                      md: "1.1rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                >
                  Sodiqov Xususiy Maktabi, o'zining ta'lim sifatini oshirishga
                  qaratilgan jahon standartlari bilan tanilgan. Bu maktab,
                  o'quvchilarni kelajakda muvaffaqiyatli bo'lish uchun zarur
                  bo'lgan bilim va ko'nikmalarga ega bo'lishga yordam berish
                  uchun mo'ljallangan bir dastur bilan ishlaydi.
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.1rem",
                      md: "1.1rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                >
                  Maktab, o'quvchilarni intellektual, ijtimoiy va jismoniy
                  jihatdan rivojlantirishga qaratilgan holistik yondashuvni
                  qo'llaydi. Bu, o'quvchilarning shaxsiy va akademik o'sishini
                  ta'minlash uchun muhimdir.
                </Typography>
              </Grid>
            </Grid>
            <Box>
              <Statistics />
            </Box>
          </Box>
        </Container>
        <Teachers />
        <FAQ />
      </Box>
    </ThemeProvider>
  );
};

export default About;
