import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@repo/design-system/styles";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cake and Fame",
    template: "%s | Cake and Fame",
  },
  description:
    "Discover celebrity birthdays, trending stars, and famous people born today.",
};

type RootLayoutProps = {
  children: Readonly<ReactNode>;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
