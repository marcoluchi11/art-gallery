"use client";
import ImageClickHover from "./ImageClickHover";

export default function HomeImages() {
  return (
    <>
      <small className="flex justify-center text-center mt-10 uppercase text-xs text-white">
        CLICK THE IMAGES TO SEE THE ART PIECES ON A LARGER FORMAT
      </small>
      <div className="flex flex-wrap mt-[80px] mb-20">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath1.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath2.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath3.jpg"
          sizeW={180}
        />
      </div>
      <div className="flex flex-wrap mb-20">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath4.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath5.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath6.jpg"
          sizeW={180}
        />
      </div>
      <div className="flex flex-wrap ">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath7.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath8.jpg"
          sizeW={180}
        />
      </div>
    </>
  );
}
