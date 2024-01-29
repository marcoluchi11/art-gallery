"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed bottom-[70px] left-4 transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-white text-black rounded-full p-2 hover:bg-gray-200 hover:scale-110 hover:shadow-md`}
        onClick={scrollToTop}
      >
        <button className="text-center flex justify-center">
          <AiOutlineArrowUp size={25} />
          Back to Top
        </button>
      </div>
    </div>
  );
}
