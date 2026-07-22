import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corelinkplatform.ir"),
  title: {
    default: "CoreLink Platform | زیرساخت محصولات هوشمند",
    template: "%s | CoreLink Platform",
  },
  description: "زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند؛ API، SDK و پلتفرم چندمستاجری برای خودرو، ردیاب حیوانات، IoT و راهکارهای White-label.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "CoreLink Platform",
    description: "هسته‌ی اتصال و یکپارچه‌سازی محصولات هوشمند",
    url: "https://corelinkplatform.ir",
    siteName: "CoreLink Platform",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreLink Platform",
    description: "Connected product infrastructure for devices, applications, and digital services.",
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
