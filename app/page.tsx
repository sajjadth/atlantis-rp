"use client";

import styles from "./page.module.sass";
import Container from "@mui/material/Container";
import { Card, Typography, Stack, Button, Icon, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [goldPlanAmount, setGoldPlanAmount] = useState(299000);
  return (
    <Container fixed>
      {/* Main vertical stack layout */}
      <Stack
        sx={{ minHeight: "90svh" }}
        alignItems="center"
        justifyContent="space-evenly"
        direction="column"
      >
        {/* First nested stack for header content */}
        <Stack alignItems="center" justifyContent="center" direction="column">
          {/* Header title */}
          <Typography className="max-w-2xl w-full text-center dir-rtl" variant="h3" gutterBottom>
            پلن
            <strong className="text-[#48bdcf] font-black"> آتلانتیس رول پلی </strong>
            را انتخاب کنید که مناسب شما است.
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
          style={{ flexWrap: "wrap", gap: "32px" }}
        >
          {/* Gold Plan Card */}
          <Card
            variant="outlined"
            className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardGold}`}
          >
            {/* Gold Plan details */}
            <div className="mb-4 h-28">
              <Typography variant="h4" gutterBottom>
                پلن
                <strong> طلایی</strong>
              </Typography>
              <Typography variant="body2" className="text-neutral-300" align="justify" gutterBottom>
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
            <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
              <li>الویت صف &#215;۴</li>
              <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
              <li>درخواست پت</li>
            </ul>
          </Card>

          {/* Silver Plan Card */}
          <Card
            variant="outlined"
            className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardSilver}`}
          >
            {/* Silver Plan details */}
            <div className="mb-4 h-28">
              <Typography variant="h4" gutterBottom>
                پلن
                <strong> نقره&#8202;ای</strong>
              </Typography>
              <Typography variant="body2" className="text-neutral-300" align="justify" gutterBottom>
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
            <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
              <li>الویت صف &#215;۳</li>
              <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
            </ul>
          </Card>

          {/* Bronze Plan Card */}
          <Card
            variant="outlined"
            className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardBronze}`}
          >
            {/* Bronze Plan details */}
            <div className="mb-4 h-28">
              <Typography variant="h4" gutterBottom>
                پلن
                <strong> برنزی</strong>
              </Typography>
              <Typography variant="body2" className="text-neutral-300" align="justify" gutterBottom>
                پلن برنزی کم‌هزینه‌ترین پلن ماست. با این پلن، شما ۲۴ ساعته به سرور دسترسی دارید. هدف
                این پلن ارائه بهترین خدمات با کترین هزینه است.
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
            <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
              <li>الویت صف &#215;۲</li>
            </ul>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
