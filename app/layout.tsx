import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "LINC",
  description: "Laboratory for Interdisciplinary Research in Construction",
  openGraph: {
    title: "LINC | SDSU",
    description: "Laboratory for Interdisciplinary Research in Construction",
    url: "https://linc-chi.vercel.app/",
    siteName: "LINC",
    images: [
      {
        url: "/og-image.png", // Or use absolute URL if preferred
        width: 1200,
        height: 630,
        alt: "LINC SDSU - Laboratory Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LINC | SDSU",
    description: "Laboratory for Interdisciplinary Research in Construction",
    images: ["/og-image.png"],
  },
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
