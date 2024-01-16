import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";
export default function LinePath() {
  return (
    <>
      <Description
        text="Embark on a mesmerizing exploration of a collection comprising 11
        distinct pieces, each a testament to the captivating beauty of
        repetition. The theme that unites them is the incorporation of short,
        repetitive lines, creating a rhythmic dance across canvases of different
        scales. A meticulous precision guides the artist's hand, as
        achieving straight lines demands a focused and deliberate movement.
        Within this ensemble, the observer is drawn into a symphony of
        repetition, where the recurrence of short lines becomes a visual mantra.
        The subtle nuances of scale add a layer of complexity, requiring the
        artist to navigate varying dimensions with unwavering accuracy. Each
        piece resonates with a unique rhythm, inviting the viewer to immerse
        themselves in the deliberate cadence of these meticulously crafted
        compositions. In this collection, repetition is not just a theme; it is
        an art form that demands both concentration and finesse. Witness the
        convergence of precision and creativity as these 11 pieces weave a
        visual tapestry, where the beauty lies in the deliberate repetition of
        short lines—a testament to the artist's mastery of form and rhythm"
      />
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5 md:gap-10  w-full mt-10 mb-10">
          <ImageClickHover source="/linepath/linepath1.jpg" />
          <ImageClickHover
            source="/linepath/linepath2.jpg"
            text="LINE PATH 56x38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <ImageClickHover
            source="/linepath/linepath3.jpg"
            text="LINE PATH 58X43’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <ImageClickHover
            source="/linepath/linepath4.jpg"
            text="LINE PATH 80X60’ ACRYLICS AND OIL PASTEL OVER CANVAS"
          />
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/linepath/linepath5.jpg"
              text="LINE PATH 42X57’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath6.jpg"
              text="LINE PATH 56X56’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath7.jpg"
              text="LINE PATH 54X38’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath8.jpg"
              text="LINE PATH 55X34’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
            <ImageClickHover
              source="/linepath/linepath9.jpg"
              text="LINE PATH 56X44’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath10.jpg"
              text="LINE PATH 58X58’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
            <ImageClickHover
              source="/linepath/linepath11.jpg"
              text="LINE PATH 43X54’ ACRYLICS AND OIL PASTEL OVER CANVAS"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// LINE PATH 58X45’ ACRYLICS AND OIL PASTEL OVER CANVAS
