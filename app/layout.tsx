import type { Metadata } from "next";
import "@fontsource-variable/vazirmatn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corelinkplatform.ir"),
  title: {
    default: "CoreLink Platform | زیرساخت محصولات هوشمند",
    template: "%s | CoreLink Platform",
  },
  description: "CoreLink پلتفرمی در حال توسعه برای اتصال و یکپارچه‌سازی محصولات هوشمند، با تمرکز بر معماری چندمستاجری، راهکارهای White-label و APIهای سازمانی است.",
  other: {
    "codex-preview": "development",
    "theme-color": "#0B1F3A",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "CoreLink Platform",
    description: "پلتفرم در حال توسعه برای اتصال دستگاه‌ها، داده‌ها و محصولات White-label",
    url: "https://corelinkplatform.ir",
    siteName: "CoreLink Platform",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreLink Platform",
    description: "A connected-product platform in development for devices, data, white-label applications, and enterprise integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
