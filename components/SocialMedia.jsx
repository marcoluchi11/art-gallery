import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <section className="flex items-center justify-around pt-5 md:pt-0 w-full md:mt-5">
      <Link href="https://www.linkedin.com" target="_blank">
        <FaLinkedinIn className="text-2xl" />
      </Link>
      <Link href="https://www.instagram.com" target="_blank">
        <FaInstagram className="text-2xl" />
      </Link>
      <Link href="https://www.outlook.com" target="_blank">
        <FaRegEnvelope className=" text-2xl" />
      </Link>
    </section>
  );
};

export default SocialMedia;
