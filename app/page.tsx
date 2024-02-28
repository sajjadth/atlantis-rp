"use client";

import styles from "./page.module.sass";
import AuthDialog from "@/components/authDialog";
import { PlanType } from "@/constants/Plan.type";
import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Stack,
  Button,
  Icon,
  TextField,
  Alert,
  CircularProgress,
  Skeleton,
} from "@mui/material";

export default function Home() {
  // Refs to track states and access DOM elements
  const isDataFetched = useRef(false); // Ref to track data fetching
  const ref = useRef(null); // Ref to access the DOM node

  // States for various data and UI elements
  const [data, setData] = useState(null); // Data state for user data
  const [loading, setLoading] = useState(true); // Loading state
  const [openDialog, setDialog] = useState(false); // Dialog open state
  const [goldPlanPrice, setGoldPlanPrice] = useState("299,000"); // Gold plan price state
  const [userAuthenticated, setUserAuthenticated] = useState(false); // User Authentication state

  // Function to handle opening the logout dialog
  const handleDialogOpen = () => {
    setDialog(true);
  };

  // Function to handle closing the logout dialog
  const handleDialogClose = () => {
    setDialog(false);
  };

  // Sets the userAuthenticated state to true upon successful authentication.
  const handleUserAuthentication = () => {
    setUserAuthenticated(true);
  };

  // Handle changes in the input field for gold plan price.
  // This function ensures that only numbers and dots are accepted as input,
  // and formats the input value to have three decimal places separated by a dot.
  const handleGoldPlanPrice = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Extract the input value from the event object
    const inputValue = p2e(e.target.value);

    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    console.log(inputValue, numericValue);

    // Format the numeric value to add commas every three digits from the right
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setGoldPlanPrice(formattedValue);
  };

  // Ensure goldPlanPrice (a string with commas) is at least 299,000 by calling setGoldPlanPrice
  const chekcGoldPlanPrice = () => {
    // Convert the goldPlanPrice string to a number by removing the commas
    const price = Number(goldPlanPrice.split(",").join(""));

    // If the price is less than 299,000, set the goldPlanPrice to "299,000"
    if (price < 299000) setGoldPlanPrice("299,000");
  };

  // Effect to handle data fetching on component mount
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
          setLoading(false);
        });
    }
  }, []);

  useLayoutEffect(() => {
    const all = document.querySelectorAll(`.${styles.card}`);

    // Event listener for mouse movement
    const handleMouseMove = (ev: MouseEvent) => {
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
    };

    // Adding event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function for removing event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Dynamic button title based on loading and user authentication status
  const cardButtonTitle = () => {
    if (loading) return <CircularProgress size={25} />;
    else if (!data) return "شروع کنید";
    else if (!userAuthenticated) return "احراز هویت";
    else return "خرید";
  };

  // Dynamic button action based on data and user authentication status
  const cardButtonAction = (planType: PlanType) => {
    if (!data) window.location.href = "/api/auth/login";
    else if (!userAuthenticated) handleDialogOpen();
    else console.log("buy");
  };

  // Define a custom component for the action button
  const actionButton = (planType: PlanType) => {
    // Return different elements based on the loading state
    return loading ? (
      // Show skeleton loading if loading is true
      <Skeleton
        className="rounded-xl"
        variant="rectangular"
        animation="wave"
        width="100%"
        height={37}
      />
    ) : (
      //show button when loading end
      <Button
        variant="contained"
        color="primary"
        className="flex flex-row items-start justify-center w-full rounded-xl"
        onClick={() => cardButtonAction(planType)}
        endIcon={
          <Icon>
            <img src="/images/left-arrow.svg" />
          </Icon>
        }
      >
        {cardButtonTitle()}
      </Button>
    );
  };

  // Converts a numeric value to its Farsi (Persian) numeral representation.
  const e2p = (s: string): string => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]);
  // Converts a Persian numeral value to its English numeral representation.
  const p2e = (s: string): string => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

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
          {/* Gold Plan Card */}
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
                    value={e2p(goldPlanPrice)}
                    variant="standard"
                    color="primary"
                    className={`font-bold text-3xl px-4 ${styles.input}`}
                    onChange={(e) => handleGoldPlanPrice(e)}
                    onBlur={chekcGoldPlanPrice}
                  />
                </div>
                <Typography variant="h5">تومان</Typography>
              </Stack>

              {/* Gold Plan */}
              {actionButton(PlanType.Gold)}

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
              {/* Silver Plan*/}
              {actionButton(PlanType.Silver)}
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

              {/* Bronze Plan */}
              {actionButton(PlanType.Bronze)}

              {/* Bronze Plan features list */}
              <ul
                className={`flex flex-col items-start justify-start pr-6 pt-4 h-44 ${styles.list}`}
              >
                <li>الویت صف &#215;۲</li>
              </ul>
            </div>
          </Card>
        </Stack>

        {/* Alert for payment disclaimer */}
        <Alert severity="warning" dir="rtl" className={`rounded-2xl ${styles.alert}`}>
          در نظر داشته باشید که بعد از پرداخت به هیچ وجه مبلغ اشتراک شما بازگشت داده نمی شود !
        </Alert>

        <AuthDialog
          openDialog={openDialog}
          handleDialogClose={handleDialogClose}
          handleUserAuthentication={handleUserAuthentication}
        />
      </Container>
    </>
  );
}
