import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Style/Statistcs.css";
import VisibilitySensor from "react-visibility-sensor";
import { font, josefin } from "./fonts/fonts";
import CountUp from "react-countup";

const Statistics = () => {
  const gridStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: { lg: 0, md: 0, sm: "2rem", xs: "2rem" },
    paddingRight: { lg: 2, md: 2, sm: "2rem", xs: "2rem" },
    borderRight: {
      lg: ".6px solid #F1F6F5",
      md: ".6px solid #F1F6F5",
    },
    borderBottom: {
      lg: "1px solid transparent",
      md: "1px solid transparent",
      sm: ".6px solid #F1F6F5",
      xs: ".6px solid #F1F6F5",
    },
  };
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility
      offset={10}
      onChange={(isVisible) => {
        if (isVisible) {
          setViewPortEntered(true);
        } else {
          setViewPortEntered(false);
        }
      }}
    >
      <ThemeProvider theme={josefin}>
        <Box className="statistics">
          <Box sx={{ position: "relative" }}>
            <Box className="statistics-container">
              <Box className="overlay">
                <Grid
                  container
                  spacing={{ lg: 4, md: 4, sm: 0, xs: 0 }}
                  sx={{
                    width: "100%",
                    listStyle: "none",
                    fontSize: "45px",
                    fontWeight: "700",
                  }}
                >
                  <Grid item lg={3} md={3} sm={6} xs={12} sx={gridStyle}>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "38px",
                          md: "32px",
                          sm: "28px",
                          xs: "26px",
                        },
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      <CountUp
                        prefix="+"
                        start={viewPortEntered ? null : 0}
                        end={viewPortEntered ? 500 : 0}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "500",
                        textAlign: "right",
                      }}
                    >
                      O'quvchilar
                    </Typography>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12} sx={gridStyle}>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "38px",
                          md: "32px",
                          sm: "28px",
                          xs: "26px",
                        },
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      <CountUp
                        start={viewPortEntered ? null : 0}
                        prefix="+"
                        end={viewPortEntered ? 2000 : 0}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "500",
                        textAlign: "right",
                      }}
                    >
                      Talabalar
                    </Typography>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12} sx={gridStyle}>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "38px",
                          md: "32px",
                          sm: "28px",
                          xs: "26px",
                        },
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      <CountUp
                        start={viewPortEntered ? null : 0}
                        prefix="+"
                        end={viewPortEntered ? 21 : 0}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "500",
                        textAlign: "right",
                      }}
                    >
                      O'qituvchilar
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    md={3}
                    sm={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: { lg: 0, md: 0, sm: "2rem", xs: "2rem" },
                      paddingRight: { lg: 2, md: 2, sm: "2rem", xs: "2rem" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "38px",
                          md: "32px",
                          sm: "28px",
                          xs: "26px",
                        },
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      <CountUp
                        start={viewPortEntered ? null : 0}
                        prefix="+"
                        end={viewPortEntered ? 12 : 0}
                      >
                        {" "}
                      </CountUp>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "500",
                        textAlign: "right",
                      }}
                    >
                      Fanlar
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </VisibilitySensor>
  );
};

export default Statistics;
