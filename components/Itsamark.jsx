import Link from "next/link";
import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Itsamark() {
  return (
    <>
      <InquirePrints />
      <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
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
        <h1 className="uppercase text-center text-3xl my-3">
          prints available
        </h1>
      </div>
    </>
  );
}
