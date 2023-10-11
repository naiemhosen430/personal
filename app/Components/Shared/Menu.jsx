"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdReorder } from "react-icons/md";

export default function Menu() {
  const [menuBox, setMenuBox] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  // onclick hundler
  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };
  return (
    <>
      <div className="flex sticky top-0 bg-white z-20 justify-center items-center py-2 px-4">
        <div className="lg:w-3/12 w-5/12">
          <Link href={"/"} className="font-bold block text-2xl">
            Name
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="lg:w-6/12 hidden z-20 lg:flex items-center shadow-md rounded-md justify-center"
        >
          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/service"}
          >
            Service
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            Portfolio
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            Review
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            Contract
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            About me
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            FAQ
          </Link>
        </div>

        <div className="lg:w-3/12 w-4/12 lg:flex mx-4 text-center">
          <Link
            className="py-2 hidden px-4 lg:block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 text-white font-bold"
            href={"/"}
          >
            Download CV
          </Link>
          <Link
            className="py-2 block px-4 lg:hidden w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 text-white font-bold"
            href={"/"}
          >
            CV
          </Link>
        </div>

        <div
          onClick={toggleMenuBox}
          className="w-3/12 lg:hidden text-center font-bold text-black p-2 py-0 rounded-md hover:bg-slate-400"
        >
          <MdReorder className="text-4xl inline-block" />
        </div>
      </div>

      {menuBox && (
        <div className="h-screen" data-aos="fade-right">
          <div className="shadow-md rounded-md">
            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              onClick={toggleMenuBox}
              href={"/service"}
            >
              Service
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Portfolio
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Review
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Contract
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              About me
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              FAQ
            </Link>
          </div>

          <div className="space-x-4 text-center py-10">
            <Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 text-white font-bold"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Download CV
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
