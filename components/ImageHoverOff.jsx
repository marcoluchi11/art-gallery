"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { ArtContext } from "@/context/context";

export default function ImageHoverOff({
  text = "",
  source,
  sizeW,
  sizeH,
  margin,
}) {
  const { setShowModal, showModal } = useContext(ArtContext);
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="relative cursor-pointer flex flex-col  mx-auto md:mr-20">
      <Image
        quality={100}
        // onClick={() => handleClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`mb-[200px] ${margin ? "mr-3" : ""} ${
          hovered
            ? "transition-opacity opacity-70"
            : " transition-opacity bg-opacity-100"
        } `}
        src={source}
        alt="painting"
        width={sizeW || 700}
        height={sizeH || 500}
      />
    </div>
  );
}
