import {useState} from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import calculate from "@/tools/calculate";
const category = [
    { id: 1, name: "Semua" },
    { id: 2, name: "Property" },
    { id: 3, name: "Design" },
    { id: 4, name: "Pengguna" },
  ];
const filter = [
    { id: 1, name: "Terbaru" },
    { id: 2, name: "Terlama" },
  ];
const data = [
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    {
        id: 1,
        Type: "Property",
        Name: "Ampenan Asri",
        img: "/assets/browse/Build14.png",
        propertyType: "Villa",
        price: 476000000,
    },
    
];
export default function LikeHistory() {
    const [selectedCategory, setSelectedCategory] = useState(category[0]);
    const [selectedFilter, setSelectedFilter] = useState(filter[0]);
    return (
        <div>
            
            <div className="flex justify-center  ">
                <div className="mt-[2.625rem] space-y-[2.4375rem] mb-11 justify-start w-[83.7rem]">
                    {/* Tittle */}
                    <p className = "text-[2rem] font-medium ">Disukai</p>
                    <div className="z-50 sticky flex space-x-[2.4375rem]">
                        <div className="h-12 w-56">
                                <Listbox value={null} onChange={setSelectedCategory}>
                                <div className="relative h-full">
                                    <Listbox.Button className="relative h-full w-full cursor-default rounded-3xl bg-[#F1F1F1] py-2 pl-3 pr-10 text-left font-light text-[#9ca3af] transition focus:bg-[#E4D1BC] focus:text-[#B17C3F] active:bg-[#B17C3F] sm:text-xl">
                                    <span className="block truncate px-1">
                                        <span>{selectedCategory ? selectedCategory.name : "Tipe Unit"}</span>
                                    </span>

                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                                        <svg
                                        width="19"
                                        height="11"
                                        viewBox="0 0 19 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-slate-400"
                                        >
                                        <path d="M0.374609 0.374999C0.624609 0.124999 0.920609 -7.89165e-07 1.26261 -7.74216e-07C1.60461 -7.59267e-07 1.90028 0.124999 2.14961 0.374999L9.47461 7.7L16.8246 0.35C17.0579 0.116666 17.3496 -7.1031e-08 17.6996 -5.5732e-08C18.0496 -4.0433e-08 18.3496 0.125 18.5996 0.375C18.8496 0.625 18.9746 0.921 18.9746 1.263C18.9746 1.605 18.8496 1.90067 18.5996 2.15L10.1746 10.55C10.0746 10.65 9.96628 10.721 9.84961 10.763C9.73294 10.805 9.60794 10.8257 9.47461 10.825C9.34128 10.825 9.21628 10.804 9.09961 10.762C8.98294 10.72 8.87461 10.6493 8.77461 10.55L0.349609 2.125C0.116276 1.89167 -0.000391077 1.604 -0.000391062 1.262C-0.000391047 0.919999 0.124609 0.624332 0.374609 0.374999Z" />
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
                                        {category.map((person, personIdx) => (
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
                                                    selected ? "font-light" : "font-light"
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
                        <div className="h-12 w-56">
                                <Listbox value={null} onChange={setSelectedFilter}>
                                <div className="relative h-full">
                                    <Listbox.Button className="relative h-full w-full cursor-default rounded-3xl bg-[#F1F1F1] py-2 pl-3 pr-10 text-left font-light text-[#9ca3af] transition focus:bg-[#E4D1BC] focus:text-[#B17C3F] active:bg-[#B17C3F] sm:text-xl">
                                    <span className="block truncate px-1">
                                        <span>{selectedFilter ? selectedFilter.name : "Tipe Unit"}</span>
                                    </span>

                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                                        <svg
                                        width="19"
                                        height="11"
                                        viewBox="0 0 19 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-slate-400"
                                        >
                                        <path d="M0.374609 0.374999C0.624609 0.124999 0.920609 -7.89165e-07 1.26261 -7.74216e-07C1.60461 -7.59267e-07 1.90028 0.124999 2.14961 0.374999L9.47461 7.7L16.8246 0.35C17.0579 0.116666 17.3496 -7.1031e-08 17.6996 -5.5732e-08C18.0496 -4.0433e-08 18.3496 0.125 18.5996 0.375C18.8496 0.625 18.9746 0.921 18.9746 1.263C18.9746 1.605 18.8496 1.90067 18.5996 2.15L10.1746 10.55C10.0746 10.65 9.96628 10.721 9.84961 10.763C9.73294 10.805 9.60794 10.8257 9.47461 10.825C9.34128 10.825 9.21628 10.804 9.09961 10.762C8.98294 10.72 8.87461 10.6493 8.77461 10.55L0.349609 2.125C0.116276 1.89167 -0.000391077 1.604 -0.000391062 1.262C-0.000391047 0.919999 0.124609 0.624332 0.374609 0.374999Z" />
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
                                        {filter.map((person, personIdx) => (
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
                                                    selected ? "font-light" : "font-light"
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
                    </div>
                    <div className="flex flex-wrap gap-[2.4375rem]">
                        {data.map((data, idx)=>{
                            return(
                                <div
                                    key={idx}
                                    className="flex justify-start w-[40.5625rem] py-[2rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                                    <div className="ml-[2.9375rem]">
                                        <p className="font-semibold text-[#B17C3F] text-[1rem]">{data.Type}</p>
                                        <div className="flex mt-[1.875rem]">
                                            <div className="relative w-[7.875rem] h-[6.3125rem]  ">
                                                
                                                <Image
                                                className="rounded-[10px] w[7.875rem] h-[6.3125rem]"
                                                src={data.img}
                                                alt={"transksi "+data.id}
                                                fill={true}
                                                style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="ml-[1.5rem]">
                                                <p className="text-black font-light text-[1.5rem]">{data.Name}</p>
                                                <p className="text-gray-400 font-normal text-[1.0625rem]">{data.propertyType}</p>
                                                <p className="text-black font-medium text-[1.5rem]">Rp {data.price.toLocaleString("en-US")}.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}