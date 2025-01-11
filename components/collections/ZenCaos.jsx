import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function ZenCaos() {
  return (
    <>
      <Description text="ZEN CAOS DESCRIPTION" />
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos1.png"
              text="ZEN CAOS 1 72X72’ ACRYLICS OVER CANVAS"
              sizeW={800}
              finalsize={1000}
            />
          </div>

          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos6.png"
              text="ZEN CAOS 6 75X70’ ACRYLICS OVER CANVAS"
              sizeW={800}
              finalsize={1000}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos11.png"
              text="ZEN CAOS 11 75X63’ ACRYLICS OVER CANVAS"
              sizeW={800}
              finalsize={1000}
            />
          </div>

          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos3.png"
              text="ZEN CAOS 3 115X75’ ACRYLICS OVER CANVAS"
              sizeW={1100}
              finalsize={1500}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos5.png"
              text="ZEN CAOS 5 95X75’ ACRYLICS OVER CANVAS"
              sizeW={1100}
              finalsize={1500}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/zencaos/zencaos9.png"
              text="ZEN CAOS 9 50X112’ ACRYLICS OVER CANVAS"
              sizeW={1100}
              finalsize={1500}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/zencaos/zencaos2.png"
            text="ZEN CAOS 2 72X72’ ACRYLICS OVER CANVAS"
            sizeW={800}
            finalsize={900}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/zencaos/zencaos8.png"
            text="ZEN CAOS 8 60X60’ ACRYLICS OVER CANVAS"
            sizeW={800}
            finalsize={900}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5   w-full mt-20">
          <ImageClickHover
            source="/zencaos/zencaos4.png"
            text="ZEN CAOS 4 68X63’ ACRYLICS OVER CANVAS ON GOLD LEAF DETAIL"
            sizeW={800}
            finalsize={900}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5   w-full mt-20">
          <ImageClickHover
            source="/zencaos/zencaos10.png"
            text="ZEN CAOS 10 76X70’ ACRYLICS OVER CANVAS"
            sizeW={800}
            finalsize={900}
          />
        </div>
      </div>
    </>
  );
}