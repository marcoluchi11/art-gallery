import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaRegEnvelope } from "react-icons/fa6";
import Copyright from "./Copyright";

export default function DesktopSocial() {
  return (
    <div>
      <div className="flex flex-col justify-around w-full items-center">
        <div className="flex justify-around items-center mb-3 w-full">
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
          <Link
            href="https://www.saatchiart.com/albionvu"
            target="_blank"
            className="flex text-black tracking-wider	items-center"
          >
            <Image
              className="mr-1"
              src="/saatchiartLogo.png"
              alt="saatchiart logo"
              width={30}
              height={25}
            />
            {/* <p className="text-xs">SAATCHI ART</p> */}
          </Link>
          <Copyright />
        </div>
        <div className="flex justify-around items-center w-full mt-2">
          <Link
            href="https://www.turningart.com/artist/albion-vu"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/turningart.webp"
              alt="turning art logo"
              width={75}
              height={25}
            />
          </Link>
          <Link
            href="https://web.nala.art/gallery-share/Albionvuart"
            target="_blank"
            className="rounded-md mr-3"
          >
            <Image src="/nala.png" alt="NALA logo" width={75} height={25} />
          </Link>
          <Link
            href="https://parrotart.io/profile/1714740988246x324151164498905900"
            target="_blank"
            className="rounded-md mr-3"
          >
            <Image
              src="/parrotlogo.png"
              alt="Parrot logo"
              width={50}
              height={25}
              className="rounded-md"
            />
          </Link>
          <Link
            href="https://artrepreneur.com/p/QHtSwMHCikegBGt7W"
            target="_blank"
            className="rounded-md mr-3"
          >
            <Image
              src="/artepreneur.png"
              alt="Artepreneur logo"
              width={100}
              height={25}
            />
          </Link>
          <Link
            href="https://theartling.com/en/artist/albion-vu/"
            target="_blank"
            className="rounded-md mr-3"
          >
            <Image
              src="/artling.png"
              alt="Artling logo"
              width={75}
              height={25}
            />
          </Link>
          <Link
            className="bg-[#0E3F54] pt-1 pl-1 pb-1 rounded-md"
            href="https://www.thecarpentryshopco.com/collections/art"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/tcsc.webp"
              alt="the carpentry logo"
              width={80}
              height={25}
            />
          </Link>
          <Link
            className=" rounded-md"
            href="https://www.1stdibs.com/search/art/?q=albion%20vu%20"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/1stdibs.png"
              alt="1st dibs logo"
              width={80}
              height={25}
            />
          </Link>
          <Link
            className="rounded-md"
            href="https://queenbaeleit.com/pages/expertrec-search?q=albion+vu"
            target="_blank"
          >
            <Image
              className="mr-3"
              src="/qb2.png"
              alt="queen baeleit logo"
              width={70}
              height={25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
