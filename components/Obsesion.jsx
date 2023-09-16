"use client";
import { ArtContext } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";

import ImageClickHover from "./ImageClickHover";

export default function Obsesion() {
  const { showModal } = useContext(ArtContext);
  // if (showModal) return <ModalMain />;
  return (
    <>
      <Link
        href="mailto:albionvu.art@gmail.com?subject=Inquiry%20About%20Pricing&body=Hello%20there%2C%0A%0AI%20am%20interested%20in%20inquiring%20about%20the%20pricing%20of%20a%20specific%20piece%20and%20would%20like%20to%20receive%20a%20full%20catalogue.%0A%0AThank%20you.%0A%0A"
        target="_blank"
        className=" flex justify-center items-center mt-[150px] uppercase font-light  "
      >
        Click here to inquire about available work and pricing.
      </Link>
      <div
        className={`flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] 
        }  `}
      >
        {/* HICE LO DE OPACITY Y HOVER */}
        {/* ACA EMPIEZA LAS IMAGENES */}
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7254.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 55x50’ Large Abstract Art over acrylics"
          source="/obsession/IMG-7255.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 52x52’ Large Abstract Art over acrylics"
          source="/obsession/IMG-7256.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 56x53’ Large Abstract Art over acrylics"
          source="/obsession/IMG-7257.jpg"
        />
        <ImageClickHover
          text="Composition 20*93 D\ 55x53’ Large Abstract Art over acrylics"
          source="/obsession/IMG-7258.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7259.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7260.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7263.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7264.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7265.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7266.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7267.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7269.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7270.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7271.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7272.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7274.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7278.jpg"
        />
        <ImageClickHover
          text="OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS"
          source="/obsession/IMG-7279.jpg"
        />
      </div>
    </>
  );
}
