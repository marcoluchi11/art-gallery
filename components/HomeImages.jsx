"use client";
import Image from "next/image";
import { useState } from "react";
import ImageClickHover from "./ImageClickHover";

export default function HomeImages() {
  return (
    <>
      <small className="flex justify-center text-center mt-10 uppercase text-xs text-white">
        CLICK THE IMAGES TO SEE THE ART PIECES ON A LARGER FORMAT
      </small>
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap  mb-20 items-center gap-10 md:gap-0 w-full mt-10">
          <ImageClickHover source="/homeimage1.jpg" sizeW={200} />
          <ImageClickHover source="/homeimage2.jpg" sizeW={200} />
          <ImageClickHover source="/homeimage3.jpg" sizeW={200} />
        </div>
        <div className="flex flex-wrap mb-20 items-center gap-10 md:gap-0 w-full ">
          <ImageClickHover source="/patches/patches1.jpg" sizeW={175} />
          <ImageClickHover source="/patches/patches2.jpg" sizeW={175} />
          <ImageClickHover source="/patches/patches3.jpg" sizeW={175} />
          <ImageClickHover source="/patches/patches4.jpg" sizeW={175} />
          <ImageClickHover source="/patches/patches5.jpg" sizeW={175} />
        </div>
      </div>
    </>
  );
}
