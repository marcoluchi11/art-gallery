import Navbar2 from "@/components/home/Navbar2";
import "./globals.css";
import { Rajdhani } from "next/font/google";
import Footer from "@/components/contact/Footer";
import { ArtProvider } from "@/context/context";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/react";
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ALBION VU",
  description: "Albion Vuqiterna - ArtWork Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <ArtProvider>
          <Navbar2 />
          {children}
          <Analytics />
          <BackToTop />
          <Footer />
        </ArtProvider>
      </body>
    </html>
  );
}
