import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="font-thin">Este es el about</h1>
      <Link href="/">
        <h2>Back</h2>
      </Link>
    </div>
  );
}
