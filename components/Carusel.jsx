"use client";
import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carusel({ arrows }) {
  const videoRef = useRef(null);

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <Carousel
      showStatus={true}
      stopOnHover={true}
      showArrows={arrows}
      useKeyboardArrows
      interval={36000}
      className="my-10"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      dynamicHeight={true}
      onChange={handlePause}
    >
      <div className="flex justify-center items-center">
        <video
          loop
          width="600"
          height="100"
          ref={videoRef}
          muted
          autoplay="true"
          className="rounded-md w-[350px] md:w-full"
        >
          <source src="/video1.MOV" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center items-center">
        <video
          width="600"
          height="100"
          ref={videoRef}
          muted
          loop
          autoplay="true"
          className="rounded-md w-[350px] md:w-full"
        >
          <source src="/video2.MOV" type="video/mp4" muted />
        </video>
      </div>

      <div className="flex justify-center items-center rounded-md">
        <video
          width="600"
          height="100"
          ref={videoRef}
          muted
          loop
          autoplay="true"
          className="rounded-md w-[350px] md:w-full"
        >
          <source src="/video3.MOV" type="video/mp4" muted />
        </video>
      </div>
    </Carousel>
  );
}
