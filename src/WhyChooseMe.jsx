import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Title from "./Title";
import { useTheme } from "@mui/material/styles";

const content = [
  {
    title: "Tajribali ustozlar",
    image: "./images/icon/teacher.png",
    bgcolor: "#663399",
    describtion:
      "Bizda ta'lim beradigan ustozlar  bir qancha mahalliy va xorijiy diplom va sertifikatlar sohibidir. ",
  },
  {
    title: "Zamonaviy o'quv dasturlari",
    image: "./images/icon/book.png",
    bgcolor: "#6ECB63",
    describtion:
      "Dars jarayoni to'liq zamonaviy dasturlar yordamida o'tiladi va bugungi kun talablariga to'la mos keladi. ",
  },
  {
    title: "Kreativ fikrlash",
    image: "./images/icon/creative.png",
    bgcolor: "#F55C47",
    describtion:
      "O'quvchilarda yaratuvchanlik va tanqidiy fikrlash shakillantiriladi. Darslarda muammoli vaziyatlar tahlil qilinadi.",
  },
  {
    title: "Sertifikat",
    image: "./images/icon/certificate.png",
    bgcolor: "#187498",
    describtion:
      "Barcha bitiruvchilarga sertifikat va diplomlar topshiriladi. ",
  },
];

const WhyChooseMe = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Rubik", "cursive"].join(","),
    },
  });
  const themes = useTheme();

  const matchesXS = useMediaQuery(themes.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(themes.breakpoints.down("md"));
  return (
    <Box sx={{}}>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            borderRadius: "9px",
            backgroundColor: "#fff",
            border: "1px solid #FFE4D6",
          }}
        >
          <Box
            sx={{
              display: "flex",
              margin: "2.5rem 0",
              flexDirection: "column",
              alignItems: "center",
              //   borderRadius: 2,
            }}
          >
            <Box>
              <Title
                titleText="Nima uchun Sadikov School?"
                textAlign={"center"}
              />
            </Box>
            <Grid container spacing={2}>
              {content.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    sx={{
                      maxWidth: matchesXS ? "100%" : 345,
                      minHeight: matchesSM ? 220 : 260,

                      boxShadow: "rgb(255, 228, 214) 0px 4px 12px",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "5px",
                        width: "45px",
                        margin: "16px  0 0 16px",
                        height: "45px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${item.bgcolor}`,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "35px",
                          height: "35px",
                          objectFit: "cover",
                        }}
                        image={item.image}
                        alt="green iguana"
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant={matchesXS ? "h6" : matchesSM ? "h5" : "h6"}
                        component="div"
                        lineHeight={"26px"}
                        fontWeight={"500"}
                        color={"#333"}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#888",
                          fontSize: matchesXS
                            ? ".9rem"
                            : matchesSM
                            ? ".8rem"
                            : "1rem",
                          lineHeight: matchesXS
                            ? "17px"
                            : matchesSM
                            ? "17px"
                            : "20px",
                        }}
                      >
                        {item.describtion}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default WhyChooseMe;
