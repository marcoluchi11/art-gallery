import Link from "next/link";
import ImageClickHover from "./ImageClickHover";

export default function Movement() {
  return (
    <>
      <Link
        href="mailto:albionvu.art@gmail.com?subject=Inquiry%20About%20Pricing&body=Hello%20there%2C%0A%0AI%20am%20interested%20in%20inquiring%20about%20the%20pricing%20of%20a%20specific%20piece%20and%20would%20like%20to%20receive%20a%20full%20catalogue.%0A%0AThank%20you.%0A%0A"
        target="_blank"
        className=" flex justify-center items-center mt-[150px] uppercase font-light  "
      >
        Click here to inquire about available work and pricing.
      </Link>
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
          />
          <ImageClickHover
            margin="3"
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133842.png"
          />
          <ImageClickHover
            margin="3"
            sizeH="600"
            sizeW="400"
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133927.png"
          />
        </div>
      </div>
    </>
  );
}
