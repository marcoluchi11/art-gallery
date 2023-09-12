import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="flex-col px-24 pt-20 bg-gray-100	">
      <div id="main">
        <div>
          <Navbar />
        </div>
        <div className="flex my-10">
          <Image
            src="/IMG_7248.jpg"
            alt="image of landscape"
            width={300}
            height={300}
          />
          <Image
            src="/IMG_7249.jpg"
            alt="image of landscape"
            width={300}
            height={300}
          />
          <Image
            src="/IMG_7247.jpg"
            alt="image of portrait"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
/*
<Image
          src="/IMG_7248.jpg"
          alt="image of landscape"
          width={300}
          height={300}
        />
        <Image
          src="/IMG_7249.jpg"
          alt="image of landscape"
          width={300}
          height={300}
        />
        <Image
          src="/IMG_7247.jpg"
          alt="image of portrait"
          width={300}
          height={300}
        />
*/
