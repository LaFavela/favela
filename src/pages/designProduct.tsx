import Head from "next/head";
import Footer from "../components/footer";
import { useState, useRef, useEffect } from "react";
import { CarouselDesign } from "@/components/carousel";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Status from "@/components/status";
import Image from "next/image";
import calculate from "@/tools/calculate";
import IMGPreview from "@/components/imgPreview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const profile = [
  {
    name: "Raihan",
    city: "Dompu",
    img: "/assets/profile/raihan.jpg",
  },
];

const properti = [
  {
    name: "Rumah Minimalis",
    type: "Villa",
    price: 5000000000,
    img: "/assets/build/desain_1.jpg",
    bedroom: 3,
    bathroom: 2,
    size: 323,
    review: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Incidunt sapiente veniam pariatur. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur.",
  },
];

const prices = [
  {
    id: 1,
    month: "Rp. 20.000.000,00",
    year: "Rp. 230.000.000,00",
  },
];
const review = [
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  
];

const infrastructure = [
  "Kamar mandi",
  "Garasi",
  "Kolam Aerobik",
  "Lapangan Basket",
  "Kamar Pembantu",
  "Teras",
  "Teras Terbuka",
];

const denah = [
  "/assets/product/denah.png",
  "/assets/product/denah.png",
  "/assets/product/denah.png",
];

// Carousel
const design = [
  "/assets/build/desain_1.jpg",
  "/assets/build/desain_2.jpg",
  "/assets/build/desain_3.jpg",
  "/assets/build/desain_4.jpg",
  "/assets/build/desain_1.jpg",
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
// Carousel End
export default function DesignProduct() {
  const [srcIMG, setSrcIMG] = useState<any>("" as any);
  const [showIMG, setShowIMG] = useState(false);
  const handleOnCloseIMG = () => setShowIMG(false);

  // Carousel Design
  const [visibleItems, setVisibleItems] = useState(3);
  const [img, setImg] = useState(design[0]);
  const [currImg, setCurrImg] = useState(0);
  const clickHandler = (design: any, index: number) => {
    setImg(design);
    setCurrImg(index);
  };

  const refs = useRef([]);
  refs.current = [];
  // // Carousel Design
  return (
    <div className="flex justify-center">
      <div className="mb-10">
        {/* The Product */}
        <div className="z-50 mt-[2.6875rem]  flex justify-center space-x-[2.6875rem] rounded-[1.5625rem] bg-white p-[3.5625rem] drop-shadow-landingShado">
          <div className="flex h-[34.4375rem] w-[33.625rem] ">
            <div className="flex h-full w-full flex-col space-y-5">
              <div className="flex aspect-square ">
                <div
                  className="relative h-full w-full flex-auto"
                  onClick={() => {
                    setSrcIMG(img);
                    setShowIMG(true);
                  }}
                >
                  <Image
                    className="rounded-3xl"
                    src={img}
                    alt={""}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={false}
                  containerClass="h-full w-full"
                >
                  {design.map((image, index) => (
                    <div
                      key={index}
                      className=""
                      onClick={() => clickHandler(image, index)}
                    >
                      {/* <img src={image} alt="" className={currImg === index ? " w-[90%] rounded-3xl border-4 border-gray-400 aspect-square object-cover" : " w-[90%] rounded-3xl border-4 border-transparent aspect-square object-cover"} /> */}
                      <Image
                        className={
                          currImg === index
                            ? " aspect-square w-[90%] rounded-3xl border-4 border-[#b17c3f] object-cover"
                            : " aspect-square w-[90%] rounded-3xl border-4 border-transparent object-cover"
                        }
                        src={image}
                        alt={""}
                        // fill={true}
                        width={70}
                        height={70}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          {/* Information Container */}
          <div className="grid  w-[37.75rem]">
            {/* Sekat */}
            <div className="">
              {/* First Line */}
              <div className="flex items-center justify-between">
                {/* name and type */}
                <div className="flex items-center space-x-[0.9375rem]">
                  <p className="text-[1.25rem] font-medium">
                    {properti[0].name}
                  </p>
                  <div className="rounded-[1.5625rem] bg-[#e4d1bc]">
                    <p className="px-[0.75rem] py-[0.15rem] text-[0.625rem] text-[#B17C3F]">
                      {properti[0].type}
                    </p>
                  </div>
                </div>
                {/* Share */}
                <div>
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 8.48193C8.70222 8.48193 8.28667 8.66265 7.96889 8.94578L3.61167 6.44578C3.64222 6.30723 3.66667 6.16867 3.66667 6.0241C3.66667 5.87952 3.64222 5.74096 3.61167 5.60241L7.92 3.12651C8.25 3.42771 8.68389 3.61446 9.16667 3.61446C10.1811 3.61446 11 2.80723 11 1.80723C11 0.807229 10.1811 0 9.16667 0C8.15222 0 7.33333 0.807229 7.33333 1.80723C7.33333 1.95181 7.35778 2.09036 7.38833 2.22892L3.08 4.70482C2.75 4.40361 2.31611 4.21687 1.83333 4.21687C0.818889 4.21687 0 5.0241 0 6.0241C0 7.0241 0.818889 7.83133 1.83333 7.83133C2.31611 7.83133 2.75 7.64458 3.08 7.34337L7.43111 9.8494C7.40056 9.9759 7.38222 10.1084 7.38222 10.241C7.38222 11.2108 8.18278 12 9.16667 12C10.1506 12 10.9511 11.2108 10.9511 10.241C10.9511 9.27108 10.1506 8.48193 9.16667 8.48193Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              {/* Second Line */}
              <div>
                <div className="mt-[0.4rem]  flex items-center space-x-2 text-[0.875rem] font-medium">
                  <svg
                    width="74"
                    height="11"
                    viewBox="0 0 74 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00001 9.6471C4.42362 9.6471 3.88195 9.53765 3.37501 9.31876C2.86807 9.09987 2.42709 8.80307 2.05209 8.42835C1.67709 8.05335 1.38029 7.61237 1.16168 7.10543C0.943066 6.59848 0.833621 6.05682 0.833344 5.48043C0.833344 4.90404 0.942788 4.36237 1.16168 3.85543C1.38057 3.34848 1.67737 2.90751 2.05209 2.53251C2.42709 2.15751 2.86807 1.86071 3.37501 1.6421C3.88195 1.42348 4.42362 1.31404 5.00001 1.31376C5.5764 1.31376 6.11807 1.42321 6.62501 1.6421C7.13195 1.86098 7.57293 2.15779 7.94793 2.53251C8.32293 2.90751 8.61987 3.34848 8.83876 3.85543C9.05765 4.36237 9.16695 4.90404 9.16668 5.48043C9.16668 6.05682 9.05723 6.59848 8.83834 7.10543C8.61945 7.61237 8.32265 8.05335 7.94793 8.42835C7.57293 8.80335 7.13195 9.10029 6.62501 9.31918C6.11807 9.53807 5.5764 9.64737 5.00001 9.6471Z"
                      fill="black"
                    />
                    <g clipPath="url(#clip0_70_88)">
                      <path
                        d="M32.8581 5.49329C32.8598 4.9169 32.9708 4.37555 33.1911 3.86924C33.4115 3.36292 33.7096 2.92281 34.0853 2.54888C34.4614 2.17496 34.9032 1.87942 35.4108 1.66227C35.9184 1.44511 36.4604 1.33722 37.0368 1.3386C37.6131 1.34025 38.1545 1.45125 38.6608 1.67159C39.1671 1.89193 39.6072 2.19 39.9812 2.5658C40.3551 2.94187 40.6506 3.3837 40.8678 3.89126C41.0849 4.39883 41.1928 4.94081 41.1914 5.5172C41.1898 6.09359 41.0788 6.63494 40.8585 7.14125C40.6381 7.64757 40.34 8.08768 39.9642 8.46161C39.5882 8.83553 39.1463 9.13121 38.6388 9.34864C38.1312 9.56607 37.5892 9.67383 37.0128 9.67189C36.4365 9.67024 35.8951 9.55924 35.3888 9.3389C34.8825 9.11856 34.4424 8.82049 34.0684 8.44469C33.6945 8.06862 33.3988 7.62679 33.1814 7.11922C32.964 6.61165 32.8562 6.06968 32.8581 5.49329Z"
                        fill="url(#paint0_linear_70_88)"
                      />
                    </g>
                    <path
                      d="M21 9.64711C20.4236 9.64711 19.882 9.53767 19.375 9.31878C18.8681 9.09989 18.4271 8.80308 18.0521 8.42836C17.6771 8.05336 17.3803 7.61239 17.1617 7.10544C16.9431 6.5985 16.8336 6.05683 16.8333 5.48044C16.8333 4.90406 16.9428 4.36239 17.1617 3.85544C17.3806 3.3485 17.6774 2.90753 18.0521 2.53253C18.4271 2.15753 18.8681 1.86072 19.375 1.64211C19.882 1.4235 20.4236 1.31406 21 1.31378C21.5764 1.31378 22.1181 1.42322 22.625 1.64211C23.132 1.861 23.5729 2.15781 23.9479 2.53253C24.3229 2.90753 24.6199 3.3485 24.8388 3.85544C25.0576 4.36239 25.167 4.90406 25.1667 5.48044C25.1667 6.05683 25.0572 6.5985 24.8383 7.10544C24.6195 7.61239 24.3226 8.05336 23.9479 8.42836C23.5729 8.80336 23.132 9.10031 22.625 9.31919C22.1181 9.53808 21.5764 9.64739 21 9.64711Z"
                      fill="black"
                    />
                    <path
                      d="M53 9.6471C52.4236 9.6471 51.882 9.53765 51.375 9.31876C50.8681 9.09987 50.4271 8.80307 50.0521 8.42835C49.6771 8.05335 49.3803 7.61237 49.1617 7.10543C48.9431 6.59848 48.8336 6.05682 48.8333 5.48043C48.8333 4.90404 48.9428 4.36237 49.1617 3.85543C49.3806 3.34848 49.6774 2.90751 50.0521 2.53251C50.4271 2.15751 50.8681 1.86071 51.375 1.6421C51.882 1.42348 52.4236 1.31404 53 1.31376C53.5764 1.31376 54.1181 1.42321 54.625 1.6421C55.132 1.86098 55.5729 2.15779 55.9479 2.53251C56.3229 2.90751 56.6199 3.34848 56.8388 3.85543C57.0576 4.36237 57.167 4.90404 57.1667 5.48043C57.1667 6.05682 57.0572 6.59848 56.8383 7.10543C56.6195 7.61237 56.3226 8.05335 55.9479 8.42835C55.5729 8.80335 55.132 9.10029 54.625 9.31918C54.1181 9.53807 53.5764 9.64737 53 9.6471Z"
                      fill="#BEB8B8"
                    />
                    <path
                      d="M69 9.6471C68.4236 9.6471 67.882 9.53765 67.375 9.31876C66.8681 9.09987 66.4271 8.80307 66.0521 8.42835C65.6771 8.05335 65.3803 7.61237 65.1617 7.10543C64.9431 6.59848 64.8336 6.05682 64.8333 5.48043C64.8333 4.90404 64.9428 4.36237 65.1617 3.85543C65.3806 3.34848 65.6774 2.90751 66.0521 2.53251C66.4271 2.15751 66.8681 1.86071 67.375 1.6421C67.882 1.42348 68.4236 1.31404 69 1.31376C69.5764 1.31376 70.1181 1.42321 70.625 1.6421C71.132 1.86098 71.5729 2.15779 71.9479 2.53251C72.3229 2.90751 72.6199 3.34848 72.8388 3.85543C73.0576 4.36237 73.167 4.90404 73.1667 5.48043C73.1667 6.05682 73.0572 6.59848 72.8383 7.10543C72.6195 7.61237 72.3226 8.05335 71.9479 8.42835C71.5729 8.80335 71.132 9.10029 70.625 9.31918C70.1181 9.53807 69.5764 9.64737 69 9.6471Z"
                      fill="#BEB8B8"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_70_88"
                        x1="41.1914"
                        y1="5.5172"
                        x2="32.8581"
                        y2="5.49329"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.211458" stopColor="#BEB8B8" />
                        <stop offset="0.2375" />
                      </linearGradient>
                      <clipPath id="clip0_70_88">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(42.0391 0.519611) rotate(90.1644)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="">{properti[0].review} Review</p>
                </div>
              </div>
              {/* Third Line */}
              <div className="mt-[0.4rem] flex items-center  space-x-4">
                <div className="flex items-center space-x-2  ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 20V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10M5 10H21M5 10V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V10M21 10C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12V20M13 4V10M3 18H23"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-1 text-[0.75rem]">
                    {properti[0].bedroom} Bedroom
                  </p>
                </div>
                <div className="flex items-center space-x-2 ">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1855_1677)">
                      <path
                        d="M18.1986 13.9165V14.8748C18.1986 16.7053 17.1732 18.2961 15.659 19.1011L16.2819 21.5832H14.3652L13.8861 19.6665H5.26107L4.7819 21.5832H2.86523L3.48815 19.1011C2.7207 18.694 2.07874 18.0854 1.63128 17.3407C1.18382 16.5961 0.947787 15.7436 0.948568 14.8748V13.9165H-0.00976562V11.9998H17.2402V5.2915C17.2402 5.03734 17.1393 4.79358 16.9595 4.61386C16.7798 4.43414 16.5361 4.33317 16.2819 4.33317C15.8027 4.33317 15.4386 4.659 15.3236 5.09025C15.9273 5.60775 16.2819 6.37442 16.2819 7.20817H10.5319C10.5319 6.44567 10.8348 5.71441 11.374 5.17524C11.9131 4.63607 12.6444 4.33317 13.4069 4.33317H13.5698C13.9627 3.2215 15.0265 2.4165 16.2819 2.4165C17.0444 2.4165 17.7757 2.7194 18.3148 3.25857C18.854 3.79774 19.1569 4.52901 19.1569 5.2915V13.9165H18.1986ZM16.2819 13.9165H2.86523V14.8748C2.86523 15.6373 3.16814 16.3686 3.7073 16.9078C4.24647 17.4469 4.97774 17.7498 5.74023 17.7498H13.4069C14.1694 17.7498 14.9007 17.4469 15.4398 16.9078C15.979 16.3686 16.2819 15.6373 16.2819 14.8748V13.9165Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1855_1677">
                        <rect
                          width="23"
                          height="23"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="mt-1 text-[0.75rem]">
                    {properti[0].bathroom} Bathroom
                  </p>
                </div>
                <div className="flex items-center space-x-2 ">
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07324 11V19C2.07324 19.2652 2.1786 19.5196 2.36614 19.7071C2.55367 19.8946 2.80803 20 3.07324 20H11.0732M2.07324 6V5C2.07324 4.73478 2.1786 4.48043 2.36614 4.29289C2.55367 4.10536 2.80803 4 3.07324 4H4.07324M9.07324 4H11.0732M16.0732 4H17.0732C17.3385 4 17.5928 4.10536 17.7803 4.29289C17.9679 4.48043 18.0732 4.73478 18.0732 5V6M18.0732 11V13M18.0732 18V19C18.0732 19.2652 17.9679 19.5196 17.7803 19.7071C17.5928 19.8946 17.3385 20 17.0732 20H16.0732"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.07324 12H9.07324C9.33846 12 9.59281 12.1054 9.78035 12.2929C9.96789 12.4804 10.0732 12.7348 10.0732 13V20"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mt-1 text-[0.75rem]">{properti[0].size} m2</p>
                </div>
              </div>
              {/* FOurth Line */}
              <div>
                <p className="mt-[0.4rem] text-[1.5rem] font-semibold">
                  {"Rp. " + calculate(properti[0].price)}
                </p>
              </div>
              {/* Fifth Line */}
              <div className="mt-[0.4rem]">
                <p className="text-[0.9375rem] font-normal">
                  {properti[0].description}
                </p>
              </div>
            </div>
            <div className="flex place-items-end  justify-end">
              <button className=" flex h-[2.066875rem] w-[6.319375rem] items-center justify-center space-x-1 rounded-full bg-[#B17C3F] text-white">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7584 0.0704842C12.9273 0.00807421 13.1122 -0.0134506 13.2938 0.00814997C13.4754 0.0297505 13.647 0.093687 13.7909 0.193304C13.9348 0.292922 14.0457 0.424578 14.1119 0.574571C14.1782 0.724563 14.1975 0.887408 14.1677 1.04616L12.6176 9.30096C12.4672 10.0972 11.4721 10.5539 10.6403 10.1572C9.94454 9.8254 8.91113 9.31416 7.98161 8.78072C7.51685 8.5137 6.09317 7.65864 6.26814 7.0502C6.4185 6.52996 8.81066 4.57501 10.1776 3.41273C10.7141 2.9561 10.4695 2.69268 9.83587 3.11271C8.26183 4.15558 5.7364 5.7415 4.90119 6.18793C4.16441 6.58156 3.78029 6.64877 3.321 6.58156C2.48306 6.45915 1.70595 6.26954 1.07169 6.03852C0.214612 5.7265 0.256304 4.69202 1.071 4.3908L12.7584 0.0704842Z"
                    fill="white"
                  />
                </svg>

                <p className="text-[0.75rem]">Request</p>
              </button>
            </div>
          </div>
        </div>
        {/* Detail,Fasiliti, Review */}
        <div className="-z-20 mt-[1.75rem] flex justify-between">
          {/* Left */}
          <div className="w-[54.7rem] space-y-7">
            {/* Detail */}
            <div className="w-full space-y-3 rounded-[1.5625rem] bg-[#fff] p-[2.4375rem] drop-shadow-landingShado">
              <p className="text-[1.25rem] font-medium">Detail</p>
              <div className="space-y-2">
                {/* Type */}
                <div className="flex space-x-2">
                  <p className="text-[0.9375rem] font-normal text-[#B17C3F]">
                    Property Type:
                  </p>
                  <p className="text-[0.9375rem] font-medium ">Villa</p>
                </div>
                {/* Hour */}
                <div className="flex space-x-2">
                  <p className="text-[0.9375rem] font-normal text-[#B17C3F]">
                    Registered:
                  </p>
                  <p className="text-[0.9375rem] font-medium ">1 Hour Ago</p>
                </div>
                {/* Hour */}
                <div className="space-y-2">
                  <p className="text-[0.9375rem] font-normal text-[#B17C3F]">
                    Description Feature:
                  </p>
                  <p className="text-[0.9375rem] font-medium ">
                    Morbi lectus magna, elementum quis egestas id, efficitur
                    eget lacus. Nulla ullamcorper pharetra magna non posuere.
                    Vivamus hendrerit eleifend risus, eu suscipit leo vulputate
                    in. Etiam molestie, odio in sollicitudin rhoncus, urna enim
                    tempor est, non condimentum arcu velit vitae purus. Sed eget
                    placerat eros. Duis at aliquet eros. Praesent eu ipsum sit
                    amet purus varius euismod at id ipsum. Vivamus elementum
                    pulvinar mi eu vestibulum. Vestibulum in mollis magna. Proin
                    bibendum sodales nibh, ac viverra orci molestie id. Ut
                    maximus diam in tristique fringilla. Nullam rutrum turpis
                    non tellus viverra ultricies.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[0.9375rem] font-normal text-[#B17C3F]">
                    Floor Plan:
                  </p>
                  <div className="flex space-x-3">
                    {denah.map((data, idx) => (
                      <div
                        key={idx}
                        className=" overflow-hidden "
                        onClick={() => {
                          setSrcIMG(data);
                          setShowIMG(true);
                        }}
                      >
                        <Image
                          src={data}
                          alt={"Denah"}
                          width={205}
                          height={123}
                          // fill={true}
                          // objectFit="cover"
                          // fill={true}
                          // layout={"fill"}
                          // objectFit={"contain"}
                          className=""
                        ></Image>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Review */}
            <div className="w-full space-y-3 rounded-[1.5625rem] bg-[#fff] p-[2.4375rem] drop-shadow-landingShado">
              <p className="text-[1.25rem] font-medium">Review</p>
              {review.length !=0 ? (
                <div>
                  <div className="space-y-2">
                    {review.slice(0, visibleItems).map((data, idx) => (
                      <div
                        key={idx}
                        className="mx-6 flex h-fit space-x-4  space-y-2 border-b-[0.005rem] border-[#D0D0D0] py-2"
                      >
                        <div className="mt-3 h-fit w-fit overflow-hidden rounded-full  ">
                          <Image
                            src={data.img}
                            alt={"Review"}
                            width={200}
                            height={200}
                            // objectFit={"contain"}
                          ></Image>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <p className="inline-block align-bottom text-[0.9375rem] font-normal">
                              {data.name}
                            </p>
                            <p className="text-[0.75rem] text-[#909090] ">
                              {data.posttime}
                            </p>
                          </div>
                          <div>
                            <svg
                              width="74"
                              height="11"
                              viewBox="0 0 74 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg "
                              className="ml-[2px]"
                            >
                              <g clipPath="url(#clip0_120_585)">
                                <path
                                  d="M5.00016 9.16671C4.42377 9.16671 3.88211 9.05726 3.37516 8.83837C2.86822 8.61948 2.42725 8.32268 2.05225 7.94796C1.67725 7.57296 1.38044 7.13198 1.16183 6.62504C0.943218 6.1181 0.833774 5.57643 0.833496 5.00004C0.833496 4.42365 0.942941 3.88199 1.16183 3.37504C1.38072 2.8681 1.67752 2.42712 2.05225 2.05212C2.42725 1.67712 2.86822 1.38032 3.37516 1.16171C3.88211 0.943096 4.42377 0.833652 5.00016 0.833374C5.57655 0.833374 6.11822 0.942819 6.62516 1.16171C7.13211 1.3806 7.57308 1.6774 7.94808 2.05212C8.32308 2.42712 8.62002 2.8681 8.83891 3.37504C9.0578 3.88199 9.16711 4.42365 9.16683 5.00004C9.16683 5.57643 9.05738 6.1181 8.8385 6.62504C8.61961 7.13198 8.3228 7.57296 7.94808 7.94796C7.57308 8.32296 7.13211 8.6199 6.62516 8.83879C6.11822 9.05768 5.57655 9.16698 5.00016 9.16671Z"
                                  fill="black"
                                />
                              </g>
                              <g clipPath="url(#clip1_120_585)">
                                <path
                                  d="M32.8579 5.01286C32.8595 4.43647 32.9705 3.89512 33.1909 3.38881C33.4112 2.88249 33.7093 2.44237 34.0851 2.06845C34.4611 1.69453 34.903 1.39899 35.4105 1.18183C35.9181 0.964676 36.4601 0.856786 37.0365 0.858162C37.6129 0.859816 38.1542 0.970814 38.6605 1.19116C39.1668 1.4115 39.607 1.70957 39.9809 2.08537C40.3548 2.46144 40.6503 2.90326 40.8675 3.41083C41.0847 3.9184 41.1925 4.46038 41.1912 5.03677C41.1895 5.61315 41.0785 6.1545 40.8582 6.66082C40.6378 7.16713 40.3398 7.60725 39.964 7.98117C39.5879 8.3551 39.1461 8.65077 38.6385 8.86821C38.1309 9.08564 37.589 9.19339 37.0126 9.19146C36.4362 9.18981 35.8948 9.07881 35.3885 8.85847C34.8822 8.63812 34.4421 8.34005 34.0682 7.96426C33.6942 7.58818 33.3986 7.14636 33.1811 6.63879C32.9637 6.13122 32.8559 5.58924 32.8579 5.01286Z"
                                  fill="black"
                                />
                              </g>
                              <g clipPath="url(#clip2_120_585)">
                                <path
                                  d="M21.0002 9.16671C20.4238 9.16671 19.8821 9.05726 19.3752 8.83837C18.8682 8.61949 18.4272 8.32268 18.0522 7.94796C17.6772 7.57296 17.3804 7.13198 17.1618 6.62504C16.9432 6.1181 16.8338 5.57643 16.8335 5.00004C16.8335 4.42365 16.9429 3.88199 17.1618 3.37504C17.3807 2.8681 17.6775 2.42712 18.0522 2.05212C18.4272 1.67712 18.8682 1.38032 19.3752 1.16171C19.8821 0.943096 20.4238 0.833652 21.0002 0.833374C21.5766 0.833374 22.1182 0.942819 22.6252 1.16171C23.1321 1.3806 23.5731 1.6774 23.9481 2.05212C24.3231 2.42712 24.62 2.8681 24.8389 3.37504C25.0578 3.88199 25.1671 4.42365 25.1668 5.00004C25.1668 5.57643 25.0574 6.1181 24.8385 6.62504C24.6196 7.13198 24.3228 7.57296 23.9481 7.94796C23.5731 8.32296 23.1321 8.6199 22.6252 8.83879C22.1182 9.05768 21.5766 9.16698 21.0002 9.16671Z"
                                  fill="black"
                                />
                              </g>
                              <g clipPath="url(#clip3_120_585)">
                                <path
                                  d="M53.0002 9.16671C52.4238 9.16671 51.8821 9.05726 51.3752 8.83837C50.8682 8.61948 50.4272 8.32268 50.0522 7.94796C49.6772 7.57296 49.3804 7.13198 49.1618 6.62504C48.9432 6.1181 48.8338 5.57643 48.8335 5.00004C48.8335 4.42365 48.9429 3.88199 49.1618 3.37504C49.3807 2.8681 49.6775 2.42712 50.0522 2.05212C50.4272 1.67712 50.8682 1.38032 51.3752 1.16171C51.8821 0.943096 52.4238 0.833652 53.0002 0.833374C53.5766 0.833374 54.1182 0.942819 54.6252 1.16171C55.1321 1.3806 55.5731 1.6774 55.9481 2.05212C56.3231 2.42712 56.62 2.8681 56.8389 3.37504C57.0578 3.88199 57.1671 4.42365 57.1668 5.00004C57.1668 5.57643 57.0574 6.1181 56.8385 6.62504C56.6196 7.13198 56.3228 7.57296 55.9481 7.94796C55.5731 8.32296 55.1321 8.6199 54.6252 8.83879C54.1182 9.05768 53.5766 9.16698 53.0002 9.16671Z"
                                  fill="black"
                                />
                              </g>
                              <g clipPath="url(#clip4_120_585)">
                                <path
                                  d="M69.0002 9.16671C68.4238 9.16671 67.8821 9.05726 67.3752 8.83837C66.8682 8.61948 66.4272 8.32268 66.0522 7.94796C65.6772 7.57296 65.3804 7.13198 65.1618 6.62504C64.9432 6.1181 64.8338 5.57643 64.8335 5.00004C64.8335 4.42365 64.9429 3.88199 65.1618 3.37504C65.3807 2.8681 65.6775 2.42712 66.0522 2.05212C66.4272 1.67712 66.8682 1.38032 67.3752 1.16171C67.8821 0.943096 68.4238 0.833652 69.0002 0.833374C69.5766 0.833374 70.1182 0.942819 70.6252 1.16171C71.1321 1.3806 71.5731 1.6774 71.9481 2.05212C72.3231 2.42712 72.62 2.8681 72.8389 3.37504C73.0578 3.88199 73.1671 4.42365 73.1668 5.00004C73.1668 5.57643 73.0574 6.1181 72.8385 6.62504C72.6196 7.13198 72.3228 7.57296 71.9481 7.94796C71.5731 8.32296 71.1321 8.6199 70.6252 8.83879C70.1182 9.05768 69.5766 9.16698 69.0002 9.16671Z"
                                  fill="#BEB8B8"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_120_585">
                                  <rect width="10" height="10" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_120_585">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(42.0391 0.0391846) rotate(90.1644)"
                                  />
                                </clipPath>
                                <clipPath id="clip2_120_585">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(16)"
                                  />
                                </clipPath>
                                <clipPath id="clip3_120_585">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(48)"
                                  />
                                </clipPath>
                                <clipPath id="clip4_120_585">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(64)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <p className="text-[0.75rem] text-[#646464]">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center cursor-pointer">
                    {visibleItems < review.length ? (

                      <p className="text-[#B17C3F] text-[0.8rem] mt-4"
                      onClick={()=>{
                        setVisibleItems(visibleItems+3)
                      }}
                      >Show More</p>
                      ):(
                      <p className="text-[#B17C3F] text-[0.8rem] mt-4"
                      onClick={()=>{
                        setVisibleItems(3)
                      }}
                      >Show Fewer</p>

                    )}

                  </div>
                </div>
              ):(
                <div className="flex justify-center">
                  <p className="mt-4 mb-4 text-gray-500">There is no review</p>
                </div>
              )}
            </div>
          </div>
          {/* Right */}
          <div className="h-fit w-[25rem] space-y-5 rounded-[1.5625rem] bg-white p-[2.4375rem] drop-shadow-landingShado">
            <p className="text-[1.25rem] font-medium">
              Facilities & Infrastructure
            </p>
            {infrastructure.map((data, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 text-[1rem] font-normal"
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.59215 1.17242e-05L1.12009 1.20071e-05C0.823027 1.20201e-05 0.538127 0.0878092 0.328068 0.244089C0.11801 0.400369 -4.10348e-07 0.61233 -4.00687e-07 0.833344L-3.64261e-08 9.16667C-2.67653e-08 9.38768 0.118011 9.59964 0.328069 9.75592C0.538128 9.9122 0.823028 10 1.1201 10L7.59215 10C7.74717 10 7.90051 9.97609 8.04246 9.92974C8.18441 9.88339 8.31189 9.81563 8.41682 9.73073L13.7009 5.56407L13.7086 5.55834C13.8961 5.40493 14 5.20502 14 4.99766C14 4.7903 13.8961 4.59039 13.7086 4.43699C13.7058 4.43521 13.7033 4.43329 13.7009 4.43126L8.41682 0.264594C8.31133 0.180549 8.18361 0.113653 8.04168 0.0681193C7.89976 0.0225852 7.7467 -0.000604356 7.59215 1.17242e-05Z"
                    fill="#B17C3F"
                  />
                </svg>
                <p>{data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" ">
        <IMGPreview
          src={srcIMG}
          onClose={handleOnCloseIMG}
          visible={showIMG}
          setShowIMG={setShowIMG}
        ></IMGPreview>
      </div>
    </div>
  );
}
