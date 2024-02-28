"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.sass";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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
  Skeleton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { deleteCookie } from "cookies-next";

export default function Header() {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  // State variables
  const isDataFetched = useRef(false); // Ref to track data fetching
  const [data, setData] = useState<any>(null); // User data
  const [loading, setLoading] = useState(true); // Loading state
  const [openDrawer, setDrawer] = useState(false); // Drawer open state
  const [openDialog, setDialog] = React.useState(false); // Dialog open state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Menu anchor element

  const openMenu = Boolean(anchorEl); // Menu open state

  // Function to stop loading state
  var handleLoadingStop = () => {
    setLoading(false);
  };

  // Function to handle opening the drawer
  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  // Function to handle closing the drawer
  const handleDrawerClose = () => {
    setDrawer(false);
  };

  // Function to handle opening the menu
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to handle opening the logout dialog
  const handleDialogOpen = () => {
    setDialog(true);
  };

  // Function to handle closing the logout dialog
  const handleDialogClose = () => {
    setDialog(false);
  };

  // Function to handle logout confirmation
  const handleLogoutConfirm = () => {
    deleteCookie("discord_auth_token");
    handleDialogClose();
    location.reload();
  };

  // Effect to handle sticky behavior of the header
  useEffect(() => {
    if (!isDataFetched.current) {
      fetch("/api/auth/userinfo", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setData(data);
            isDataFetched.current = true;
          }
        })
        .catch((err) => console.log("error in fetch user info\n", err))
        .finally(() => {
          handleLoadingStop();
        });
    }

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
        {/* Login button or user avatar */}
        {loading ? (
          <Skeleton
            className="rounded-xl"
            variant="rectangular"
            animation="wave"
            width={75}
            height={40}
          />
        ) : !data ? (
          <Button
            variant="text"
            startIcon={
              <Icon>
                <img src="/images/log-in.svg" />
              </Icon>
            }
            className={`rounded-xl text-white`}
            size="large"
            href="/api/auth/login"
          >
            ورود
          </Button>
        ) : (
          <>
            <IconButton
              onClick={handleMenuClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              className="relative"
            >
              <Avatar alt={data.username} src={data.avatar} />
            </IconButton>
            <Menu
              className="rounded-xl"
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  borderRadius: "0.75rem",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem disabled onClick={handleMenuClose}>
                {data.username}
              </MenuItem>
              <MenuItem disabled onClick={handleMenuClose}>
                {data.email}
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  handleDialogOpen();
                }}
              >
                <ListItemIcon>
                  <img src="/images/logout.svg" alt="" />
                </ListItemIcon>
                خروج
              </MenuItem>
            </Menu>
          </>
        )}
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
        open={openDrawer}
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

      {/* Dialog for logout confirmation */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "0.75rem",
          },
        }}
        dir="rtl"
      >
        <DialogTitle gutterBottom> تأیید خروج</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            آیا مطمئن هستید که می‌خواهید از سایت خارج شوید؟ این عمل باعث خروج شما از حساب کاربری شما
            خواهد شد.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex flex-row items-center justify-between pb-4 px-6">
          <Button
            onClick={handleLogoutConfirm}
            autoFocus
            variant="contained"
            color="error"
            className="rounded-xl"
          >
            تأیید خروج
          </Button>
          <Button onClick={handleDialogClose} variant="text" color="inherit" className="rounded-xl">
            لغو
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
