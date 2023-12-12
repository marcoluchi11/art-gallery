"use client";
import Image from "next/image";
import { useState } from "react";
import ImageClickHover from "./ImageClickHover";

export default function HomeImages() {
  return (
    <div className="flex flex-wrap mt-[80px] ">
      <div className="flex flex-col md:flex-row mb-20 items-center gap-10 md:gap-0 w-full mt-10">
        <ImageClickHover source="/homeimage1.jpg" sizeW={200} />
        <ImageClickHover source="/homeimage2.jpg" sizeW={200} />
        <ImageClickHover source="/homeimage3.jpg" sizeW={200} />
      </div>
    </div>
  );
}
