"use client";

import Artwork from "@/app/artwork/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);
  const [artWork, setArtWork] = useState(false);
  const handleSmallerNav = () => {
    setIcon(!menuIcon);
  };
  const artWorkHandle = () => {
    setArtWork(!artWork);
  };
  return (
    <header className="bg-slate-100 text-[CEFF00] w-full ease-in duration-100 fixed top-0 left-0 z-10 md: static">
      <nav className="max-w-[1366px] mx-auto h-[100] flex justify-between items-center p-4">
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
          <h1 className="text-3xl md:text-2xl xl:text-3xl uppercase text-center font-thin	w-full  ">
            albion vu
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex uppercase font-light text-1xl lg: text-[20px] text-slate-800">
            <Link href="/" className="uppercase mr-4 lg:mr-8 ">
              <li className="text-xl">home</li>
            </Link>
            <div
              // href="/artwork"
              // BIG SCREEN
              onClick={artWorkHandle}
              className="flex items-center uppercase mr-4 lg:mr-8  cursor-pointer"
            >
              <li className="text-xl">art</li>
              <div>
                {artWork ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <AiFillCaretDown size={25} />
                )}
              </div>
              <div
                className={`${
                  artWork ? "flex" : "hidden"
                } absolute top-[-250px] left-[100px] right-0 bottom-0 flex justify-center items-center w-full h-screen`}
              >
                <Link href="/artwork/obsession">
                  <li className="flex flex-col items-center mr-3 text-sm">
                    <p>OBBSESSION</p>
                    <p>COLLECTION</p>
                  </li>
                </Link>
                <Link href="/artwork/asinjapan">
                  <li className="flex flex-col items-center mr-3 text-sm">
                    <p>AS IN JAPAN</p>
                    <p>COLLECTION</p>
                  </li>
                </Link>
                <Link href="/artwork/movement">
                  <li className="flex flex-col items-center mr-3 text-sm">
                    <p>MOVEMENT</p>
                    <p>COLLECTION</p>
                  </li>
                </Link>
                <li className="flex flex-col items-center mr-3 text-sm">
                  <p>IT&apos;S A MARK</p>
                  <p>COLLECTION</p>
                </li>
              </div>
            </div>
            <Link href="/sketches" className="uppercase mr-4 lg:mr-8 ">
              <li className="text-xl">sketches</li>
            </Link>
            <Link href="/photography" className="uppercase mr-4 lg:mr-8 ">
              <li className="text-xl">daily capture</li>
            </Link>
            <Link href="/about" className="uppercase mr-4 lg:mr-8 ">
              <li className="text-xl">about</li>
            </Link>
            <Link href="/contact" className=" uppercase mr-4 lg:mr-8 ">
              <li className="text-xl">contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleSmallerNav} className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-slate-200 text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-slate-200 text-white text-center ease-in duration-300"
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
                className="flex items-center py-4 ml-2  cursor-pointer"
              >
                {/* <Link href="/artwork">Artwork</Link> */}
                <p className=" p-0 mr-3">Artwork</p>
                <li onClick={artWorkHandle} className="flex md:hidden">
                  {artWork ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiFillCaretRight size={25} />
                  )}
                </li>
                {/* SMALLER SCREEN */}
                <div
                  className={`md:hidden ${
                    artWork ? "flex flex-col" : "hidden"
                  }  absolute top-[-100px] bottom-0 left-[100px] right-0 flex justify-center items-center w-full h-screen`}
                >
                  <li className="text-sm sm:text-md my-3">
                    Obbsession Collection
                  </li>
                  <li className="my-3 text-sm sm:text-md">
                    Movement Collection
                  </li>
                  <li className="my-3 text-sm sm:text-md">
                    As In Japan Collection
                  </li>
                  <li className="my-3 text-sm sm:text-md">
                    IT&apos;S A MARK Collection
                  </li>
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
                <Link href="/photography">Daily Capture</Link>
              </li>
              <li
                onClick={handleSmallerNav}
                className="py-4 ml-2  cursor-pointer"
              >
                <Link href="/sketches">sketches</Link>
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
