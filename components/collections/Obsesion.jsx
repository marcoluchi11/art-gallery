"use client";
import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function Obsesion() {
  return (
    <>
      <Description
        text="Step into the grandeur of the largest collection of artwork, a symphony
        of artistic expression that transcends boundaries and captivates the
        senses. This expansive ensemble boasts a diverse array of techniques,
        where big arch shapes sweep across canvases, dynamic splashes of color
        create a lively choreography, and sharp lines carve out bold narratives.
        The palette is a vivid spectrum of hues, each shade contributing to a
        visual feast that unfolds with breathtaking intensity.
        In this vast collection, depth and texture become protagonists, inviting
        the observer to not only witness but also to feel the layers of artistic
        exploration. Every stroke, whether it's a sweeping arch or a
        precise line, contributes to the narrative of this visual odyssey. The
        bold colors command attention, establishing a magnetic presence that
        draws the viewer into a world where artistic innovation knows no bounds.
        Experience the sheer magnitude of this collection, where the
        amalgamation of different techniques creates a tapestry of creativity
        that leaves an indelible mark on the observer's perception of art.
        It's not merely a collection; it's an immersive journey
        through the boundless realms of artistic imagination and skill."
      />
      <InquirePrints />

      <div
        className={`flex flex-wrap  mt-[80px] 
        }  `}
      >
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7254.jpg"
            sold={true}
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7274.jpg"
            sold={true}
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7266.jpg"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*93 D\ 56x53’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7257.jpg"
            sold={true}
          />
        </div>

        <div className="flex flex-wrap md:flex-row gap-5 md:gap-0 w-full mt-10">
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7260.jpg"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 55x53’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7258.jpg"
            sold={true}
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7259.jpg"
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7267.jpg"
            sold={true}
          />
          <div className="flex flex-wrap md:flex-row gap-5 md:gap-0 w-full mt-10">
            <ImageClickHover
              text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
              source="/obsession/IMG-7264.jpg"
              sold={true}
            />

            <ImageClickHover
              text="Composition 20*93 D\ 60x55’ ACRYLICS OVER CANVAS"
              source="/obsession/131038.png"
              sold={true}
            />
          </div>
        </div>
        <div
          className="flex flex-wrap md:flex-row gap-5   w-full mt-10
        "
        >
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7269.jpg"
            sold={true}
          />
          <ImageClickHover
            text="OBSESSION 80X60’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7270.jpg"
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7271.jpg"
            sold={true}
          />
          <ImageClickHover
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7272.jpg"
            sold={true}
          />
          <div className="flex flex-wrap md:flex-row gap-5 md:gap-0 w-full mt-10">
            <ImageClickHover
              text="OBSESSION 54X54’ ABSTRACT ACRYLIC AND OIL OVER CANVAS"
              source="/obsession/IMG-7279.jpg"
            />

            <ImageClickHover
              text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
              source="/obsession/IMG-7278.jpg"
            />
            <ImageClickHover
              text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
              source="/obsession/IMG-7265.jpg"
              sold={true}
            />
            <ImageClickHover
              text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
              source="/obsession/obsession1.jpg"
            />
          </div>
        </div>

        <div className="flex  flex-wrap md:flex-row gap-5  mt-10 w-full mb-10">
          <ImageClickHover
            text="Composition 20*93 D\ 55x50’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7255.jpg"
            sold={true}
          />
          <ImageClickHover
            source="/obsession/IMG-6400.png"
            text="OBSESSION 58X45’ ACRYLICS OVER CANVAS"
            sold={true}
          />
          <ImageClickHover
            source="/obsession/oakbluffs.png"
            text="OBSESSION 52X57’ ACRYLICS OVER CANVAS"
          />
        </div>
      </div>
    </>
  );
}

/* `
 <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
        <ImageClickHover
          text="OBBESSION 58X45`’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7254.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 55x50’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7255.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 52x52’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7256.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 56x53’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7257.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 55x53’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7258.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7259.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7260.jpg"
        />
        <div className="flex">
          <ImageClickHover
            text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
            source="/obsession/IMG-7263.jpg"
            sold={true}
          />
        </div>
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7264.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7265.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7266.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7267.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7269.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7270.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7271.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7272.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7274.jpg"
          sold={true}
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7278.jpg"
        />
        <ImageClickHover
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
          source="/obsession/IMG-7279.jpg"
        />
        <ImageClickHover
          source="/walkingline/IMG-6400.png"
          text="OBBESSION 58X45’ ACRYLICS OVER CANVAS"
        />
        <ImageClickHover source="/walkingline/IMG-7333.png" />
        <div className="lg:flex w-[500px]">
          <div className="hidden lg:flex">
            <Carusel arrows={true} />
          </div>
          <div className="flex lg:hidden">
            <Carusel arrows={false} />
          </div>
        </div>
        <h1 className="uppercase text-center text-3xl my-3">
          prints available
        </h1>
      </div>
 */
