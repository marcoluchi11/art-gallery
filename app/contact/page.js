import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
export default function Contact() {
  return (
    <main className="flex-col md:px-24 pt-20 bg-gray-100">
      <div className="flex flex-col my-10 text-center mt-[150px]">
        <h1 className=" text-3xl mt-10 md:text-5xl font-thin tracking-tight">
          GET IN TOUCH WITH ME
        </h1>
        <p className="my-10 font-light md:w-full md:mx-0 mx-3	">
          Got a question about us? Are you interested in partnering with us?
          Have some suggestions or just want to say Hi? Just contact us.
        </p>
        <div className="flex justify-center">
          <FaPhone className="text-3xl mx-3" />
          <p className="underline cursor-pointer">+1 (917) 3028958</p>
        </div>
        <div className="flex justify-center mt-5">
          <FaEnvelope className="text-3xl mx-3" />
          <p className="underline cursor-pointer">albionvu.art@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
