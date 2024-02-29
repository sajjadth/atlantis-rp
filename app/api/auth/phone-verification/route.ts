import { NextRequest, NextResponse } from "next/server";

// Function to generate a random six-digit number as a string
function getRandomSixDigitNumber(): string {
  // Define the minimum and maximum values for the random number
  const min = 100000;
  const max = 999999;
  // Generate a random number within the specified range and convert it to a string
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Exported function to handle HTTP POST requests
export async function POST(req: NextRequest) {
  // Generate a random six-digit verification code
  const code = getRandomSixDigitNumber();
  
  // Parse the incoming JSON data from the request body
  const data = await req.json();
  
  // Calculate the expiration time for the verification code (2 minutes from the current time)
  const expirationTime = String(new Date().setMinutes(new Date().getMinutes() + 2));

  // Check if the user's phone number is already associated with an account
  if (req.cookies.get("phone_number"))
    return NextResponse.json({
      success: false,
      message:
        "Oops! It seems that this phone number is already associated with an account. If you believe this is a mistake or need further assistance, please contact support.",
    });

  // Check if there's already an active verification code for the user
  if (req.cookies.get("verification_code_expiration_time")!.value > new Date().getTime().toString())
    return NextResponse.json({
      success: false,
      message:
        "Sorry, you cannot request a new verification code yet. Please wait for the current code to expire before requesting another one.",
    });

  // Set cookies for the user's phone number, the verification code, and its expiration time
  req.cookies.set("phone_number", data.phoneNumber);
  req.cookies.set("verification-code", code);
  req.cookies.set("verification_code_expiration_time", expirationTime);

  // Return a JSON response indicating success and a message confirming the verification code has been sentss
  return NextResponse.json({
    success: true,
    message: "Verification code sent successfully",
  });
}
