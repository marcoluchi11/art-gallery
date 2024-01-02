import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";
export default function LinePath() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5 md:gap-10  w-full mt-10 mb-10">
          <ImageClickHover source="/linepath/linepath1.jpg" />
          <ImageClickHover
            source="/linepath/linepath2.jpg"
            text="LINE PATH 56x38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <ImageClickHover
            source="/linepath/linepath3.jpg"
            text="LINE PATH 58X43’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <ImageClickHover
            source="/linepath/linepath4.jpg"
            text="LINE PATH 80X60’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/linepath/linepath5.jpg"
              text="LINE PATH 42X57’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath6.jpg"
              text="LINE PATH 56X56’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath7.jpg"
              text="LINE PATH 54X38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath8.jpg"
              text="LINE PATH 55X34’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// LINE PATH 58X45’ ACRYLICS AND OIL PASTEL OVER CANVAS
