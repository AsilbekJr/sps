import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { rubik } from "../../fonts/fonts";
import Dastur from "../../Dastur";

const Directions = () => {
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
        className="directions"
        sx={{
          mt: scroll ? "100px" : "0",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            sx={{ py: { lg: "3rem", md: "2rem", sm: "1rem", xs: "1rem" } }}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  pt: { lg: "3rem", md: "2rem", sm: "1.5rem", xs: "1rem" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "4.5rem",
                      md: "3rem",
                      sm: "2.3rem",
                      xs: "2rem",
                    },
                    py: { lg: "3rem", md: "2rem", sm: "1.5rem", xs: "1rem" },
                    fontWeight: "600",
                    lineHeight: {
                      lg: "5rem",
                      md: "5rem",
                      sm: "3rem",
                      xs: "3rem",
                    },
                  }}
                >
                  O'zingizga mos yo'nalishni tanlang
                </Typography>
                <Typography width={"70%"} fontWeight={"300"}>
                  {" "}
                  Farzandingiz kelajagi uchun u qiziqadigan yo'nalishni tanlang.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    maxHeight: {
                      lg: "360px",
                      md: "360px",
                      sm: "300px",
                      xs: "250px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        height: "100%",
                      }}
                      src="https://i.pinimg.com/564x/b4/3a/50/b43a508b56125d91fab3c4da05445092.jpg"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    height: {
                      lg: "300px",
                      md: "300px",
                      sm: "300px",
                      xs: "250px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { lg: "120%", md: "120%", sm: "100%", xs: "100%" },
                      height: "100%",
                      paddingTop: { lg: "40px", md: "40px", sm: "0", xs: "0" },
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src="https://i.pinimg.com/564x/56/f0/27/56f027563ae1f95c0b53a3522b13f7d6.jpg"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    width: "100%",
                    height: {
                      lg: "320px",
                      md: "320px",
                      sm: "300px",
                      xs: "250px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      paddingLeft: {
                        lg: "30px",
                        md: "30px",
                        sm: 0,
                        xs: 0,
                      },
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src="https://static.abt.uz/crop/600__5a0db36ef295f.jpg"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    width: "100%",
                    height: {
                      lg: "100%",
                      md: "100%",
                      sm: "300px",
                      xs: "250px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      mt: { lg: "-60px", md: "-60px", sm: 0, xs: 0 },
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src="https://i.pinimg.com/564x/1a/08/90/1a0890fe128b67f16ee259243e7d8557.jpg"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Dastur />
          <Box sx={{ my: "6rem" }}>
            <Grid container spacing={4}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://internationalteacherstraining.com/blog/wp-content/uploads/2017/07/20.03.2020-10-Essential-Needs-for-Teacher-Training-728x370.jpg"
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      lg: "none",
                      md: "none",
                      sm: "block",
                      xs: "block",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
                    Tajribali ustozlardan bilim oling!
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
                    Bizning xususiy maktabimizda sizga tajribali ustozlar
                    tomonidan yuqori darajadagi ta'lim beriladi.
                    Ustozlarimizning ko'pgina yillar davomida o'zlarining
                    sohasida yuqori darajadagi malakaga ega bo'lganligi,
                    ularning o'quvchilarga bilim berishdagi samaradorligini
                    ta'minlaydi. Bizda ta'lim beruvchi ustozlar mahalliy va
                    halqaro sertifikat va diplomlar sohibi hisoblanadi.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: {
                      lg: "none",
                      md: "none",
                      sm: "block",
                      xs: "block",
                    },
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://internationalteacherstraining.com/blog/wp-content/uploads/2017/07/20.03.2020-10-Essential-Needs-for-Teacher-Training-728x370.jpg"
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
                    Tajribali ustozlardan bilim oling!
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
                    Bizning xususiy maktabimizda sizga tajribali ustozlar
                    tomonidan yuqori darajadagi ta'lim beriladi.
                    Ustozlarimizning ko'pgina yillar davomida o'zlarining
                    sohasida yuqori darajadagi malakaga ega bo'lganligi,
                    ularning o'quvchilarga bilim berishdagi samaradorligini
                    ta'minlaydi. Bizda ta'lim beruvchi ustozlar mahalliy va
                    halqaro sertifikat va diplomlar sohibi hisoblanadi.
                  </Typography>
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: "1rem" }}>
                <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
                  Zamonaviy va shinam sinf xonalarida bilimingizni oshiring.
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
                  Maktabimizda, zamonaviy va shinam sinf xonalarimiz
                  o'quvchilarning bilimini oshirishga yordam beradi. Har bir
                  sinf xonamizda eng so'nggi texnologiyalar bilan jihozlangan,
                  bu esa o'quvchilarga yangi texnologiyalarni o'rganish va
                  ulardan foydalanish imkonini beradi.
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: "1rem" }}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://heckmondwike-fb.co.uk/wp-content/uploads/2022/04/Kents-Hill-Park-Secondary-School-Heckmondwike-Commercial-Carpet-Tiles-7_ccexpress-864x374.jpeg"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Directions;
