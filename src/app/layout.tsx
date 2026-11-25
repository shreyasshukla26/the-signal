
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE SIGNAL — Sonia Specialist",
  description:
    "An exploration of Sonia Specialist's thinking, leadership, marketing philosophy and professional journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
