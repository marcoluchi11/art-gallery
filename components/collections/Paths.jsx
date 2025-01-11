import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function Paths() {
  return (
    <>
      <Description text="PATHS DESCRIPTION" />
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
            <ImageClickHover
              source="/paths/paths1.png"
              text="PATHS 24X40’ ACRYLICS OVER CANVAS"
              sold={true}
              sizeW={220}
            />
            <ImageClickHover
              source="/paths/paths2.png"
              text="PATHS 24X40’ ACRYLICS OVER CANVAS"
              sold={true}
              sizeW={220}
            />
            <ImageClickHover
              source="/paths/paths3.png"
              text="PATHS 24X40’ ACRYLICS OVER CANVAS"
              sold={true}
              sizeW={250}
            />
          </div>
          <ImageClickHover
            source="/paths/paths4.png"
            text="PATHS 19X24’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/paths/paths5.png"
            text="PATHS 19X24’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/paths/paths6.png"
            text="PATHS 19X24’ ACRYLICS OVER CANVAS"
          />
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
            <ImageClickHover
              source="/paths/paths6(1).png"
              text="PATHS 19X24’ ACRYLICS OVER CANVAS"
            />
            <ImageClickHover
              source="/paths/paths7.png"
              text="PATHS 19X24’ ACRYLICS OVER CANVAS"
            />

            <ImageClickHover
              source="/paths/paths8.png"
              text="PATHS 19X24’ ACRYLICS OVER CANVAS"
            />
          </div>
        </div>
      </div>
    </>
  );
}
