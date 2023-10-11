import React from "react";
import ReviewBox from "./Boxes/ReviewBox";

export default function ClientReviewSection() {
  return (
    <>
      <div className="m-auto lg:w-10/12">
        <h1 className="font-bold text-2xl">What sating people about me</h1>
        <div className="py-10">
          <ReviewBox />
        </div>
      </div>
    </>
  );
}
