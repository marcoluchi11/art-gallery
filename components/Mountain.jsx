import ImageHoverOff from "./ImageHoverOff";
import InquirePrints from "./InquirePrints";
import Landscape from "./Landscape";

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
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-0966.jpg"
          sizeH={500}
          sizeW={500}
          className="mx-auto"
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-0998.jpg"
          sizeH={400}
          sizeW={400}
          className="mx-auto"
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-1011.jpg"
          sizeH={400}
          sizeW={400}
          className="mx-auto"
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-1012.jpg"
          sizeH={400}
          sizeW={400}
          className="mx-auto"
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-1013.jpg"
          sizeH={400}
          sizeW={400}
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-5649.jpg"
          sizeH={400}
          sizeW={400}
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-7572.jpg"
          sizeH={400}
          sizeW={400}
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-7598.jpg"
          sizeH={400}
          sizeW={400}
        />
        <ImageHoverOff
          source="/dailycapture/mountain/IMG-7600.jpg"
          sizeH={400}
          sizeW={400}
        />
      </div>
    </>
  );
}
