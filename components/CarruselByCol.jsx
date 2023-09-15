"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarruselByCol() {
  return (
    <div>
      <Carousel stopOnHover={true} showArrows={true} useKeyboardArrows>
        <div>
          <Image
            src="/obsession/IMG-7254.jpg"
            alt="holis"
            width={600}
            height={400}
          />
          <p className="legend">
            OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS
          </p>
        </div>
        <div>
          <Image
            src="/obsession/IMG-7255.jpg"
            alt="holis"
            width={600}
            height={400}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image
            src="/obsession/IMG-7256.jpg"
            alt="holis"
            width={600}
            height={400}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
