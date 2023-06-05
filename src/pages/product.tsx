import Head from "next/head";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import { useState, useRef } from "react";
import Map from "./maps";
import Carousel from "./carousel";
import { Modal } from "@mui/material";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AnyAaaaRecord } from "dns";

const data = [
  {
    name: "Raihan",
    city: "Dompu",
    img: "/assets/profile/raihan.jpg",
  },
];

const properti = [
  {
    name: "Ampenan Asri",
    type: "Villa",
    price: "Rp. 435.000.000,00",
    img: "/assets/landing/Build13.jpg",
  },
];

const prices = [
  {
    id: 1,
    month: "Rp. 20.000.000,00",
    year: "Rp. 230.000.000,00",
  },
];

export default function Product() {
  function ArrowLogo() {
    return (
      <div>
        <svg
          width="28"
          height="21"
          viewBox="0 0 28 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1843 0.839623L2.24019 0.839624C1.64605 0.839624 1.07625 1.01522 0.656137 1.32778C0.23602 1.64034 -8.20696e-07 2.06426 -8.01375e-07 2.50629L-7.28522e-08 19.1729C-5.35306e-08 19.615 0.236021 20.0389 0.656137 20.3514C1.07626 20.664 1.64606 20.8396 2.24019 20.8396L15.1843 20.8396C15.4943 20.8396 15.801 20.7918 16.0849 20.6991C16.3688 20.6064 16.6238 20.4709 16.8336 20.3011L27.4017 11.9677L27.4171 11.9563C27.7922 11.6495 28 11.2496 28 10.8349C28 10.4202 27.7922 10.0204 27.4171 9.71357C27.4117 9.71002 27.4065 9.70619 27.4017 9.70211L16.8336 1.36879C16.6227 1.2007 16.3672 1.06691 16.0834 0.975838C15.7995 0.88477 15.4934 0.838391 15.1843 0.839623Z"
            fill="#D0D0D0"
          />
        </svg>
      </div>
    );
  }

  function PopupPayment() {
    const closePopup = (event: any) => {
      event.preventDefault();
      event.target.closest(".popup-overlay").style.display = "none";
    };

    return (
      <div>
        <div className="h-max rounded-full">
          <Popup
            trigger={
              <button className="h-[3.7rem] w-[15rem] rounded-full border-2 border-[#B17C3F] bg-[#B17C3F] text-xl text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white">
                Buy
              </button>
            }
            modal
            nested
            className="h-max rounded-full "
            contentStyle={{
              borderRadius: "20px", // Tingkat radius yang diinginkan
              paddingBottom: "2rem",
            }}
          >
            <div className="h-full rounded-xl">
              <span className=" relative top-5 ml-9 font-semibold text-gold ">
                Properti yang di beli
              </span>
              <div className="ml-9 mt-8 flex h-16 w-16 rounded-full">
                <img src={data[0].img} alt="" className="rounded-full" />
                <div className="ml-6 mt-2 flex flex-col">
                  <span className="font-semibold">{data[0].name}</span>
                  <span className="text-sm text-gray-300">{data[0].city}</span>
                </div>
              </div>
              <div className="ml-9 mt-6 flex">
                <img
                  src={properti[0].img}
                  alt=""
                  className="h-[6.3rem] w-[7.9rem] rounded-lg object-cover"
                />
                <div className="ml-6 flex flex-col gap-1">
                  <span className="text-2xl font-light">
                    {properti[0].name}
                  </span>
                  <span className="text-gray-300">{properti[0].type}</span>
                  <span className="text-2xl font-medium">
                    {properti[0].price}
                  </span>
                </div>
              </div>
              <span className=" relative top-5 ml-9 font-medium text-gold ">
                Pilih Metode Pembayaran
              </span>
              <div className="mt-10 flex justify-center gap-8">
                <button
                  onClick={closePopup}
                  className="  h-11 w-[20rem] rounded-lg border-2 border-[#B17C3F] bg-white text-sm text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                >
                  Batal
                </button>
                <button className=" h-11 w-[20rem] rounded-lg border-2 border-[#B17C3F] bg-[#B17C3F] text-sm text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white">
                  Bayar
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    );
  }

  function PopupRent() {
    const closePopup = (event: any) => {
      event.preventDefault();
      event.target.closest(".popup-overlay").style.display = "none";
    };

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event:any) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <div className="h-max rounded-full">
          <Popup
            trigger={<button className="button-grey w-[8rem]">Rent</button>}
            modal
            nested
            className="h-max rounded-full "
            contentStyle={{
              borderRadius: "20px", // Tingkat radius yang diinginkan
              paddingBottom: "2rem",
            }}
          >
            <div className="h-full rounded-xl">
              <span className=" relative top-5 ml-9 font-semibold text-gold ">
                Properti yang di Sewa
              </span>
              <div className="ml-9 mt-8 flex h-16 w-16 rounded-full">
                <img src={data[0].img} alt="" className="rounded-full" />
                <div className="ml-6 mt-2 flex flex-col">
                  <span className="font-semibold">{data[0].name}</span>
                  <span className="text-sm text-gray-300">{data[0].city}</span>
                </div>
              </div>
              <div className="ml-9 mt-6 flex">
                <img
                  src={properti[0].img}
                  alt=""
                  className="h-[6.3rem] w-[7.9rem] rounded-lg object-cover"
                />
                <div className="ml-6 flex flex-col gap-1">
                  <span className="text-2xl font-light">
                    {properti[0].name}
                  </span>
                  <span className="text-gray-300">{properti[0].type}</span>
                  <span className="flex w-max gap-3 text-2xl font-medium">
                    <select
                      id="role"
                      placeholder="Choose Range"
                      className="rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="" hidden>
                        Choose Range
                      </option>
                      <option value="Year">Year</option>
                      <option value="Month">Month</option>
                    </select>
                    {selectedOption === "Year" ? prices[0].year : selectedOption === "Month" ? prices[0].month : ""}
                  </span>
                </div>
              </div>
              <span className=" relative top-5 ml-9 font-medium text-gold ">
                Pilih Metode Pembayaran
              </span>
              <div className="mt-10 flex justify-center gap-8">
                <button
                  onClick={closePopup}
                  className="  h-11 w-[20rem] rounded-lg border-2 border-[#B17C3F] bg-white text-sm text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                >
                  Batal
                </button>
                <button className=" h-11 w-[20rem] rounded-lg border-2 border-[#B17C3F] bg-[#B17C3F] text-sm text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white">
                  Bayar
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Favela Your Property at One Click</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/properti.png" />
      </Head>
      <Navbar></Navbar>
      {/* outest div - start */}
      <div className="flex-warp flex flex-col space-y-5 p-12">
        {/* main box */}
        <div className="flex space-x-10">
          {/* Image Box */}
          <div className="h-[60vw] w-[55%]">
            <Carousel></Carousel>
          </div>
          {/* Image Box - end */}
          {/* Description Box */}
          <div className="flex h-min w-[45%] flex-col">
            <p className="text-sm">
              <Link href="A">Villa</Link> &gt; Scandinavian
            </p>
            <p className="mt-3 text-[1.75rem] font-medium">Ampenan Asri</p>
            <p className="font-regular text-lg text-grayhov">
              Jl. Seketek Blok 7 Dasan Agung
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm font-medium">
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
                <g clip-path="url(#clip0_70_88)">
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
                    <stop offset="0.211458" stop-color="#BEB8B8" />
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
              <p className="">2 Ulasan</p>
            </div>
            <p className="mt-4 text-[2.06rem] font-medium">Rp 476jt</p>
            <div className="mt-4 flex flex-row items-center space-x-3 text-sm">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 17V9C1 8.46957 1.21071 7.96086 1.58579 7.58579C1.96086 7.21071 2.46957 7 3 7M3 7H19M3 7V3C3 2.46957 3.21071 1.96086 3.58579 1.58579C3.96086 1.21071 4.46957 1 5 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V7M19 7C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V17M11 1V7M1 15H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>3 Bedrooms</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1986 11.9167V12.875C18.1986 14.7054 17.1732 16.2963 15.659 17.1013L16.2819 19.5833H14.3652L13.8861 17.6667H5.26107L4.7819 19.5833H2.86523L3.48815 17.1013C2.7207 16.6941 2.07874 16.0856 1.63128 15.3409C1.18382 14.5963 0.947787 13.7437 0.948568 12.875V11.9167H-0.00976562V10H17.2402V3.29167C17.2402 3.03751 17.1393 2.79375 16.9595 2.61403C16.7798 2.43431 16.5361 2.33334 16.2819 2.33334C15.8027 2.33334 15.4386 2.65917 15.3236 3.09042C15.9273 3.60792 16.2819 4.37459 16.2819 5.20834H10.5319C10.5319 4.44584 10.8348 3.71457 11.374 3.17541C11.9131 2.63624 12.6444 2.33334 13.4069 2.33334H13.5698C13.9627 1.22167 15.0265 0.416672 16.2819 0.416672C17.0444 0.416672 17.7757 0.719573 18.3148 1.25874C18.854 1.79791 19.1569 2.52917 19.1569 3.29167V11.9167H18.1986ZM16.2819 11.9167H2.86523V12.875C2.86523 13.6375 3.16814 14.3688 3.7073 14.9079C4.24647 15.4471 4.97774 15.75 5.74023 15.75H13.4069C14.1694 15.75 14.9007 15.4471 15.4398 14.9079C15.979 14.3688 16.2819 13.6375 16.2819 12.875V11.9167Z"
                  fill="black"
                />
              </svg>
              <p>2 Showers</p>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07355 8V16C1.07355 16.2652 1.1789 16.5196 1.36644 16.7071C1.55398 16.8946 1.80833 17 2.07355 17H10.0735M1.07355 3V2C1.07355 1.73478 1.1789 1.48043 1.36644 1.29289C1.55398 1.10536 1.80833 1 2.07355 1H3.07355M8.07355 1H10.0735M15.0735 1H16.0735C16.3388 1 16.5931 1.10536 16.7807 1.29289C16.9682 1.48043 17.0735 1.73478 17.0735 2V3M17.0735 8V10M17.0735 15V16C17.0735 16.2652 16.9682 16.5196 16.7807 16.7071C16.5931 16.8946 16.3388 17 16.0735 17H15.0735"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.07355 9H8.07355C8.33876 9 8.59312 9.10536 8.78065 9.29289C8.96819 9.48043 9.07355 9.73478 9.07355 10V17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>232 m2</p>
            </div>
            <p className="my-10 text-2xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              aliquam porro. Maxime nesciunt quae veniam, quidem at fuga illum
              atque aperiam, cupiditate asperiores repellendus ducimus ratione
              architecto natus ipsam perferendis. Amet dolorum debitis facilis
              molestias dignissimos asperiores beatae ad ipsa, harum porro!
              Suscipit ex ut, adipisci fugiat ipsa ullam esse laborum ad! Et
              asperiores officia laborum! Saepe accusamus dolores tempora.
              Deserunt sit sunt tempora explicabo odit quas ipsum molestias ad
              at, repellendus, pariatur aspernatur laudantium, sed reprehenderit
              dolores. Quia eius corporis, ut obcaecati reiciendis architecto
              nisi recusandae voluptatibus doloribus odio. Molestias doloribus
              accusantium illum nemo error cumque natus reprehenderit dolorem
              accusamus eaque, nisi itaque aut quas quae minus, quis aliquid,
              voluptatem corporis architecto vel quaerat sequi? Doloribus
              corporis nostrum ab. Provident repudiandae nobis ipsam nesciunt
              voluptatum eaque amet debitis consectetur! Dolorem labore totam
              incidunt dolor placeat sapiente, neque reiciendis autem eligendi
              laudantium, sed sequi quod, atque error culpa nisi recusandae?
            </p>
            <div className="flex flex-row space-x-4">
              <PopupRent></PopupRent>
              <PopupPayment></PopupPayment>
            </div>
          </div>
          {/* Description Box - end*/}
        </div>
        {/* main box - end */}
        {/* description - start */}
        <div className="flex flex-col space-y-1">
          {/* section -start */}
          <nav className="sticky top-0 z-10 mt-10 flex flex-col space-y-1 bg-white pt-10">
            <div className="flex flex-row text-center text-xl text-[#D0D0D0]">
              <div className="w-[175px] text-[#B17C3F]">
                <button className="">Detail</button>
                <div className="absolute z-10 mt-1 w-[175px] rounded-full border-b-8 border-[#B17C3F]"></div>
              </div>
              <div className="w-[325px]">
                <button className="">Sarana & Prasarana</button>
                <div className="absolute z-10 mt-1 w-[325px] rounded-full border-b-8 border-[#D0D0D0]"></div>
              </div>
              <div className="w-[175px]">
                <button className="">Lokasi</button>
                <div className="absolute z-10 mt-1 w-[175px] rounded-full border-b-8 border-[#D0D0D0]"></div>
              </div>
              <div className="w-[175px]">
                <button className="">Ulasan</button>
                <div className="absolute z-10 mt-1 w-[175px] rounded-full border-b-8 border-[#D0D0D0]"></div>
              </div>
            </div>
            <div className="rounded-full border-b-8 border-[#D0D0D0] "></div>
          </nav>
          <div className="flex flex-col space-y-10 px-24 pt-9">
            {/* details */}
            <div id="details" className="">
              <div>
                <p className="text-4xl font-medium">Detail</p>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">
                    Tipe Properti
                  </p>
                  <p className="text-lg font-medium">Villa</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">ID Listing</p>
                  <p className="text-lg font-medium">20862274</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">Pengembang</p>
                  <p className="text-lg font-medium">ProbHunt</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">Listrik</p>
                  <p className="text-lg font-medium">N/A</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">Sertifikat</p>
                  <p className="text-lg font-medium">
                    SHM - Sertifikat Hak Milik
                  </p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">
                    Terdaftar Pada
                  </p>
                  <p className="text-lg font-medium">1 Jam Lalu</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-col space-y-2 pt-9">
                  <p className="text-sm font-medium text-grayhov">
                    Tahun Selesai
                  </p>
                  <p className="text-lg font-medium">2017</p>
                  <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                </div>
              </div>
            </div>
            {/* details - end */}
            {/* Sarana & Prasarana */}
            <div className="">
              <div>
                <p className="text-4xl font-medium">Sarana & Prasarana</p>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Kamar Mandi</p>
                </div>
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Kamar Pembantu</p>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Garasi</p>
                </div>
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Teras</p>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Kolam Aerobik</p>
                </div>
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Teras Terbuka</p>
                </div>
              </div>
              <div className="flex flex-row space-x-20">
                <div className="flex w-6/12 flex-row items-center space-x-4 pt-9">
                  <ArrowLogo></ArrowLogo>
                  <p className="text-2xl font-normal">Lapangan Basket</p>
                </div>
              </div>
            </div>
            {/* Sarana & Prasarana - end */}
            {/* Lokasi */}
            <div className="">
              <div className="">
                <p className="text-4xl font-medium">Lokasi</p>
                <div></div>
                <div className="flex flex-row space-x-20">
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      Tipe Properti
                    </p>
                    <p className="text-lg font-medium">Villa</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      ID Listing
                    </p>
                    <p className="text-lg font-medium">20862274</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                </div>
                <div className="flex flex-row space-x-20">
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      Pengembang
                    </p>
                    <p className="text-lg font-medium">ProbHunt</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">Listrik</p>
                    <p className="text-lg font-medium">N/A</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                </div>
                <div className="flex flex-row space-x-20">
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      Sertifikat
                    </p>
                    <p className="text-lg font-medium">
                      SHM - Sertifikat Hak Milik
                    </p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      Terdaftar Pada
                    </p>
                    <p className="text-lg font-medium">1 Jam Lalu</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                </div>
                <div className="flex flex-row space-x-20">
                  <div className="flex w-6/12 flex-col space-y-2 pt-9">
                    <p className="text-sm font-medium text-grayhov">
                      Tahun Selesai
                    </p>
                    <p className="text-lg font-medium">2017</p>
                    <div className="relative flex flex-col space-y-3 rounded-full border-b-2"></div>
                  </div>
                </div>
              </div>
              {/* details - end */}
              <div className="mt-14 h-[80vh] w-full overflow-hidden rounded-3xl ">
                <Map lat={-8.59194106934345} lng={116.08996926363294}></Map>
              </div>
            </div>
            {/* Lokasi - end */}
            {/* Review - start */}
            <div>
              <p className="text-4xl font-medium">Ulasan</p>
              <Review></Review>
            </div>
            {/* Review - end */}
          </div>
          {/* description - end */}
        </div>
        {/* section - end */}
      </div>
      {/* outest div - end */}
      <Footer></Footer>
      {/* content - end */}
    </div>
  );
}

export function Review() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-8 flex flex-row">
          <div className="mt-3">
            <div className="h-12 w-12 rounded-full">
              <img
                src="/assets/profile/dwimas.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <div className="ml-6 min-h-fit">
            <div className="mt-1 flex flex-row items-center space-x-2">
              <p className="text-lg font-normal">Dimas Nugraha</p>
              <p className="mt-1 text-xs font-extralight">3 minutes ago</p>
            </div>
            <svg
              width="74"
              height="11"
              viewBox="0 0 74 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg "
              className="ml-[2px]"
            >
              <g clip-path="url(#clip0_120_585)">
                <path
                  d="M5.00016 9.16671C4.42377 9.16671 3.88211 9.05726 3.37516 8.83837C2.86822 8.61948 2.42725 8.32268 2.05225 7.94796C1.67725 7.57296 1.38044 7.13198 1.16183 6.62504C0.943218 6.1181 0.833774 5.57643 0.833496 5.00004C0.833496 4.42365 0.942941 3.88199 1.16183 3.37504C1.38072 2.8681 1.67752 2.42712 2.05225 2.05212C2.42725 1.67712 2.86822 1.38032 3.37516 1.16171C3.88211 0.943096 4.42377 0.833652 5.00016 0.833374C5.57655 0.833374 6.11822 0.942819 6.62516 1.16171C7.13211 1.3806 7.57308 1.6774 7.94808 2.05212C8.32308 2.42712 8.62002 2.8681 8.83891 3.37504C9.0578 3.88199 9.16711 4.42365 9.16683 5.00004C9.16683 5.57643 9.05738 6.1181 8.8385 6.62504C8.61961 7.13198 8.3228 7.57296 7.94808 7.94796C7.57308 8.32296 7.13211 8.6199 6.62516 8.83879C6.11822 9.05768 5.57655 9.16698 5.00016 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip1_120_585)">
                <path
                  d="M32.8579 5.01286C32.8595 4.43647 32.9705 3.89512 33.1909 3.38881C33.4112 2.88249 33.7093 2.44237 34.0851 2.06845C34.4611 1.69453 34.903 1.39899 35.4105 1.18183C35.9181 0.964676 36.4601 0.856786 37.0365 0.858162C37.6129 0.859816 38.1542 0.970814 38.6605 1.19116C39.1668 1.4115 39.607 1.70957 39.9809 2.08537C40.3548 2.46144 40.6503 2.90326 40.8675 3.41083C41.0847 3.9184 41.1925 4.46038 41.1912 5.03677C41.1895 5.61315 41.0785 6.1545 40.8582 6.66082C40.6378 7.16713 40.3398 7.60725 39.964 7.98117C39.5879 8.3551 39.1461 8.65077 38.6385 8.86821C38.1309 9.08564 37.589 9.19339 37.0126 9.19146C36.4362 9.18981 35.8948 9.07881 35.3885 8.85847C34.8822 8.63812 34.4421 8.34005 34.0682 7.96426C33.6942 7.58818 33.3986 7.14636 33.1811 6.63879C32.9637 6.13122 32.8559 5.58924 32.8579 5.01286Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip2_120_585)">
                <path
                  d="M21.0002 9.16671C20.4238 9.16671 19.8821 9.05726 19.3752 8.83837C18.8682 8.61949 18.4272 8.32268 18.0522 7.94796C17.6772 7.57296 17.3804 7.13198 17.1618 6.62504C16.9432 6.1181 16.8338 5.57643 16.8335 5.00004C16.8335 4.42365 16.9429 3.88199 17.1618 3.37504C17.3807 2.8681 17.6775 2.42712 18.0522 2.05212C18.4272 1.67712 18.8682 1.38032 19.3752 1.16171C19.8821 0.943096 20.4238 0.833652 21.0002 0.833374C21.5766 0.833374 22.1182 0.942819 22.6252 1.16171C23.1321 1.3806 23.5731 1.6774 23.9481 2.05212C24.3231 2.42712 24.62 2.8681 24.8389 3.37504C25.0578 3.88199 25.1671 4.42365 25.1668 5.00004C25.1668 5.57643 25.0574 6.1181 24.8385 6.62504C24.6196 7.13198 24.3228 7.57296 23.9481 7.94796C23.5731 8.32296 23.1321 8.6199 22.6252 8.83879C22.1182 9.05768 21.5766 9.16698 21.0002 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip3_120_585)">
                <path
                  d="M53.0002 9.16671C52.4238 9.16671 51.8821 9.05726 51.3752 8.83837C50.8682 8.61948 50.4272 8.32268 50.0522 7.94796C49.6772 7.57296 49.3804 7.13198 49.1618 6.62504C48.9432 6.1181 48.8338 5.57643 48.8335 5.00004C48.8335 4.42365 48.9429 3.88199 49.1618 3.37504C49.3807 2.8681 49.6775 2.42712 50.0522 2.05212C50.4272 1.67712 50.8682 1.38032 51.3752 1.16171C51.8821 0.943096 52.4238 0.833652 53.0002 0.833374C53.5766 0.833374 54.1182 0.942819 54.6252 1.16171C55.1321 1.3806 55.5731 1.6774 55.9481 2.05212C56.3231 2.42712 56.62 2.8681 56.8389 3.37504C57.0578 3.88199 57.1671 4.42365 57.1668 5.00004C57.1668 5.57643 57.0574 6.1181 56.8385 6.62504C56.6196 7.13198 56.3228 7.57296 55.9481 7.94796C55.5731 8.32296 55.1321 8.6199 54.6252 8.83879C54.1182 9.05768 53.5766 9.16698 53.0002 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip4_120_585)">
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
            <p className="mt-3 text-sm">Momen Kebersamaan</p>
            <p className="mt-1 w-9/12 font-poppins text-sm font-light text-[#909090]">
              Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi
              sendok es itu ke mulut, ,cuttttttttttt itu ngilu nya,saya benar
              benar langsung kehilangan moment kebersamaan sama sahabat sahabat
              saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk
              gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah
              mungkin paling banyak kali tuh kata temen temen,,... ehhh
              y&apos;oll pelan pelan dong makannya kita belum kebagian
              nihh....,,mas es nya yang banyak ya... dug dug..
            </p>
            <div className="mt-2 flex flex-row items-center space-x-4">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8.16064V20.1606H0V8.16064H4ZM8 20.1606C7.46957 20.1606 6.96086 19.9499 6.58579 19.5749C6.21071 19.1998 6 18.6911 6 18.1606V8.16064C6 7.61064 6.22 7.11064 6.59 6.75064L13.17 0.160645L14.23 1.22064C14.5 1.49064 14.67 1.86064 14.67 2.27064L14.64 2.59064L13.69 7.16064H20C20.5304 7.16064 21.0391 7.37136 21.4142 7.74643C21.7893 8.1215 22 8.63021 22 9.16064V11.1606C22 11.4206 21.95 11.6606 21.86 11.8906L18.84 18.9406C18.54 19.6606 17.83 20.1606 17 20.1606H8ZM8 18.1606H17.03L20 11.1606V9.16064H11.21L12.34 3.84064L8 8.19064V18.1606Z"
                  fill="#6E6E6E"
                />
              </svg>
              <p className="mt-1 text-sm font-normal text-[#6E6E6E]">20</p>
            </div>

            <svg
              width="993"
              height="2"
              viewBox="0 0 993 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg "
              className="mt-4"
            >
              <line
                x1="0.25"
                y1="0.910645"
                x2="992.75"
                y2="0.910645"
                stroke="#D0D0D0"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 flex flex-row">
          <div className="mt-3">
            <div className="h-12 w-12 rounded-full">
              <img
                src="/assets/profile/raihan.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <div className="ml-6 min-h-fit">
            <div className="mt-1 flex flex-row items-center space-x-2">
              <p className="text-lg font-normal">Dzulhi Nugraha</p>
              <p className="mt-1 text-xs font-extralight">3 minutes ago</p>
            </div>
            <svg
              width="74"
              height="11"
              viewBox="0 0 74 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg "
              className="ml-[2px]"
            >
              <g clip-path="url(#clip0_120_585)">
                <path
                  d="M5.00016 9.16671C4.42377 9.16671 3.88211 9.05726 3.37516 8.83837C2.86822 8.61948 2.42725 8.32268 2.05225 7.94796C1.67725 7.57296 1.38044 7.13198 1.16183 6.62504C0.943218 6.1181 0.833774 5.57643 0.833496 5.00004C0.833496 4.42365 0.942941 3.88199 1.16183 3.37504C1.38072 2.8681 1.67752 2.42712 2.05225 2.05212C2.42725 1.67712 2.86822 1.38032 3.37516 1.16171C3.88211 0.943096 4.42377 0.833652 5.00016 0.833374C5.57655 0.833374 6.11822 0.942819 6.62516 1.16171C7.13211 1.3806 7.57308 1.6774 7.94808 2.05212C8.32308 2.42712 8.62002 2.8681 8.83891 3.37504C9.0578 3.88199 9.16711 4.42365 9.16683 5.00004C9.16683 5.57643 9.05738 6.1181 8.8385 6.62504C8.61961 7.13198 8.3228 7.57296 7.94808 7.94796C7.57308 8.32296 7.13211 8.6199 6.62516 8.83879C6.11822 9.05768 5.57655 9.16698 5.00016 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip1_120_585)">
                <path
                  d="M32.8579 5.01286C32.8595 4.43647 32.9705 3.89512 33.1909 3.38881C33.4112 2.88249 33.7093 2.44237 34.0851 2.06845C34.4611 1.69453 34.903 1.39899 35.4105 1.18183C35.9181 0.964676 36.4601 0.856786 37.0365 0.858162C37.6129 0.859816 38.1542 0.970814 38.6605 1.19116C39.1668 1.4115 39.607 1.70957 39.9809 2.08537C40.3548 2.46144 40.6503 2.90326 40.8675 3.41083C41.0847 3.9184 41.1925 4.46038 41.1912 5.03677C41.1895 5.61315 41.0785 6.1545 40.8582 6.66082C40.6378 7.16713 40.3398 7.60725 39.964 7.98117C39.5879 8.3551 39.1461 8.65077 38.6385 8.86821C38.1309 9.08564 37.589 9.19339 37.0126 9.19146C36.4362 9.18981 35.8948 9.07881 35.3885 8.85847C34.8822 8.63812 34.4421 8.34005 34.0682 7.96426C33.6942 7.58818 33.3986 7.14636 33.1811 6.63879C32.9637 6.13122 32.8559 5.58924 32.8579 5.01286Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip2_120_585)">
                <path
                  d="M21.0002 9.16671C20.4238 9.16671 19.8821 9.05726 19.3752 8.83837C18.8682 8.61949 18.4272 8.32268 18.0522 7.94796C17.6772 7.57296 17.3804 7.13198 17.1618 6.62504C16.9432 6.1181 16.8338 5.57643 16.8335 5.00004C16.8335 4.42365 16.9429 3.88199 17.1618 3.37504C17.3807 2.8681 17.6775 2.42712 18.0522 2.05212C18.4272 1.67712 18.8682 1.38032 19.3752 1.16171C19.8821 0.943096 20.4238 0.833652 21.0002 0.833374C21.5766 0.833374 22.1182 0.942819 22.6252 1.16171C23.1321 1.3806 23.5731 1.6774 23.9481 2.05212C24.3231 2.42712 24.62 2.8681 24.8389 3.37504C25.0578 3.88199 25.1671 4.42365 25.1668 5.00004C25.1668 5.57643 25.0574 6.1181 24.8385 6.62504C24.6196 7.13198 24.3228 7.57296 23.9481 7.94796C23.5731 8.32296 23.1321 8.6199 22.6252 8.83879C22.1182 9.05768 21.5766 9.16698 21.0002 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip3_120_585)">
                <path
                  d="M53.0002 9.16671C52.4238 9.16671 51.8821 9.05726 51.3752 8.83837C50.8682 8.61948 50.4272 8.32268 50.0522 7.94796C49.6772 7.57296 49.3804 7.13198 49.1618 6.62504C48.9432 6.1181 48.8338 5.57643 48.8335 5.00004C48.8335 4.42365 48.9429 3.88199 49.1618 3.37504C49.3807 2.8681 49.6775 2.42712 50.0522 2.05212C50.4272 1.67712 50.8682 1.38032 51.3752 1.16171C51.8821 0.943096 52.4238 0.833652 53.0002 0.833374C53.5766 0.833374 54.1182 0.942819 54.6252 1.16171C55.1321 1.3806 55.5731 1.6774 55.9481 2.05212C56.3231 2.42712 56.62 2.8681 56.8389 3.37504C57.0578 3.88199 57.1671 4.42365 57.1668 5.00004C57.1668 5.57643 57.0574 6.1181 56.8385 6.62504C56.6196 7.13198 56.3228 7.57296 55.9481 7.94796C55.5731 8.32296 55.1321 8.6199 54.6252 8.83879C54.1182 9.05768 53.5766 9.16698 53.0002 9.16671Z"
                  fill="black"
                />
              </g>
              <g clip-path="url(#clip4_120_585)">
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
            <p className="mt-3 text-sm">Momen Kebersamaan</p>
            <p className="mt-1 w-9/12 font-poppins text-sm font-light text-[#909090]">
              Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi
              sendok es itu ke mulut, ,cuttttttttttt itu ngilu nya,saya benar
              benar langsung kehilangan moment kebersamaan sama sahabat sahabat
              saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk
              gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah
              mungkin paling banyak kali tuh kata temen temen,,... ehhh
              y&apos;oll pelan pelan dong makannya kita belum kebagian
              nihh....,,mas es nya yang banyak ya... dug dug..
            </p>
            <div className="mt-2 flex flex-row items-center space-x-4">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8.16064V20.1606H0V8.16064H4ZM8 20.1606C7.46957 20.1606 6.96086 19.9499 6.58579 19.5749C6.21071 19.1998 6 18.6911 6 18.1606V8.16064C6 7.61064 6.22 7.11064 6.59 6.75064L13.17 0.160645L14.23 1.22064C14.5 1.49064 14.67 1.86064 14.67 2.27064L14.64 2.59064L13.69 7.16064H20C20.5304 7.16064 21.0391 7.37136 21.4142 7.74643C21.7893 8.1215 22 8.63021 22 9.16064V11.1606C22 11.4206 21.95 11.6606 21.86 11.8906L18.84 18.9406C18.54 19.6606 17.83 20.1606 17 20.1606H8ZM8 18.1606H17.03L20 11.1606V9.16064H11.21L12.34 3.84064L8 8.19064V18.1606Z"
                  fill="#6E6E6E"
                />
              </svg>
              <p className="mt-1 text-sm font-normal text-[#6E6E6E]">20</p>
            </div>

            <svg
              width="993"
              height="2"
              viewBox="0 0 993 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg "
              className="mt-4"
            >
              <line
                x1="0.25"
                y1="0.910645"
                x2="992.75"
                y2="0.910645"
                stroke="#D0D0D0"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#" className="mt-8 font-poppins text-gray-400 underline">
          Tampilkan Lebih Banyak
        </a>
      </div>
      <p className="font-poppins text-[20px]">Tulis Ulasan</p>
      <p className="mt-3 font-poppins text-[17px]">
        Seberapa Suka Anda Terhadap Desainer
      </p>
      <svg
        width="120"
        height="17"
        viewBox="0 0 120 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-2"
      >
        <path
          d="M8 16.1606C6.89333 16.1606 5.85333 15.9505 4.88 15.5302C3.90667 15.11 3.06 14.5401 2.34 13.8206C1.62 13.1006 1.05013 12.254 0.6304 11.2806C0.210667 10.3073 0.000533333 9.26731 0 8.16064C0 7.05398 0.210133 6.01398 0.6304 5.04064C1.05067 4.06731 1.62053 3.22064 2.34 2.50064C3.06 1.78064 3.90667 1.21078 4.88 0.791045C5.85333 0.371311 6.89333 0.161178 8 0.160645C9.10667 0.160645 10.1467 0.370778 11.12 0.791045C12.0933 1.21131 12.94 1.78118 13.66 2.50064C14.38 3.22064 14.9501 4.06731 15.3704 5.04064C15.7907 6.01398 16.0005 7.05398 16 8.16064C16 9.26731 15.7899 10.3073 15.3696 11.2806C14.9493 12.254 14.3795 13.1006 13.66 13.8206C12.94 14.5406 12.0933 15.1108 11.12 15.531C10.1467 15.9513 9.10667 16.1612 8 16.1606Z"
          fill="#BEB8B8"
        />
        <path
          d="M34 16.1606C32.8933 16.1606 31.8533 15.9505 30.88 15.5302C29.9067 15.11 29.06 14.5401 28.34 13.8206C27.62 13.1006 27.0501 12.254 26.6304 11.2806C26.2107 10.3073 26.0005 9.26731 26 8.16064C26 7.05398 26.2101 6.01398 26.6304 5.04064C27.0507 4.06731 27.6205 3.22064 28.34 2.50064C29.06 1.78064 29.9067 1.21078 30.88 0.791045C31.8533 0.371311 32.8933 0.161178 34 0.160645C35.1067 0.160645 36.1467 0.370778 37.12 0.791045C38.0933 1.21131 38.94 1.78118 39.66 2.50064C40.38 3.22064 40.9501 4.06731 41.3704 5.04064C41.7907 6.01398 42.0005 7.05398 42 8.16064C42 9.26731 41.7899 10.3073 41.3696 11.2806C40.9493 12.254 40.3795 13.1006 39.66 13.8206C38.94 14.5406 38.0933 15.1108 37.12 15.531C36.1467 15.9513 35.1067 16.1612 34 16.1606Z"
          fill="#BEB8B8"
        />
        <path
          d="M60 16.1606C58.8933 16.1606 57.8533 15.9505 56.88 15.5302C55.9067 15.11 55.06 14.5401 54.34 13.8206C53.62 13.1006 53.0501 12.254 52.6304 11.2806C52.2107 10.3073 52.0005 9.26731 52 8.16064C52 7.05398 52.2101 6.01398 52.6304 5.04064C53.0507 4.06731 53.6205 3.22064 54.34 2.50064C55.06 1.78064 55.9067 1.21078 56.88 0.791045C57.8533 0.371311 58.8933 0.161178 60 0.160645C61.1067 0.160645 62.1467 0.370778 63.12 0.791045C64.0933 1.21131 64.94 1.78118 65.66 2.50064C66.38 3.22064 66.9501 4.06731 67.3704 5.04064C67.7907 6.01398 68.0005 7.05398 68 8.16064C68 9.26731 67.7899 10.3073 67.3696 11.2806C66.9493 12.254 66.3795 13.1006 65.66 13.8206C64.94 14.5406 64.0933 15.1108 63.12 15.531C62.1467 15.9513 61.1067 16.1612 60 16.1606Z"
          fill="#BEB8B8"
        />
        <path
          d="M86 16.1606C84.8933 16.1606 83.8533 15.9505 82.88 15.5302C81.9067 15.11 81.06 14.5401 80.34 13.8206C79.62 13.1006 79.0501 12.254 78.6304 11.2806C78.2107 10.3073 78.0005 9.26731 78 8.16064C78 7.05398 78.2101 6.01398 78.6304 5.04064C79.0507 4.06731 79.6205 3.22064 80.34 2.50064C81.06 1.78064 81.9067 1.21078 82.88 0.791045C83.8533 0.371311 84.8933 0.161178 86 0.160645C87.1067 0.160645 88.1467 0.370778 89.12 0.791045C90.0933 1.21131 90.94 1.78118 91.66 2.50064C92.38 3.22064 92.9501 4.06731 93.3704 5.04064C93.7907 6.01398 94.0005 7.05398 94 8.16064C94 9.26731 93.7899 10.3073 93.3696 11.2806C92.9493 12.254 92.3795 13.1006 91.66 13.8206C90.94 14.5406 90.0933 15.1108 89.12 15.531C88.1467 15.9513 87.1067 16.1612 86 16.1606Z"
          fill="#BEB8B8"
        />
        <path
          d="M112 16.1606C110.893 16.1606 109.853 15.9505 108.88 15.5302C107.907 15.11 107.06 14.5401 106.34 13.8206C105.62 13.1006 105.05 12.254 104.63 11.2806C104.211 10.3073 104.001 9.26731 104 8.16064C104 7.05398 104.21 6.01398 104.63 5.04064C105.051 4.06731 105.621 3.22064 106.34 2.50064C107.06 1.78064 107.907 1.21078 108.88 0.791045C109.853 0.371311 110.893 0.161178 112 0.160645C113.107 0.160645 114.147 0.370778 115.12 0.791045C116.093 1.21131 116.94 1.78118 117.66 2.50064C118.38 3.22064 118.95 4.06731 119.37 5.04064C119.791 6.01398 120.001 7.05398 120 8.16064C120 9.26731 119.79 10.3073 119.37 11.2806C118.949 12.254 118.379 13.1006 117.66 13.8206C116.94 14.5406 116.093 15.1108 115.12 15.531C114.147 15.9513 113.107 16.1612 112 16.1606Z"
          fill="#BEB8B8"
        />
      </svg>

      <form action="">
        <label htmlFor="Judul-ulasan">
          <span className="mb-1 mt-6 block font-poppins text-[17px]">
            Judul Ulasan
          </span>
          <div className="max-w-screen-md rounded-[10px] border-[1px] border-gray-400">
            <input
              type="text"
              id="judul-ulasan"
              placeholder="Masukkan Judul"
              className="w-full rounded-[10px] bg-white px-3 py-2"
            />
          </div>
        </label>
        <label htmlFor="ulasan">
          <span className="mb-1 mt-6 block font-poppins text-[17px]">
            Ulasan Produk
          </span>
          <div className="h-[242px] max-w-screen-md rounded-[10px] border-[1px] border-gray-400 ">
            <textarea
              id="ulasan"
              placeholder="Tulis Ulasan....."
              className="h-[240px] w-full resize-none rounded-[10px] bg-white px-3 py-2"
              maxLength={500}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-[126px] rounded-full bg-[#DBDBDB] py-2 font-semibold text-[#B17C3F] transition  duration-300 ease-in-out hover:bg-[#E7E7E7] "
          >
            Kirim Ulasan
          </button>
        </label>
      </form>
    </div>
  );
}
