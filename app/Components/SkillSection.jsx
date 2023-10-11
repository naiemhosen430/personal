"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillBox from "./Boxes/SkillBox";

export default function SkillSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    {
      heading: "Front-End Development",
      text: "I specialize in building responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
    },
    {
      heading: "React.js",
      text: "I have extensive experience with React.js, enabling me to create dynamic and interactive web .",
    },
    {
      heading: "UI/UX Design",
      text: "I am skilled in creating intuitive and visually appealing user interfaces, ensuring a great user .",
    },
    {
      heading: "Back-End Development",
      text: "I am proficient in server-side scripting, database management, and building robust server .",
    },
    {
      heading: "Database Management",
      text: "I have expertise in designing and managing databases, ensuring efficient data storage and .",
    },
    {
      heading: "Responsive Design",
      text: "I ensure that websites I create are optimized for various devices, providing a seamless experience.",
    },
  ];

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
        <div className="text-center">
          {skills.map((skill, index) => (
            <SkillBox key={index} heading={skill.heading} text={skill.text} />
          ))}
        </div>
      </div>
    </>
  );
}
