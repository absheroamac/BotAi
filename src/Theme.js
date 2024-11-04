import { createTheme } from "@mui/material";
import "@fontsource/ubuntu";
import "@fontsource/open-sans"; // Import Open Sans

const Theme = createTheme({
  palette: {
    primary: {
      main: "#9785BA",
      light: "#AF9FCD",
      lighter: "#F9FAFA",
    },
    secondary: {
      main: "#D7C7F4",
      light: "#FFFFFF",
    },
    textColor: {
      light: "#FFFFFF",
      dark: "#3C3C3C",
    },
  },
  typography: {
    fontFamily: "Ubuntu, 'Open Sans'", // Set fallback font here
    h1: {
      fontFamily: "Ubuntu",
      fontWeight: 700,
      fontSize: "32px",
    },
    h2: {
      fontFamily: "Ubuntu",
      fontWeight: 400,
      fontSize: "28px",
    },
    h3: {
      fontFamily: "Ubuntu",
      fontWeight: 400,
      fontSize: "24px",
    },
    body1: {
      fontFamily: "'Open Sans'",
      fontWeight: 400,
      fontSize: "16px",
    },
  },
});

export default Theme;
