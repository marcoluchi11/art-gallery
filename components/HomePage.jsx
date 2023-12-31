import Image from "next/image";
import HomeImages from "./HomeImages";
export default function Homepage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center">
          <HomeImages />
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
          <h1 className="uppercase text-white text-center md:text-justify text-3xl my-3 mx-10">
            prints available
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row my-4 justify-evenly">
        <Image
          className="hidden md:flex"
          src="/posterexhibiton.jpeg"
          alt="poster exhibition"
          width={400}
          height={800}
        />
        <Image
          className="flex md:hidden"
          src="/posterexhibiton.jpeg"
          alt="poster exhibition"
          width={300}
          height={500}
        />
        <video
          className="mt-5 md:mt-0"
          width={300}
          height={500}
          controls
          autoplay
          loop
        >
          <source src="/reels1.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="uppercase text-center text-white text-3xl my-3">
        prints available
      </h1>
    </>
  );
}
