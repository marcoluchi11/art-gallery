import ImageClickHover from "./ImageClickHover";
import InquirePrints from "./InquirePrints";

export default function Itsatouch() {
  return (
    <>
      <InquirePrints />
      <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
        <ImageClickHover source="/itsatouch/IMG-7318.jpg" />
        <ImageClickHover source="/itsatouch/IMG-7319.jpg" />
        <ImageClickHover source="/itsatouch/IMG-7320.jpg" />
        <ImageClickHover source="/itsatouch/IMG-7321.jpg" />
        <ImageClickHover source="/itsatouch/IMG-7322.jpg" />
        <h1 className="uppercase text-center text-3xl my-3">
          prints available
        </h1>
      </div>
    </>
  );
}
