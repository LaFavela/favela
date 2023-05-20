import Navbar from "./navbar";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

const people = [
   { id: 1, name: "Semua" },
   { id: 2, name: "Rumah" },
   { id: 3, name: "Kondominum" },
   { id: 4, name: "Tanah" },
   { id: 5, name: "Villa" },
];

const data = [
   {
      id: 1,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build9.png",
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
   },
   {
      id: 6,
      nama: "Blue Resort Bali",
      harga: 476,
      shower: 3,
      bed: 2,
      luas: 232.3,
      lokasi: "Bali",
      img: "/assets/browse/Build15.png",
   },
];

export default function Browse() {
   const [selected, setSelected] = useState(people[0]);
   return (
      <div>
         <Navbar></Navbar>
         <div className="flex justify-between px-16">
            <div>
               <button className="button-brown">Buy</button>
               <button className="button-grey">Rent</button>
            </div>
            <div className="flex flex-row space-x-3">
               <div className="h-12 w-56">
                  <Listbox value={selected} onChange={setSelected}>
                     <div className="relative h-full">
                        <Listbox.Button className="relative h-full w-full cursor-default rounded-3xl bg-[#E4D1BC] py-2 pl-3 pr-10 text-left font-light text-[#B17C3F] transition focus:bg-[#F1F1F1] focus:text-[#9ca3af] sm:text-xl">
                           <span className="block truncate px-1">
                              {selected.name}
                           </span>
                           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                              <svg
                                 width="19"
                                 height="11"
                                 viewBox="0 0 19 11"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M18.6 10.4501C18.35 10.7001 18.054 10.8251 17.712 10.8251C17.37 10.8251 17.0743 10.7001 16.825 10.4501L9.5 3.12507L2.15 10.4751C1.91667 10.7084 1.625 10.8251 1.275 10.8251C0.925 10.8251 0.625 10.7001 0.375 10.4501C0.125 10.2001 1.09828e-08 9.90407 1.50611e-08 9.56207C1.91394e-08 9.22007 0.125 8.92441 0.375 8.67507L8.8 0.275072C8.9 0.175072 9.00833 0.104073 9.125 0.0620729C9.24167 0.020073 9.36667 -0.000594027 9.5 7.25925e-05C9.63333 7.25941e-05 9.75833 0.0210725 9.875 0.0630723C9.99167 0.105072 10.1 0.175738 10.2 0.275072L18.625 8.70007C18.8583 8.93341 18.975 9.22107 18.975 9.56307C18.975 9.90507 18.85 10.2007 18.6 10.4501Z" />
                              </svg>
                           </span>
                        </Listbox.Button>
                        <Transition
                           as={Fragment}
                           leave="transition ease-in duration-100"
                           leaveFrom="opacity-100"
                           leaveTo="opacity-0"
                        >
                           <Listbox.Options className="absolute mt-2 max-h-max w-full overflow-auto rounded-xl bg-white py-1 text-xl shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xl">
                              {people.map((person, personIdx) => (
                                 <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                       `relative mx-2 my-1 cursor-default select-none rounded-xl px-4 py-2 ${
                                          active
                                             ? "bg-[#E8D6C2] text-[#B17C3F]"
                                             : "text-[#9ca3af]"
                                       }`
                                    }
                                    value={person}
                                 >
                                    {({ selected }) => (
                                       <>
                                          <span
                                             className={`block truncate ${
                                                selected
                                                   ? "font-light"
                                                   : "font-light"
                                             }`}
                                          >
                                             {person.name}
                                          </span>
                                          {selected ? (
                                             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                          ) : null}
                                       </>
                                    )}
                                 </Listbox.Option>
                              ))}
                           </Listbox.Options>
                        </Transition>
                     </div>
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
         </div>
         <div>
            <div className="flex flex-row">
               <div className="h-[25rem] w-[19rem] ">
                  <div className="relative h-full w-full flex-auto">
                     <Image
                        className="rounded-3xl"
                        src={data[0].img}
                        alt={""}
                        fill={true}
                        style={{ objectFit: "cover" }}
                     />
                  </div>
               </div>
               <div className="h-[25rem] w-[19rem] ">
                  <div className="relative h-full w-full flex-auto">
                     <Image
                        className="rounded-3xl"
                        src={data[0].img}
                        alt={""}
                        fill={true}
                        style={{ objectFit: "cover"}}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
