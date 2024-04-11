"use client";
import Image from "next/image";
import { useState } from "react";
import Inquire from "./Inquire";
export default function ImageClickHover({
  text = "",
  source,
  sizeW = 200,
  sizeH,
  sold = false,
  finalsize = 1000,
  padding = 0,
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
    setIsHover(true);
  };
  return (
    <div className="relative cursor-pointer flex flex-col mx-auto">
      <Image
        quality={100}
        onClick={toggleEnlarged}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={` ${
          padding ? "p-3" : "p-0"
        } ease-in-out transition-width duration-500 cursor-pointer rounded-sm ${
          isHover ? "md:opacity-50" : "opacity-100"
        } 
          `}
        src={source}
        alt="painting"
        width={isEnlarged ? finalsize : sizeW}
        height={sizeH || 700}
      />
      {isEnlarged && isHover && (
        <p
          onMouseEnter={() => setIsHover(true)}
          className={`hidden md:flex transition-all ease-in-out duration-1000 mensaje bg-gray-100 rounded-md absolute top-[50%] left-[50%] text-black font-light text-xl text-center opacity-100 flex-col`}
        >
          {text}
          <Inquire />
        </p>
      )}
      {isEnlarged && (
        <p
          className={`            
md:hidden flex flex-col justify-center text-center uppercase  font-light mt-3 text-sm"
          `}
        >
          {text}
          <Inquire />
        </p>
      )}
      {sold && (
        <p className="text-center mt-1 font-light text-red-700 text-xl">SOLD</p>
      )}
      {/* {hovered && (
        <p
          onMouseEnter={() => setHovered(true)}
          className="hidden md:flex mensaje bg-gray-100 rounded-md absolute top-[50%] left-[50%] text-black font-light text-xl text-center opacity-100 flex-col"
        >
          {text}
          <Inquire />
        </p>
      )} */}
    </div>
  );
}
