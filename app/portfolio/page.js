import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-white font-light ">Portfolio</h1>
      <Link href="/">
        <h2>Back</h2>
      </Link>
    </div>
  );
}
