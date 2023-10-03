import React from "react";
import {
  Box,
  createTheme,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Title = ({ titleText, color, textAlign }) => {
  const themes = createTheme({
    typography: {
      fontFamily: ["Montserrat", "cursive"].join(","),
      fontWeightRegular: "600",
    },
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={themes}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: textAlign,
          paddingBottom: "2rem",
        }}
      >
        <Typography
          variant={matches ? "h5" : "h3"}
          sx={{ color: color ? color : "black" }}
        >
          {titleText}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Title;
