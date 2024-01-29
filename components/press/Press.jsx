import Image from "next/image";

export default function Press() {
  return (
    <>
      <section className="flex justify-around items-center mt-[50px] md:mt-0 flex-col md:flex-row my-10 flex-wrap">
        <Image
          src="/press/IMG-7427.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7428.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7429.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7430.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7431.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7432.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7433.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7434.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7435.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7436.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7437.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7438.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7439.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />
        <Image
          src="/press/IMG-7440.jpg"
          alt="Press"
          width={280}
          height={280}
          className="my-10 md:mr-10"
        />

        <Image
          className="hidden md:flex"
          src="/posterexhibiton.jpeg"
          alt="poster exhibition"
          width={280}
          height={800}
        />
      </section>
      <div className="flex flex-col items-center md:items-start">
        <Image
          className="flex md:hidden"
          src="/posterexhibiton.jpeg"
          alt="poster exhibition"
          width={280}
          height={500}
        />
        <video
          className="mt-5 md:mt-0 md:ml-10"
          width={280}
          height={500}
          controls
          autoplay
          loop
        >
          <source src="/reels1.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
