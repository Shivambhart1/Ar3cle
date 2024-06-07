"use client";
import React from "react";
import ghost from "/ghost.jpg";
import Image from "next/image";
import "./article.css";

const page = () => {
  return (
    <>
      <div className="w-[100%] mt-[8%]">
        <div className="flex justify-around">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between items-center gap-24">
              {/* <h1 className="text-8xl font-light">
                The archeological exhibition
              </h1> */}
              <div className="heading text-8xl font-light text-center">
                <h1>The</h1>
                <h1>archaeological</h1>
                <h1>exhibition</h1>
              </div>
              <span>01/</span>

              <p className="p-24 text-center font-light text-lg leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                incidunt a qui vitae laudantium doloribus magni commodi
                explicabo rerum adipisci!
              </p>
            </div>
            <div className="right">
              <Image
                src="/images/building.jpg"
                className="w-[100%] h-[80%]"
                alt="A ghost"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default page;
