import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-solid border-b-2 border-gray-300">
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>
        <h1 className="text-6xl md:text-8xl text-center font-thin	w-full  ">
          Albion Vuart
        </h1>
      </div>
      <ul className="flex md:flex-row justify-around font-thin text-blue-500 mt-10">
        <Link href="/" className="tracking-tight hover:tracking-wide">
          <li className="text-xl">Home</li>
        </Link>
        <Link href="/about" className="tracking-tight hover:tracking-wide">
          <li className="text-xl">About</li>
        </Link>
        <Link href="/portfolio" className="tracking-tight hover:tracking-wide">
          <li className="text-xl">Portfolio</li>
        </Link>
        <Link href="/contact" className="tracking-tight hover:tracking-wide">
          <li className="text-xl">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
