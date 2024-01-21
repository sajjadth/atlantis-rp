"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./header.module.sass";
import { Container, IconButton, ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // State to keep track of the active page
  const [pageStat, setPageStat] = useState(
    pathname === "/" ? "home" : pathname.slice(1, pathname.length)
  );

  // Function to handle changes in the active page
  const handlePageStat = (event: React.MouseEvent<HTMLElement>, newPage: string | null) => {
    if (newPage !== null) setPageStat(newPage);
  };

  return (
    <Container component="header" className="py-4 flex flex-row items-center justify-between">
      {/* Social media icons section */}
      <div className="h-fit flex flex-row align-center justify-center min-w-48">
        <Link href="https://www.instagram.com/atlantisrp.ir/" target="_blank">
          <IconButton color="primary" aria-label="delete">
            <Image
              src="/images/instagram.svg"
              alt="atlantis-rp-instagram"
              width={25}
              height={25}
              draggable="false"
            />
          </IconButton>
        </Link>
        <Link href="https://www.reddit.com/r/AtlantisRP" target="_blank">
          <IconButton color="primary" aria-label="delete">
            <Image
              src="/images/reddit.svg"
              alt="atlantis-rp-instagram"
              width={25}
              height={25}
              draggable="false"
            />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/_AtlantisRP_" target="_blank">
          <IconButton color="primary" aria-label="delete">
            <Image
              src="/images/x.svg"
              alt="atlantis-rp-instagram"
              width={25}
              height={25}
              draggable="false"
            />
          </IconButton>
        </Link>
        <Link href="https://discord.com/invite/iratlantisrp" target="_blank">
          <IconButton color="primary" aria-label="delete">
            <Image
              src="/images/discord.svg"
              alt="atlantis-rp-discord"
              width={25}
              height={25}
              draggable="false"
            />
          </IconButton>
        </Link>
      </div>

      {/* Atlantis RP logo section */}
      <Link href="/">
        <Image
          className={styles.headerImg}
          src="/images/atlantis-rp-logo.png"
          alt="atlantis rp"
          height={50}
          width={50}
          draggable="false"
        />
      </Link>

      {/* Toggle buttons for page navigation */}
      <div className="h-fit flex flex-row align-center justify-center min-w-48">
        <ToggleButtonGroup
          value={pageStat}
          exclusive
          className={styles.styledToggleButtonGroup}
          onChange={handlePageStat}
          aria-label="text alignment"
        >
          <Link href="/rules">
            <ToggleButton value="rules" aria-label="left aligned">
              قوانین
            </ToggleButton>
          </Link>

          <Link href="/">
            <ToggleButton value="home" aria-label="centered">
              صفحه اصلی
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
    </Container>
  );
}
