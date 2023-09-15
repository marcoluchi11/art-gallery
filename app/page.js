import Carusel from "@/components/Carusel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row mt-[300px] md:mt-10 md:px-24 ">
      <div className="hidden md:flex">
        <Carusel />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-white font-light mx-10 leading-10 mt-10">
          Color is the essence of beauty and energy that permeates our world. It
          has the remarkable ability to evoke emotions and stir deep feelings
          within us. I have always been captivated by the interplay of color and
          shape. When these two elements converge, the possibilities for
          creating art become boundless. For me personally, however, painting
          transcends the mere combination of color and shape. It is a process
          that begins with an emotion or feeling, which then spills out onto the
          canvas. I connect with different cultures, different people and give
          them a piece of me from who they are as a reflection of admiration for
          something different. For a difference.
        </p>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </main>
  );
}
