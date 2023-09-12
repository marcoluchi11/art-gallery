import Carusel from "@/components/Carusel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex-col md:px-24 pt-20 bg-gray-100	">
      <div id="main">
        <div>
          <Navbar />
        </div>
        <Carusel />
      </div>
      <Footer />
    </main>
  );
}
