import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa6";
import DownloadButton from "../DownloadButton";

export default function ContactBody() {
  return (
    <div className="flex flex-col  text-center mt-[100px] md:mt-[130px]">
      <h1 className=" text-3xl mt-10 md:text-5xl font-thin tracking-tight text-black">
        GET IN TOUCH WITH ME
      </h1>
      <p className="my-10 font-light md:w-full md:mx-0 mx-3	 text-black uppercase">
        Got a question about us? Are you interested in partnering with us? Have
        some suggestions or just want to say Hi? Just contact us.
      </p>
      <div className="flex justify-center mt-5 items-center">
        <FaEnvelope className="text-3xl mx-3" color="black" fill="black" />
        <Link
          href="mailto:albionvu.art@gmail.com"
          className="underline cursor-pointer text-black uppercase"
        >
          albionvu.art@gmail.com
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 text-black mb-5">
        <Link
          href="https://www.instagram.com/vualbion/"
          target="_blank"
          className="flex justify-center underline"
        >
          <FaInstagram
            className="text-2xl text-black mx-3"
            color="black"
            fill="black"
          />
          vualbion
        </Link>
        <Link
          href="https://www.pinterest.com/albionv2/albion-vu-original-artwork/"
          target="_blank"
          className="flex justify-center underline mt-5 md:mt-0"
        >
          <FaPinterest
            className="text-2xl text-black mx-3"
            color="black"
            fill="black"
          />
          ALBION VU Original artwork
        </Link>
        <Link
          href="https://www.saatchiart.com/albionvu"
          target="_blank"
          className="flex justify-center items-center text-black tracking-wider	underline mt-5 md:mt-0"
        >
          <Image
            className="ml-3 mr-1"
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
          className="flex justify-center items-center text-black tracking-wider	underline mt-5 md:mt-0"
        >
          <Image
            className="mr-3 ml-3"
            src="/turningart.webp"
            alt="turning art logo"
            width={100}
            height={25}
          />
        </Link>
        <Link
          className="bg-[#0E3F54] p-1 rounded-sm mt-5 md:mt-0"
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
      <DownloadButton />
      <div className="flex justify-center mt-5 mb-10 md:mb-0">
        <p className="text-black">
          MEMBER AT THE CREATIVES REBUILD NEW YORK AND A GRANT WINNER TOP 100
          ARTIST OF THE YEAR
          <br />
          MEMBER AT:
          <br />
          SAATCHI ART
          <br />
          FINEARTAMERICA
          <br />
          SOCIETY6
          <br />
          TURNING ART
          <br />
          THE CARPENTRY SHOP CO
        </p>
      </div>
    </div>
  );
}
