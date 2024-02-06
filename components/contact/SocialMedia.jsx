import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaPinterest } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <section className="flex  flex-col md:flex-row md:items-center md:justify-around justify-evenly pt-5 md:pt-0 w-full md:mt-5">
      <div className="flex justify-around md:justify-evenly w-full">
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
      <div className="flex justify-around mt-5 md:mt-0 md:items-center md:justify-around w-full">
        <Link
          href="https://www.saatchiart.com/albionvu"
          target="_blank"
          className="flex text-black tracking-wider	items-center"
        >
          <Image
            className="mr-3"
            src="/saatchiartLogo.png"
            alt="saatchiart logo"
            width={24}
            height={25}
          />
          SAATCHI ART
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
      </div>
    </section>
  );
};

export default SocialMedia;
