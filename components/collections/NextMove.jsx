import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function NextMove() {
  return (
    <>
      <Description
        text="A seamless exploration of 'The Line Path' reimagined through a prism of unique aesthetics and dimensions. Each piece in this collection embodies the essence of nuance, with its own distinct tone and character. With groundbreaking technique, infusing each creation with a deeply personal touch.
Drawing inspiration from the artist's childhood memories, this collection delves into a contemporary rendition, weaving together elements from the past with a modern sensibility. The tools employed in crafting these pieces become integral to the narrative, echoing a journey back to the artist's roots and the influences that shaped their artistic vision.
From the stark elegance of Black to the vibrant energy of Lime, from the regal richness of Burgundy to the serene tranquility of Light Blue, this collection showcases a harmonious interplay of this theme and contrasts. Each piece stands on its own, yet together they are cohesive , inviting each other as one.
Experience the balance, the beauty, and the boundless creativity of our latest collection, where tradition meets innovation, and the ordinary is transformed into the extraordinary."
      />
      <InquirePrints />
      <div
        className={`flex flex-wrap mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/nextmove/nextmove1.png"
            text="NEXT MOVE 1 52X62’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove2.png"
            text="NEXT MOVE 2 60X60’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove3.png"
            text="NEXT MOVE 3 52X62’ ACRYLICS OVER CANVAS"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/nextmove/nextmove4.png"
            text="NEXT MOVE 4 62X66’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove5.png"
            text="NEXT MOVE 5 52X59’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove6.png"
            text="NEXT MOVE 6 57X57’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove7.png"
            text="NEXT MOVE 7 62X82’ ACRYLICS OVER CANVAS"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            source="/nextmove/nextmove8.png"
            text="NEXT MOVE 8 45X45’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/nextmove/nextmove9.png"
            text="NEXT MOVE 9 45X45’ ACRYLICS OVER CANVAS"
          />

          <ImageClickHover
            source="/nextmove/nextmove10.png"
            text="NEXT MOVE 10 45X45’ ACRYLICS OVER CANVAS"
          />

          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/nextmove/nextmove11.png"
              text="NEXT MOVE 11 62X82’ ACRYLICS OVER CANVAS"
              sizeW={600}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/nextmove/nextmove12.png"
              text="NEXT MOVE 12 100X47’ ACRYLICS OVER CANVAS"
              sizeW={600}
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/nextmove/nextmove13.png"
              text="NEXT MOVE 13 112X62’ ACRYLICS OVER CANVAS"
              sizeW={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
