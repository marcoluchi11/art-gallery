import Image from "next/image";

export default function Landscape({ source, alt }) {
  return (
    <div className="">
      <Image
        src={source}
        alt={alt}
        width={1500}
        height={500}
        className="mt-10"
      />
    </div>
  );
}
