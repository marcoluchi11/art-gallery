"use client";
import { ArtContext } from "@/context/context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
export default function Navbar({ font }) {
  const { showModal } = useContext(ArtContext);
  const [menuIcon, setIcon] = useState(false);
  const [artWork, setArtWork] = useState(false);
  const [dailyCapture, setDailyCapture] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSmallerNav = () => {
    setIcon(!menuIcon);
  };
  const artWorkHandle = () => {
    if (dailyCapture) setDailyCapture(false);
    setArtWork(!artWork);
  };
  const dailyCaptureHandle = () => {
    if (artWork) setArtWork(false);
    setDailyCapture(!dailyCapture);
  };
  return (
    <header
      className={` text-[CEFF00] w-full ease-in duration-100 top-0 left-0 z-10`}
    >
      <nav
        className={`max-w-[1366px] mx-auto h-[100] flex justify-between items-center p-4`}
      >
        <div className="flex flex-col items-center">
          <Link href="/" onClick={handleSmallerNav}>
            <Image
              src="/logo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
          <h1 className="text-3xl md:text-2xl xl:text-3xl uppercase text-center font-thin	w-full text-white   ">
            albion vu
          </h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex uppercase font-light text-1xl lg:text-[20px] text-slate-800`}
          >
            <Link href="/" className="uppercase mr-4 lg:mr-8 ">
              <li className="text-xl text-white">home</li>
            </Link>
            <div
              // href="/artwork"
              // BIG SCREEN
              onClick={artWorkHandle}
              className="flex items-center uppercase mr-4 lg:mr-8  cursor-pointer z-50 relative"
            >
              <li className="text-xl text-white">
                art {artWork ? "Collection" : ""}
              </li>
              <div>
                {artWork ? (
                  <AiOutlineClose size={25} color="white" fill="white" />
                ) : (
                  <AiFillCaretDown size={25} color="white" fill="white" />
                )}
              </div>
              <div
                className={` ${
                  artWork ? "flex" : "hidden"
                } absolute top-[-180px] left-[35px] right-0 bottom-0 flex flex-col justify-center items-center w-40  h-screen`}
              >
                <Link href="/artwork/obsession">
                  <li className="flex flex-col items-center mb-2 text-sm text-white bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">OBBSESSION</p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/asinjapan">
                  <li className="flex flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">AS IN JAPAN</p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/movement">
                  <li className="flex flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">MOVEMENT</p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/mini">
                  <li className="flex flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">MINI</p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/itsamark">
                  <li className="flex flex-col items-center mb-2 text-sm text-white bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">
                      IT&apos;S A MARK
                    </p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/walkingline">
                  <li className="flex flex-col items-center mb-2 text-sm text-white bg-gray-300 p-2 rounded-md">
                    <p className="text-black w-28 text-center">
                      WALKING THROUGH THE LINE
                    </p>
                    {/* <p className="text-black">COLLECTION</p> */}
                  </li>
                </Link>
              </div>
            </div>

            <li
              className="uppercase mr-4 lg:mr-8 flex flex-row  text-white relative cursor-pointer "
              onClick={dailyCaptureHandle}
            >
              <li className="text-xl text-white">daily capture</li>

              <div>
                {dailyCapture ? (
                  <AiOutlineClose size={25} color="white" fill="white" />
                ) : (
                  <AiFillCaretDown size={25} color="white" fill="white" />
                )}
              </div>
              <div
                className={`${
                  dailyCapture ? "flex" : "hidden"
                } absolute top-[-200px] left[-55px] right-0 bottom-0 flex flex-col justify-center items-center  h-screen w-full`}
              >
                <Link href="/dailycapture/beach" className="w-20">
                  <li className="flex w-28 flex-col items-center mb-2 text-sm text-white bg-gray-300 p-2 rounded-md uppercase">
                    <p className="text-black">Beach</p>
                    <p className="text-black">Days</p>
                  </li>
                </Link>
                <Link href="/dailycapture/building" className="w-20">
                  <li className="flex w-28 flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md uppercase">
                    <p className="text-black">Daily</p>
                    <p className="text-black">Walk</p>
                  </li>
                </Link>
                <Link href="/dailycapture/b&w" className="w-20">
                  <li className="flex w-28 flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md uppercase">
                    <p className="text-black">b&w</p>
                    <p className="text-black">Capture</p>
                  </li>
                </Link>
                <Link href="/dailycapture/mountain" className="w-20">
                  <li className="flex w-28 flex-col items-center mb-2 text-sm  bg-gray-300 p-2 rounded-md uppercase">
                    <p className="text-black">Mountain</p>
                    <p className="text-black">Pics</p>
                  </li>
                </Link>
              </div>
            </li>
            <Link href="/about" className="uppercase mr-4 lg:mr-8  text-white">
              <li className="text-xl text-white">about</li>
            </Link>
            <Link href="/press" className="uppercase mr-4 lg:mr-8  text-white">
              <li className="text-xl text-white">press</li>
            </Link>
            <Link
              href="/contact"
              className=" uppercase mr-4 lg:mr-8 text-white "
            >
              <li className="text-xl text-white">contact</li>
            </Link>
          </ul>
        </div>
        {/* ACA CAMBIE LO DEL MENU */}
        <div onClick={handleSmallerNav} className="flex lg:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} color="white" fill="white" />
          ) : (
            <AiOutlineMenu size={25} color="white" fill="white" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "lg:hidden absolute top-[100px] bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-slate-200 text-white ease-in duration-300 z-10"
              : "lg:hidden absolute top-[100px] bottom-0 left-[-100%] right-0 flex justify-center items-center w-1/2 h-screen bg-slate-200 text-white text-center ease-in duration-300 z-10"
          }
        >
          <div className="w-full">
            <ul className="uppercase font-light text-2xl">
              <li
                // onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/">Home</Link>
              </li>
              <div
                onClick={artWorkHandle}
                className="flex items-center py-4 ml-2 w-1/2  cursor-pointer"
              >
                <p className=" p-0 mr-3">Art {artWork ? "Collection" : ""}</p>
                <li onClick={artWorkHandle} className="flex lg:hidden">
                  {artWork ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiFillCaretRight size={25} />
                  )}
                </li>
                {/* SMALLER SCREEN */}
                <div
                  className={`lg:hidden ${
                    artWork ? "flex flex-col" : "hidden"
                  }  absolute top-[-110px] bottom-0 left-[100px] right-0 flex justify-center items-center w-full h-screen z-10`}
                >
                  <Link href="/artwork/obsession" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">Obbsession</li>
                  </Link>
                  <Link href="/artwork/movement" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">Movement</li>
                  </Link>

                  <Link href="/artwork/asinjapan" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">As In Japan</li>
                  </Link>
                  <Link href="/artwork/mini" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">Mini</li>
                  </Link>
                  <Link href="/artwork/itsamark" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">
                      It&apos;s a mark
                    </li>
                  </Link>
                  <Link href="/artwork/walkingline" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">
                      walking through the line
                    </li>
                  </Link>
                </div>
              </div>

              <div
                onClick={dailyCaptureHandle}
                className="flex items-center py-4 ml-2 w-1/2  cursor-pointer"
              >
                <li className="py-4  cursor-pointer">
                  <li>Daily Capture</li>
                </li>
                <li onClick={dailyCaptureHandle} className="flex lg:hidden">
                  {dailyCapture ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiFillCaretRight size={25} />
                  )}
                </li>
                {/* SMALLER SCREEN */}
                <div
                  className={`lg:hidden ${
                    dailyCapture ? "flex flex-col" : "hidden"
                  }  absolute top-[-49px] bottom-0 left-[100px] right-0 flex justify-center items-center w-full h-screen`}
                >
                  <Link href="/dailycapture/beach" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">Beach Days</li>
                  </Link>
                  <Link
                    href="/dailycapture/building"
                    onClick={handleSmallerNav}
                  >
                    <li className="text-sm sm:text-md my-3">Daily Walk</li>
                  </Link>

                  <Link href="/dailycapture/b&w" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">B&W Capture</li>
                  </Link>
                  <Link
                    href="/dailycapture/mountain"
                    onClick={handleSmallerNav}
                  >
                    <li className="text-sm sm:text-md my-3">Mountain Pics</li>
                  </Link>
                </div>
              </div>

              <li
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/press">Press</Link>
              </li>
              <li
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
