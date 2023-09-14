import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

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
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
