"use client";

import styles from "./footer.module.sass";
import { Container, Box } from "@mui/material";

export default function Footer() {
  return (
    // <Box className="w-svw" sx={{background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, red 85%) !important"}}>
      <Container
        component="footer"
        className={`py-4 rounded-t-2xl min-h-96 flex flex-col items-center justify-center shadow-inner components-background ${styles.mainBackground}`}
      >
        <h1>footer</h1>
      </Container>
    // </Box>
  );
}
