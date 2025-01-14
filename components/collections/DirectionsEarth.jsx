import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function DirectionsEarth() {
  return (
    <>
      <Description
        text="Immerse yourself in the grandeur of large-scale art pieces that evoke
        the serene beauty of a sunset-lit landscape. These captivating
        creations, characterized by gentle textures and earth tones, unfold like
        a masterpiece of nature within the confines of a canvas. The warm
        embrace of brown colors, reminiscent of twilight hues, sets the tone for
        a tranquil visual journey. Bold yet delicate textures grace the
        expansive surfaces, offering a tactile experience that invites
        contemplation. The contrast within the artwork adds a layer of
        complexity, capturing the essence of the shifting tones during a sunset.
        Each stroke and nuance contributes to the harmonious interplay of
        elements, creating a symphony of visual poetry. In this collection, the
        fusion of earthy tones, bold textures, and subtle contrasts transports
        the viewer to a realm where art mirrors the subtleties of nature's
        beauty. Discover the magic within each large-scale piece, where the
        canvas becomes a window to the captivating allure of a sunset's
        embrace, rendered with both finesse and bold artistic expression."
      />
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            source="/directionstoearth/directions1.jpg"
            text="DIRECTIONS TO EARTH 49X54’ ACRYLICS OVER CANVAS"
            sizeW={500}
          />
          <ImageClickHover
            source="/directionstoearth/directions3.jpg"
            text="DIRECTIONS TO EARTH 54X54’ ACRYLICS OVER CANVAS"
            sizeW={500}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            source="/directionstoearth/directions2.jpg"
            sold={true}
            sizeW={500}
          />
          <ImageClickHover
            text="DIRECTIONS TO EARTH 52x52’ ACRYLICS OVER CANVAS"
            source="/directionstoearth/directions4.jpg"
            sizeW={500}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="DIRECTIONS TO EARTH 56x56’ ACRYLICS OVER CANVAS"
            source="/directionstoearth/directions5.jpg"
            sizeW={500}
          />
          <ImageClickHover
            text="DIRECTIONS TO EARTH 24 52x54’ ACRYLICS OVER CANVAS"
            source="/directionstoearth/directions24.png"
            sizeW={600}
          />
        </div>
      </div>
    </>
  );
}
