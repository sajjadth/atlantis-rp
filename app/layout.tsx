"use client";

import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#48bdcf",
      light: "#7edce2",
      dark: "#008ba3",
    },
  },
});

const metadata = {
  title: "Atlantis RP",
  description:
    "بازی GTA V را با تجربه منحصر به فرد نقش‌آفرینی فارسی در Atlantis RP کشف کنید. در یک ادغام پرانرژی از فرهنگ فارسی و هرج و مرج لس سانتوس فرو غوغا شوید. به جامعه پرطراوتی بپیوندید که خلاقیت هیچ محدودیتی ندارد و به عنوان یک کارآفرین، نیروی انتظامی یا نماد شب‌زندگی سابقه خود را شکل دهید. داستان خود را در پرده پویای Atlantis RP باز کنید، جایی که دوستی‌ها شکل می‌گیرند، اتحادها آزمایش می‌شوند و افسانه‌های فارسی به واقعیت پیوسته می‌شوند. ماجراجویی شما در لس سانتوس منتظر است - شما از آن چه می‌سازید؟",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={vazirmatn.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
