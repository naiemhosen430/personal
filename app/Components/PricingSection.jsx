"use client";
import Link from "next/link";
import { MdOutlineDone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PricingSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="lg:flex lg:item-center lg:w-10/12 lg:space-x-10 m-auto justify-center">
        <div
          className="p-10 rounded-lg border-x-2 border-y-2 lg:w-4/12 md:w-6/12 bg-slate-700"
          data-aos="fade-right"
        >
          <h1 className="text-lg text-center text-slate-500">Genaral</h1>
          <h1 className="text-3xl text-center font-bold text-white">50$</h1>
          <div className="p-10 px-0">
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Saver's Special</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Value Vault</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">EconoChoice</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                PriceMaster Deals
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Budget Bliss</h1>
            </div>
            <div className="text-center p-10 py-20 pb-0">
              <Link
                className="text-xl hover:bg-slate-900 hover:text-white p-4 px-8 bg-slate-400 rounded-lg font-bold"
                href={"/"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div
          className="p-10 rounded-lg border-x-2 border-y-2 lg:w-4/12 md:w-6/12 bg-slate-700"
          data-aos="fade-right"
        >
          <h1 className="text-lg text-center text-slate-500">medium</h1>
          <h1 className="text-3xl text-center font-bold text-white">100$</h1>
          <div className="p-10 px-0">
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Silver Savings</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                Mid-Tier Treasure
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">PricePoint Plus</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">ValueMidas</h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Premium Picks</h1>
            </div>
            <div className="text-center p-10 py-20 pb-0">
              <Link
                className="text-xl hover:bg-slate-900 hover:text-white p-4 px-8 bg-slate-400 rounded-lg font-bold"
                href={"/"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div
          className="p-10 rounded-lg border-x-2 border-y-2 lg:w-4/12 md:w-6/12 bg-slate-700"
          data-aos="fade-right"
        >
          <h1 className="text-lg text-center text-slate-500">High</h1>
          <h1 className="text-3xl text-center font-bold text-white">500$</h1>
          <div className="p-10 px-0">
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                Gold Elite Experience
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                Luxury Lighthouse
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                Platinum Prestige
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">
                Ultimate Elegance
              </h1>
            </div>
            <div className="flex items-center p-2 space-x-2">
              <MdOutlineDone className="text-2xl text-white" />
              <h1 className="text-xl text-white font-bold">Signature Select</h1>
            </div>
            <div className="text-center p-10 py-20 pb-0">
              <Link
                className="text-xl hover:bg-slate-900 hover:text-white p-4 px-8 bg-slate-400 rounded-lg font-bold"
                href={"/"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
