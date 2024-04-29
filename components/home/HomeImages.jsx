"use client";
import ImageClickHover from "../ImageClickHover";
import ClickLargerFormat from "../ClickLargerFormat";

export default function HomeImages() {
  return (
    <>
      <ClickLargerFormat />
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove1.png"
          text="NEXT MOVE 1 52X62’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />
        <ImageClickHover
          source="/nextmove/nextmove3.png"
          text="NEXT MOVE 3 52X62’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />
      </div>
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove2.png"
          text="NEXT MOVE 2 60X60’ ACRYLICS OVER CANVAS"
          sizeW={550}
          finalsize={700}
        />
      </div>
      <ClickLargerFormat />
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove4.png"
          text="NEXT MOVE 4 62X66’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />
        <ImageClickHover
          source="/nextmove/nextmove7.png"
          text="NEXT MOVE 7 62X82’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />
      </div>
      <ClickLargerFormat />
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove5.png"
          text="NEXT MOVE 5 52X59’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />{" "}
        <ImageClickHover
          source="/nextmove/nextmove6.png"
          text="NEXT MOVE 6 57X57’ ACRYLICS OVER CANVAS"
          sizeW={400}
          finalsize={700}
        />
      </div>
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove8.png"
          text="NEXT MOVE 8 45X45’ ACRYLICS OVER CANVAS"
          sizeW={300}
          finalsize={600}
        />
        <ImageClickHover
          source="/nextmove/nextmove9.png"
          text="NEXT MOVE 9 45X45’ ACRYLICS OVER CANVAS"
          sizeW={300}
          finalsize={600}
        />
        <ImageClickHover
          source="/nextmove/nextmove10.png"
          text="NEXT MOVE 10 45X45’ ACRYLICS OVER CANVAS"
          sizeW={300}
          finalsize={600}
        />
      </div>
      <ClickLargerFormat />
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove11.png"
          text="NEXT MOVE 11 62X82’ ACRYLICS OVER CANVAS"
          sizeW={700}
          finalsize={1000}
        />
      </div>
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove12.png"
          text="NEXT MOVE 12 100X47’ ACRYLICS OVER CANVAS"
          sizeW={700}
          finalsize={1000}
        />
      </div>
      <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
        <ImageClickHover
          source="/nextmove/nextmove13.png"
          text="NEXT MOVE 13 112X62’ ACRYLICS OVER CANVAS"
          sizeW={700}
          finalsize={1000}
        />
      </div>
    </>
  );
}
