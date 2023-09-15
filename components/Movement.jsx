import Image from "next/image";
import Link from "next/link";

export default function Movement() {
  return (
    <>
      <Link
        href="mailto:albionvu.art@gmail.com"
        target="_blank"
        className=" flex justify-center items-center mt-[150px] underline"
      >
        Click here to inquire about available work and pricing.
      </Link>
      <div className="flex flex-row flex-wrap justify-center md:flex-row md:flex-wrap mt-[80px] ">
        <Link href="/artwork/movement/132853">
          <Image
            className="mr-2"
            src="/movement/132853.png"
            alt="painting"
            width={200}
            height={300}
          />
        </Link>
        <Link href="/artwork/movement/132946">
          <Image
            className="mr-2 mb-2"
            src="/movement/132946.png"
            alt="painting"
            width={200}
            height={300}
          />
        </Link>
        <Image
          className="mr-2 mb-2"
          src="/movement/133015.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133557.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133634.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133717.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133801.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133842.png"
          alt="painting"
          width={200}
          height={300}
        />
        <Image
          className="mr-2 mb-2"
          src="/movement/133927.png"
          alt="painting"
          width={200}
          height={300}
        />
      </div>
    </>
  );
}
