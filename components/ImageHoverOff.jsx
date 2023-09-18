"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageHoverOff({ source, sizeW, sizeH, margin }) {
  const [hovered, setHovered] = useState(false);
  // const handleClick = () => {
  //   setShowModal(!showModal);
  // };
  return (
    <div className="relative cursor-pointer flex flex-col  mx-auto md:mr-20">
      <Image
        quality={100}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`mb-[200px] ${margin ? "mr-3" : ""} ${
          hovered
            ? "transition-opacity opacity-70"
            : " transition-opacity bg-opacity-100"
        } `}
        src={source}
        alt="painting"
        width={sizeW || 500}
        height={sizeH || 500}
      />
    </div>
  );
}
