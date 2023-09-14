"use client";
import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carusel() {
  const videoRef = useRef(null);

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <Carousel
      // width={1500}
      stopOnHover={true}
      className="my-10"
      showThumbs={false}
      autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      dynamicHeight={true}
      useKeyboardArrows
      onChange={handlePause}
    >
      <div className="flex justify-center items-center">
        <video
          disablePictureInPicture
          width="600"
          height="100"
          ref={videoRef}
          muted
          loop
          autoplay="true"
          controls
          className="rounded-md"
        >
          <source src="/video2.MOV" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center items-center">
        <video
          loop
          disablePictureInPicture
          width="600"
          height="100"
          ref={videoRef}
          muted
          autoplay="true"
          controls
          className="rounded-md"
        >
          <source src="/video1.MOV" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center items-center rounded-md">
        <video
          disablePictureInPicture
          width="600"
          height="100"
          ref={videoRef}
          muted
          loop
          autoplay="true"
          controls
          className="rounded-md"
        >
          <source src="/video3.MOV" type="video/mp4" />
        </video>
      </div>
    </Carousel>
  );
}
