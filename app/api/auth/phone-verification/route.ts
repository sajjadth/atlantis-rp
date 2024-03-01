import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Constants for the random number range
const MIN_CODE = 100000;
const MAX_CODE = 999999;

// Generate a random six-digit code as a string
function generateVerificationCode(): string {
  return (Math.floor(Math.random() * (MAX_CODE - MIN_CODE + 1)) + MIN_CODE).toString();
}

// Check if the phone number is registered and verified
function isPhoneNumberRegistered(): boolean {
  return cookies().has("phone_number") && Boolean(cookies().get("user_verified")?.value);
}

// Check if the verification code is active and not expired
function isVerificationCodeActive(): boolean {
  return (
    Boolean(cookies().get("user_verified")?.value) &&
    cookies().has("verification_code_expiration_time") &&
    (cookies().get("verification_code_expiration_time")?.value as string) >
      new Date().getTime().toString()
  );
}

// Set cookies for the phone number, the code, and the expiration time
function setVerificationCookies(phoneNumber: string, code: string): void {
  const expirationTime = String(new Date().setMinutes(new Date().getMinutes() + 2));
  cookies().set("verification-code", code);
  cookies().set("user_verified", isPhoneNumberRegistered() ? "true" : "false");
  cookies().set("phone_number", phoneNumber);
  cookies().set("verification_code_expiration_time", expirationTime);
}

// Handle POST requests and send a code to the phone number
export async function POST(req: NextRequest) {
  const code = generateVerificationCode();
  const data = await req.json();

  // Return an error message if the phone number is already registered or the code is active
  if (isPhoneNumberRegistered())
    return NextResponse.json({
      success: false,
      message: `Oops! It seems that this phone number is already associated with an account. If you believe this is a mistake or need further assistance, please contact support.`,
    });

  if (isVerificationCodeActive())
    return NextResponse.json({
      success: false,
      message: `Sorry, you cannot request a new verification code yet. Please wait for the current code to expire before requesting another one.`,
    });

  // Set cookies and return a success message
  setVerificationCookies(data.phoneNumber, code);
  return NextResponse.json({
    success: true,
    message: `Verification code sent successfully to ${data.phoneNumber}`,
  });
}
