import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Sketches() {
  return (
    <main className="flex-col md:px-24 pt-20 bg-gray-100	">
      <div id="main">
        <div>
          <Navbar />
        </div>
        <article>HOLIS</article>
      </div>
      <Footer />
    </main>
  );
}
