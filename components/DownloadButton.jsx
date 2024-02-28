import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

export default function DownloadButton() {
  return (
    <div className="flex justify-center my-5 text-md underline md:no-underline md:text-xl">
      <Link
        href="https://online.flippingbook.com/view/122448442/?_gl=1*1gs6xv0*_gcl_au*NzIyODY0MDgzLjE3MDg1MzM5Mjk"
        className="flex items-center justify-center hover:underline"
        target="_blank"
      >
        ALBION VU ARTISTIC JOURNEY CATALOGUE
        <IoMdDownload className="mx-3" />
      </Link>
    </div>
  );
}
