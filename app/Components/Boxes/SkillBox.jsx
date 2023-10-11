"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillBox({ heading, text }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="lg:w-3/12 h-60 m-4 p-4 inline-block rounded-md shadow-md bg-slate-300 hover:bg-slate-400 hover:shadow-2xl"
        data-aos="fade-left"
      >
        <h1 className="font-bold h-20 text-2xl py-2">{heading}</h1>
        <h1 className="h-40 text-lg py-2">{text}</h1>
      </div>
    </>
  );
}
