"use client";
import ImageClickHover from "./ImageClickHover";

export default function HomeImages() {
  return (
    <>
      <small className="flex justify-center text-center mt-10 uppercase text-xs text-white">
        CLICK THE IMAGES TO SEE THE ART PIECES ON A LARGER FORMAT
      </small>
      <div className="flex flex-wrap mt-[80px] mb-20">
        <ImageClickHover padding={true} source="/homepage1.jpg" sizeW={220} />
        <ImageClickHover padding={true} source="/homepage2.jpg" sizeW={220} />
        <ImageClickHover padding={true} source="/homepage3.jpg" sizeW={220} />
      </div>
      <div className="flex flex-wrap mb-20">
        <ImageClickHover padding={true} source="/homepage4.jpg" sizeW={220} />
        <ImageClickHover padding={true} source="/homepage5.jpg" sizeW={220} />
        <ImageClickHover padding={true} source="/homepage6.jpg" sizeW={220} />
      </div>
      <div className="flex flex-wrap ">
        <ImageClickHover padding={true} source="/homepage7.jpg" sizeW={220} />
        <ImageClickHover padding={true} source="/homepage8.jpg" sizeW={220} />
      </div>
    </>
  );
}
