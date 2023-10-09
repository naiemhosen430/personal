"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Herro() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="h-screen bg-slate-400 lg:py-20 lg:pt-40"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="lg:p-10 py-10 w-10/12 m-auto">
          <h1 className="font-bold text-2xl lg:text-6xl text-slate-800">
            I am <span className="text-black">MD Naiem Hosen</span>
          </h1>
          <h2 className="text-xl py-5">I ama web developer and programer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias fuga
            rem asperiores tempore dolores, quisquam ab rerum excepturi modi qui
            molestias commodi accusantium consequatur aut ea dolor veniam atque
            magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Alias fuga rem asperiores tempore dolores, quisquam ab rerum
            excepturi modi qui molestias commodi accusantium consequatur aut ea
            dolor veniam atque magni? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Alias fuga rem asperiores tempore dolores,
            quisquam ab rerum excepturi modi qui molestias commodi accusantium
            consequatur aut ea dolor veniam atque magni?
          </p>
        </div>
      </div>
    </>
  );
}
