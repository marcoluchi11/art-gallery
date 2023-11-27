import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Patches() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-col flex-wrap justify-center md:flex-col items-center md:flex-wrap mt-[80px] ">
        <ImageClickHover
          source="/patches/patches1.jpg"
          sizeW={800}
          sizeH={800}
        />
        <ImageClickHover
          source="/patches/patches2.jpg"
          sizeW={800}
          sizeH={800}
        />
        <ImageClickHover
          source="/patches/patches3.jpg"
          sizeW={800}
          sizeH={800}
        />
        <ImageClickHover
          source="/patches/patches4.jpg"
          sizeW={800}
          sizeH={800}
        />
        <ImageClickHover
          source="/patches/patches5.jpg"
          sizeW={800}
          sizeH={800}
        />
      </div>
    </>
  );
}
