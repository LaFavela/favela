import Navbar from "./navbar";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";

const type = [
  { id: 1, name: "Semua" },
  { id: 2, name: "Rumah" },
  { id: 3, name: "Kondominum" },
  { id: 4, name: "Tanah" },
  { id: 5, name: "Villa" },
];

const data = [
  {
    id: 1,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 2,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_2.jpg",
    type: "Villa",
  },
  {
    id: 3,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_3.jpg",
    type: "Kondomonium",
  },
  {
    id: 4,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_4.jpg",
    type: "Rumah",
  },
  {
    id: 5,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Tanah",
  },
  {
    id: 1,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 2,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_2.jpg",
    type: "Rumah",
  },
  {
    id: 3,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_3.jpg",
    type: "Rumah",
  },
  {
    id: 4,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_4.jpg",
    type: "Rumah",
  },
  {
    id: 5,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 1,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 2,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_2.jpg",
    type: "Rumah",
  },
  {
    id: 3,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_3.jpg",
    type: "Rumah",
  },
  {
    id: 4,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_4.jpg",
    type: "Rumah",
  },
  {
    id: 5,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 1,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
  {
    id: 2,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_2.jpg",
    type: "Rumah",
  },
  {
    id: 3,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_3.jpg",
    type: "Rumah",
  },
  {
    id: 4,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_4.jpg",
    type: "Rumah",
  },
  {
    id: 5,
    nama: "Rumah Minimalis",
    harga: 476,
    shower: 3,
    bed: 2,
    luas: 232.3,
    // lokasi: "Bali",
    img: "/assets/build/desain_1.jpg",
    type: "Rumah",
  },
];

export default function Design() {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(-1);
  const [isPressed, setIsPressed] = useState(false);
  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };
  const [visibleItems, setVisibleItems] = useState(8); // Jumlah item yang terlihat awalnya
  const [loadCount] = useState(6); // Jumlah item yang ditambahkan setiap kali "load more" diklik
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + loadCount);
  };

  return (
    <div>
      {/* batas */}
      <div className="ml-20 pt-10">
        <div className="px-35 flex flex-grow flex-row flex-wrap justify-center gap-5">
          {data.slice(0, visibleItems).map((data, idx) => {
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
                  hover && index == idx
                    ? "h-[31rem] w-[23.5rem]"
                    : "h-[25rem] w-[19rem]"
                }`}
                onMouseEnter={() => {
                  setHover(true);
                  setIndex(idx);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setIndex(-1);
                }}
              >
                <div className="relative h-full w-full flex-auto">
                  <Image
                    className="rounded-3xl"
                    src={data.img}
                    alt={""}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    hover && index == idx
                      ? "absolute top-0 h-full w-full bg-[#00000035]"
                      : ""
                  }`}
                >
                  <div className="ml-6 mt-6 flex justify-between">
                    <div className="  flex h-[2rem] w-max items-center justify-center rounded-full border-2 border-white p-3 text-white ">
                      {data.type}
                    </div>
                    <div className="mr-6">
                      <button onClick={handleButtonClick}>
                        <svg
                          width="34"
                          height="28"
                          viewBox="0 0 38 32"
                          fill={isPressed ? "white" : "none"}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex justify-between p-4 text-[#4B4B4B] transition-all duration-300 ${
                    hover && index == idx
                      ? "absolute bottom-0 h-[28%] w-full bg-[#ffffffe7]"
                      : ""
                  }`}
                >
                  <span className="flex flex-col space-y-3">
                    <div className="text-xl font-medium ">{data.nama}</div>
                    <div className="flex flex-row items-center space-x-2">
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 15.5V8.5C1.625 8.03587 1.80937 7.59075 2.13756 7.26256C2.46575 6.93437 2.91087 6.75 3.375 6.75M3.375 6.75H17.375M3.375 6.75V3.25C3.375 2.78587 3.55937 2.34075 3.88756 2.01256C4.21575 1.68437 4.66087 1.5 5.125 1.5H15.625C16.0891 1.5 16.5342 1.68437 16.8624 2.01256C17.1906 2.34075 17.375 2.78587 17.375 3.25V6.75M17.375 6.75C17.8391 6.75 18.2842 6.93437 18.6124 7.26256C18.9406 7.59075 19.125 8.03587 19.125 8.5V15.5M10.375 1.5V6.75M1.625 13.75H19.125"
                          stroke="#4B4B4B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{data.bed}</span>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6162 11.25V12.125C16.6162 13.7963 15.68 15.2487 14.2975 15.9837L14.8662 18.25H13.1162L12.6787 16.5H4.80371L4.36621 18.25H2.61621L3.18496 15.9837C2.48425 15.612 1.89811 15.0564 1.48955 14.3765C1.081 13.6966 0.865498 12.9182 0.866211 12.125V11.25H-0.00878906V9.5H15.7412V3.375C15.7412 3.14294 15.649 2.92038 15.4849 2.75628C15.3208 2.59219 15.0983 2.5 14.8662 2.5C14.4287 2.5 14.0962 2.7975 13.9912 3.19125C14.5425 3.66375 14.8662 4.36375 14.8662 5.125H9.61621C9.61621 4.42881 9.89277 3.76113 10.3851 3.26884C10.8773 2.77656 11.545 2.5 12.2412 2.5H12.39C12.7487 1.485 13.72 0.75 14.8662 0.75C15.5624 0.75 16.2301 1.02656 16.7224 1.51884C17.2146 2.01113 17.4912 2.67881 17.4912 3.375V11.25H16.6162ZM14.8662 11.25H2.61621V12.125C2.61621 12.8212 2.89277 13.4889 3.38506 13.9812C3.87734 14.4734 4.54502 14.75 5.24121 14.75H12.2412C12.9374 14.75 13.6051 14.4734 14.0974 13.9812C14.5896 13.4889 14.8662 12.8212 14.8662 12.125V11.25Z"
                          fill="#4B4B4B"
                        />
                      </svg>
                      <span>{data.shower}</span>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.81543 7.625V14.625C1.81543 14.8571 1.90762 15.0796 2.07171 15.2437C2.23581 15.4078 2.45837 15.5 2.69043 15.5H9.69043M1.81543 3.25V2.375C1.81543 2.14294 1.90762 1.92038 2.07171 1.75628C2.23581 1.59219 2.45837 1.5 2.69043 1.5H3.56543M7.94043 1.5H9.69043M14.0654 1.5H14.9404C15.1725 1.5 15.3951 1.59219 15.5591 1.75628C15.7232 1.92038 15.8154 2.14294 15.8154 2.375V3.25M15.8154 7.625V9.375M15.8154 13.75V14.625C15.8154 14.8571 15.7232 15.0796 15.5591 15.2437C15.3951 15.4078 15.1725 15.5 14.9404 15.5H14.0654"
                          stroke="#4B4B4B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.81543 8.5H7.94043C8.17249 8.5 8.39505 8.59219 8.55915 8.75628C8.72324 8.92038 8.81543 9.14294 8.81543 9.375V15.5"
                          stroke="#4B4B4B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{data.luas} m2</span>
                    </div>
                    {/* <div className="text-base font-medium">{data.lokasi}</div> */}
                  </span>
                  <span className="text-xl font-semibold">
                    Rp {data.harga} Jt
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-20 mt-10 flex items-center justify-center">
        {visibleItems < data.length && (
          <button
            className=" h-12 w-36 rounded-3xl border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
