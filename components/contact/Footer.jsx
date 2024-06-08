import QRCode from "../home/QRCode";
import Copyright from "./Copyright";
import DesktopSocial from "./DesktopSocial";
import MobileSocial from "./MobileSocial";

export default function Footer() {
  return (
    <footer className=" mt-[60px] border-solid border-t-2 border-gray-300   flex flex-col justify-evenly w-full ">
      <section className="mb-5  flex uppercase">
        <div className="block md:hidden">
          <MobileSocial />
        </div>
        <div className="w-full my-2 hidden md:block">
          <DesktopSocial />
        </div>
      </section>
      {/* <Copyright /> */}
    </footer>
  );
}
