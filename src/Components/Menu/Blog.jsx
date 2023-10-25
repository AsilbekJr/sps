import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { font } from "../../fonts/fonts";
import { useState } from "react";
import { useEffect } from "react";
import { CalendarMonth } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { newsData } from "../../Data/news";

const Blog = () => {
  const news = newsData;
  const [sliceData, setSliceData] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setSliceData(news.slice(-4, -1).reverse());
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
    <Box
      sx={{
        mt: scroll ? "130px" : "30px",
        maxWidth: "1100px",
        marginX: "auto",
      }}
    >
      <ThemeProvider theme={font}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: "30px", fontWeight: "600", my: "2rem" }}>
            Maktabimiz yangiliklari
          </Typography>
          <Box
            sx={{ width: "100%", backgroundColor: "#fff", borderRadius: "8px" }}
          >
            <Box
              sx={{
                width: "100%",
                height: { lg: "400px", md: "300px", sm: "260px" },
              }}
            >
              <img
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={news[news.length - 1].img}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  lg: "2rem 1rem",
                  md: "2rem 1rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              <Box
                display={"flex"}
                gap={".7rem"}
                alignItems={"center"}
                sx={{
                  py: { lg: ".7rem", md: ".7rem", sm: "0rem", xs: "0rem" },
                }}
              >
                <CalendarMonth sx={{ color: "gray", fontSize: "20px" }} />
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: "1rem",
                      xs: ".8rem",
                    },
                    fontWeight: "300",
                  }}
                >
                  15:12 / 18.10.2023
                </Typography>
              </Box>
              <Typography
                fontWeight={"600"}
                sx={{
                  py: {
                    lg: "1rem",
                    md: "1rem",
                    sm: ".7rem",
                    xs: ".7rem",
                  },
                  fontSize: {
                    lg: "1.7rem",
                    md: "1.7rem",
                    sm: "1.3rem",
                    xs: "1.2rem",
                  },
                }}
              >
                {news[news.length - 1].title}
              </Typography>
              <Typography
                sx={{
                  color: "#5C5470",
                  my: "1rem",
                  fontSize: {
                    lg: "1rem",
                    md: "1rem",
                    sm: ".9rem",
                    xs: ".8rem",
                  },
                }}
              >
                {news[news.length - 1].desc}
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={4} sx={{ mt: "1rem" }}>
            {sliceData.map((item) => (
              <Grid item lg={4} md={4} sm={6} xs={6} key={item.id}>
                <Box
                  sx={{
                    color: "#000",
                    textDecoration: "none",
                  }}
                  component={Link}
                  to={`${item.id}`}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: {
                        lg: "230px",
                        md: "200px",
                        sm: "170px",
                        xs: "140px",
                      },
                      pb: "1rem",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <img
                      style={{
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={item.img}
                    />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={".7rem"}
                    alignItems={"center"}
                    py={".7rem"}
                  >
                    <CalendarMonth sx={{ color: "gray", fontSize: "16px" }} />
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: {
                          lg: ".9rem",
                          md: ".9rem",
                          sm: ".8rem",
                          xs: ".7rem",
                        },
                        fontWeight: "300",
                      }}
                    >
                      15:12 / 18.10.2023
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "1.4rem",
                        md: "1.3rem",
                        sm: "1rem",
                        xs: ".9rem",
                      },
                      borderBottom: "1px solid #ddd",
                      pb: "1rem",
                    }}
                    fontWeight={600}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button sx={{ mt: "1rem" }}>Batafsil</Button>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Blog;
