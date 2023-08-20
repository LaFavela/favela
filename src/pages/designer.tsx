import Navbar from "@/components/navbar";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Rating from "@mui/material/Rating";



export const designerData = [
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Paper Pots",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Freya",
    rating: 3,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Paper Pots",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
];

interface MenuItem {
  label: string;
  value: string;
}

interface MenuStyle {
  label: string;
  value: string;
}

const menuItems: MenuItem[] = [
  { label: "Type 1", value: "Type 1" },
  { label: "Type 2", value: "Type 2" },
  { label: "Type 3", value: "Type 3" },
  { label: "Type 4", value: "Type 4" },
  { label: "Type 5", value: "Type 5" },
  { label: "Type 6", value: "Type 6" },
];

const menuStyle: MenuStyle[] = [
  { label: "Style 1", value: "Style 1" },
  { label: "Style 2", value: "Style 2" },
  { label: "Style 3", value: "Style 3" },
  { label: "Style 4", value: "Style 4" },
  { label: "Style 5", value: "Style 5" },
  { label: "Style 6", value: "Style 6" },
];

export function menu() {}

export default function Designer() {
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

  const [tags, setTags] = React.useState<string[]>([]);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleLabelClick = (label: string) => {
    setActiveLabel(activeLabel === label ? null : label);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node)
    ) {
      setActiveLabel(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const addTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tagValue = event.target.value;

    if (event.target.checked) {
      // Jika checkbox dicentang, tambahkan value ke dalam array tags
      setTags((prevTags) => [...prevTags, tagValue]);
    } else {
      // Jika checkbox tidak dicentang, hapus value dari array tags
      setTags((prevTags) => prevTags.filter((tag) => tag !== tagValue));
    }
  };

  const removeTag = (index: any) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);

    const tagToDelete = tags[index];
    setTags((prevSelectedTags) =>
      prevSelectedTags.filter((tag) => tag !== tagToDelete)
    );
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleSvgClick = () => {
    setIsClicked(!isClicked);
  };

  const [isClicked2, setIsClicked2] = useState(false);
  const handleSvgClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  const [isClicked3, setIsClicked3] = useState(false);
  const handleSvgClick3 = () => {
    setIsClicked3(!isClicked3);
  };

  const [isNewestClick, setNewestClick] = useState(false);
  const handleNewestClick = () => {
    setOldestClick(false);
    setNewestClick(!isNewestClick);
  };
  const [isOldestClick, setOldestClick] = useState(false);
  const handleOldestClick = () => {
    setNewestClick(false);
    setOldestClick(!isOldestClick);
  };

  return (
    <div>
      <div className="container mx-auto mt-10 max-w-[1314px]">
        <div className="relative">
          {/* <img src="assets/build/bg.jpg" alt="" className="rounded-2xl" /> */}
          <Image
          src={"/assets/build/bg.jpg"}
          alt={""}
          width={1314}
          height={466}
          className="rounded-2xl"
          >  
          </Image>
          <div className="absolute bottom-[10rem] ml-28">
            <p className="w-[30rem] text-[33px] font-normal text-white">
              Find Your Dream Property Design by Consult With Designers
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex h-[55px] w-full justify-between rounded-full border-2">
            <div className=" flex">
              <Popup
                trigger={
                  <button className="my-auto ml-3 h-[30px] w-[30px] rounded-full bg-gold hover:bg-[#d9b285]">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto "
                    >
                      <path
                        d="M12.6433 1.23871H3.3576C2.50254 1.23871 1.78986 1.94288 2.00111 2.77085C2.226 3.64827 2.64028 4.46581 3.21485 5.16603C3.78941 5.86626 4.51032 6.43219 5.32694 6.82407C5.96379 7.12895 6.45284 7.72788 6.45284 8.43359V13.1414C6.45291 13.2733 6.48667 13.4029 6.55091 13.5181C6.61516 13.6332 6.70776 13.73 6.81993 13.7993C6.9321 13.8686 7.06011 13.9081 7.19183 13.9141C7.32355 13.92 7.45459 13.8922 7.57254 13.8332L9.12016 13.0594C9.24867 12.9952 9.35677 12.8965 9.43235 12.7743C9.50793 12.6521 9.548 12.5113 9.54807 12.3676V8.43359C9.54807 7.72788 10.0371 7.12895 10.6732 6.82407C11.4901 6.43241 12.2114 5.86657 12.7862 5.16633C13.3611 4.46609 13.7756 3.64844 14.0006 2.77085C14.2103 1.94288 13.4968 1.23871 12.6433 1.23871Z"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                }
                contentStyle={{
                  maxWidth : 'fit-content',
                  borderRadius:"10px",
                  paddingRight: "15px"
                }}
              >
                <div className="ml-3 flex flex-col gap-y-2 mb-3">
                  <span>Type</span>
                  <span className="-ml-3 border-b-2"></span>
                  {menuItems.map((item) => (
                    <span key={item.value} className="flex items-center w-max ">
                      <input
                        type="checkbox"
                        value={item.value}
                        name="filter"
                        id=""
                        onChange={addTags}
                        checked={tags.includes(item.value)}
                        className="h-3 w-3 appearance-none rounded-sm border-2 border-gold checked:bg-[#d9b285] "
                      />
                      <label
                        htmlFor={item.label}
                        className="ml-2 cursor-pointer text-[11px] mx-auto "
                        onClick={() => handleLabelClick(item.label)}
                      >
                        {item.label}
                      </label>
                      {activeLabel === item.label && (
                        <div
                          ref={submenuRef}
                          className="absolute left-full top-0  ml-1 w-[162px] rounded-[10px] bg-white p-2 shadow-md drop-shadow "
                        >
                          <div className="flex flex-col">
                            <p className="ml-3">{item.label}</p>
                            <span className="border-b-2 mt-1 mb-2"></span>
                            <div className="grid grid-rows-4 grid-flow-col gap-3">
                              {menuStyle.map((style) => (
                                <span key={style.value} className ="flex items-center">
                                  <input
                                    type="checkbox"
                                    value={style.value}
                                    name="filter"
                                    id=""
                                    onChange={addTags}
                                    checked={tags.includes(style.value)}
                                    className="h-3 w-3 appearance-none rounded-sm border-2 border-gold checked:bg-[#d9b285]"
                                  />
                                  <label
                                    htmlFor={style.label}
                                    className="ml-2 cursor-pointer text-[11px]"
                                  >
                                    {style.label}
                                  </label>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </span>
                  ))}
                </div>
              </Popup>
              <div className="tags-input mt-3 pl-3">
                <ul className="flex flex-row gap-2">
                  {tags.map((tag, index) => (
                    <li
                      className="flex h-[30px] max-w-fit flex-row justify-between rounded-full bg-[#E4D1BC]"
                      key={index}
                    >
                      <span className="ml-2 mt-[7px] pr-2 text-[11px]">
                        {tag}
                      </span>
                      <button
                        className="mr-2 mt-[3px] "
                        onClick={() => removeTag(index)}
                      >
                        <svg
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.18063 13.0492C1.49841 12.3903 0.954256 11.6021 0.579906 10.7306C0.205556 9.85919 0.00851124 8.9219 0.000269691 7.97348C-0.00797185 7.02505 0.172755 6.08449 0.531904 5.20666C0.891053 4.32882 1.42143 3.53131 2.09209 2.86065C2.76276 2.18999 3.56027 1.65961 4.4381 1.30046C5.31593 0.941309 6.2565 0.760583 7.20492 0.768824C8.15335 0.777066 9.09063 0.97411 9.96209 1.34846C10.8335 1.72281 11.6217 2.26697 12.2806 2.94918C13.5818 4.29634 14.3017 6.10064 14.2854 7.97348C14.2692 9.84631 13.518 11.6378 12.1936 12.9622C10.8693 14.2865 9.07776 15.0377 7.20492 15.054C5.33209 15.0703 3.52779 14.3503 2.18063 13.0492ZM3.18777 12.042C4.26 13.1143 5.71426 13.7166 7.23063 13.7166C8.74699 13.7166 10.2013 13.1143 11.2735 12.042C12.3457 10.9698 12.9481 9.51555 12.9481 7.99918C12.9481 6.48282 12.3457 5.02856 11.2735 3.95633C10.2013 2.88409 8.74699 2.28172 7.23063 2.28172C5.71426 2.28172 4.26 2.88409 3.18777 3.95633C2.11554 5.02856 1.51317 6.48282 1.51317 7.99918C1.51317 9.51555 2.11554 10.9698 3.18777 12.042ZM10.2592 5.97776L8.23777 7.99918L10.2592 10.0206L9.25206 11.0278L7.23063 9.00633L5.2092 11.0278L4.20206 10.0206L6.22349 7.99918L4.20206 5.97776L5.2092 4.97061L7.23063 6.99204L9.25206 4.97061L10.2592 5.97776Z"
                            fill="#B17C3F"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BATAS SORT KIRI */}

            <div className="mr-3 mt-2">
              <Popup
                trigger={
                  <button className="my-auto ml-3 h-[30px] w-[30px] rounded-full border-2 border-gold bg-white hover:bg-[#d9b285]">
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-[7px]"
                    >
                      <path
                        d="M0 1.33341C0 1.024 0.122917 0.72725 0.341709 0.508457C0.560501 0.289665 0.857247 0.166748 1.16667 0.166748H12.8333C13.1428 0.166748 13.4395 0.289665 13.6583 0.508457C13.8771 0.72725 14 1.024 14 1.33341C14 1.64283 13.8771 1.93958 13.6583 2.15837C13.4395 2.37717 13.1428 2.50008 12.8333 2.50008H1.16667C0.857247 2.50008 0.560501 2.37717 0.341709 2.15837C0.122917 1.93958 0 1.64283 0 1.33341ZM2.33333 6.00008C2.33333 5.69066 2.45625 5.39392 2.67504 5.17512C2.89383 4.95633 3.19058 4.83342 3.5 4.83342H10.5C10.8094 4.83342 11.1062 4.95633 11.325 5.17512C11.5437 5.39392 11.6667 5.69066 11.6667 6.00008C11.6667 6.3095 11.5437 6.60625 11.325 6.82504C11.1062 7.04383 10.8094 7.16675 10.5 7.16675H3.5C3.19058 7.16675 2.89383 7.04383 2.67504 6.82504C2.45625 6.60625 2.33333 6.3095 2.33333 6.00008ZM5.83333 9.50008C5.52391 9.50008 5.22717 9.623 5.00838 9.84179C4.78958 10.0606 4.66667 10.3573 4.66667 10.6667C4.66667 10.9762 4.78958 11.2729 5.00838 11.4917C5.22717 11.7105 5.52391 11.8334 5.83333 11.8334H8.16667C8.47609 11.8334 8.77283 11.7105 8.99162 11.4917C9.21042 11.2729 9.33333 10.9762 9.33333 10.6667C9.33333 10.3573 9.21042 10.0606 8.99162 9.84179C8.77283 9.623 8.47609 9.50008 8.16667 9.50008H5.83333Z"
                        fill="#B17C3F"
                      />
                    </svg>
                  </button>
                }
                contentStyle={{
                  width: "250px",
                  paddingBottom: "20px",
                  borderRadius:"10px"
                }}
              >
                <div className="mt-2">
                  <p className="ml-4">Sort</p>
                  <div className="border-b-2 pb-1"></div>
                </div>
                <div className="mt-3 flex flex-row justify-between px-4">
                  <div className="flex flex-col justify-center">
                    <button onClick={handleSvgClick}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <path
                          d="M9.481 11.644H4.503L3.705 14H0.304L5.13 0.662H8.892L13.718 14H10.279L9.481 11.644ZM8.645 9.136L6.992 4.253L5.358 9.136H8.645Z"
                          className={
                            isClicked
                              ? "fill-[#B17C3F]"
                              : "fill-[#878787] hover:fill-gold"
                          }
                        />
                      </svg>
                    </button>
                    <button className="text-[10px]" onClick={handleSvgClick}>
                      Name
                    </button>
                  </div>

                  <div className="flex flex-col justify-center">
                    <button onClick={handleSvgClick2}>
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <path
                          d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                          className={
                            isClicked2
                              ? "fill-[#B17C3F]"
                              : "fill-[#878787] hover:fill-gold"
                          }
                        />
                      </svg>
                    </button>
                    <button className="text-[10px]" onClick={handleSvgClick2}>
                      Popular
                    </button>
                  </div>
                  <div className="flex flex-col justify-center">
                    <button onClick={handleSvgClick3}>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.3333 1.66659H2.66663C2.48981 1.66659 2.32025 1.73682 2.19522 1.86185C2.0702 1.98687 1.99996 2.15644 1.99996 2.33325V11.6666C1.99996 11.8434 2.0702 12.013 2.19522 12.138C2.32025 12.263 2.48981 12.3333 2.66663 12.3333H13.3333C13.5101 12.3333 13.6797 12.263 13.8047 12.138C13.9297 12.013 14 11.8434 14 11.6666V2.33325C14 2.15644 13.9297 1.98687 13.8047 1.86185C13.6797 1.73682 13.5101 1.66659 13.3333 1.66659ZM2.66663 0.333252C2.13619 0.333252 1.62749 0.543966 1.25241 0.919038C0.87734 1.29411 0.666626 1.80282 0.666626 2.33325V11.6666C0.666626 12.197 0.87734 12.7057 1.25241 13.0808C1.62749 13.4559 2.13619 13.6666 2.66663 13.6666H13.3333C13.8637 13.6666 14.3724 13.4559 14.7475 13.0808C15.1226 12.7057 15.3333 12.197 15.3333 11.6666V2.33325C15.3333 1.80282 15.1226 1.29411 14.7475 0.919038C14.3724 0.543966 13.8637 0.333252 13.3333 0.333252H2.66663ZM3.99996 3.66658H5.33329V4.99992H3.99996V3.66658ZM7.33329 3.66658C7.15648 3.66658 6.98691 3.73682 6.86189 3.86185C6.73686 3.98687 6.66663 4.15644 6.66663 4.33325C6.66663 4.51006 6.73686 4.67963 6.86189 4.80466C6.98691 4.92968 7.15648 4.99992 7.33329 4.99992H11.3333C11.5101 4.99992 11.6797 4.92968 11.8047 4.80466C11.9297 4.67963 12 4.51006 12 4.33325C12 4.15644 11.9297 3.98687 11.8047 3.86185C11.6797 3.73682 11.5101 3.66658 11.3333 3.66658H7.33329ZM5.33329 6.33325H3.99996V7.66658H5.33329V6.33325ZM6.66663 6.99992C6.66663 6.82311 6.73686 6.65354 6.86189 6.52851C6.98691 6.40349 7.15648 6.33325 7.33329 6.33325H11.3333C11.5101 6.33325 11.6797 6.40349 11.8047 6.52851C11.9297 6.65354 12 6.82311 12 6.99992C12 7.17673 11.9297 7.3463 11.8047 7.47132C11.6797 7.59635 11.5101 7.66658 11.3333 7.66658H7.33329C7.15648 7.66658 6.98691 7.59635 6.86189 7.47132C6.73686 7.3463 6.66663 7.17673 6.66663 6.99992ZM5.33329 8.99992H3.99996V10.3333H5.33329V8.99992ZM6.66663 9.66658C6.66663 9.48977 6.73686 9.3202 6.86189 9.19518C6.98691 9.07016 7.15648 8.99992 7.33329 8.99992H11.3333C11.5101 8.99992 11.6797 9.07016 11.8047 9.19518C11.9297 9.3202 12 9.48977 12 9.66658C12 9.8434 11.9297 10.013 11.8047 10.138C11.6797 10.263 11.5101 10.3333 11.3333 10.3333H7.33329C7.15648 10.3333 6.98691 10.263 6.86189 10.138C6.73686 10.013 6.66663 9.8434 6.66663 9.66658Z"
                          className={
                            isClicked3
                              ? "fill-[#B17C3F]"
                              : "fill-[#878787] hover:fill-gold"
                          }
                        />
                      </svg>
                    </button>
                    <button className="text-[10px]" onClick={handleSvgClick3}>
                      Regitered
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between px-4">
                  <button
                    onClick={handleOldestClick}
                    className={`flex w-[95px] justify-center rounded-sm border-2 ${
                      isOldestClick
                        ? "border-gold bg-[#d9b285]"
                        : "hover:border-gold hover:bg-[#d9b285]"
                    }`}
                  >
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-[2px] rounded-sm "
                      >
                        <path
                          d="M6.68533 13.3333C6.88425 13.3333 7.07501 13.2536 7.21566 13.1117C7.35632 12.9697 7.43533 12.7772 7.43533 12.5765V6.58258L9.40533 8.57047C9.54751 8.70415 9.73555 8.77693 9.92986 8.77347C10.1242 8.77001 10.3095 8.69059 10.447 8.55193C10.5844 8.41327 10.6631 8.2262 10.6665 8.03013C10.6699 7.83407 10.5978 7.64431 10.4653 7.50084L7.21533 4.22133C7.07471 4.07961 6.88408 4 6.68533 4C6.48658 4 6.29596 4.07961 6.15533 4.22133L2.90533 7.50084C2.83165 7.57013 2.77255 7.65368 2.73155 7.74652C2.69056 7.83935 2.66852 7.93957 2.66674 8.04119C2.66497 8.1428 2.68349 8.24374 2.72121 8.33798C2.75893 8.43221 2.81508 8.51782 2.8863 8.58968C2.95751 8.66155 3.04235 8.7182 3.13574 8.75627C3.22912 8.79433 3.32915 8.81302 3.42986 8.81123C3.53056 8.80944 3.62987 8.78719 3.72187 8.74583C3.81387 8.70447 3.89667 8.64483 3.96533 8.57047L5.93533 6.58258V12.5765C5.93533 12.9943 6.27133 13.3333 6.68533 13.3333Z"
                          className="fill-gold"
                        />
                      </svg>
                    </span>
                    <p className="text-[14px] text-gold">Oldest</p>
                  </button>
                  <button
                    onClick={handleNewestClick}
                    className={`flex w-[95px] justify-center rounded-sm border-2 ${
                      isNewestClick
                        ? "border-gold bg-[#d9b285]"
                        : "hover:border-gold hover:bg-[#d9b285]"
                    }`}
                  >
                    <span className="group">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-[2px] "
                      >
                        <path
                          d="M6.68533 13.3333C6.88425 13.3333 7.07501 13.2536 7.21566 13.1117C7.35632 12.9697 7.43533 12.7772 7.43533 12.5765V6.58258L9.40533 8.57047C9.54751 8.70415 9.73555 8.77693 9.92986 8.77347C10.1242 8.77001 10.3095 8.69059 10.447 8.55193C10.5844 8.41327 10.6631 8.2262 10.6665 8.03013C10.6699 7.83407 10.5978 7.64431 10.4653 7.50084L7.21533 4.22133C7.07471 4.07961 6.88408 4 6.68533 4C6.48658 4 6.29596 4.07961 6.15533 4.22133L2.90533 7.50084C2.83165 7.57013 2.77255 7.65368 2.73155 7.74652C2.69056 7.83935 2.66852 7.93957 2.66674 8.04119C2.66497 8.1428 2.68349 8.24374 2.72121 8.33798C2.75893 8.43221 2.81508 8.51782 2.8863 8.58968C2.95751 8.66155 3.04235 8.7182 3.13574 8.75627C3.22912 8.79433 3.32915 8.81302 3.42986 8.81123C3.53056 8.80944 3.62987 8.78719 3.72187 8.74583C3.81387 8.70447 3.89667 8.64483 3.96533 8.57047L5.93533 6.58258V12.5765C5.93533 12.9943 6.27133 13.3333 6.68533 13.3333Z"
                          className="fill-gold"
                        />
                      </svg>
                    </span>
                    <p className="text-[14px] text-gold">Newest</p>
                  </button>
                </div>
              </Popup>
            </div>
          </div>
        </div>

        <div className="pt-5  max-w-max">
          <div className=" flex flex-grow flex-row flex-wrap justify-center gap-3">
            {designerData.slice(0, visibleItems).map((designerData, idx) => {
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
                    hover && index == idx
                      ? "h-[350px] w-[267.5px]"
                      : "h-[330px] w-[247.5px]"
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
                      src={designerData.img}
                      alt={""}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                    <p
                      className={`${
                        hover && index == idx
                          ? ""
                          : "absolute top-3 ml-5 h-full w-full text-18px] font-medium text-white"
                      }`}
                    >
                      {designerData.designerName}
                    </p>
                  </div>
                  <div
                    className={`transition-all duration-300 ${
                      hover && index == idx
                        ? "absolute top-0 h-full w-full bg-[#00000035]"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`flex justify-between p-4 text-[#4B4B4B] transition-all duration-300 ${
                      hover && index == idx
                        ? "absolute bottom-0 h-[28%] w-full bg-[#ffffffe7]"
                        : ""
                    }`}
                  >
                    <span className="flex flex-col space-y-2">
                      <div className="text-[16px] font-[10px] ">
                        {designerData.nama}
                      </div>

                      <div className="flex flex-col">
                        {/* isi rating */}
                        <span className="text-[11px]">
                          <Rating
                            className="gap-[2px]"
                            name="half-rating"
                            defaultValue={designerData.rating}
                            precision={0.5}
                            icon={
                              // <img
                              //   src={"assets/profile/fill.png"}
                              //   alt="Custom Icon"
                              // />
                              <Image
                              src={"/assets/profile/fill.png"}
                              alt={""}
                              height={11.67}
                              width={11.67}
                              ></Image>
                            }
                            emptyIcon={
                              // <img src="assets/profile/empty.png" alt="" />
                              <Image
                              src={"/assets/profile/empty.png"}
                              alt={""}
                              height={11.67}
                              width={11.67}
                              ></Image>
                            }
                            readOnly
                          />
                        </span>

                        <span>{designerData.job}</span>
                      </div>
                    </span>
                    <span className="flex text-xl font-semibold">
                      <span className="text-[1.125rem] text-black">
                        {designerData.like}
                      </span>
                      <div className="ml-1 mr-3">
                        <button onClick={handleButtonClick}>
                          <svg
                            width="32"
                            height="26"
                            viewBox="0 0 38 32"
                            fill={isPressed ? "black" : "none"}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                              stroke="black"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ml-20 mt-10 flex items-center justify-center">
        {visibleItems < designerData.length && (
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
