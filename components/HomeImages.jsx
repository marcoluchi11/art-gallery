import Image from "next/image";

export default function HomeImages() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/homeimage1.jpg"
        className="w-[600px] mb-10 md:w-[1000px]"
        alt="homepage painting"
        priority
        width={800}
        height={800}
      />
      <Image
        src="/homeimage2.jpg"
        className="w-[600px] mb-10 md:w-[1000px]"
        alt="homepage painting"
        width={800}
        priority
        height={800}
      />
      <Image
        src="/homeimage3.jpg"
        className="w-[600px] mb-[200px] md:mb-[250px] md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
        priority
      />
    </div>
  );
}
