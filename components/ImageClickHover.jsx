"use client";
import Image from "next/image";
import { useState } from "react";
import Inquire from "./Inquire";
export default function ImageClickHover({
  text = "",
  source,
  sizeW = 100,
  sizeH,
  sold = false,
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };
  return (
    <div className="relative cursor-pointer flex flex-col mx-auto">
      <Image
        quality={100}
        onClick={toggleEnlarged}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={` ease-in-out transition-width duration-500 cursor-pointer rounded-sm ${
          isHover ? "opacity-50" : "opacity-100"
        } 
         mr-3 `}
        src={source}
        alt="painting"
        width={isEnlarged ? 700 : sizeW}
        height={sizeH || 500}
      />
      {isEnlarged && isHover ? (
        <p
          onMouseEnter={() => setIsHover(true)}
          className={`hidden md:flex transition-all ease-in-out duration-1000 mensaje bg-gray-100 rounded-md absolute top-[50%] left-[50%] text-black font-light text-xl text-center opacity-100 flex-col`}
        >
          {text}
          <Inquire />
        </p>
      ) : (
        <p
          className={`${
            isEnlarged
              ? " md:hidden flex flex-col justify-center text-center uppercase  font-light mt-3 text-sm"
              : "hidden"
          }`}
        >
          {text}
          <Inquire />
        </p>
      )}
      {/* {isEnlarged && isHover && (
      
      )} */}

      {sold && (
        <p className="text-center font-light text-red-500 text-xl">SOLD</p>
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
