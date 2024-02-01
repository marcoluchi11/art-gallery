import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa6";

export default function ContactBody() {
  return (
    <div className="flex flex-col  text-center mt-[150px]">
      <h1 className=" text-3xl mt-10 md:text-5xl font-thin tracking-tight text-black">
        GET IN TOUCH WITH ME
      </h1>
      <p className="my-10 font-light md:w-full md:mx-0 mx-3	 text-black">
        Got a question about us? Are you interested in partnering with us? Have
        some suggestions or just want to say Hi? Just contact us.
      </p>
      <div className="flex justify-center mt-5">
        <FaEnvelope className="text-3xl mx-3" color="black" fill="black" />
        <p className="underline cursor-pointer text-black">
          albionvu.art@gmail.com
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-5 text-black mb-5">
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
      </div>
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
        </p>
      </div>
    </div>
  );
}
