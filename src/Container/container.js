import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiContainer: {
      defaultProps: {
        // The props to change the default for.
        maxWidth: "lg",
      },
    },
  },
});
