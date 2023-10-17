import Link from "next/link";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa6";
export default function Contact() {
  return (
    <main className="flex-col md:px-24 pt-20 mt-20 md:pt-0 md:mt-0 ">
      <div className="flex flex-col  text-center mt-[150px]">
        <h1 className=" text-3xl mt-10 md:text-5xl font-thin tracking-tight text-white">
          GET IN TOUCH WITH ME
        </h1>
        <p className="my-10 font-light md:w-full md:mx-0 mx-3	 text-white">
          Got a question about us? Are you interested in partnering with us?
          Have some suggestions or just want to say Hi? Just contact us.
        </p>
        {/* <div className="flex justify-center">
          <FaPhone className="text-3xl mx-3" color="white" fill="white" />
          <p className="underline cursor-pointer text-white">
            +1 (917) 3028958
          </p>
        </div> */}
        <div className="flex justify-center mt-5">
          <FaEnvelope className="text-3xl mx-3" color="white" fill="white" />
          <p className="underline cursor-pointer text-white">
            albionvu.art@gmail.com
          </p>
        </div>
        <div className="flex justify-center mt-5 text-white mb-5">
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
    </main>
  );
}
