import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex-col px-24 pt-20 bg-gray-100	">
      <div id="main">
        <div>
          <Navbar />
        </div>
        <div></div>
      </div>
      <Footer />
    </main>
  );
}
