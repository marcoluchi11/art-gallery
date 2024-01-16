import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function Itsamark() {
  return (
    <>
      <Description
        text="Experience the allure of art adorned with exquisite gold details, where
        the intricate interplay of light and shadow accentuates the finer
        elements of the masterpiece. Each stroke of gold leaf or carefully
        crafted gilded embellishment adds a touch of opulence, transforming the
        artwork into a captivating symphony of elegance and luxury. This fusion
        of artistic skill and precious metal elevates the viewer's
        perception, inviting them to delve into a world where creativity and
        refinement converge in a dazzling display of visual splendor"
      />
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144241.jpg"
          />
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144321.jpg"
          />
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144419.jpg"
          />
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144450.jpg"
          />
          <ImageClickHover
            text="AIt’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144518.jpg"
          />
        </div>
        <div className="flex flex-wrap  md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144601.jpg"
          />
          <ImageClickHover
            text="It’s a mark- 19x24 Acrylic on paper with gold"
            source="/itsamark/144633.jpg"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ Abstract Art over acrylics"
            source="/itsamark/IMG-7299.jpg"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ Abstract Art over acrylics"
            source="/itsamark/IMG-7300.jpg"
            sold={true}
          />
        </div>
      </div>
    </>
  );
}
