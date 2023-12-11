"use client";
import Image from "next/image";
import Inquire from "./Inquire";
import { useContext, useState } from "react";
import { ArtContext } from "@/context/context";
export default function ImageClickHover({
  text = "",
  source,
  sizeW,
  sizeH,
  margin,
  sold = false,
  gap = false,
}) {
  const { setShowModal, showModal } = useContext(ArtContext);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative cursor-pointer flex flex-col mx-auto">
      <Image
        quality={100}
        // onClick={() => handleClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`] ${margin ? "mr-3" : ""} ${
          hovered
            ? "transition-all duration-500 ease-in-out opacity-40"
            : "transition-all duration-500 ease-in-out opacity-100"
        } ${sold ? "" : "md:mb-[200px]"}  ${gap ? "mr-3" : ""}`}
        src={source}
        alt="painting"
        width={sizeW || 700}
        height={sizeH || 500}
      />
      <p
        className={`flex md:hidden font-light ${
          sold ? "" : "mb-[200px]"
        } uppercase text-black justify-center text-center`}
      >
        {text}
      </p>
      {sold && (
        <p className="text-center font-light mb-[200px] text-red-500 text-3xl">
          SOLD
        </p>
      )}
      {hovered && (
        <p
          onMouseEnter={() => setHovered(true)}
          className="hidden md:flex mensaje bg-gray-100 rounded-md absolute top-[50%] left-[50%] text-black font-light text-xl text-center opacity-100 flex-col"
        >
          {text}
          <Inquire />
        </p>
      )}
    </div>
  );
}
