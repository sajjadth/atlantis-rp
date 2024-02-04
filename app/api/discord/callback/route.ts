import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Get the value of the code parameter from the request URL
  const code = req.nextUrl.searchParams.get("code") as string;

  // Create a new URLSearchParams object to store the data for the POST request
  const body = new URLSearchParams();

  // Append the client ID, client secret, grant type, redirect URI, and code to the data object
  body.append("client_id", process.env.DISCORD_CLIENT_ID as string);
  body.append("client_secret", process.env.DISCORD_CLIENT_SECRET as string);
  body.append("grant_type", "authorization_code");
  body.append("redirect_uri", process.env.DISCORD_CLIENT_REDIRECT_URL as string);
  body.append("code", code);

  // Create a header object to specify the content type of the request
  const header = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  // Use the fetch function to send a POST request to the Discord API endpoint with the data and header
  let response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: body,
    headers: header,
  });

  // Parse the response as a JSON object and store it in a variable named data
  let data = await response.json();

  // Use the cookies function to set a cookie named discord_auth_token with the value of the access token from the data object
  cookies().set("discord_auth_token", data.access_token);

  // If the data object has an access token property, return a response that redirects to the site URL from the environment variables
  if (data.access_token) return NextResponse.redirect(process.env.SITE_URL as string);
  // Otherwise, return a response that contains a JSON object with success set to false and a message
  else
    return NextResponse.json({
      success: false,
      message: "something went wrong please try again later!",
    });
}
