"use client";

import { ChangeEvent, useState } from "react";
import styles from "./authDialog.module.sass";
import { AuthDialogProps } from "@/constants/authDialog.interface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  InputAdornment,
  TextField,
} from "@mui/material";

export default function AuthDialog(props: AuthDialogProps) {
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number state
  const [phoneNumberInputError, setPhoneNumberInputError] = useState(false); // Phone number error
  const [phoneNumberInputErrorMessage, setPhoneNumberInputErrorMessage] = useState(""); // Phone number error message

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

  // Function to send verification code if number is valid
  const handleAuthentication = () => {
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

  // Function to set phone number to state
  const handlePhoneNumberOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      {/* Dialog for user authentication */}
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
        <DialogTitle gutterBottom>احراز هویت</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            برای ادامه‌ فرآیند، لطفاً شماره موبایل خود را وارد کنید تا کد تأیید برای شما ارسال شود.
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
        <DialogActions className="flex flex-row items-center justify-between pb-4 px-6">
          {/* Buttons for authentication */}
          <Button
            autoFocus
            variant="contained"
            color="success"
            className="rounded-xl"
            onClick={handleAuthentication}
          >
            تأیید
          </Button>
          <Button
            onClick={props.handleDialogClose}
            variant="text"
            color="inherit"
            className="rounded-xl"
          >
            لغو
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
