import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Patches() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover source="/patches/patches1.jpg" />
          <ImageClickHover source="/patches/patches2.jpg" />
          <ImageClickHover source="/patches/patches3.jpg" />
          <ImageClickHover source="/patches/patches4.jpg" />
          <ImageClickHover source="/patches/patches5.jpg" />
          <ImageClickHover source="/patches/patches6.jpg" />
          <ImageClickHover source="/patches/patches7.jpg" />
          <ImageClickHover source="/patches/patches8.jpg" />
        </div>
      </div>
    </>
  );
}
