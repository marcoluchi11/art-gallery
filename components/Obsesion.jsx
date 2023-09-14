import Image from "next/image";
import Link from "next/link";

export default function Obsesion() {
  return (
    <>
      <Link
        href="mailto:albionvu.art@gmail.com"
        target="_blank"
        className=" flex justify-center items-center mt-[150px] underline"
      >
        Click here to inquire about available work and pricing.
      </Link>
      <div className="flex flex-row flex-wrap justify-center md:flex-col md:items-center md:flex-wrap mt-[80px] ">
        <Link href="/artwork/obsession/IMG-7254">
          <Image
            className="mb-20"
            src="/obsession/IMG-7254.jpg"
            alt="painting"
            width={800}
            height={600}
          />
        </Link>
        <Link href="/artwork/obsession/IMG-7255">
          <Image
            className="mr-2 mb-2"
            src="/obsession/IMG-7255.jpg"
            alt="painting"
            width={800}
            height={600}
          />
        </Link>
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7256.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7257.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7258.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <div className="flex flex-col justify-center items-center">
          <Image
            className="mr-2 mb-2"
            src="/obsession/IMG-7259.jpg"
            alt="painting"
            width={200}
            height={300}
          />
          <p className=" text-sm font-thin mt-1 underline">
            OBBESSION 2020:58X45’ ABSTRACT PAINTING ON ACRYLICS
          </p>
        </div>
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7260.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7261.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7263.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7264.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7265.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7266.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7267.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7269.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7270.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7271.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7272.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7274.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7278.jpg"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/obsession/IMG-7279.jpg"
          alt="painting"
          width={200}
          height={300}
        />
      </div>
    </>
  );
}
