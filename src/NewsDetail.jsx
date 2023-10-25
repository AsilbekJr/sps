import { CalendarMonth } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { newsData } from "./Data/news";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Title from "./Title";

const NewsDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
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
  useEffect(() => {
    let filterData = news.find((item) => item.id == id);
    // setData(news.filter((item) => item.id == id));
    console.log(filterData);
    setData(filterData);
  }, [id]);

  return (
    <Container>
      <Box sx={{ mt: scroll ? "130px" : "30px" }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
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
              src={data.img}
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
              {data.title}
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
              {data.desc}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsDetail;
