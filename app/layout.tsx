import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "LINC",
  description: "Laboratory for Interdisciplinary Research in Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans bg-background text-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light" // 👈 this is key
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
