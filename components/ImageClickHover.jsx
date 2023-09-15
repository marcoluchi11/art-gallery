"use client";
import Image from "next/image";
import Inquire from "./Inquire";
import { useContext, useState } from "react";
import { ArtContext } from "@/context/context";

export default function ImageClickHover({
  text,
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
    <div className="relative cursor-pointer">
      <Image
        quality={100}
        onClick={() => handleClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`mb-[200px] ${margin ? "mr-3" : ""} ${
          hovered
            ? "transition-opacity opacity-40"
            : " transition-opacity bg-opacity-100"
        } `}
        src={source}
        alt="painting"
        width={sizeW || 700}
        height={sizeH || 500}
      />
      {hovered && (
        <p
          onMouseEnter={() => setHovered(true)}
          className="mensaje bg-gray-100 rounded-md absolute top-[50%] left-[50%] text-black font-light text-xl text-center opacity-100 flex flex-col"
        >
          {text}
          <Inquire />
        </p>
      )}
    </div>
  );
}
