import "./globals.sass";
import theme from "@/theme";
import { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import { Box } from "@mui/material";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Atlantis RP | %s",
    default: "Atlantis RP",
  },
  description:
    "بازی GTA V را با تجربه منحصر به فرد نقش‌آفرینی فارسی در Atlantis RP کشف کنید. در یک ادغام پرانرژی از فرهنگ فارسی و هرج و مرج لس سانتوس فرو غوغا شوید. به جامعه پرطراوتی بپیوندید که خلاقیت هیچ محدودیتی ندارد و به عنوان یک کارآفرین، نیروی انتظامی یا نماد شب‌زندگی سابقه خود را شکل دهید. داستان خود را در پرده پویای Atlantis RP باز کنید، جایی که دوستی‌ها شکل می‌گیرند، اتحادها آزمایش می‌شوند و افسانه‌های فارسی به واقعیت پیوسته می‌شوند. ماجراجویی شما در لس سانتوس منتظر است - شما از آن چه می‌سازید؟",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body id="__next" className={vazirmatn.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <Box className="flex flex-col items-center justify-start main-background">
              <Header />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </Box>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
