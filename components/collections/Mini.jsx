import Link from "next/link";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";
import Description from "../Description";
import NuancesDepth from "./NuancesDepth";

export default function Mini() {
  return (
    <>
      <Description
        text=" Embark on a journey of art adorned with exquisite gold details, where
        the intricate interplay of light and shadow accentuates the finer
        elements of the masterpiece. Each stroke is carefully crafted gilded
        embellishment adds a touch of opulence, transforming the artwork into a
        captivating symphony of organic and fluid shapes. This fusion of
        artistic skill and precious tones elevates the viewer's perception,
        inviting them to delve into a world where creativity and refinement
        converge in a dazzling display of visual splendor."
      />
      <InquirePrints />

      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <NuancesDepth />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141039.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141124.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141159.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141231.jpg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141256.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141327.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141352.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141419.jpg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141450.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141517.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141539.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141604.jpg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141632.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141650.jpg"
          />

          <ImageClickHover
            gap={true}
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141711.jpg"
          />
          <ImageClickHover
            gap={true}
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141738.jpg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            gap={true}
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141817.jpg"
          />

          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141839.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141926.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141904.jpg"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/141950.jpg"
          />
          <ImageClickHover
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/142034.jpg"
          />

          <ImageClickHover
            gap={true}
            text="ATHENES 11x15
Acrylics on paper"
            source="/mini/142319.jpg"
          />
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
            <ImageClickHover
              gap={true}
              text="ATHENES 11x15
Acrylics on paper"
              source="/mini/142335.jpg"
            />
            <ImageClickHover
              gap={true}
              text="ATHENES 11x15
Acrylics on paper"
              source="/mini/142357.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
