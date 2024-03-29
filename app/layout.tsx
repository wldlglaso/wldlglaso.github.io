import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joy Choi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-spoca bg-black">{children}</body>
    </html>
  );
}
