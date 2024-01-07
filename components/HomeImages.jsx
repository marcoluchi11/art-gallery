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
          text="LINE PATH 56x38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          source="/linepath/linepath2.jpg"
          sizeW={180}
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath3.jpg"
          text="LINE PATH 58X43’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          sizeW={180}
        />
      </div>
      <div className="flex flex-wrap mb-20">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath4.jpg"
          sizeW={180}
          text="LINE PATH 80X60’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath5.jpg"
          sizeW={180}
          text="LINE PATH 42X57’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath6.jpg"
          text="LINE PATH 56X56’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          sizeW={180}
        />
      </div>
      <div className="flex flex-wrap ">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath7.jpg"
          sizeW={180}
          text="LINE PATH 54X38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath8.jpg"
          sizeW={180}
          text="LINE PATH 55X34’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath9.jpg"
          sizeW={180}
          text="LINE PATH 56X44’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
      </div>
      <div className="flex flex-wrap mt-10 ">
        <ImageClickHover
          padding={true}
          source="/linepath/linepath10.jpg"
          sizeW={180}
          text="LINE PATH 58X58’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
        <ImageClickHover
          padding={true}
          source="/linepath/linepath11.jpg"
          sizeW={180}
          text="LINE PATH 43X54’ ACRYLICS AND OIL PASTEL OVER CANVAS"
        />
      </div>
    </>
  );
}
