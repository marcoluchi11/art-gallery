import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function WalkingLine() {
  return (
    <>
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/walkingline/185121.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185144.jpg"
            sold={true}
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185212.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185232.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185410.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/walkingline/185504.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185736.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185308.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover source="/walkingline/IMG-6244.png" sold={true} />
          <ImageClickHover source="/walkingline/IMG-6256.png" sold={true} />
          <ImageClickHover source="/walkingline/IMG-7036.png" />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover source="/walkingline/IMG-7038.png" />
          <ImageClickHover source="/walkingline/IMG-7246.png" />
          <ImageClickHover source="/walkingline/IMG-7326.png" />
        </div>

        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover source="/walkingline/IMG-7331.png" gap={true} />
          <ImageClickHover source="/walkingline/IMG-7332.png" />
        </div>
      </div>
    </>
  );
}
