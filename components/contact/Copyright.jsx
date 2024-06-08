import QRCode from "../home/QRCode";

export default function Copyright() {
  return (
    <section className="text-center flex flex-col md:flex-row items-center text-xs md:text-sm md:w-1/3 font-light mx-2">
      <QRCode />
      <p className="text-black uppercase mx-2 ">
        Copyright &copy; Albion Vu - All rights reserved - All the work shown on
        the website is the originals
      </p>
    </section>
  );
}
