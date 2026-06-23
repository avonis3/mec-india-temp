import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEC India",
  description: "Exhibition Services Worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}