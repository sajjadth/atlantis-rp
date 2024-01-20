"use client";

import styles from "./page.module.css";
import Container from "@mui/material/Container";
import { Card, Typography, Stack, Button, Icon, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [goldPlanAmount, setGoldPlanAmount] = useState(299000);
  return (
    <Container className="h-svh" fixed>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        // spacing={4}
        className="h-full"
        style={{ flexWrap: "wrap", gap: "32px" }}
      >
        <Card
          variant="outlined"
          className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardGold}`}
        >
          <div className="mb-4 h-28">
            <Typography variant="h4" gutterBottom>
              پلن
              <strong> طلایی</strong>
            </Typography>
            <Typography variant="body2" className="text-neutral-300" align="justify" gutterBottom>
              پلن طلایی امکانات بیشتری از پلن‌های برنزی و نقره‌ای فراهم می‌کند. با هدف بهبود عملکرد
              سرور و ارائه پشتیبانی بی‌وقفه.
            </Typography>
          </div>
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

          <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
            <li>الویت صف &#215;۴</li>
            <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
            <li>درخواست پت</li>
          </ul>
        </Card>

        <Card
          variant="outlined"
          className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardSilver}`}
        >
          <div className="mb-4 h-28">
            <Typography variant="h4" gutterBottom>
              پلن
              <strong> نقره&#8202;ای</strong>
            </Typography>
            <Typography variant="body2" className="text-neutral-300" align="justify" gutterBottom>
              پلن نقره‌ای پلنی با خدمات ویژه‌تر از پلن برنزی است. هدف این پلن ارائه دسترسی ۲۴ ساعته
              به سرور، پشتیبانی ۲۴ ساعته و اولویت بیشتر در صف است.
            </Typography>
          </div>
          <Stack direction="row" alignItems="center" className="pb-4 h-20">
            <div className="flex flex-row items-center">
              <Typography variant="h5">ماهانه</Typography>
              <Typography variant="h4" className="font-bold px-4">
                ۱۹۹,۰۰۰
              </Typography>
            </div>
            <Typography variant="h5">تومان</Typography>
          </Stack>
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

          <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
            <li>الویت صف &#215;۳</li>
            <li>پشتیبانی ۲۴ ساعته توسط تیکت</li>
          </ul>
        </Card>

        <Card
          variant="outlined"
          className={`rounded-2xl px-6  py-5 flex flex-col items-start justify-between ${styles.card} ${styles.cardBronze}`}
        >
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
          <Stack direction="row" alignItems="center" className="pb-4 h-20">
            <div className="flex flex-row items-center">
              <Typography variant="h5">ماهانه</Typography>
              <Typography variant="h4" className="font-bold px-4">
                ۹۹,۰۰۰
              </Typography>
            </div>
            <Typography variant="h5">تومان</Typography>
          </Stack>
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

          <ul className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}>
            <li>الویت صف &#215;۲</li>
          </ul>
        </Card>
      </Stack>
    </Container>
  );
}
