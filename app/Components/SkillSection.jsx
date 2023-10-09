"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillBox from "./Boxes/SkillBox";

export default function SkillSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="p-10 lg:w-11/12 m-auto"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <h1 className="text-3xl font-bold border border-b-2 border-t-0 border-l-0 border-r-0 border-slate-600">
          I am expert in,
        </h1>
        <div className="text-center space-x-5 space-y-5">
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
          <SkillBox
            heading={"HTML"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rem dicta id pariatur voluptas unde, ipsam provident quam, itaque est"
            }
          />
        </div>
      </div>
    </>
  );
}
