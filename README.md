# Atlantis RP - GTA-V Roleplay Server

Welcome to Atlantis RP, a Grand Theft Auto V (GTAV) roleplay server where you can immerse yourself in a rich virtual world. This project is powered by [Next.js](https://nextjs.org/) and incorporates various modern web technologies.

**Original Site**: [Atlantis RP Website](https://www.atlantisrp.ir/)

## Getting Started

To get started with development, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm, yarn, pnpm, or bun:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the files in the pages directory. The page auto-updates as you edit the files.

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js and how to further develop this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?filter=next.js) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environment Variables

Before deploying your server, make sure to set the following environment variables in your `.env` file:

- `DISCORD_CLIENT_ID`: Your Discord client ID.
- `DISCORD_CLIENT_SECRET`: Your Discord client secret.
- `DISCORD_CLIENT_REDIRECT_URL`: The redirect URL for Discord authentication.
- `DISCORD_GENERATED_URL`: The generated URL for Discord authentication.
