"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Herro() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLQmvPLVf7NU5elrdxf-LGCXRmVXgIHAGNw&usqp=CAU")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen bg-slate-400 lg:py-20 lg:pt-20"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="lg:p-10 p-5 px-10 lg:w-7/12">
          <h1 className="font-bold lg:text-6xl text-2xl text-slate-400">
            I am <span className="text-slate-50">MD Naiem Hosen</span>
          </h1>
          <h2 className="text-xl text-slate-300 py-5">
            I ama web developer and programer
          </h2>
          <p className="text-slate-500 lg:block hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias fuga
            rem asperiores tempore dolores, quisquam ab rerum excepturi modi qui
            molestias commodi accusantium consequatur aut ea dolor veniam atque
            magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Alias fuga rem asperiores tempore dolores, quisquam ab rerum
            excepturi modi qui molestias commodi accusantium consequatur aut ea
          </p>
        </div>
        <div className="text-center lg:flex lg:items-center justify-center lg:py-20">
          <Link
            className="text-2xl lg:inline-block block py-4 px-20 m-4 border-x-4 border-y-4 rounded-lg border-red-400 text-white font-bold hover:text-black hover:bg-white transition"
            href={"/"}
          >
            Watch me on Youtube
          </Link>
          <Link
            className="text-2xl lg:inline-block block py-4 px-20 m-4 border-x-4 border-y-4 rounded-lg border-red-400 text-white font-bold hover:text-black hover:bg-white transition"
            href={"/"}
          >
            About me
          </Link>
          <Link
            className="text-2xl lg:inline-block block py-4 px-20 m-4 border-x-4 border-y-4 rounded-lg border-red-400 text-white font-bold hover:text-black hover:bg-white transition"
            href={"/"}
          >
            My activity
          </Link>
        </div>
      </div>
    </>
  );
}
