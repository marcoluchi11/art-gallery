import Link from "next/link";

export default function InquirePrints() {
  return (
    <>
      <h1 className="uppercase text-center text-3xl mt-[250px] md:mt-[150px] ">
        prints available
      </h1>
      <Link
        href="mailto:albionvu.art@gmail.com?subject=Inquiry%20About%20Pricing&body=Hello%20there%2C%0A%0AI%20am%20interested%20in%20inquiring%20about%20the%20pricing%20of%20a%20specific%20piece%20and%20would%20like%20to%20receive%20a%20full%20catalogue.%0A%0AThank%20you.%0A%0A"
        target="-blank"
        className=" flex justify-center items-center mt-10 uppercase font-light  "
      >
        Click here to inquire about available work and pricing.
      </Link>
      <small className="flex justify-center mt-10 uppercase text-xs">
        Click over images to make them bigger{" "}
      </small>
    </>
  );
}
