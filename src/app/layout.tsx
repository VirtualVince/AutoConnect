import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoConnect",
  description:
    "Streamline your car rental experience. Created by Virtual Vince",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={"relative"}>{children}</body>
      <Footer />
    </html>
  );
}
