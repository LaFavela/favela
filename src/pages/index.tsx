import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import { setTransparent } from "../tools/transparent";
import Image from "next/image";
import { designerData } from "./designer";
import { Skeleton } from "@mui/material";

export default function Landing() {
  const [isPressed, setIsPressed] = useState(false);
  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };
  const [visibleItems] = useState(3);
  const [visibleDesigner] = useState(4);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const threshold = 100;
    const transparentValue = scrollPosition < threshold;
    console.log(transparentValue);
    setTransparent(transparentValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });


  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

  return (
    <div className=" transition-all duration-300 ease-linear">
      <div className="container mx-auto  max-w-md sm:max-w-xl xl:max-w-5xl 2xl:max-w-7xl">
        {/* {loading? (
          <div className="pt-[8rem]">
            <Skeleton className="pt-[8rem] rounded-xl"  variant="rectangular" width="1314px" height="466px"/>
          </div>
        ):(

        )} */}
          <div className="relative pt-[8rem] ">
          <Image
            src="/assets/landing/landingBG.jpg"
            alt=""
            width={1314}
            height={466}
            className="rounded-2xl"
            // onLoad={(image)=>image.classList.add('animate-fadeIn')}
            // onLoadingComplete={}
          />
          <div className="absolute bottom-[2rem] left-6 text-[#E3E3E3]  sm:bottom-[2.5rem] xl:bottom-24 xl:left-16 2xl:bottom-[7rem] 2xl:left-20">
            <p className="text-center text-4xl font-medium text-[#FBC68A] sm:text-5xl xl:text-[5rem] 2xl:text-[6.5rem]">
              Hunify
            </p>
            <p className=" ml-1 text-[0.8rem] font-light sm:text-[1.07rem] sm:leading-7 xl:mt-3 xl:text-[1.8rem] 2xl:mt-5 2xl:text-[2.35rem]">
              Your Property at
            </p>
            <p className="ml-1 text-[0.8rem] font-light sm:text-[1.07rem] sm:leading-7 xl:my-3 xl:text-[1.8rem] 2xl:mb-7 2xl:mt-5 2xl:text-[2.35rem]">
              One Click
            </p>
            <Link
              href={"./designer"}
              className="ml-1 rounded-lg bg-gold px-3 py-1 text-[5px] hover:bg-[#d9b285] xl:rounded-2xl xl:px-4 xl:py-2 xl:text-[11px] 2xl:rounded-3xl 2xl:px-5 2xl:py-[10px] 2xl:text-[14px]"
            >
              Explore Now
            </Link>
          </div>
        </div>
        

        {/* PEMBATAS 1 */}

        <div className=" mt-3 flex flex-col items-center justify-center">
          <p className="text-[11px] font-medium xl:text-[23px] 2xl:text-[30px]">
            The <span className="text-[#B17C3F]">Service</span> You Get From{" "}
            <span className="text-[#B17C3F]">Hunify</span>
          </p>

          <p className="w-[280px] text-center text-[5px] xl:mt-3 xl:w-[655px] xl:text-[12px] 2xl:w-[820px] 2xl:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>

        {/* PEMBATAS 2 */}

        <div className="mt-8 flex justify-center gap-4 xl:gap-8">
          <div
            className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]"
          >
            <div className="mr-2 mt-2 flex justify-end gap-[9] xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
              <p className="mt-2 text-[7px] font-medium xl:mt-5 xl:text-[15px] 2xl:mt-6 2xl:text-[20px]">
                Build Properties
              </p>
              <div className="h-4 w-4  rounded-full bg-slate-300 xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
                <Image
                  src="/assets/landing/gear.png"
                  alt=""
                  height={43.93}
                  width={43.93}
                  className="mx-auto mt-[2.5px] xl:mt-[4px] xl:h-[25px] xl:w-[25px] 2xl:mt-[8px] 2xl:h-[28.25px] 2xl:w-[28.25px]"
                />
              </div>
            </div>
            <p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>

          <div
            className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]"
          >
            <div className="mr-2 mt-2 flex justify-end gap-[9] xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
              <p className="mt-2 text-[7px] font-medium xl:mt-5 xl:text-[15px] 2xl:mt-6 2xl:text-[20px]">
                Build Properties
              </p>
              <div className="h-4 w-4  rounded-full bg-slate-300 xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
              <Image
                  src="/assets/landing/gear.png"
                  alt=""
                  height={43.93}
                  width={43.93}
                  className="mx-auto mt-[2.5px] xl:mt-[4px] xl:h-[25px] xl:w-[25px] 2xl:mt-[8px] 2xl:h-[28.25px] 2xl:w-[28.25px]"
                />
              </div>
            </div>
            <p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>

          <div
            className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]"
          >
            <div className="mr-2 mt-2 flex justify-end gap-[9] xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
              <p className="mt-2 text-[7px] font-medium xl:mt-5 xl:text-[15px] 2xl:mt-6 2xl:text-[20px]">
                Build Properties
              </p>
              <div className="h-4 w-4  rounded-full bg-slate-300 xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
              <Image
                  src="/assets/landing/gear.png"
                  alt=""
                  height={43.93}
                  width={43.93}
                  className="mx-auto mt-[2.5px] xl:mt-[4px] xl:h-[25px] xl:w-[25px] 2xl:mt-[8px] 2xl:h-[28.25px] 2xl:w-[28.25px]"
                />
              </div>
            </div>
            <p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>

          <div
            className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]"
          >
            <div className="mr-2 mt-2 flex justify-end gap-[9] xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
              <p className="mt-2 text-[7px] font-medium xl:mt-5 xl:text-[15px] 2xl:mt-6 2xl:text-[20px]">
                Build Properties
              </p>
              <div className="h-4 w-4  rounded-full bg-slate-300 xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
              <Image
                  src="/assets/landing/gear.png"
                  alt=""
                  height={43.93}
                  width={43.93}
                  className="mx-auto mt-[2.5px] xl:mt-[4px] xl:h-[25px] xl:w-[25px] 2xl:mt-[8px] 2xl:h-[28.25px] 2xl:w-[28.25px]"
                />
              </div>
            </div>
            <p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
        </div>

        {/* PEMBATAS 3 */}

        <div className="mt-10 flex flex-col items-center justify-center pb-10">
          <p className="text-[30px] font-medium">
            Start <span className="text-[#B17C3F]">Consult</span> About Dream{" "}
            <span className="text-[#B17C3F]">Property</span>{" "}
          </p>
          <p className="text-[30px] font-medium">
            To The <span className="text-[#B17C3F]">Designers</span>
          </p>
          <div className="w-[820px]">
            <p className="mt-4 text-center text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        <div className=" flex flex-grow flex-row justify-center gap-10 pl-7 pr-7">
          {designerData.slice(0, visibleDesigner).map((designerData, idx) => {
            return (
              <div key={idx} className="">
                <div className="relative flex-auto gap-20">
                  <Image
                    src={designerData.img}
                    alt=""
                    height={330}
                    width={283}
                    className="h-[330px] w-[283px] rounded-3xl object-cover"
                  />
                  <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                    <div className="absolute inset-0 flex justify-between">
                      <div className="ml-5 mt-5 flex">
                        <p className="text-[1.3rem] font-semibold text-white">
                          {designerData.nama}
                        </p>
                      </div>
                      
                    </div>
                    <div className="flex items-end">
                      <Link
                        href={"./designer"}
                        className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
                      >
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                            className="fill-white hover:fill-gray-200"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PEMBATAS 7 */}

    </div>
  );
}
