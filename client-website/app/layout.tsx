import "./globals.css";
import type { Metadata } from "next";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MEC India",
  description: "Exhibition Stall Design Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}