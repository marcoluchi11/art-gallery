import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function WalkingLine() {
  return (
    <>
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10">
          <ImageClickHover source="/walkingline/185121.jpg" />
          <ImageClickHover source="/walkingline/185144.jpg" sold={true} />
          <ImageClickHover source="/walkingline/185212.jpg" />
          <ImageClickHover source="/walkingline/185232.jpg" />
          <ImageClickHover source="/walkingline/185308.jpg" />
          <ImageClickHover source="/walkingline/185410.jpg" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10">
          <ImageClickHover source="/walkingline/185504.jpg" />
          <ImageClickHover source="/walkingline/185736.jpg" />
          <ImageClickHover source="/walkingline/185308.jpg" />
          <ImageClickHover source="/walkingline/IMG-6244.png" sold={true} />
          <ImageClickHover source="/walkingline/IMG-6256.png" sold={true} />
          <ImageClickHover source="/walkingline/IMG-7036.png" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10">
          <ImageClickHover source="/walkingline/IMG-7038.png" />
          <ImageClickHover source="/walkingline/IMG-7246.png" />
          <ImageClickHover source="/walkingline/IMG-7326.png" />
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10 mb-10">
          <ImageClickHover source="/walkingline/IMG-7331.png" gap={true} />
          <ImageClickHover source="/walkingline/IMG-7332.png" />
        </div>
      </div>
    </>
  );
}
