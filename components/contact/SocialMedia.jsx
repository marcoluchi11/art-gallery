import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaPinterest } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <section className="flex justify-evenly pt-5 md:pt-0 w-full md:mt-5">
      <Link href="https://www.instagram.com/vualbion/" target="_blank">
        <FaInstagram
          className="text-2xl text-white"
          color="white"
          fill="white"
        />
      </Link>
      <Link href="mailto:albionvu.art@gmail.com" target="_blank">
        <FaRegEnvelope className=" text-2xl" color="white" fill="white" />
      </Link>
      <Link
        href="https://www.pinterest.com/albionv2/albion-vu-original-artwork/
"
        target="_blank"
      >
        <FaPinterest className=" text-2xl" color="white" fill="white" />
      </Link>
      <Link
        href="https://www.saatchiart.com/albionvu"
        target="_blank"
        className="flex text-white tracking-wider	"
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
    </section>
  );
};

export default SocialMedia;
