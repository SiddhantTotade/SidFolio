import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import BackgroundBlob from "./components/ui/BackgroundBlob";

const inter = Inter({ subsets: ["latin"] });
const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SidFolio",
  description: "Portfolio of Siddhant Totade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-slate-900 bg-[#F9F6EE] ${josefin.className}`}>
        <BackgroundBlob />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
