import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function EndDecember() {
  return (
    <>
      <Description text="End of december DESCRIPTION" />
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember3.png"
              text="END OF DECEMBER 3 68X75’ ACRYLICS OVER CANVAS"
              sizeW={1000}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
            <ImageClickHover
              source="/endofdecember/endofdecember9.png"
              text="END OF DECEMBER 9 56X60’ ACRYLICS OVER CANVAS"
              sizeW={1000}
            />
          </div>

          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember7.png"
              text="END OF DECEMBER 7 76X76’ ACRYLICS OVER CANVAS"
              sizeW={1000}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember2.png"
              text="END OF DECEMBER 2 47X78’ ACRYLICS OVER CANVAS"
              sizeH={1000}
              sizeW={1300}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember5.png"
              text="END OF DECEMBER 5 78X55’ ACRYLICS OVER CANVAS"
              sizeH={800}
              sizeW={1300}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember4.png"
              text="END OF DECEMBER 4 70X82’ ACRYLICS OVER CANVAS"
              sizeW={900}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember6.png"
              text="END OF DECEMBER 6 56X56’ ACRYLICS OVER CANVAS"
              sizeW={900}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mb-20">
            <ImageClickHover
              source="/endofdecember/endofdecember1.png"
              text="END OF DECEMBER 1 75X70’ ACRYLICS OVER CANVAS"
              sizeW={950}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-0">
            <ImageClickHover
              source="/endofdecember/endofdecember8.png"
              text="END OF DECEMBER 8-1 46X38’ ACRYLICS OVER CANVAS"
              sizeW={450}
            />
            <ImageClickHover
              source="/endofdecember/endofdecember8_1.png"
              text="END OF DECEMBER 8-2 46X38’ ACRYLICS OVER CANVAS"
              sizeW={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
