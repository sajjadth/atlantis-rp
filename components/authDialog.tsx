"use client";

import { ChangeEvent, useState } from "react";
import styles from "./authDialog.module.sass";
import { AuthDialogProps } from "@/constants/AuthDialog.interface";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  InputAdornment,
  MobileStepper,
  TextField,
} from "@mui/material";

export default function AuthDialog(props: AuthDialogProps) {
  const [loading, setLoading] = useState(false); // Loading state
  const [activeStep, setActiveStep] = useState(0); // Active step of dialog state
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number state
  const [phoneNumberInputError, setPhoneNumberInputError] = useState(false); // Phone number error
  const [phoneNumberInputErrorMessage, setPhoneNumberInputErrorMessage] = useState(""); // Phone number error message

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
    handleNext();
  };

  // Function to send verification code if number is valid
  const handleAuthenticationCodeSend = () => {
    const re = /^09\d{9}$/;

    if (!re.test(phoneNumber)) {
      setPhoneNumberInputError(true);
      setPhoneNumberInputErrorMessage("فرمت شماره موبایل اشتباه است!");
    } else {
      // Check for duplication and verified phone number in database
      // and sending verification code
      console.log(phoneNumber);
    }
  };

  // Function to verify authentication code
  const handleVerifyAuthenticationCode = () => {
    console.log("verify authentication Code");
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Icon sx={{ transform: "scale(-1,1)" }}>
                        <img src="/images/call.svg" alt="" />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </div>
          </DialogContent>
        ) : (
          <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>Verify</Box>
        )}

        {/* Mobile stepper for navigation */}
        <MobileStepper
          variant="progress"
          steps={MAX_STEPS}
          position="static"
          activeStep={activeStep}
          dir="ltr"
          className="pb-4 px-6"
          nextButton={
            <Button
              onClick={dialogButtonAction}
              disabled={activeStep === MAX_STEPS - 1 || loading}
              className="rounded-xl"
            >
              {dialogButtonTitle()}
            </Button>
          }
          backButton={
            <Button
              onClick={handleBack}
              disabled={activeStep === 0 || loading}
              className="rounded-xl"
            >
              قبلی
            </Button>
          }
        />
      </Dialog>
    </>
  );
}
