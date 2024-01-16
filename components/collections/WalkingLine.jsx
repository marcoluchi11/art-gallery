import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function WalkingLine() {
  return (
    <>
      <Description
        text="Explore a captivating collection of art pieces that captivate the senses
        with their dynamic textures and vibrant hues. This diverse compilation
        features works on both paper and canvas, each bearing a unique
        expression of creativity. The artists draw inspiration from the
        intricate patterns of crocodile skin, infusing the pieces with a bold
        and daring energy. The textures, ranging from subtle to pronounced,
        invite tactile exploration, creating a multisensory experience. Bold
        colors leap from the surface, intertwining in a dance that commands
        attention and sparks emotions. This collection is a celebration of the
        fusion between the raw beauty of nature and the artists' audacious
        use of color and texture, resulting in a visual feast for art
        enthusiasts seeking a bold and textured journey"
      />
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/walkingline/185121.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185144.jpg"
            sold={true}
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185212.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/walkingline/185232.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185410.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185504.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/walkingline/185736.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover
            source="/walkingline/185308.jpg"
            text="WALKING THROUGH THE LINE 19X24’ ACRYLICS OVER PAPER"
          />
          <ImageClickHover source="/walkingline/IMG-6244.png" sold={true} />
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover source="/walkingline/IMG-6256.png" sold={true} />
            <ImageClickHover source="/walkingline/IMG-7036.png" />
            <ImageClickHover source="/walkingline/IMG-7038.png" />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover source="/walkingline/IMG-7246.png" />
          <ImageClickHover source="/walkingline/IMG-7326.png" />
          <ImageClickHover
            source="/walkingline/IMG-7331.png"
            gap={true}
            sold={true}
          />
        </div>

        <div className="flex flex-wrap md:flex-row md:justify-start gap-5  w-full mt-10 mb-10">
          <ImageClickHover source="/walkingline/IMG-7332.png" sold={true} />
        </div>
      </div>
    </>
  );
}
