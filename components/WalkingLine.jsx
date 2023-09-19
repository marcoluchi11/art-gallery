import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function WalkingLine() {
  return (
    <>
      <InquirePrints />
      <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
        <ImageClickHover source="/walkingline/185121.jpg" />
        <ImageClickHover source="/walkingline/185144.jpg" />
        <ImageClickHover source="/walkingline/185212.jpg" />
        <ImageClickHover source="/walkingline/185232.jpg" />
        <ImageClickHover source="/walkingline/185308.jpg" />
        <ImageClickHover source="/walkingline/185410.jpg" />
        <ImageClickHover source="/walkingline/185504.jpg" />
        <ImageClickHover source="/walkingline/185736.jpg" />
        <ImageClickHover source="/walkingline/185308.jpg" />
        <ImageClickHover source="/walkingline/IMG-6244.png" />
        <ImageClickHover source="/walkingline/IMG-6256.png" />
        <ImageClickHover source="/walkingline/IMG-6400.png" />
        <ImageClickHover source="/walkingline/IMG-7036.png" />
        <ImageClickHover source="/walkingline/IMG-7038.png" />
        <ImageClickHover source="/walkingline/IMG-7246.png" />
        <ImageClickHover source="/walkingline/IMG-7326.png" />
        <ImageClickHover source="/walkingline/IMG-7331.png" />
        <ImageClickHover source="/walkingline/IMG-7332.png" />
        <ImageClickHover source="/walkingline/IMG-7333.png" />
        <h1 className="uppercase text-center text-3xl my-3">
          prints available
        </h1>
      </div>
    </>
  );
}
