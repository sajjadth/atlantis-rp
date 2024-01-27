"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.sass";
import { Container, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
  // Get the current year for copyright display
  const currentYear = new Date().getFullYear();

  return (
    // Container for the entire footer section
    <Container
      fixed
      component="footer"
      className={`py-6 rounded-t-2xl min-h-80 lg:h-80 h-fit flex flex-col items-center justify-center components-background lg:pt-10 lg:px-10`}
    >
      {/* Stack for organizing different sections of the footer */}
      <Stack
        className="h-5/6 w-full dir-rtl"
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        gap={4}
        flexWrap="wrap"
      >
        {/* About Us Section */}
        <div className="lg:w-fit lg:max-w-80 sm:w-3/6 w-full h-fit flex flex-col items-start justify-start">
          <Typography variant="body1" className={`${styles.footerTitle} mb-4`}>
            درباره ما
          </Typography>
          <Typography variant="body1" className="text-neutral-300 text-justify">
            آتلانیس رول پلی یک سرور رول پلی ایرانی است که بر روی بازی Grand Theft Auto V اجرا
            می‌شود. این سرور به شما این امکان را می‌دهد تا در یک محیط امن و دوستانه، نقش‌های مختلفی
            را ایفا کنید و داستان‌های خود را خلق کنید.
          </Typography>
        </div>

        {/* Quick Links Section */}
        <div className="lg:w-fit sm:w-2/6 w-fit h-fit flex flex-col items-start justify-start">
          <Typography variant="body1" className={`${styles.footerTitle} mb-4`}>
            دسترسی سریع
          </Typography>
          <ul className="list-none">
            <li className="mb-2">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="mb-2">
              <Link href="/rules">قوانین سرور</Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Other Section */}
        <div className="lg:w-fit sm:w-2/6 w-fit h-fit flex flex-col items-start justify-start">
          <Typography variant="body1" className={`${styles.footerTitle} mb-4`}>
            دیگر
          </Typography>

          <div className="flex flex-col items-start justify-start">
            <Typography variant="body1" className="mb-2" align="center">
              همراه ما باشید!
            </Typography>
            {/* Social media icons section */}
            <Stack direction="row" alignItems="center" justifyContent="center">
              {/* <div className="h-fit flex flex-row items-center justify-center "> */}
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
            </Stack>
          </div>
        </div>

        {/* Trust Seals Section  (Replace with correct code in production) */}
        <div className="lg:w-fit sm:w-2/6 w-fit h-fit flex flex-col items-start justify-start">
          <Typography variant="body1" className={`${styles.footerTitle} mb-4`}>
            نمادها
          </Typography>
          {/* Placeholder for Enamad seal */}
          {/* Replace with correct Enamad code */}
          <Link
            referrerPolicy="origin"
            target="_blank"
            href={`https://trustseal.enamad.ir/?id=366394&amp;Code=xOOkf0fG2cC9PMb6n5od`}
          >
            <Image
              referrerPolicy="origin"
              src={`/images/enamad.png`}
              alt="Enamad"
              height={136}
              width={125}
            />
          </Link>
        </div>
      </Stack>

      {/* Copyright Section */}
      <Stack className="w-full h-1/6" direction="row" alignItems="end" justifyContent="center">
        <Typography variant="subtitle1" className="text-neutral-300">
          Copyright © {currentYear} Atlantis RP. All rights reserved.
        </Typography>
      </Stack>
    </Container>
  );
}
