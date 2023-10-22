import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import "./Style/ModernStudy.css";
import { font } from "./fonts/fonts";
import { Link } from "react-router-dom";
const ModernStudy = () => {
  return (
    <ThemeProvider theme={font}>
      <Box className="modernStudy" sx={{ my: "3rem" }}>
        <Container
          sx={{
            borderRadius: "8px",
            background: `linear-gradient(rgba(39, 104, 245, 0.8), rgba(56, 115, 255, 0.8))`,
            borderLeft: {
              lg: "50px solid #ef7a0e",
              md: "30px solid #ef7a0e",
              sm: "0px solid #ef7a0e",
              xs: "0px solid #ef7a0e",
            },
            borderTop: {
              lg: "0px solid #ef7a0e",
              md: "0px solid #ef7a0e",
              sm: "40px solid #ef7a0e",
              xs: "40px solid #ef7a0e",
            },
          }}
          maxWidth="lg"
        >
          <Grid container>
            <Grid item md={5} sm={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  p: { lg: "14px", md: "10px", sm: "10px 0", xs: "10px 0" },
                }}
              >
                <img
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                  src="https://devsaidul.com/tf/images/about_top_img.jpg"
                />
              </Box>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <Box className="overlay">
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "22px",
                        md: "20px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontWeight: "700",
                    }}
                  >
                    Xoxlagan paytda yordam oling!
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "18px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                    }}
                  >
                    Bizning Maktabimizda sizning muvaffaqiyatingiz uchun hamma
                    narsa tayyor. Bizning o'qituvchilarimiz va xodimlarimiz
                    sizga xoxlagan paytda yordam berishga tayyor.
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  to="help"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ef7a0e",
                    fontSize: {
                      lg: ".9rem",
                      md: ".8rem",
                      sm: ".7rem",
                      xs: ".7rem",
                    },
                    p: {
                      lg: "1rem 3rem",
                      md: ".9rem 2rem",
                      sm: ".7rem 2rem",
                      xs: ".7rem 1.8rem",
                    },
                    margin: {
                      lg: "0 1rem",
                      md: "0 1rem",
                      sm: "1rem 8px",
                      xs: "1rem 8px",
                    },
                    borderRadius: "30px",
                    fontWeight: "700",
                    "&:hover": {
                      background: "#fff",
                      color: "#ef7a0e",
                    },
                  }}
                  variant={"contained"}
                >
                  Batafsil
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ModernStudy;
