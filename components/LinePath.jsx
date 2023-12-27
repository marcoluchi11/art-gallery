import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";
export default function LinePath() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover source="/homepage1.jpg" sizeW={150} />
          <ImageClickHover source="/homepage2.jpg" sizeW={150} />
          <ImageClickHover source="/homepage3.jpg" sizeW={150} />
          <ImageClickHover source="/homepage4.jpg" sizeW={150} />
          <ImageClickHover source="/homepage5.jpg" sizeW={150} />
          <ImageClickHover source="/homepage6.jpg" sizeW={150} />
        </div>
      </div>
    </>
  );
}
