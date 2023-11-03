import Image from "next/image";

export default function HomeImages() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/homeimage1copy.jpg"
        className="w-[600px] mb-10 md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
      />
      <Image
        src="/homeimage2copy.jpg"
        className="w-[600px] mb-10   md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
      />

      <Image
        src="/homeimage3copy.jpg"
        className="w-[600px] mb-10 md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
      />
      <Image
        src="/homeimage5copy.jpg"
        className="w-[600px] mb-10 md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
      />
      <Image
        src="/homeimage4copy.jpg"
        className="w-[600px] mb-[200px] md:mb-[250px] md:w-[1000px]"
        alt="homepage painting"
        width={800}
        height={800}
      />
    </div>
  );
}
