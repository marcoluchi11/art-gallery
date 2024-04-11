import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

export default function DownloadButton({ text = "text-3xl" }) {
  return (
    // CENTRA LOS TEXTOS PERO EN UN CSOTADO
    <div
      className={`flex flex-col ml-2 md:ml-0 justify-center text-justify my-5 text-md underline md:no-underline md:${text}`}
    >
      <Link
        href="https://online.flippingbook.com/view/122448442/?_gl=1*1gs6xv0*_gcl_au*NzIyODY0MDgzLjE3MDg1MzM5Mjk"
        className="flex items-center  hover:underline"
        target="_blank"
      >
        ALBION VU ARTISTIC JOURNEY CATALOGUE
        <IoMdDownload className="mx-3" />
      </Link>
      <Link
        href="https://online.flippingbook.com/view/891004140/"
        className="flex items-center hover:underline mt-5"
        target="_blank"
      >
        ALBION VU PHOTOGRAPHY
        <IoMdDownload className="mx-3" />
      </Link>
    </div>
  );
}
