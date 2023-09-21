import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Movement() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-row flex-wrap justify-center md:flex-row md:flex-wrap mt-[80px] ">
        <div className="flex">
          {/* 3 JUNTAS */}
          <ImageClickHover
            sizeH="400"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132853.png"
          />
          <ImageClickHover
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132946.png"
          />
          <ImageClickHover
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133015.png"
          />
        </div>
        {/* 3 individuales seguidas */}
        <div className="flex flex-col">
          <ImageClickHover
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133557.png"
          />
          <ImageClickHover
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133634.png"
          />
          <ImageClickHover
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133717.png"
            sold={true}
          />
        </div>
        {/* SEGUNDA DE 3 JUNTAS */}
        <div className="flex">
          <ImageClickHover
            margin="3"
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133801.png"
            sold={true}
          />
          <ImageClickHover
            margin="3"
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133842.png"
            sold={true}
          />
          <ImageClickHover
            margin="3"
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133927.png"
            sold={true}
          />
        </div>
        <h1 className="uppercase text-center text-3xl my-3">
          prints available
        </h1>
      </div>
    </>
  );
}
