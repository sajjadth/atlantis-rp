"use client";

import styles from "./page.module.sass";
import { Container, Card, Typography, Stack, Button, Icon, TextField, Alert } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Home() {
  const [goldPlanAmount, setGoldPlanAmount] = useState(299000);

  // Create a ref to access the DOM node
  const ref = useRef(null);

  // Effect hook to handle animations on mouse movement
  useLayoutEffect(() => {
    // Query all elements with the 'card' class
    const all = document.querySelectorAll(`.${styles.card}`);

    // Event listener for mouse movement
    window.addEventListener("mousemove", (ev) => {
      all.forEach((e) => {
        const blob = e.querySelector(`.${styles.blob}`) as Element;
        const fblob = e.querySelector(`.${styles.fakeBlob}`);
        const rec = fblob?.getBoundingClientRect() as DOMRect;

        blob?.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${
                ev.clientY - rec.top - rec.height / 2
              }px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      });
    });
  }, []);

  return (
    <>
      {/* Main vertical stack layout */}
      <Container
        sx={{ minHeight: "90svh" }}
        className="flex flex-col mb-6 gap-8 items-center justify-evenly py-6"
        component="main"
        id="main"
        ref={ref}
      >
        {/* First nested stack for header content */}
        <Stack alignItems="center" justifyContent="center" direction="column">
          {/* Header title */}
          <Typography className="max-w-2xl w-full text-center dir-rtl" variant="h3" gutterBottom>
            پلن
            <strong className="text-[#48bdcf] font-black"> آتلانتیس </strong>
            رول پلی را انتخاب کنید که مناسب شما است.
          </Typography>
          {/* Subtitle */}
          <Typography variant="body1" className="text-neutral-300">
            رویای خود را با ما بسازید
          </Typography>
        </Stack>

        {/* Second nested stack for plan cards */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="w-full gap-6 flex-wrap"
        >
          Gold Plan Card
          <Card
            variant="outlined"
            className={`rounded-2xl flex flex-col items-start justify-between ${styles.card} ${styles.cardGold}`}
          >
            {/* Animation elements */}
            <div className={`${styles.fakeBlob}`}></div>
            <div className={`${styles.blob} ${styles.blobGold}`}></div>
            <div className={`px-6  py-5 ${styles.innerCard}`}>
              {/* Gold Plan details */}
              <div className="mb-4 h-28">
                <Typography variant="h4" gutterBottom>
                  پلن
                  <strong> طلایی</strong>
                </Typography>
                <Typography
                  variant="body2"
                  className="text-neutral-300"
                  align="justify"
                  gutterBottom
                >
                  پلن طلایی امکانات بیشتری از پلن‌های برنزی و نقره‌ای فراهم می‌کند. با هدف بهبود
                  عملکرد سرور و ارائه پشتیبانی بی‌وقفه.
                </Typography>
              </div>

              {/* Gold Plan pricing */}
              <Stack direction="row" alignItems="center" className="pb-4 h-20">
                <div className="flex flex-row items-center">
                  <Typography variant="h5">ماهانه</Typography>
                  <TextField
                    id="standard-basic"
                    value="۲۹۹,۰۰۰"
                    variant="standard"
                    color="primary"
                    className={`font-bold text-3xl px-4 ${styles.input}`}
                  />
                </div>
                <Typography variant="h5">تومان</Typography>
              </Stack>

              {/* Gold Plan get started button */}
              <Button
                variant="contained"
                color="primary"
                className="flex flex-row items-start justify-center w-full rounded-xl"
                endIcon={
                  <Icon>
                    <img src="/images/left-arrow.svg" />
                  </Icon>
                }
              >
                شروع کنید
              </Button>

              {/* Gold Plan features list */}
              <ul
                className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}
              >
                <li>الویت صف &#215;۴</li>
                <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
                <li>درخواست پت</li>
              </ul>
            </div>
          </Card>
          {/* Silver Plan Card */}
          <Card
            variant="outlined"
            className={`rounded-2xl flex flex-col items-start justify-between ${styles.card} ${styles.cardSilver}`}
          >
            {/* Animation elements */}
            <div className={`${styles.fakeBlob}`}></div>
            <div className={`${styles.blob} ${styles.blobSilver}`}></div>
            <div className={`px-6  py-5 ${styles.innerCard}`}>
              {/* Silver Plan details */}
              <div className="mb-4 h-28">
                <Typography variant="h4" gutterBottom>
                  پلن
                  <strong> نقره&#8202;ای</strong>
                </Typography>
                <Typography
                  variant="body2"
                  className="text-neutral-300"
                  align="justify"
                  gutterBottom
                >
                  پلن نقره‌ای پلنی با خدمات ویژه‌تر از پلن برنزی است. هدف این پلن ارائه دسترسی ۲۴
                  ساعته به سرور، پشتیبانی ۲۴ ساعته و اولویت بیشتر در صف است.
                </Typography>
              </div>

              {/* Silver Plan pricing */}
              <Stack direction="row" alignItems="center" className="pb-4 h-20">
                <div className="flex flex-row items-center">
                  <Typography variant="h5">ماهانه</Typography>
                  <Typography variant="h4" className="font-bold px-4">
                    ۱۹۹,۰۰۰
                  </Typography>
                </div>
                <Typography variant="h5">تومان</Typography>
              </Stack>

              {/* Silver Plan get started button */}
              <Button
                variant="contained"
                color="primary"
                className="flex flex-row items-start justify-center w-full rounded-xl"
                endIcon={
                  <Icon>
                    <img src="/images/left-arrow.svg" />
                  </Icon>
                }
              >
                شروع کنید
              </Button>

              {/* Silver Plan features list */}
              <ul
                className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}
              >
                <li>الویت صف &#215;۳</li>
                <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
              </ul>
            </div>
          </Card>
          {/* Bronze Plan Card */}
          <Card
            variant="outlined"
            className={`rounded-2xl flex flex-col items-start justify-between ${styles.card} ${styles.cardBronze}`}
          >
            {/* Animation elements */}
            <div className={`${styles.fakeBlob}`}></div>
            <div className={`${styles.blob} ${styles.blobBronze}`}></div>
            <div className={`px-6  py-5 ${styles.innerCard}`}>
              {/* Bronze Plan details */}
              <div className="mb-4 h-28">
                <Typography variant="h4" gutterBottom>
                  پلن
                  <strong> برنزی</strong>
                </Typography>
                <Typography
                  variant="body2"
                  className="text-neutral-300"
                  align="justify"
                  gutterBottom
                >
                  پلن برنزی کم‌هزینه‌ترین پلن ماست. با این پلن، شما ۲۴ ساعته به سرور دسترسی دارید.
                  هدف این پلن ارائه بهترین خدمات با کترین هزینه است.
                </Typography>
              </div>

              {/* Bronze Plan pricing */}
              <Stack direction="row" alignItems="center" className="pb-4 h-20">
                <div className="flex flex-row items-center">
                  <Typography variant="h5">ماهانه</Typography>
                  <Typography variant="h4" className="font-bold px-4">
                    ۹۹,۰۰۰
                  </Typography>
                </div>
                <Typography variant="h5">تومان</Typography>
              </Stack>

              {/* Bronze Plan get started button */}
              <Button
                variant="contained"
                color="primary"
                className="flex flex-row items-start justify-center w-full rounded-xl"
                endIcon={
                  <Icon>
                    <img src="/images/left-arrow.svg" />
                  </Icon>
                }
              >
                شروع کنید
              </Button>

              {/* Bronze Plan features list */}
              <ul
                className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}
              >
                <li>الویت صف &#215;۲</li>
              </ul>
            </div>
          </Card>
        </Stack>
        <Alert severity="warning" dir="rtl" className={`rounded-2xl ${styles.alert}`}>
          در نظر داشته باشید که بعد از پرداخت به هیچ وجه مبلغ اشتراک شما بازگشت داده نمی شود !
        </Alert>
      </Container>
    </>
  );
}
