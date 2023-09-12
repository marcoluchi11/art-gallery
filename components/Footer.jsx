import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="border-solid border-t-2 border-gray-300  md:h-10 h-50 flex flex-col md:flex-row justify-evenly md:items-center">
      <section className="mb-5 md:w-1/2 flex">
        <SocialMedia />
      </section>
      <section className="text-center text-xs md:text-sm md:w-1/2 font-thin">
        <p>
          Copyright 2023 &copy; Albion Vuart All rights reserved - Made by Marco
          Luchi
        </p>
      </section>
    </footer>
  );
}
