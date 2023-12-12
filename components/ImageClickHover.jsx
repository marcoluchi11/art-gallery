"use client";
import Image from "next/image";
import { useState } from "react";
export default function ImageClickHover({
  text = "",
  source,
  sizeW = 100,
  sizeH,
  margin,
  sold = false,
  gap = false,
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };
  return (
    <div className="relative cursor-pointer flex flex-col mx-auto">
      <Image
        quality={100}
        onClick={toggleEnlarged}
        // onMouseEnter={() => setIsEnlarged(true)}
        // onMouseLeave={() => setIsEnlarged(false)}
        className={` ease-in-out transition-width duration-500 cursor-pointer rounded-sm ${
          isEnlarged ? "" : ""
        }
         mr-3 `}
        src={source}
        alt="painting"
        width={isEnlarged ? 700 : sizeW}
        height={sizeH || 500}
      />
      {/* <p
        className={`flex md:hidden font-light ${
          sold ? "" : ""
        } uppercase text-black justify-center text-center`}
      >
        {text}
      </p> */}
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
