import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import "./Style/Footer.css";
import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import { font } from "./fonts/fonts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ThemeProvider theme={font}>
      <Box className="footer">
        <Box className="container">
          <Divider />
          <Grid container spacing={5} sx={{ marginTop: "1rem" }}>
            <Grid item lg={5} md={8} sm={12} xs={12}>
              <List>
                <ListItem>
                  <Box sx={{ mr: 1 }}>
                    <img src="/images/logo.png" width={30} />
                  </Box>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      color: "#0f37d5",
                      fontWeight: "600",
                      fontSize: "20px",
                      marginRight: "3rem",
                    }}
                    className="ff-rubik"
                  >
                    Sadikov Private School
                  </Box>
                </ListItem>

                <ListItem>
                  <Typography color={"#808080"}>
                    Sadikov O'quv Markazi, o'quvchilarni jamiyatdagi faol va
                    samarali a'zolar sifatida tarbiyalashga intiladi.
                  </Typography>
                </ListItem>
                <ListItem>
                  <ButtonGroup>
                    <IconButton>
                      <Telegram />
                    </IconButton>
                    <IconButton>
                      <Instagram />
                    </IconButton>
                    <IconButton>
                      <YouTube />
                    </IconButton>
                  </ButtonGroup>
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <ListItem>
                <Typography variant="h6" fontWeight={"600"} color={" #1e1e1e"}>
                  Sahifalar
                </Typography>
              </ListItem>
              <ListItem component={Link} to={"/"}>
                <Typography
                  variant="p"
                  sx={{ textDecoration: "none" }}
                  fontWeight={"400"}
                  color={" #808080"}
                >
                  Bosh sahifa
                </Typography>
              </ListItem>
              <ListItem component={Link} to={"about"}>
                <Typography
                  variant="p"
                  sx={{ textDecoration: "none" }}
                  fontWeight={"400"}
                  color={" #808080"}
                >
                  Biz haqimizda
                </Typography>
              </ListItem>
              <ListItem component={Link} to={"directions"}>
                <Typography
                  variant="p"
                  sx={{ textDecoration: "none" }}
                  fontWeight={"400"}
                  color={" #808080"}
                >
                  Yo'nalishlar
                </Typography>
              </ListItem>
              <ListItem component={Link} to={"blog"}>
                <Typography
                  variant="p"
                  sx={{ textDecoration: "none" }}
                  fontWeight={"400"}
                  color={" #808080"}
                >
                  Blog
                </Typography>
              </ListItem>
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12}>
              <ListItem>
                <Typography variant="h6" fontWeight={"600"} color={" #1e1e1e"}>
                  Manzil va bog'lanish
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p" fontWeight={"400"} color={" #808080"}>
                  Manzil: Buxoro viloyat, G'ijduvon tuman, Taxtaxon mfy,
                  Taxtaxon ko'chasi, 132-uy
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p" fontWeight={"400"} color={" #808080"}>
                  Tel: +99899 739 71 57
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p" fontWeight={"400"} color={" #808080"}>
                  Email: @sadikovschool@gmail.com
                </Typography>
              </ListItem>
            </Grid>
          </Grid>
          <Divider sx={{ m: "1rem 0 0 0 " }} />
          <Box textAlign={"center"} p={1.5} color={"grey"}>
            <Typography fontSize={14}>SPS / 2023</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
