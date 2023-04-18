import Navbar from "@/app/(shared)/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "./(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "Blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
