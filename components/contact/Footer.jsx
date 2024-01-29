import QRCode from "../home/QRCode";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className=" mt-[60px] border-solid border-t-2 border-gray-300   flex flex-col md:flex-row justify-evenly md:items-center">
      <section className="mb-5 md:w-1/2 flex">
        <SocialMedia />
      </section>
      <section className="text-center flex flex-col md:flex-row items-center justify-around text-xs md:text-sm md:w-1/2 font-light">
        <p className="text-black">
          Copyright &copy; Albion Vu - All rights reserved - All the work shown
          on the website is the originals
        </p>
        <QRCode />
      </section>
    </footer>
  );
}
