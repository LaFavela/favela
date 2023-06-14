import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState, useRef } from "react";

import Design from "./design";
import Designer from "./designer";

type Data = {
  id: number;
  name: string;
};

const type: Data[] = [
  { id: 1, name: "Semua" },
  { id: 2, name: "Rumah" },
  { id: 3, name: "Kondominum" },
  { id: 4, name: "Tanah" },
  { id: 5, name: "Villa" },
];

const filter : Data[] = [
  { id: 1, name: "Nama" },
  { id: 2, name: "Popularitas" },
  { id: 3, name: "Sering Dicari" },
];

export function Dropdown() {
  const [selected, setSelected] = useState<Data | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const toggleDropdown = () => {
    setIsClick(!isClick);
  };
  
  const hargaMax = useRef<any>(null);
   const hargaMin = useRef<any>(null);
   const hargaHandler = (event: any) => {
      event.preventDefault();
      console.log(hargaMax.current.value);
      console.log(hargaMin.current.value);
      setIsOpen(false);
   };

  const refCategory = useRef<any>(null);
  const refPrice = useRef<any>(null);
  return (
    <div className="flex gap-6 pr-[22rem]">
      <div className="flex flex-row space-x-3">
        <div className="h-12 w-56">
          <Listbox value={selected} onChange={setSelected}>
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
                  {selected ? selected.name : "Choose Type"}
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
                {type.map((person) => (
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
      </div>
    {/* list harga */}
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
    </div>
  );
}

export function Dropdown2() {
  const [selected, setSelected] = useState<Data | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const toggleDropdown = () => {
    setIsClick(!isClick);
  };
  
  const refCategory = useRef<any>(null);

  return (
    <div className="flex gap-6 pr-[28rem]">
      <div>
        <form className="h-12" action="">
          <div className="float-right pr-12"></div>
          <input
            type="text"
            className="h-full w-full rounded-full bg-[#F1F1F1] pl-5 text-xl font-light focus:outline-none"
            placeholder="Nama"
          ></input>
        </form>
      </div>
      <div className="flex flex-row space-x-3">
      <div className="h-12 w-56">
          <Listbox value={selected} onChange={setSelected}>
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
                  {selected ? selected.name : "Choose Type"}
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
                {filter.map((person) => (
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
      </div>
    </div>
  );
}

export default function Build() {
  const [currentFunction, setCurrentFunction] = useState<"Design" | "Designer">(
    "Design"
  );
  const [activeButton, setActiveButton] = useState<"Design" | "Designer">(
    "Design"
  );
  const handleFunctionChange = (functionName: "Design" | "Designer") => {
    setCurrentFunction(functionName);
    setActiveButton(functionName);
  };

  return (
    <div>
      <div
        className="flex h-max flex-col bg-cover bg-center object-contain text-black"
        style={{ backgroundImage: "url('/assets/build/bg.jpg')" }}
      >
        <p className="w-[50rem] pb-60 pl-40 pt-40 text-[3rem] font-normal text-white">
          Find Your Dream Property Design Or Consult With Designers
        </p>
      </div>
      <div>
        <div className="sticky top-20 z-30 flex justify-between bg-white px-16 py-5">
          <div className="ml-[5.5rem] flex space-x-3">
            <button
              onClick={() => handleFunctionChange("Design")}
              className={`h-12 w-28 rounded-3xl ${
                activeButton === "Design"
                  ? "bg-[#B17C3F] text-xl text-white"
                  : "border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F]  duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleFunctionChange("Designer")}
              className={`h-12 w-28 rounded-3xl ${
                activeButton === "Designer"
                  ? "bg-[#B17C3F] text-xl text-white"
                  : "border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
              }`}
            >
              Designer
            </button>
          </div>
          {currentFunction === "Design" && <Dropdown />}
          {currentFunction === "Designer" && <Dropdown2 />}
        </div>
        <Transition
          show={currentFunction === "Design"}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Design></Design>
        </Transition>
        {/* {currentFunction === "Design" && <Design></Design>} */}
        <Transition
          show={currentFunction === "Designer"}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Designer></Designer>
        </Transition>
        {/* {currentFunction === "Designer" && <Designer></Designer>} */}
      </div>
    </div>
  );
}
