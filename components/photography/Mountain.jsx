import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";
import Landscape from "../Landscape";

export default function Mountain() {
  return (
    <>
      <InquirePrints />
      <Landscape
        source="/dailycapture/mountain/collage-mountain-landscape.png"
        alt="collage mountain"
      />
      <div
        className={`flex flex-col md:flex-row flex-wrap justify-center items-center  mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5 items-center  w-full mt-10">
          <ImageClickHover
            source="/dailycapture/mountain/IMG-0966.jpg"
            sizeW={180}
            className="mx-auto"
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-0998.jpg"
            sizeW={180}
            className="mx-auto"
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-1011.jpg"
            sizeW={180}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5 items-center  w-full mt-10">
          <ImageClickHover
            source="/dailycapture/mountain/IMG-1012.jpg"
            sizeW={180}
            className="mx-auto"
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-1013.jpg"
            sizeW={180}
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-5649.jpg"
            sizeW={180}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5 items-center  w-full mt-10">
          <ImageClickHover
            source="/dailycapture/mountain/IMG-7572.jpg"
            sizeW={180}
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-7598.jpg"
            sizeW={180}
          />
          <ImageClickHover
            source="/dailycapture/mountain/IMG-7600.jpg"
            sizeW={180}
          />
        </div>
      </div>
    </>
  );
}
