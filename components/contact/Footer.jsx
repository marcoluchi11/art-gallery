import QRCode from "../home/QRCode";
import DesktopSocial from "./DesktopSocial";
import MobileSocial from "./MobileSocial";

export default function Footer() {
  return (
    <footer className=" mt-[60px] border-solid border-t-2 border-gray-300   flex flex-col md:flex-row justify-evenly md:items-center">
      <section className="mb-5 md:w-2/3 flex uppercase">
        <div className="block md:hidden">
          <MobileSocial />
        </div>
        <div className="w-full my-2 hidden md:block">
          <DesktopSocial />
        </div>
      </section>
      <section className="text-center flex flex-col md:flex-row items-center justify-around text-xs md:text-xs md:w-1/3 font-light mx-2">
        <p className="text-black uppercase">
          Copyright &copy; Albion Vu - All rights reserved - All the work shown
          on the website is the originals
        </p>
        <QRCode />
      </section>
    </footer>
  );
}
