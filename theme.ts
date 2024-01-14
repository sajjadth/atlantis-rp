"use client";
import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
});

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#48bdcf",
      light: "#7edce2",
      dark: "#008ba3",
    },
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
});

export default theme;
