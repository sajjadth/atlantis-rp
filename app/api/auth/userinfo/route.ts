import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Retrieves the remaining days of the user's subscription.
function getSubscriptionRemainingDays(token: string): number {
  // Implementation logic here
  // For example, calculate the difference between the current date and the subscription end date

  return Math.floor(Math.random() * 30) + 1;
}

// Checks if the user is subscribed.
function checkIfUserSubscribed(token: string): boolean {
  // Implementation logic here
  // should check the user's subscription status in the database

  return Math.random() > 0.5;
}

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
  const subscribeStatus = checkIfUserSubscribed(token as string);
  const remainingDays = subscribeStatus ? getSubscriptionRemainingDays(token as string) : 0;

  // If the response status is 200 (OK)
  if (response.status === 200)
    // Return a JSON response with the user's email, username, avatar, and id
    return NextResponse.json({
      success: true,
      email,
      username,
      avatar,
      id,
      subscribed: subscribeStatus,
      remaining_days: remainingDays,
    });
  // Otherwise
  // Return a JSON response with success set to false and the error message
  else
    return NextResponse.json({
      success: false,
      message: data.message,
    });
}
