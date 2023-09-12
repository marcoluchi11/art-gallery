"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carusel() {
  return (
    <Carousel
      className=" my-10 rounded-md"
      showThumbs={false}
      autoPlay
      showArrows={false}
      infiniteLoop={true}
      dynamicHeight={true}
    >
      <div className="rounded-md">
        <Image src="/IMG_7249.jpg" alt="asdasdasd" width={300} height={300} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <Image src="/IMG_7247.jpg" alt="asdasdasd" width={300} height={300} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <Image src="/landscape2.jpg" alt="asdasdasd" width={300} height={300} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <Image
          src="/landscape.jpg"
          alt="asdasdasd"
          width={300}
          height={300}
          className="rounded-md	"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      {/* <div>
        <Image
          src="/IMG_7248.jpg"
          alt="asdasdasd"
          width={200}
          height={200}
          className="rounded-md	"
        />
        
      </div> */}
    </Carousel>
  );
}
