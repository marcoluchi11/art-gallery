import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function DirectionsEarth() {
  return (
    <>
      <InquirePrints />
      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover source="/directionstoearth/directions1.jpg" />
          <ImageClickHover
            source="/directionstoearth/directions2.jpg"
            sold={true}
          />
          <ImageClickHover source="/directionstoearth/directions3.jpg" />
        </div>
      </div>
    </>
  );
}
