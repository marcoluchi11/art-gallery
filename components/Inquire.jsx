import Link from "next/link";

export default function Inquire() {
  return (
    <Link
      target="_blank"
      className="hover:underline px-3 py-1"
      href="mailto:albionvu.art@gmail.com"
    >
      CLICK TO INQUIRE
    </Link>
  );
}
