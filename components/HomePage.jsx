import Image from "next/image";
import Carusel from "./Carusel";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex">
          <Carusel />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="uppercase text-white text-center text-3xl my-3">
            prints available
          </h1>
          <p className="text-xl text-white font-light mx-10 leading-10 mt-10">
            Color is the essence of beauty and energy that permeates our world.
            It has the remarkable ability to evoke emotions and stir deep
            feelings within us. I have always been captivated by the interplay
            of color and shape. When these two elements converge, the
            possibilities for creating art become boundless. For me personally,
            however, painting transcends the mere combination of color and
            shape. It is a process that begins with an emotion or feeling, which
            then spills out onto the canvas. I connect with different cultures,
            different people and give them a piece of me from who they are as a
            reflection of admiration for something different. For a difference.
            <br />
            <br />
            MEMBER AT THE CREATIVES REBUILD NEW YORK AND A GRANT WINNER TOP 100
            ARTIST OF THE YEAR
            <br />
            MEMBER AT:
            <br />
            SAATCHI ART
            <br />
            FINEARTAMERICA
            <br />
            SOCIETY6
          </p>
          <p className="font-bold uppercase text-3xl text-white mx-10 leading-10">
            THIS WEBSITE IS STILL UNDER CURATION
          </p>
        </div>
      </div>
      <div className="flex my-4 justify-center">
        <Image
          src="/posterexhibiton.jpeg"
          alt="poster exhibition"
          width={600}
          height={800}
        />
      </div>
      <h1 className="uppercase text-center text-white text-3xl my-3">
        prints available
      </h1>
    </>
  );
}
