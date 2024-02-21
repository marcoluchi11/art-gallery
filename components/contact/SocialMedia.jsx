import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaPinterest } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <section className="flex  flex-col md:flex-row md:items-center md:justify-around justify-around pt-5 md:pt-0 w-full md:mt-5">
      <div className="flex flex-col items-center md:flex-row justify-around md:justify-around w-full">
        <div className="flex justify-around w-full">
          <Link href="https://www.instagram.com/vualbion/" target="_blank">
            <FaInstagram
              className="text-2xl text-black"
              color="black"
              fill="black"
            />
          </Link>
          <Link href="mailto:albionvu.art@gmail.com" target="_blank">
            <FaRegEnvelope className=" text-2xl" color="black" fill="black" />
          </Link>
          <Link
            href="https://www.pinterest.com/albionv2/albion-vu-original-artwork/
"
            target="_blank"
          >
            <FaPinterest className=" text-2xl" color="black" fill="black" />
          </Link>
        </div>
        <div className="flex justify-around w-full mt-5 md:mt-0 items-center">
          <Link
            href="https://www.saatchiart.com/albionvu"
            target="_blank"
            className="flex text-black tracking-wider	items-center"
          >
            <Image
              className="mr-1"
              src="/saatchiartLogo.png"
              alt="saatchiart logo"
              width={24}
              height={25}
            />
            <p className="text-xs">SAATCHI ART</p>
          </Link>
          <Link
            href="https://www.turningart.com/artist/albion-vu"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/turningart.webp"
              alt="turning art logo"
              width={100}
              height={25}
            />
          </Link>
          <Link
            className="bg-[#0E3F54] p-1 rounded-sm"
            href="https://www.thecarpentryshopco.com/collections/art"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/tcsc.webp"
              alt="the carpentry logo"
              width={100}
              height={25}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
