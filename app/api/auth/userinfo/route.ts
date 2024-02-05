import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  // Get the value of the discord_auth_token cookie
  const token = cookies().get("discord_auth_token")?.value;

  // Send a GET request to the Discord API endpoint for the current user
  const response = await fetch("https://discordapp.com/api/users/@me", {
    method: "GET",
    // Set the Authorization header with the token
    headers: { Authorization: `Bearer ${token}` },
  });

  // Parse the response as JSON
  const data = await response.json();

  // Extract the id, avatar, username, and email from the data
  const id = data.id;
  const avatar = `https://cdn.discordapp.com/avatars/${id}/${data.avatar}.png`;
  const username = data.global_name;
  const email = data.email;

  // If the response status is 200 (OK)
  if (response.status === 200)
    // Return a JSON response with the user's email, username, avatar, and id
    return NextResponse.json({ success: true, email, username, avatar, id });
  // Otherwise
  // Return a JSON response with success set to false and the error message
  else return NextResponse.json({ success: false, message: data.message });
}
