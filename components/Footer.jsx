import Image from "next/image";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="border-solid border-t-2 border-gray-300  md:h-10 h-50 flex flex-col md:flex-row justify-evenly md:items-center">
      <section className="mb-5 md:w-1/2 flex">
        <SocialMedia />
      </section>
      <section className="text-center flex flex-col md:flex-row items-center justify-around text-xs md:text-sm md:w-1/2 font-light">
        <p className="text-white">
          Copyright &copy; Albion Vu - All rights reserved - All the work shown
          on the website is the originals
        </p>
        <Image
          className="mt-5 mb-3 md:mt-0 md:mb-0"
          src="/frame.png"
          alt="qrcode"
          width={35}
          height={25}
        />
      </section>
    </footer>
  );
}
