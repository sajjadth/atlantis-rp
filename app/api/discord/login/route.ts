import { NextResponse } from "next/server";

export async function GET() {
  // Get the value of the environment variable DISCORD_GENERATED_URL
  const url = process.env.DISCORD_GENERATED_URL;

  // If the url is not null or undefined, return a response that redirects to the url
  if (url) return NextResponse.redirect(url);
  // Otherwise, return a response that contains a JSON object with success set to false and a message
  else
    return NextResponse.json({
      success: false,
      message: "something went wrong please try again later!",
    });
}
