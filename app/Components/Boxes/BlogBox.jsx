"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import { useEffect } from "react";
import Link from "next/link";

export default function BlogBox() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-right">
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                I am meeting a ne Technology text-lg lg:{" "}
              </h1>{" "}
              <p className="text-slate text-slate-300 py-10 text-3xl-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                A new problem has occuarate text-lg lg:{" "}
              </h1>{" "}
              <p className="text-slate text-slate-300 py-10 text-3xl-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                Should i make it ? text-lg lg:{" "}
              </h1>{" "}
              <p className="text-slate text-slate-300 py-10 text-3xl-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                I am While but not a mechine text-lg lg:{" "}
              </h1>{" "}
              <p className="text-slate text-slate-300 py-10 text-3xl-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                I am a new crimer
              </h1>
              <p className="text-slate text-slate-300 py-10 text-lg lg:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUwPRQBo-1-glqfWAsteXdcqZNmywzD0vmg&usqp=CAU")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:flex lg:items-center py-20 pb-0 p-10 shadow-2xl cursor-pointer bg-slate-200 text-center"
          >
            <div className="block text-left px-10">
              <h1 className="lg:text-4xl text-xl text-white font-bold">
                Drink a bear
              </h1>
              <p className="text-slate text-slate-300 py-10 text-lg lg:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Odio asperiores quis, laudantium
                quaerat facere deserunt veritatis quos? Libero enim aut itaque
                nihil officiis architecto minus optio ipsa modi, voluptates
                dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
