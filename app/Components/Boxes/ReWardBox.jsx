"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import { useEffect } from "react";
import Link from "next/link";

export default function ReWardBox() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <h1 className="py-10 w-10/12 m-auto text-3xl font-bold">
        I have achieved
      </h1>
      <div data-aos="fade-right">
        <Swiper
          className="m-10 my-20"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGOkXhzuNOa526doj-1zAVaoPrQEdbmqdOg&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Json Bella</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirIxo4zJrpVQFFONRmvIux01ibyboEDPbLA&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Rose Bella</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Json Carlos</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PlOCOtx2pHwaeXJiTAbwBhQzhERbL9MYOw&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Charly Harse</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJxa5bFhTfZRfWDp8gYOzQ7Ir-7MgprWLQw&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Mishel Wokse</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrw7nNwfwzq9CcB_rsiPm60hbMAsiFAR_lw&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Mendala</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e9S28AGVXvmTwMkX5bW-8J1-KwnnWIqb_A&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Chimon Lian</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPGcthYkeRVVX-YtjsfY6uTKolkXdYVVh7JZbowfLRfUT3aWDn2W-3vTd4XR4B0VMXWs&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">JMina Chel</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
              </p>
              <Link
                href="/"
                className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
              >
                View Full
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:flex lg:items-center rounded-xl p-10 shadow-2xl cursor-pointer bg-slate-200 text-center">
            <img
              className="lg:w-4/12 inline-block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMmOw54uYf6wpdIHyz_jloRecN8A8e23S901Gpiel-zzTK6G-k6unhUWE5UFjFwUo62k&usqp=CAU"
              alt=""
            />
            <div className="lg:w-5/12 inline-block text-left px-10">
              <h1 className="text-3xl font-bold">Mi Josalna</h1>
              <p className="text-slate-800 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                asperiores quis, laudantium quaerat facere deserunt veritatis
                quos? Libero enim aut itaque nihil officiis architecto minus
                optio ipsa modi, voluptates dicta?.
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
