"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContractSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="lg:flex m-auto lg:p-20 bg-slate-900" data-aos="fade-up">
        <div className="lg:w-4/12 lg:px-10" data-aos="fade-right">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VLYLms-Hr9l13zYxSDgw9AlYWnrKU7Im3w&usqp=CAU"
            alt=""
          />
        </div>
        <div className="lg:w-8/12" data-aos="fade-left">
          <h1 className="border-b-2 text-white text-center border-yellow-950 text-3xl font-bold p-2">
            Send me message!
          </h1>
          <div className="py-5 w-8/12 m-auto">
            <div className="py-2">
              <label
                className="block py-2 text-white text-lg lg:text-xl font-bold"
                htmlFor="name"
              >
                Write your name
              </label>
              <input
                className="block text-yellow-500 lg:p-2 p-1 lg:px-4 px-2 lg:text-lg text-sm w-full rounded-lg bg-slate-800"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="py-2">
              <label
                className="block py-2 text-white text-lg lg:text-xl font-bold"
                htmlFor="email"
              >
                Write your email
              </label>
              <input
                className="block text-yellow-500 lg:p-2 p-1 lg:px-4 px-2 lg:text-lg text-sm w-full rounded-lg bg-slate-800"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="py-2">
              <label
                className="block py-2 text-white text-lg lg:text-xl font-bold"
                htmlFor="message"
              >
                Write your message
              </label>
              <textarea
                className="block h-40 text-yellow-500 lg:p-2 p-1 lg:px-4 px-2 lg:text-lg text-sm w-full rounded-lg bg-slate-800"
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="py-2">
              <button className="rounded-lg text-xl py-2 hover:bg-white px-8 font-bold bg-slate-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
