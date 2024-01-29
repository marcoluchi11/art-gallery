import Navbar2 from "@/components/home/Navbar2";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/contact/Footer";
import { ArtProvider } from "@/context/context";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  title: "ALBION VU",
  description: "Albion Vuqiterna - ArtWork Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
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
