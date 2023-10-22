import React from "react";
import HeroBg from "../img/heroBg.png";
import {heroData} from "../utils/data"

function MainContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:px-16">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 h-90vh">
        <p className="text-[2.5rem] font-bold tracking-wide text-black px-4">
          Discover Unmatched Speed and Excellence in
          <span className="text-orange-600 text-[3rem]  px-2">
            Nairobi's Culinary Scene
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] px-4">
          Josephine Caribbean Restaurant, a vivacious tribute to Josephine by
          her grandson, Brian Loe. It embodies her heritage, serving delightful
          Caribbean cuisine, and creating a vibrant, welcoming atmosphere. Savor
          authentic Caribbean flavors, embracing her enduring legacy.
        </p>

        <div className="w-full flex items-center justify-center gap-2">
          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full w-full">
            <p className="text-sm text-orange-500 font-semibold">Eat In</p>
          </div>

          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full w-full">
            <p className="text-sm text-orange-500 font-semibold">Take Away</p>
          </div>

          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full w-full">
            <p className="text-sm text-orange-500 font-semibold">Delivery</p>
          </div>
        </div>
      </div>
      <div className="py-2 flex-1 flex items-center relative w-full">
        <img
          src={HeroBg}
          className=" ml-auto h-500 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-16  py-4 gap-3 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-32 -mt-16"
                  alt="I1"
                />
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-xs text-red-600">Ksh. </span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MainContainer;
