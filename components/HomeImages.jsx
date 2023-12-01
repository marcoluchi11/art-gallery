import Image from "next/image";

export default function HomeImages() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/homeimage1.jpg"
        className=" mb-10 "
        alt="homepage painting"
        priority
        width={850}
        height={800}
      />
      <Image
        src="/homeimage2.jpg"
        className=" mb-10 "
        alt="homepage painting"
        width={850}
        priority
        height={800}
      />
      <Image
        src="/homeimage3.jpg"
        className=" mb-[200px] md:mb-[250px] "
        alt="homepage painting"
        width={850}
        height={800}
        priority
      />
    </div>
  );
}
