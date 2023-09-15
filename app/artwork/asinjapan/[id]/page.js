import Image from "next/image";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

export default function Info({ params }) {
  const { id } = params;
  return (
    <main className="flex-col md:px-24 pt-20 bg-gray-100">
      <div className="mt-[250px] flex flex-col md:flex-row justify-center items-center">
        <div>
          <Image
            src={`/asinjapan/${id}.png`}
            alt="imagen"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="md:ml-10">
            <h1 className="text-3xl md:text-6xl font-light uppercase text-center mb-5">
              The Harmony
            </h1>
            <p className="text-xl font-thin text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in
              dicta consectetur, amet sapiente minima est earum reiciendis
              porro, molestiae vero maxime voluptatibus maiores quod?
            </p>
          </div>
          <Link href="/artwork/asinjapan">
            <div className="flex md:mt-10">
              <AiOutlineLeft size={25} />
              Back
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
