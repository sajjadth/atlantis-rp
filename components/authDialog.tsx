"use client";

import Image from "next/image";
import styles from "./authDialog.module.sass";
import { ChangeEvent, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { AuthDialogProps } from "@/constants/AuthDialog.interface";
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  LinearProgress,
  MobileStepper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

export default function AuthDialog(props: AuthDialogProps) {
  const [timer, setTimer] = useState(120); // Timer state for phone number verification
  const [loading, setLoading] = useState(false); // Loading state
  const [activeStep, setActiveStep] = useState(0); // Active step of dialog state
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number state
  const [timerProgress, setTimerProgress] = useState(100); // Timer Progress state for linear progress bar
  const [snackbaropen, setSnackbarOpen] = useState(false); // State hooks for managing snackbar
  const [verificationCode, setVerificationCode] = useState(""); // Phone number state
  const [phoneNumberInputError, setPhoneNumberInputError] = useState(false); // Phone number error
  const [snackbar, setSnackbar] = useState({ success: false, message: "" }); // State hooks for managing snackbar data
  const [phoneNumberInputErrorMessage, setPhoneNumberInputErrorMessage] = useState(""); // Phone number error message
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null); // State hook for storing the interval ID

  // Define the maximum number of steps
  const MAX_STEPS = 3;

  // Function to proceed to the next step
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  // Function to go back to the previous step
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // Function to check if phone number is valid or not
  const checkPhoneNumber = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const re = /^09\d{9}$/;
    const target = e.target.value;

    if (!re.test(target)) {
      setPhoneNumberInputError(true);
      setPhoneNumberInputErrorMessage("فرمت شماره موبایل اشتباه است!");
    } else {
      setPhoneNumberInputError(false);
      setPhoneNumberInputErrorMessage("");
    }
  };

  // Function to set phone number to state
  const handlePhoneNumberOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhoneNumber(e.target.value);
  };

  // Function to set verification code to state
  const handleVerificationCodeOnChange = (e: string) => {
    setVerificationCode(e);
  };

  // Function to handle closing snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Function to handle opening snackbar
  const handleSnackbarOpen = (success: boolean, message: string) => {
    setSnackbar({ success, message });
    setSnackbarOpen(true);
  };

  // Modified startTimer function that stores the interval ID in state
  function startTimer() {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setTimer(120);
    // Set the interval ID
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        // calculate the progress of timer
        calculateProgress(prevTimer - 1);

        // When timer reaches 0, clear the interval and return 0
        if (prevTimer === 0) {
          clearInterval(id);
          setIntervalId(null);
          return 0;
        }
        // Otherwise, decrement the timer by 1
        return prevTimer - 1;
      });
    }, 1000); // Set the interval to decrement every second

    // Store the interval ID
    setIntervalId(id);
  }

  // Modified resetTimer function that uses the interval ID from state
  function resetTimer() {
    startTimer();
  }

  // Function to calculate progress percentage
  function calculateProgress(timer: any) {
    // Calculate percentage of time elapsed
    let totalTime = 120; // Total time
    let percentage = (timer / totalTime) * 100; // Calculate percentage

    //set the percentage to state
    setTimerProgress(percentage);
  }

  // Converts a number of seconds into a formatted string of minutes and seconds.
  function convertSeconds(): string {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  // Function for sending new verification code
  function sendAgain() {
    setLoading(true);
    fetch("/api/auth/phone-verification", {
      method: "POST",
      body: JSON.stringify({ phoneNumber }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          handleSnackbarOpen(true, data.message);
          resetTimer();
        } else handleSnackbarOpen(false, data.message);
      })
      .catch((err) => console.log("this is error", err))
      .finally(() => setLoading(false));
  }

  // Dynamic button title based on loading and user authentication status
  const dialogButtonTitle = () => {
    if (loading) return <CircularProgress size={25} />;
    else if (activeStep === 0) return "ارسال";
    else if (activeStep === 1) return "تایید";
    else return "پایان";
  };

  // Dynamic button action based on data and user authentication status
  const dialogButtonAction = () => {
    if (activeStep === 0) handleAuthenticationCodeSend();
    else if (activeStep === 1) handleVerifyAuthenticationCode();
    else props.handleDialogClose();
  };

  // Function to send verification code if number is valid
  const handleAuthenticationCodeSend = () => {
    const re = /^09\d{9}$/;

    if (!re.test(phoneNumber)) {
      setPhoneNumberInputError(true);
      setPhoneNumberInputErrorMessage("فرمت شماره موبایل اشتباه است!");
    } else {
      setLoading(true);
      fetch("/api/auth/phone-verification", {
        method: "POST",
        body: JSON.stringify({ phoneNumber }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            handleSnackbarOpen(true, data.message);
            handleNext();
            startTimer();
          } else handleSnackbarOpen(false, data.message);
        })
        .catch((err) => console.log("this is error", err))
        .finally(() => setLoading(false));
    }
  };

  // Function to verify authentication code
  const handleVerifyAuthenticationCode = () => {
    // Check if the verification code is complete and proceed with authentication
    if (verificationCode.length === 6) {
      setLoading(true);
      fetch("/api/auth/phone-verification", {
        method: "PUT",
        body: JSON.stringify({ verificationCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            handleSnackbarOpen(true, data.message);
            props.handleUserAuthentication();
            handleNext();
          } else handleSnackbarOpen(false, data.message);
        })
        .catch((err) => console.log("error:", err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      {/* Dialog component */}
      <Dialog
        open={props.openDialog}
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
        {/* Dialog title */}
        <DialogTitle className="flex flex-row items-center justify-between" gutterBottom>
          احراز هویت
          <IconButton disabled={loading} onClick={props.handleDialogClose} aria-label="delete">
            <Icon>
              <img src="/images/close.svg" alt="" />
            </Icon>
          </IconButton>
        </DialogTitle>

        {/* Dialog content based on active step */}
        {activeStep === 0 ? (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              برای ادامه‌ فرآیند، لطفاً شماره موبایل خود را وارد کنید تا کد تأیید برای شما ارسال
              شود.
            </DialogContentText>
            <div
              className="w-100 py-4 flex gap-4 dir-rtl flex-row items-end justify-cneter"
              dir="rtl"
            >
              {/* Input field for phone number */}
              <TextField
                variant="standard"
                color={"primary"}
                error={phoneNumberInputError}
                placeholder="09123456789"
                label="شماره تلفن"
                InputLabelProps={{ classes: { root: styles.textFieldLabel } }}
                value={phoneNumber}
                onChange={(e) => handlePhoneNumberOnChange(e)}
                onBlur={checkPhoneNumber}
                helperText={phoneNumberInputErrorMessage}
                FormHelperTextProps={{ classes: { root: styles.textFieldHelperText } }}
                disabled={loading}
                fullWidth
              />
            </div>
          </DialogContent>
        ) : activeStep === 1 ? (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              برای ادامه‌ فرآیند، لطفاً شماره موبایل خود را وارد کنید تا کد تأیید برای شما ارسال
              شود.
            </DialogContentText>
            <div
              className="w-100 py-4 flex gap-4 dir-rtl flex-row items-end justify-cneter"
              dir="rtl"
            >
              {/* Input for entering the verification code */}
              <MuiOtpInput
                dir="ltr"
                TextFieldsProps={{ classes: { root: styles.otpInput }, disabled: loading }}
                length={6}
                value={verificationCode}
                onChange={handleVerificationCodeOnChange}
                autoFocus
              />
            </div>
            <div className="w-100 py-4 gap-4 flex flex-col items-center justify-center">
              {/* Displaying the countdown timer */}
              <Typography variant="subtitle1">{convertSeconds()}</Typography>
              {/* Linear progress bar to indicate the countdown progress */}
              <LinearProgress className="w-full" variant="determinate" value={timerProgress} />
              {/* Button for resending the verification code */}
              <Button
                className="rounded-xl"
                variant="text"
                disabled={timer !== 0 || loading}
                onClick={sendAgain}
              >
                {/* Displaying either a loading spinner or the "Resend" text based on the loading state */}
                {loading ? <CircularProgress size={25} /> : "ارسال مجدد"}
              </Button>
            </div>
          </DialogContent>
        ) : (
          <DialogContent>
            {/* Verification success message */}
            <DialogContentText id="alert-dialog-description">
              احراز هویت شما با موفقیت به پایان رسید.
            </DialogContentText>
            <div
              className="w-100 py-4 flex gap-4 dir-rtl flex-row items-end justify-cneter"
              dir="rtl"
            >
              {/* Verification success illustration */}
              <Image
                src="/images/completing-illustration.svg"
                alt="completing illustration"
                width={300}
                height={300}
              />
            </div>
          </DialogContent>
        )}

        {/* Mobile stepper for navigation */}
        <MobileStepper
          variant="dots"
          steps={MAX_STEPS}
          position="static"
          activeStep={activeStep}
          dir="ltr"
          className="pb-4 px-6"
          nextButton={
            <Button
              onClick={dialogButtonAction}
              disabled={loading || (activeStep === 1 && verificationCode.length !== 6)}
              className="rounded-xl"
            >
              {dialogButtonTitle()}
            </Button>
          }
          backButton={
            <Button
              onClick={handleBack}
              disabled={
                activeStep === 0 ||
                loading ||
                activeStep === MAX_STEPS - 1 ||
                (activeStep === 1 && timer !== 0)
              }
              className="rounded-xl"
            >
              قبلی
            </Button>
          }
        />
      </Dialog>

      {/* Snackbar component to display success or error messages */}
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={snackbaropen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          className="rounded-xl"
          onClose={handleCloseSnackbar}
          severity={snackbar.success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
