import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function Movement() {
  return (
    <>
      <p className="text-xl  font-light mx-10 leading-10 mt-10">
        Dive into a realm of artistic fluidity with this captivating set of
        pieces, where soft colors blend seamlessly across the paper, forming a
        mesmerizing dance of hues. Crafted using a delicate sponge technique on
        paper, each artwork in this ensemble exudes a graceful harmony of form
        and color. The fluid shapes, gracefully rendered, evoke a sense of
        organic movement, inviting the viewer to embark on a visual journey of
        serene beauty. As a cohesive set, these art pieces create a tranquil and
        unified atmosphere, bringing a touch of gentle sophistication to any
        space. Immerse yourself in the soothing allure of these creations, where
        the union of fluid shapes and soft colors transcends traditional
        boundaries, leaving an indelible impression on the observer&apos;s
        senses.
      </p>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          {/* 3 JUNTAS */}
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132853.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/132946.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133015.png"
          />
        </div>
        {/* 3 individuales seguidas */}
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133557.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133634.png"
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X24’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133717.png"
            sold={true}
          />
        </div>
        {/* SEGUNDA DE 3 JUNTAS */}
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133801.png"
            sold={true}
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133842.png"
            sold={true}
          />
          <ImageClickHover
            text="MOVEMENT 2020:19X22’ ABSTRACT PAINTING ON ACRYLICS"
            source="/movement/133927.png"
            sold={true}
          />
        </div>
      </div>
    </>
  );
}
