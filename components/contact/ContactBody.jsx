import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa6";
export default function ContactBody() {
  return (
    <div className="flex flex-col  text-center mt-[150px]">
      <h1 className=" text-3xl mt-10 md:text-5xl font-thin tracking-tight text-white">
        GET IN TOUCH WITH ME
      </h1>
      <p className="my-10 font-light md:w-full md:mx-0 mx-3	 text-white">
        Got a question about us? Are you interested in partnering with us? Have
        some suggestions or just want to say Hi? Just contact us.
      </p>
      <div className="flex justify-center mt-5">
        <FaEnvelope className="text-3xl mx-3" color="white" fill="white" />
        <p className="underline cursor-pointer text-white">
          albionvu.art@gmail.com
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-5 text-white mb-5">
        <Link
          href="https://www.instagram.com/vualbion/"
          target="_blank"
          className="flex justify-center underline"
        >
          <FaInstagram
            className="text-2xl text-white mx-3"
            color="white"
            fill="white"
          />
          vualbion
        </Link>
        <Link
          href="https://www.pinterest.com/albionv2/albion-vu-original-artwork/"
          target="_blank"
          className="flex justify-center underline mt-5 md:mt-0"
        >
          <FaPinterest
            className="text-2xl text-white mx-3"
            color="white"
            fill="white"
          />
          ALBION VU Original artwork
        </Link>
      </div>
      <div className="flex justify-center mt-5">
        <p className="text-white">
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
