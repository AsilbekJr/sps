import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { List, ListItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";
import "./Style/Navbar.css";
import { font } from "./fonts/fonts";
import { Link } from "react-router-dom";
const pages = [
  {
    name: "Bosh Sahifa",
    path: "/",
  },
  {
    name: "Biz haqimizda",
    path: "about",
  },
  {
    name: "Yo'nalishlar",
    path: "directions",
  },
  {
    name: "Blog",
    path: "blog",
  },
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scroll, setScroll] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
          height: "50px",
          background: "#0f37d5",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                gap: "10px",
                width: "100%",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <p
                  className="top-text ff-rubik"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Ijtimoiy sahifalarimizga tashrif buyuring:
                </p>
              </Box>
              <List className="top-nav-menu" sx={{ display: "flex" }}>
                <ListItem
                  component={Link}
                  to="https://www.facebook.com/100007500393369/videos/682680379985802/"
                  target="_blank"
                >
                  <Facebook sx={{ color: "#fff", fontSize: "1.4rem" }} />
                </ListItem>
                <ListItem
                  component={Link}
                  to="https://instagram.com/sadikov_private_school?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <Instagram sx={{ color: "#fff", fontSize: "1.4rem" }} />
                </ListItem>
                <ListItem
                  component={Link}
                  to="https://t.me/frr_uzbek"
                  target="_blank"
                >
                  <Telegram sx={{ color: "#fff", fontSize: "1.4rem" }} />
                </ListItem>
                <ListItem
                  component={Link}
                  to="https://youtu.be/7WuA4jdLZyQ"
                  target="_blank"
                >
                  <YouTube sx={{ color: "#fff", fontSize: "1.4rem" }} />
                </ListItem>
              </List>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "#fff",
                gap: "10px",
              }}
            >
              <img src="./images/phone.png" style={{ width: "20px" }} />
              <p className="top-text ff-rubik">998997397157</p>
            </Box>
          </Box>
        </Container>
      </Box>
      <ThemeProvider theme={font}>
        <AppBar
          // position="fixed"
          className="main-navbar"
          sx={{
            border: "none",
            boxShadow: scroll ? 1 : "none",
            color: "#000",
            p: "10px 0",
            background: "#fff4f4",
            position: scroll ? "" : "sticky",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <img src="http://localhost:5173/images/logo.png" width={40} />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  whiteSpace: "nowrap",
                  color: "#0f37d5",
                  fontWeight: "600",
                  fontSize: "30px",
                  marginRight: "3rem",
                  textDecoration: "none",
                }}
                className="ff-rubik"
                component={Link}
                to="/"
              >
                Sadikov Private School
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={page.path}
                    >
                      <Typography
                        sx={{ textDecoration: "none" }}
                        textAlign="center"
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                <img src="/images/logo.png" width={40} />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page, index) => (
                  <Button
                    component={Link}
                    to={page.path}
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#000",
                      display: "block",
                      height: "100%",
                    }}
                  >
                    <Typography sx={{ height: "100%", textDecoration: "none" }}>
                      {page.name}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
export default Navbar;
