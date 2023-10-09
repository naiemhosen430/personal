"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduce() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="lg:flex justify-center p-10"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="lg:w-6/12">
          <h1 className="text-3xl font-bold border border-b-2 border-t-0 border-l-0 border-r-0 border-slate-600">
            I am....
          </h1>
          <p className="text-xl py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            beatae laudantium rerum necessitatibus vero autem sequi numquam,
            doloremque, obcaecati reprehenderit iure nemo molestiae maiores
            dolor blanditiis modi dolorem. Eum, fuga? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Asperiores beatae laudantium
            rerum necessitatibus vero autem sequi numquam, doloremque, obcaecati
            reprehenderit iure nemo molestiae maiores dolor blanditiis modi
            dolorem. Eum, fuga? Lorem ipsum dolor sit, amet consectetur
          </p>
        </div>
        <div className="lg:w-5/12">
          <Image src={""} height={0} width={0} />
        </div>
      </div>
    </>
  );
}
