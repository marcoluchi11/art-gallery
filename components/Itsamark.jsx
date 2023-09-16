import Link from "next/link";
import ImageClickHover from "./ImageClickHover";

export default function Itsamark() {
  return (
    <>
      <Link
        href="mailto:albionvu.art@gmail.com?subject=Inquiry%20About%20Pricing&body=Hello%20there%2C%0A%0AI%20am%20interested%20in%20inquiring%20about%20the%20pricing%20of%20a%20specific%20piece%20and%20would%20like%20to%20receive%20a%20full%20catalogue.%0A%0AThank%20you.%0A%0A"
        target="_blank"
        className=" flex justify-center items-center mt-[150px] uppercase font-light  "
      >
        Click here to inquire about available work and pricing.
      </Link>
      <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144241.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144321.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144419.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144450.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144518.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144601.jpg"
        />
        <ImageClickHover
          text="ATHENES 11x15
Acrylics on paper"
          source="/itsamark/144633.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 19x24’ Abstract Art over acrylics"
          source="/itsamark/IMG-7299.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 19x24’ Abstract Art over acrylics"
          source="/itsamark/IMG-7300.jpg"
        />
      </div>
    </>
  );
}
