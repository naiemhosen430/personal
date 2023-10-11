"use client";
import React, { useEffect } from "react";
import { MdFacebook } from "react-icons/md";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="text-center p-20 bg-slate-950" data-aos="fade-up">
        <h1 className="text-white text-xs" data-aos="fade-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          inventore quas! At, dolorum nisi, temporibus a eligendi culpa odit
          fugit rerum repellendus iste ut nemo enim? Id praesentium eius
          distinctio?
        </h1>
        <div className="text-center" data-aos="fade-right">
          <div className="space-x-5 my-10">
            <MdFacebook className="lg:text-4xl text-2xl inline-block text-white rounded-full hover:text-slate-800 hover:bg-slate-400" />
            <FaInstagramSquare className="lg:text-4xl text-2xl inline-block text-white rounded-full hover:text-slate-800 hover:bg-slate-400" />
            <FaTwitter className="lg:text-4xl text-2xl inline-block text-white rounded-full hover:text-slate-800 hover:bg-slate-400" />
            <FaLinkedin className="lg:text-4xl text-2xl inline-block text-white rounded-full hover:text-slate-800 hover:bg-slate-400" />
            <FaYoutube className="lg:text-4xl text-2xl inline-block text-white rounded-full hover:text-slate-800 hover:bg-slate-400" />
          </div>
          <div
            className="text-center lg:p-5 text-white lg:space-x-5 py-5"
            data-aos="fade-up"
          >
            <span className="lg:inline-block text-center block">
              +8801700000000
            </span>
            <span className="lg:inline-block text-center block">
              naiemhosen430#gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
