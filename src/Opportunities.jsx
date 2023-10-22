import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "./Title";
import "./Style/Opportunities.css";
import { rubik } from "./fonts/fonts";
import { CheckCircleOutline, Folder } from "@mui/icons-material";
const Opportunities = () => {
  return (
    <ThemeProvider theme={rubik}>
      <Box className="opportunities">
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Title titleText={"Bizdagi qulayliklar"} textAlign={"left"} />
              <Typography sx={{ color: "#636363" }}>
                Maktabimizda sizning o'rganish jarayoningizni qulay va samarali
                qilish uchun bir qator qulayliklar mavjud. Bizning zamonaviy
                sinf xonalarimiz, eng so'nggi texnologiyalar bilan jihozlangan
                kompyuter xonalari va kutubxonamiz sizning o'rganish
                jarayoningizni yaxshilashga yordam beradi.
              </Typography>
            </Box>
            <Divider sx={{ mt: "1rem" }} />
            <Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="Uzoqdan qatnovchilar uchun yotoqxona"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="Bepul adabiyotlar  va qo'llanmalar"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="Zamonaviy va shinam sinf xonalari"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="24/7 o'qituvchi nazorati va yordami"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="Bepul avtobus"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#ef7a0e" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#636363" }}
                    primary="Sayohatlar"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                src="./images/opportunities.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Opportunities;
