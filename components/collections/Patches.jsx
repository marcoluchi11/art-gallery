import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function Patches() {
  return (
    <>
      <Description
        text="Step into a world of vibrant modernity with these large-scale art
        pieces, where a riot of colors converges in a bold dance of brush
        strokes. Each canvas becomes a testament to direct and daring
        expression, as the artist's hand paints the very essence of
        contemporary creativity. The common thread among these masterpieces is
        the fearless use of bold brush strokes, each stroke a declaration of
        artistic intent.
        The colorful palette, rich and diverse, creates a symphony of
        hues that captivates the eye and sparks the imagination. These artworks
        transcend traditional boundaries, embracing a modern theme that
        resonates with the dynamic energy of the present. With every stroke, the
        canvas comes alive, a testament to the artist's direct engagement
        with the medium.
        In this collection, the marriage of vivid colors and bold brushwork
        invites the observer to witness the unapologetic celebration of modern
        artistic expression. These large-scale pieces are not merely
        compositions; they are vibrant narratives that unfold with every stroke,
        inviting the viewer to partake in the exhilarating journey of
        contemporary creativity."
      />
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            source="/patches/patches1.jpg"
            text="PATCHES 56X60’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover
            source="/patches/patches2.jpg"
            text="PATCHES 56X60’ ACRYLICS OVER CANVAS"
          />
          <ImageClickHover source="/patches/patches3.jpg" sold={true} />
          <ImageClickHover
            source="/patches/patches4.jpg"
            text="PATCHES 56X60’ ACRYLICS OVER CANVAS"
            sold={true}
          />
          <ImageClickHover
            source="/patches/patches5.jpg"
            text="PATCHES 56X60’ ACRYLICS OVER CANVAS"
          />
        </div>
      </div>
    </>
  );
}
