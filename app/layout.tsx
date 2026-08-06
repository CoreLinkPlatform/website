import type { Metadata } from "next";
import "@fontsource-variable/vazirmatn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corelinkplatform.ir"),
  title: {
    default: "CoreLink Platform | زیرساخت محصولات متصل",
    template: "%s | CoreLink Platform",
  },
  description: "CoreLink دستگاه‌ها و پروتکل‌های مختلف را به یک مدل داده و API پایدار متصل می‌کند تا ساخت محصولات ناوگان، IoT و White-label سریع‌تر و قابل‌گسترش‌تر شود.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
    "theme-color": "#0B1F3A",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "CoreLink Platform | زیرساخت محصولات متصل",
    description: "یک هسته مشترک برای اتصال دستگاه، یکپارچه‌سازی داده و ساخت محصولات ناوگان، IoT و White-label.",
    url: "https://corelinkplatform.ir",
    siteName: "CoreLink Platform",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreLink Platform | Connected Product Infrastructure",
    description: "A shared device, data, and API layer for fleet, IoT, and white-label products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <a className="skip-link" href="#top">پرش به محتوای اصلی</a>
        {children}
      </body>
    </html>
  );
}
