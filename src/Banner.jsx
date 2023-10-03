import React, { useState } from "react";
import "./Style/Banner.css";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { font } from "./fonts/fonts";
const Banner = () => {
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
    <Box className="banner" sx={{ mt: scroll ? "100px" : "0" }}>
      <Container maxWidth="lg" sx={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ThemeProvider theme={font}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    lg: "center",
                    ms: "center",
                    sm: "start",
                    xs: "start",
                  },
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "40px",
                      md: "27px",
                      sm: "20px",
                      xs: "20px",
                    },
                    lineHeight: {
                      lg: "88px",
                      md: "70px",
                      sm: "70px",
                      xs: "70px",
                    },

                    fontWeight: "800",
                    color: "#0f2239",
                    textAlign: {
                      lg: "left",
                      md: "left",
                      sm: "start",
                      xs: "start",
                    },
                    textTransform: "uppercase",
                  }}
                >
                  <p
                    style={{
                      display: "inline",
                      padding: "20px 15px",
                      color: "white",
                      background: "#0f37d5",
                    }}
                  >
                    O'quv Markazimiz
                  </p>{" "}
                  <br /> Sizning Istiqbolingizga Investitsiya!
                </Typography>
              </Box>
            </ThemeProvider>
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              width: "100%",
              height: "100%",
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src="images/banner.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
