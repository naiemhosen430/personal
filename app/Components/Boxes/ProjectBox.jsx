"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectBox({ image, name }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="rounded-lg inline-block shadow-xl lg:w-3/12"
        data-aos="fade-right"
      >
        <img className="w-full" src={image} alt="" />
        <h1 className="text-2xl p=2 font-bold">{name}</h1>
      </div>
    </>
  );
}
