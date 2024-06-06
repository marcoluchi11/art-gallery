"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
export default function Navbar({ font }) {
  const images = [
    "bg-[url('/nextmove/nextmove11.png')]",
    "bg-[url('/nextmove/nextmove12.png')]",
    "bg-[url('/nextmove/nextmove13.png')]",
  ];
  const [menuIcon, setIcon] = useState(false);
  const [artWork, setArtWork] = useState(false);
  const [dailyCapture, setDailyCapture] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
  }, [currentIndex, images.length]); // Dependencies for useEffect

  const currentImage = images[currentIndex];

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
      className={` text-[CEFF00] w-full ease-in duration-100 top-0 left-0 z-10 bg-cover bg-no-repeat h-screen  ${currentImage} transition-bg duration-1000 ease-in-out`}
    >
      <nav
        className={`max-w-[1366px] mx-auto h-[100] flex justify-between items-center p-4`}
      >
        <div className="flex flex-col items-center ">
          <Link href="/" onClick={handleSmallerNav}>
            <Image
              src="/logo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
          <h1 className=" bg-gray-900 text-3xl md:text-2xl xl:text-3xl uppercase text-center font-thin	w-full text-white py-1 px-2 mt-1  rounded-md ">
            albion vu
          </h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex uppercase font-light text-1xl lg:text-[20px] text-white bg-gray-900 py-2 rounded-md`}
          >
            <Link href="/" className="uppercase mx-4 lg:mr-8 ">
              <li className="text-xl text-white">home</li>
            </Link>
            <div
              // BIG SCREEN
              // onClick={artWorkHandle}
              onMouseEnter={() => setArtWork(true)}
              onMouseLeave={() => setArtWork(false)}
              className={`flex items-center uppercase mx-4 lg:mr-8  cursor-pointer z-50 relative `}
            >
              <li className="text-xl text-white">paintings</li>
              <div>
                {artWork ? (
                  <AiOutlineClose size={25} color="white" fill="white" />
                ) : (
                  <AiFillCaretDown size={25} color="white" fill="white" />
                )}
              </div>
              <div
                className={`
                transition-opacity duration-500 ease-in-out ${
                  artWork ? "opacity-100" : "opacity-0 pointer-events-none"
                }
                 absolute top-[-70px] left-[-30px] right-0 bottom-0 flex flex-col justify-center items-center w-40  h-screen`}
              >
                <Link href="/artwork/nextmove">
                  <li className="flex flex-col hover:bg-gray-400 transition-all ease-in-out duration-200 items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">NEXT MOVE</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/linepath">
                  <li className="flex flex-col hover:bg-gray-400 transition-all ease-in-out duration-200 items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">LINE PATH</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/patches">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">PATCHES</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/directionsearth">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">
                      Directions to earth
                    </p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/obsession">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">OBSESSION</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/asinjapan">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm  bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">AS IN JAPAN</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/movement">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm  bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">MOVEMENT</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/mini">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm  bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">MINI</p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/itsamark">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">
                      IT&apos;S A MARK
                    </p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
                <Link href="/artwork/walkingline">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md">
                    <p className="text-white w-28 text-center">
                      WALKING THROUGH THE LINE
                    </p>
                    {/* <p className="text-white">COLLECTION</p> */}
                  </li>
                </Link>
              </div>
            </div>

            <li
              className="uppercase mr-4 lg:mr-8 flex flex-row  z-50 text-white relative cursor-pointer "
              onMouseEnter={() => setDailyCapture(true)}
              onMouseLeave={() => setDailyCapture(false)}
            >
              <li className="text-xl text-white">photography</li>

              <div>
                {dailyCapture ? (
                  <AiOutlineClose size={25} color="white" fill="white" />
                ) : (
                  <AiFillCaretDown size={25} color="white" fill="white" />
                )}
              </div>
              <div
                className={` transition-opacity duration-500 ease-in-out ${
                  dailyCapture ? "opacity-100" : "opacity-0 pointer-events-none"
                } absolute top-[-200px] left[-55px] right-0 bottom-0 flex flex-col justify-center items-center  h-screen w-full`}
              >
                <Link href="/dailycapture/beach" className="w-20">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  w-28 flex-col items-center mb-2 text-sm text-white bg-gray-900 p-2 rounded-md uppercase">
                    <p className="text-white">Aqua</p>
                    {/* <p className="text-white">Days</p> */}
                  </li>
                </Link>
                <Link href="/dailycapture/building" className="w-20">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  w-28 flex-col items-center mb-2 text-sm  bg-gray-900 p-2 rounded-md uppercase">
                    <p className="text-white">Daily</p>
                    <p className="text-white">Walk</p>
                  </li>
                </Link>
                <Link href="/dailycapture/b&w" className="w-20">
                  <li className="flex hover:bg-gray-400 transition-all ease-in-out duration-200  w-28 flex-col items-center mb-2 text-sm  bg-gray-900 p-2 rounded-md uppercase">
                    <p className="text-white">b&w</p>
                    {/* <p className="text-white">Capture</p> */}
                  </li>
                </Link>
                <Link href="/dailycapture/mountain" className="w-20">
                  <li className="flex w-28 flex-col items-center hover:bg-gray-400 transition-all ease-in-out duration-200  mb-2 text-sm  bg-gray-900 p-2 rounded-md uppercase">
                    <p className="text-white">2021</p>
                    {/* <p className="text-white">Pics</p> */}
                  </li>
                </Link>
              </div>
            </li>
            <Link
              href="https://shop.albionvu.art"
              target="_blank"
              className="uppercase mr-4 lg:mr-8"
            >
              <li className="text-xl text-white">shop prints</li>
            </Link>
            <Link href="/gallery" className="uppercase mr-4 lg:mr-8">
              <li className="text-xl text-white">gallery</li>
            </Link>

            <Link href="/about" className="uppercase mr-4 lg:mr-8  text-white">
              <li className="text-xl text-white">about</li>
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
        <div
          onClick={handleSmallerNav}
          className="flex lg:hidden bg-gray-900 p-3 rounded-3xl cursor-pointer hover:bg-gray-700 duration-300 ease-in-out"
        >
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
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/">Home</Link>
              </li>
              <div
                onClick={artWorkHandle}
                className="flex items-center py-4 ml-2 w-1/2  cursor-pointer"
              >
                <p className=" p-0 mr-3">Paintings</p>
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
                  }  absolute top-[-110px] bottom-0 left-[190px] right-0 flex justify-center items-center  h-screen z-10`}
                >
                  <Link href="/artwork/nextmove" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">next move</li>
                  </Link>
                  <Link href="/artwork/linepath" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">Line path</li>
                  </Link>
                  <Link href="/artwork/patches" onClick={handleSmallerNav}>
                    <li className="my-3 text-sm sm:text-md">patches</li>
                  </Link>
                  <Link
                    href="/artwork/directionsearth"
                    onClick={handleSmallerNav}
                  >
                    <li className="my-3 text-sm sm:text-md">
                      directions to earth
                    </li>
                  </Link>
                  <Link href="/artwork/obsession" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">Obsession</li>
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
                  <li>Photography</li>
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
                  }  absolute top-[-49px] bottom-0 left-[190px] right-0 flex justify-center items-center h-screen`}
                >
                  <Link href="/dailycapture/beach" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">Aqua</li>
                  </Link>
                  <Link
                    href="/dailycapture/building"
                    onClick={handleSmallerNav}
                  >
                    <li className="text-sm sm:text-md my-3">Daily Walk</li>
                  </Link>

                  <Link href="/dailycapture/b&w" onClick={handleSmallerNav}>
                    <li className="text-sm sm:text-md my-3">B&W</li>
                  </Link>
                  <Link
                    href="/dailycapture/mountain"
                    onClick={handleSmallerNav}
                  >
                    <li className="text-sm sm:text-md my-3">2021</li>
                  </Link>
                </div>
              </div>
              <li
                href="https://shop.albionvu.art"
                target="_blank"
                className="uppercase mr-4 lg:mr-8"
              >
                <li className="py-4 ml-2 text-black">shop prints</li>
              </li>
              <li
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/gallery">Gallery</Link>
              </li>
              {/* <Link
                href="https://www.saatchiart.com/albionvu"
                target="_blank"
                className="uppercase mr-4 lg:mr-8"
              >
                <li
                  onClick={handleSmallerNav}
                  className="pt-4 ml-2  cursor-pointer"
                >
                  shop
                </li>
              </Link> */}
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
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
