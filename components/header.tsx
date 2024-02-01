// Import necessary modules and components
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.sass";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Container,
  Button,
  Icon,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";

export default function Header() {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  // State to manage the open/close state of the drawer
  const [open, setOpen] = useState(false);

  // Function to handle opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Effect to handle sticky behavior of the header
  useEffect(() => {
    document.addEventListener("scroll", () => {
      var header = document.getElementById("header");

      if (header) {
        var sticky = header.offsetTop;

        // Add 'header-sticky' class when scrolling past header
        if (window.pageYOffset > sticky) header.classList.add("header-sticky");
        else header.classList.remove("header-sticky");
      }
    });
  });

  // Define navigation links
  const links = [
    {
      text: "صفحه اصلی",
      path: "/",
    },
    {
      text: "قوانین",
      path: "/rules",
    },
  ];

  return (
    <Container
      fixed
      component="header"
      sx={{ height: "10svh" }}
      className={`py-6 flex flex-row items-center justify-between rounded-b-2xl components-background`}
      id="header"
    >
      {/* Social media icons section */}
      <div className="h-fit flex flex-row align-center justify-start min-w-36">
        {/* Login button */}
        <Button
          variant="text"
          startIcon={
            <Icon>
              <img src="/images/log-in.svg" />
            </Icon>
          }
          className={`rounded-xl text-white`}
          size="large"
        >
          ورود
        </Button>
      </div>

      {/* Atlantis RP logo section */}
      <Link href="/" className="flex flex-column items-center justify-center">
        <Image
          className={styles.headerImg}
          src="/images/atlantis-rp-logo.png"
          alt="atlantis rp"
          height={50}
          width={50}
          draggable="false"
        />
      </Link>

      {/* Toggle button for mobile menu */}
      <div
        className={`h-fit flex md:hidden flex-row align-center justify-end min-w-36 ${styles.toggleMenu}`}
      >
        <IconButton onClick={handleDrawerOpen} aria-label="fingerprint" className="text-white">
          <Icon>
            <img src="/images/menu.svg" />
          </Icon>
        </IconButton>
      </div>

      {/* Toggle buttons for page navigation */}
      <div
        className={`h-fit md:flex hidden flex-row align-center justify-between min-w-44 ${styles.toggleMenu}`}
      >
        {/* Navigation links */}
        <Link href="/rules" className={`${pathname === "/rules" ? styles.selected : ""}`}>
          قوانین
        </Link>

        <Link href="/" className={`${pathname === "/" ? styles.selected : ""}`}>
          صفحه اصلی
        </Link>
      </div>

      {/* Drawer for mobile menu */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        elevation={0}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
        id="drawer"
        className="shrink-0 h-svh"
        onClose={handleDrawerClose}
      >
        <div className="flex flex-row items-center justify-start p-2">
          {/* Button to close the drawer */}
          <IconButton onClick={handleDrawerClose}>
            <Icon>
              <img src="/images/right-arrow.svg" alt="test" />
            </Icon>
          </IconButton>
        </div>
        <Divider />
        {/* List of navigation links in the drawer */}
        <List>
          {links.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <Link href={link.path} target="_self">
                  <ListItemText primary={link.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
