import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1 className="text-3xl  text-center font-thin transition  duration-300 ease-in-out tracking-tight hover:tracking-wide	w-full  ">
        Albion Vuart
      </h1>
      <ul className="flex flex-col md:flex-row justify-around font-thin text-blue-500 mt-10">
        <Link href="/" className="tracking-tight hover:tracking-wide">
          <li>Home</li>
        </Link>
        <Link href="/about" className="tracking-tight hover:tracking-wide">
          <li>About</li>
        </Link>
        <Link href="/portfolio" className="tracking-tight hover:tracking-wide">
          <li>Portfolio</li>
        </Link>
        <Link href="/contact" className="tracking-tight hover:tracking-wide">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
