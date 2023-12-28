import Link from "next/link";

export default function PressArticle() {
  return (
    <>
      <Link
        rel="noopener noreferrer"
        href="https://www.newandabstract.com/blogs/news/five-questions-to-albion-vu"
        target="_blank"
        className=" mt-20 flex flex-col items-center lg:items-start lg:ml-[55px]"
      >
        <div className="bg-gray-300 rounded-md px-5 pt-3 transition-bg ease-in-out duration-300 hover:bg-gray-100 hover:text-black">
          <small className="font-light ">New & Abstract</small>
          <h1 className="font-bold underline">Five questions to Albion Vu</h1>
          <p className="mt-10 mb-2 ">Interview</p>
        </div>
      </Link>
    </>
  );
}
