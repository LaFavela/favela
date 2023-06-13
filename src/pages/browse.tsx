import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";

type Person = {
   id: number;
   name: string;
};
const people: Person[] = [
   { id: 1, name: "Semua" },
   { id: 2, name: "Rumah" },
   { id: 3, name: "Kondominum" },
   { id: 4, name: "Tanah" },
   { id: 5, name: "Villa" },
];
export const data = [
   {
      id: 1,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build9.png",
      type: "Rumah",
   },
   {
      id: 2,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build10.png",
      type: "Villa",
   },
   {
      id: 3,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build12.png",
      type: "Kondomonium",
   },
   {
      id: 4,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build13.png",
      type: "Rumah",
   },
   {
      id: 5,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build14.png",
      type: "Tanah",
   },
   {
      id: 1,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build9.png",
      type: "Rumah",
   },
   {
      id: 2,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build10.png",
      type: "Rumah",
   },
   {
      id: 3,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build12.png",
      type: "Rumah",
   },
   {
      id: 4,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build13.png",
      type: "Rumah",
   },
   {
      id: 5,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build14.png",
      type: "Rumah",
   },
   {
      id: 1,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build9.png",
      type: "Rumah",
   },
   {
      id: 2,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build10.png",
      type: "Rumah",
   },
   {
      id: 3,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build12.png",
      type: "Rumah",
   },
   {
      id: 4,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build13.png",
      type: "Rumah",
   },
   {
      id: 5,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build14.png",
      type: "Rumah",
   },
   {
      id: 1,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build9.png",
      type: "Rumah",
   },
   {
      id: 2,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build10.png",
      type: "Rumah",
   },
   {
      id: 3,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build12.png",
      type: "Rumah",
   },
   {
      id: 4,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build13.png",
      type: "Rumah",
   },
   {
      id: 5,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build14.png",
      type: "Rumah",
   },
];

export function Buy() {
   const [hover, setHover] = useState(false);
   const [index, setIndex] = useState(-1);

   const [isPressed, setIsPressed] = useState(false);
   const handleButtonClick = () => {
      setIsPressed(!isPressed);
   };
   return (
      <div>
         <div className="px-35 flex flex-grow flex-row flex-wrap justify-center gap-5">
            {data.map((data, idx) => {
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
                           <div className="text-xl font-medium ">
                              {data.nama}
                           </div>
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
                           <div className="text-base font-medium">
                              {data.lokasi}
                           </div>
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
   );
}

export function Rent() {
   const [hover, setHover] = useState(false);
   const [index, setIndex] = useState(-1);

   const [isPressed, setIsPressed] = useState(false);
   const handleButtonClick = () => {
      setIsPressed(!isPressed);
   };
   return (
      <div>
         <div className="px-35 flex flex-grow flex-row flex-wrap justify-center gap-5">
            {data.map((data, idx) => {
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
                           <div className="text-xl font-medium ">
                              {data.nama}
                           </div>
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
                           <div className="text-base font-medium">
                              {data.lokasi}
                           </div>
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
   );
}

export default function Browse() {
   const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
   const [isOpen, setIsOpen] = useState(false);
   const [isClick, setIsClick] = useState(false);
   const toggleDropdown = () => {
      setIsClick(!isClick);
   };

   const [currentFunction, setCurrentFunction] = useState<"Buy" | "Rent">(
      "Buy"
   );
   const [activeButton, setActiveButton] = useState<"Buy" | "Rent">("Buy");
   const handleFunctionChange = (functionName: "Buy" | "Rent") => {
      setCurrentFunction(functionName);
      setActiveButton(functionName);
   };

   const hargaMax = useRef<any>(null);
   const hargaMin = useRef<any>(null);
   const hargaHandler = (event: any) => {
      event.preventDefault();
      console.log(hargaMax.current.value);
      console.log(hargaMin.current.value);
      setIsOpen(false);
   };

   const refPrice = useRef<any>(null);
   const refCategory = useRef<any>(null);

   function OutsideCategory(ref: any) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
               if (!isClick) setIsClick(false);
            }
         }
         // Bind the event listener
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   function OutsidePrice(ref: any) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
               if (isOpen === true) setIsOpen(false);
            }
         }
         // Bind the event listener
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   OutsideCategory(refCategory);
   OutsidePrice(refPrice);

   return (
      <div>
         <div className="sticky top-20 z-40 flex space-x-10 bg-white px-16 py-5">
            <div className="ml-12 flex space-x-3 ">
               <button
                  onClick={() => handleFunctionChange("Buy")}
                  className={`h-12 w-28 rounded-3xl ${
                     activeButton === "Buy"
                        ? "bg-[#B17C3F] text-xl text-white"
                        : "border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F]  duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                  }`}
               >
                  Buy
               </button>
               <button
                  onClick={() => handleFunctionChange("Rent")}
                  className={`h-12 w-28 rounded-3xl ${
                     activeButton === "Rent"
                        ? "bg-[#B17C3F] text-xl text-white"
                        : "border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                  }`}
               >
                  Rent
               </button>
            </div>
            <div className="flex flex-row space-x-3">
               <div className="h-12 w-56">
                  <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                     <Listbox.Button
                        onClick={toggleDropdown}
                        className={`h-full w-full cursor-default rounded-3xl py-2 pl-3 pr-10 text-left font-light sm:text-xl ${
                           isClick
                              ? "bg-[#E4D1BC] text-[#B17C3F]"
                              : "bg-[#F1F1F1] text-[#9ca3af]"
                        }`}
                     >
                        <div className="flex w-max">
                           <span className="w-[11rem]">
                              {selectedPerson
                                 ? selectedPerson.name
                                 : "Choose Type"}
                           </span>
                           <span className="flex items-center justify-end ">
                              {isClick ? (
                                 <svg
                                    width="19"
                                    height="11"
                                    viewBox="0 0 19 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-[#B17C3F]"
                                 >
                                    <path d="M0.374609 0.374999C0.624609 0.124999 0.920609 -7.89165e-07 1.26261 -7.74216e-07C1.60461 -7.59267e-07 1.90028 0.124999 2.14961 0.374999L9.47461 7.7L16.8246 0.35C17.0579 0.116666 17.3496 -7.1031e-08 17.6996 -5.5732e-08C18.0496 -4.0433e-08 18.3496 0.125 18.5996 0.375C18.8496 0.625 18.9746 0.921 18.9746 1.263C18.9746 1.605 18.8496 1.90067 18.5996 2.15L10.1746 10.55C10.0746 10.65 9.96628 10.721 9.84961 10.763C9.73294 10.805 9.60794 10.8257 9.47461 10.825C9.34128 10.825 9.21628 10.804 9.09961 10.762C8.98294 10.72 8.87461 10.6493 8.77461 10.55L0.349609 2.125C0.116276 1.89167 -0.000391077 1.604 -0.000391062 1.262C-0.000391047 0.919999 0.124609 0.624332 0.374609 0.374999Z" />
                                 </svg>
                              ) : (
                                 <svg
                                    width="19"
                                    height="11"
                                    viewBox="0 0 19 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-slate-500"
                                 >
                                    <path d="M18.6 10.4501C18.35 10.7001 18.054 10.8251 17.712 10.8251C17.37 10.8251 17.0743 10.7001 16.825 10.4501L9.5 3.12507L2.15 10.4751C1.91667 10.7084 1.625 10.8251 1.275 10.8251C0.925 10.8251 0.625 10.7001 0.375 10.4501C0.125 10.2001 1.09828e-08 9.90407 1.50611e-08 9.56207C1.91394e-08 9.22007 0.125 8.92441 0.375 8.67507L8.8 0.275072C8.9 0.175072 9.00833 0.104073 9.125 0.0620729C9.24167 0.020073 9.36667 -0.000594027 9.5 7.25925e-05C9.63333 7.25941e-05 9.75833 0.0210725 9.875 0.0630723C9.99167 0.105072 10.1 0.175738 10.2 0.275072L18.625 8.70007C18.8583 8.93341 18.975 9.22107 18.975 9.56307C18.975 9.90507 18.85 10.2007 18.6 10.4501Z" />
                                 </svg>
                              )}
                           </span>
                        </div>
                     </Listbox.Button>
                     <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                     >
                        <Listbox.Options
                           onClick={toggleDropdown}
                           className="mt-2 max-h-max w-full overflow-auto rounded-xl bg-white py-1 text-xl shadow-sm ring-1 ring-black ring-opacity-5"
                           ref={refCategory}
                        >
                           {people.map((person) => (
                              <Listbox.Option
                                 key={person.id}
                                 value={person}
                                 className={({ active }) =>
                                    `relative mx-2 cursor-pointer select-none rounded-xl px-4 py-2 ${
                                       active
                                          ? "bg-[#E8D6C2] text-[#B17C3F]"
                                          : "text-[#9ca3af]"
                                    }`
                                 }
                              >
                                 {person.name}
                              </Listbox.Option>
                           ))}
                        </Listbox.Options>
                     </Transition>
                  </Listbox>
               </div>
               <div>
                  <form className="h-12" action="">
                     <div className="float-right pr-12"></div>
                     <input
                        type="text"
                        className="h-full w-full rounded-full bg-[#F1F1F1] pl-5 text-xl font-light focus:outline-none"
                        placeholder="Lokasi..."
                     ></input>
                  </form>
               </div>
            </div>
            {/* List Harga */}
            <div>
               <div className="mr-10">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     // className=" flex h-[3rem] w-[25rem] flex-row  justify-between rounded-full  text-xl font-light focus:outline-none"
                     className={`flex h-[3rem] w-[25rem] flex-row  justify-between rounded-full  text-xl font-light focus:outline-none ${
                        isOpen ? "bg-[#E3D0BA]" : "bg-[#F1F1F1]"
                     }`}
                  >
                     <span
                        className={`mt-2 truncate pl-5 ${
                           isOpen ? "text-[#B17C3F]" : "text-[#9ca3af]"
                        }`}
                     >
                        Harga{" "}
                        {hargaMin.current === null
                           ? ""
                           : " : " + hargaMin?.current?.value}{" "}
                        {hargaMax.current === null
                           ? ""
                           : " - " + hargaMax?.current?.value}
                     </span>
                     <span className="mt-4 pr-5">
                        {isOpen ? (
                           <svg
                              width="19"
                              height="11"
                              viewBox="0 0 19 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-[#B17C3F]"
                           >
                              <path d="M0.374609 0.374999C0.624609 0.124999 0.920609 -7.89165e-07 1.26261 -7.74216e-07C1.60461 -7.59267e-07 1.90028 0.124999 2.14961 0.374999L9.47461 7.7L16.8246 0.35C17.0579 0.116666 17.3496 -7.1031e-08 17.6996 -5.5732e-08C18.0496 -4.0433e-08 18.3496 0.125 18.5996 0.375C18.8496 0.625 18.9746 0.921 18.9746 1.263C18.9746 1.605 18.8496 1.90067 18.5996 2.15L10.1746 10.55C10.0746 10.65 9.96628 10.721 9.84961 10.763C9.73294 10.805 9.60794 10.8257 9.47461 10.825C9.34128 10.825 9.21628 10.804 9.09961 10.762C8.98294 10.72 8.87461 10.6493 8.77461 10.55L0.349609 2.125C0.116276 1.89167 -0.000391077 1.604 -0.000391062 1.262C-0.000391047 0.919999 0.124609 0.624332 0.374609 0.374999Z" />
                           </svg>
                        ) : (
                           <svg
                              width="19"
                              height="11"
                              viewBox="0 0 19 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-slate-500"
                           >
                              <path d="M18.6 10.4501C18.35 10.7001 18.054 10.8251 17.712 10.8251C17.37 10.8251 17.0743 10.7001 16.825 10.4501L9.5 3.12507L2.15 10.4751C1.91667 10.7084 1.625 10.8251 1.275 10.8251C0.925 10.8251 0.625 10.7001 0.375 10.4501C0.125 10.2001 1.09828e-08 9.90407 1.50611e-08 9.56207C1.91394e-08 9.22007 0.125 8.92441 0.375 8.67507L8.8 0.275072C8.9 0.175072 9.00833 0.104073 9.125 0.0620729C9.24167 0.020073 9.36667 -0.000594027 9.5 7.25925e-05C9.63333 7.25941e-05 9.75833 0.0210725 9.875 0.0630723C9.99167 0.105072 10.1 0.175738 10.2 0.275072L18.625 8.70007C18.8583 8.93341 18.975 9.22107 18.975 9.56307C18.975 9.90507 18.85 10.2007 18.6 10.4501Z" />
                           </svg>
                        )}
                     </span>
                  </button>
                  <Transition
                     show={isOpen}
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                  >
                     <div
                        className="  absolute right-0 mt-2 flex h-max w-[25rem] rounded-3xl border-[1px] bg-white pb-1  text-xl font-light"
                        ref={refPrice}
                     >
                        <div
                           className="py-1"
                           role="menu"
                           aria-orientation="vertical"
                           aria-labelledby="options-menu"
                        >
                           {/* Daftar opsi dropdown */}
                           <div className="ml-5 mt-1">
                              <p className="pl-1 text-[1rem] text-[#B17C3F]">
                                 Minimum
                              </p>
                              <div className="flex flex-row rounded-3xl">
                                 <div className="rounded-l-xl border-b-2 border-l-2 border-r-2 border-t-2 border-[#B17C3F] bg-[#E3D0BA] pl-2">
                                    <p className="pr-2 text-[1rem] text-[#B17C3F]">
                                       Rp.
                                    </p>
                                 </div>
                                 <div className="w-[19rem] rounded-r-xl  border-b-2 border-r-2  border-t-2 border-[#B17C3F]">
                                    <form onSubmit={hargaHandler}>
                                       <input
                                          type="text"
                                          value={hargaMin?.current?.value}
                                          className="h-full w-[95%] bg-white pb-1 pl-5 text-[1rem] text-xl font-light focus:outline-none"
                                          placeholder="Harga Minimum"
                                          ref={hargaMin}
                                       ></input>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className="ml-5 mt-1">
                              <p className="pl-1 text-[1rem] text-[#B17C3F]">
                                 Maksimum
                              </p>
                              <div className="flex flex-row rounded-3xl">
                                 <div className="rounded-l-xl border-b-2 border-l-2 border-r-2 border-t-2 border-[#B17C3F] bg-[#E3D0BA] pl-2">
                                    <p className="pr-2 text-[1rem] text-[#B17C3F]">
                                       Rp.
                                    </p>
                                 </div>
                                 <div className="w-[19rem] rounded-r-xl  border-b-2 border-r-2  border-t-2 border-[#B17C3F]">
                                    <form onSubmit={hargaHandler}>
                                       <input
                                          type="text"
                                          className="h-full w-[95%] bg-white pb-1 pl-5 text-[1rem] text-xl font-light focus:outline-none"
                                          placeholder="Harga Minimum"
                                          value={hargaMax?.current?.value}
                                          ref={hargaMax}
                                       ></input>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Transition>
               </div>
            </div>
            {/* BATAS HARGA LIST */}
         </div>
         {/* batas */}
         <Transition
            show={currentFunction === "Buy"}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
         >
            <Buy></Buy>
         </Transition>
         <Transition
            show={currentFunction === "Rent"}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
         >
            <Rent></Rent>
         </Transition>
         <Footer></Footer>
      </div>
   );
}
