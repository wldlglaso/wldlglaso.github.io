import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Sienna Yim",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-spoca">
        <div className="flex px-6 mx-auto w-[1200px] relative">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
