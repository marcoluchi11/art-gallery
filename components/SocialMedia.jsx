import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa6";
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
    </section>
  );
};

export default SocialMedia;
