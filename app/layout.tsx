import type { Metadata } from "next";
import { Plaster } from "next/font/google";
import "./globals.css";
import { PreloaderWrapper } from "@/contexts/preloader-wrapper";
import { CustomCursor, Navbar } from "@/component";
import { Footer } from "@/section";

const plaster = Plaster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plaster",
});

export const metadata: Metadata = {
  title: "Novaforge",
  description: "Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plaster.variable} bg-black relative cursor-none`}>
        <PreloaderWrapper>
          <CustomCursor />
          <Navbar />
          {children}
          <footer>
            <Footer />
          </footer>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
