import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Movement() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10">
          {/* 3 JUNTAS */}
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132853.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132946.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133015.png"
          />
        </div>
        {/* 3 individuales seguidas */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10">
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133557.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133634.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133717.png"
            sold={true}
          />
        </div>
        {/* SEGUNDA DE 3 JUNTAS */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full mt-10 mb-10">
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133801.png"
            sold={true}
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133842.png"
            sold={true}
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133927.png"
            sold={true}
          />
        </div>
      </div>
    </>
  );
}
