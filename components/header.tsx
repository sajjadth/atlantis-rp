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
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      var header = document.getElementById("header");

      if (header) {
        var sticky = header.offsetTop;

        if (window.pageYOffset > sticky) header.classList.add("header-sticky");
        else header.classList.remove("header-sticky");
      }
    });
  });

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
        <Button
          // color="secondary"
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

      <div
        className={`h-fit flex md:hidden flex-row align-center justify-end min-w-44 ${styles.toggleMenu}`}
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
        <Link href="/rules" className={`${pathname === "/rules" ? styles.selected : ""}`}>
          قوانین
        </Link>

        <Link href="/" className={`${pathname === "/" ? styles.selected : ""}`}>
          صفحه اصلی
        </Link>
      </div>

      <Drawer variant="temporary" anchor="right" open={open} className="w-60 shrink-0 h-svh">
        <div className="flex flex-row items-center justify-start p-2">
          <IconButton onClick={handleDrawerClose}>
            <Icon>
              <img src="/images/right-arrow.svg" alt="test" />
            </Icon>
          </IconButton>
        </div>
        <Divider />
        <List>
          {["صفحه اصلی", "قوانین"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
