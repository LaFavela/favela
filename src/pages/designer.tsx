import Navbar from "@/components/navbar";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import React from "react";
import Popup from "reactjs-popup";
import { motion, AnimatePresence } from "framer-motion";
import "reactjs-popup/dist/index.css";
import ShowRating from "../components/rating";
import { type, style, province } from "@/components/tagList";

export const designerData = [
	{
		id: 1,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 2,
		city: "Mataram",
		nama: "Muhammad Dwimas Catur Nugarah nasution payu godek acong",
		img: "/assets/landing/Designer2.jpg",
		designerName: "Paper Pots",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 3,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer3.jpg",
		designerName: "Freya",
		rating: 3,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 4,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 5,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 5,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Paper Pots",
		rating: 5,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 1,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 2,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer2.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 3,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer3.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 4,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 5,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 1,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 2,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer2.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 3,
		city: "Mataram",
		nama: "Antonio",
		img: "/assets/landing/Designer3.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 4,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 5,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 1,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 2,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer2.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 3,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer3.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 4,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
	{
		id: 5,
		city: "Mataram",
		nama: "Antonio Rudiger",
		img: "/assets/landing/Designer1.jpg",
		designerName: "Antonio Rudiger",
		rating: 4,
		follower: 12,
		job: "Ikea Designer",
		tag: ["Villa", "Modern", "Traditional"],
	},
];

export default function Designer() {
	const [hover, setHover] = useState(false);
	const [index, setIndex] = useState(-1);
	const [isPressed, setIsPressed] = useState(false);
	const handleButtonClick = () => {
		setIsPressed(!isPressed);
	};

	const [visibleItems, setVisibleItems] = useState(10); // Jumlah item yang terlihat awalnya
	const [loadCount] = useState(5); // Jumlah item yang ditambahkan setiap kali "load more" diklik
	const loadMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + loadCount);
	};

	const [activeLabel, setActiveLabel] = useState(false);
	const handleLabelClick = () => {
		setActiveLabel(!activeLabel);
	};

	const [activeLabel2, setActiveLabel2] = useState(false);
	const handleLabelClick2 = () => {
		setActiveLabel2(!activeLabel2);
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

	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const handleTagClick = (value: string) => {
		if (selectedTags.includes(value)) {
			setSelectedTags(selectedTags.filter((tag) => tag !== value));
		} else {
			setSelectedTags([...selectedTags, value]);
		}
	};

	const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
	const [selectedCities, setSelectedCities] = useState<string[]>([]);
	console.log(selectedProvinces, selectedCities);
	const handleTagClick2 = (value: string, isCity: boolean) => {
		if (isCity) {
			if (selectedCities.includes(value)) {
				setSelectedCities([]);
			} else {
				setSelectedCities([value]);
			}
		} else {
			if (selectedProvinces.includes(value)) {
				setSelectedProvinces([]);
			} else {
				setSelectedCities([]); // Deselect cities
				setSelectedProvinces([value]);
			}
		}
	};

	const handleTagDelete = (value: string) => {
		const updatedTags = selectedTags.filter((tag) => tag !== value);
		setSelectedTags(updatedTags);
	};
	const handleTagDelete2 = (value: string) => {
		const updatedTags = selectedProvinces.filter((tag) => tag !== value);
		const updateCity = selectedCities.filter((tag) => tag !== value);
		setSelectedProvinces(updatedTags);
		setSelectedCities(updateCity);
	};

	const [value, setValue] = useState("");
	const onSearch = (searchTerm: any) => {
		setValue(searchTerm);
		setShowSuggestions(false);
		console.log("search", searchTerm);
	};

	const [showSuggestions, setShowSuggestions] = useState(false);

	return (
		<div>
			<div className="container mx-auto mt-10 max-w-[1314px]">
				<div className="relative ">
					{/* <img src="assets/build/bg.jpg" alt="" className="rounded-2xl" /> */}
					<Image
						src={"/assets/build/bg.jpg"}
						alt={""}
						width={1314}
						height={466}
						className="rounded-2xl"
					></Image>
					<div className="absolute bottom-[10rem] ml-28">
						<p className="w-[30rem] text-[33px] font-normal text-white">
							Find Your Dream Property Design by Consult With Designers
						</p>
					</div>
				</div>

				<div className="mt-5 sticky top-[4.8rem]  z-30">
					<div className="relative">
						<div className="flex h-[55px] w-full bg-white justify-between rounded-full border-2">
							<div className=" flex">
								<motion.button
									whileTap={{ scale: 0.85 }}
									onClick={handleLabelClick}
									className="my-auto ml-3 h-[30px] w-[30px] rounded-full bg-gold hover:bg-[#d9b285]"
								>
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
											strokeWidth="2"
										/>
									</svg>
								</motion.button>

								<div className="tags-input mt-3 pl-3 flex gap-x-2">
									<div className="flex flex-row gap-2">
										<AnimatePresence>
											{selectedTags.map((tag, index) => (
												<motion.li
													initial={{ scale: 0 }}
													animate={{ scale: 1 }}
													exit={{ scale: 0 }}
													className="flex h-[30px]  max-w-fit flex-row justify-between rounded-full bg-[#E4D1BC]"
													key={index}
												>
													<span className="ml-2 mt-[0.45rem] pr-2 text-[11px] text-gold">
														{tag}
													</span>
													<button
														className="mr-2 mt-[3px] "
														onClick={() => handleTagDelete(tag)}
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
												</motion.li>
											))}
										</AnimatePresence>
									</div>
									<div className="flex flex-row gap-2">
										<AnimatePresence>
											{selectedProvinces.map((tag, index) => (
												<motion.li
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												exit={{ scale: 0 }}

													className="flex h-[30px] max-w-fit flex-row justify-between rounded-full bg-[#E4D1BC]"
													key={index}
												>
													<span className="ml-2 mt-[7px] pr-2 text-[11px] text-gold">
														{tag}
													</span>
													<button
														className="mr-2 mt-[3px] "
														onClick={() => handleTagDelete2(tag)}
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
												</motion.li>
											))}
										</AnimatePresence>
									</div>
								</div>
							</div>

							{/* BATAS SORT KIRI */}

							<div className="mr-3 mt-2">
								<motion.button
									whileTap={{ scale: 0.85 }}
									onClick={handleLabelClick2}
									className="my-auto ml-3 h-[30px] w-[30px] rounded-full border-2 border-gold bg-white hover:bg-[#d9b285]"
								>
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
								</motion.button>
								<AnimatePresence>
									{activeLabel2 && (
										<motion.div
											initial={{ x: 120, y: -150, opacity: 0, scale: 0 }}
											animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
											exit={{ x: 120, y: -150, opacity: 0, scale: 0 }}
											transition={{ linear: true, duration: 0.15 }}
											className="right-0  absolute mt-6 z-10 h-[150px] w-[300px] rounded-[1.5rem] bg-[#ffffffec] p-3 shadow-md drop-shadow"
										>
											<div className="mt-2">
												<p className="ml-4">Sort</p>
												<div className="border-b-2 pb-1"></div>
											</div>
											<div className="mt-3 flex flex-row justify-between px-10">
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
													<button
														className={`text-[10px] mt-1 ${
															isClicked ? "text-gold" : ""
														}`}
														onClick={handleSvgClick}
													>
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
													<button
														className={`text-[10px] ${
															isClicked2 ? "text-gold" : ""
														}`}
														onClick={handleSvgClick2}
													>
														Popular
													</button>
												</div>
												<div className="flex flex-col justify-center">
													<button onClick={handleSvgClick3}>
														<svg
															width="14"
															height="14"
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															className="ml-[6px]"
														>
															<path
																d="M7.00004 0.333252C10.682 0.333252 13.6667 3.31792 13.6667 6.99992C13.6667 10.6819 10.682 13.6666 7.00004 13.6666C3.31804 13.6666 0.333374 10.6819 0.333374 6.99992C0.333374 3.31792 3.31804 0.333252 7.00004 0.333252ZM7.00004 1.66659C5.58555 1.66659 4.229 2.22849 3.2288 3.22868C2.22861 4.22888 1.66671 5.58543 1.66671 6.99992C1.66671 8.41441 2.22861 9.77096 3.2288 10.7712C4.229 11.7713 5.58555 12.3333 7.00004 12.3333C8.41453 12.3333 9.77108 11.7713 10.7713 10.7712C11.7715 9.77096 12.3334 8.41441 12.3334 6.99992C12.3334 5.58543 11.7715 4.22888 10.7713 3.22868C9.77108 2.22849 8.41453 1.66659 7.00004 1.66659ZM7.00004 2.99992C7.16333 2.99994 7.32093 3.05989 7.44296 3.1684C7.56498 3.2769 7.64294 3.42642 7.66204 3.58859L7.66671 3.66659V6.72392L9.47137 8.52859C9.59094 8.64856 9.66036 8.80954 9.66553 8.97884C9.6707 9.14814 9.61123 9.31306 9.49921 9.4401C9.38719 9.56715 9.23101 9.64679 9.06239 9.66285C8.89378 9.67891 8.72537 9.63019 8.59137 9.52659L8.52871 9.47125L6.52871 7.47125C6.42509 7.36755 6.35855 7.23259 6.33937 7.08725L6.33337 6.99992V3.66659C6.33337 3.48977 6.40361 3.32021 6.52864 3.19518C6.65366 3.07016 6.82323 2.99992 7.00004 2.99992Z"
																fill="#878787"
																className={
																	isClicked3
																		? "fill-[#B17C3F]"
																		: "fill-[#878787] hover:fill-gold"
																}
															/>
														</svg>
													</button>
													<button
														className={`text-[10px] mt-1 ${
															isClicked3 ? "text-gold" : ""
														}`}
														onClick={handleSvgClick3}
													>
														Time
													</button>
												</div>
											</div>

											<div className="mt-4 flex justify-between px-4">
												<button
													onClick={handleOldestClick}
													className={`flex w-[115px] h-[1.5rem] justify-center items-center rounded-lg border-2 ${
														isOldestClick
															? "border-gold bg-[#d9b285]"
															: "hover:border-gold hover:text-gold hover:bg-[#d9b285]"
													}`}
												>
													<span className="mr-2">
														<svg
															width="9"
															height="10"
															viewBox="0 0 9 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M4.68533 9.33333C4.88425 9.33333 5.07501 9.2536 5.21566 9.11167C5.35632 8.96974 5.43533 8.77724 5.43533 8.57652V2.58258L7.40533 4.57047C7.54751 4.70415 7.73555 4.77693 7.92986 4.77347C8.12416 4.77001 8.30954 4.69059 8.44695 4.55193C8.58437 4.41327 8.66308 4.2262 8.66651 4.03013C8.66994 3.83407 8.59781 3.64431 8.46533 3.50084L5.21533 0.221332C5.07471 0.079606 4.88408 0 4.68533 0C4.48658 0 4.29596 0.079606 4.15533 0.221332L0.905334 3.50084C0.831647 3.57013 0.772545 3.65368 0.731553 3.74652C0.690561 3.83935 0.668519 3.93957 0.666743 4.04119C0.664966 4.1428 0.68349 4.24374 0.721211 4.33798C0.758932 4.43221 0.815077 4.51782 0.886296 4.58968C0.957515 4.66155 1.04235 4.7182 1.13574 4.75627C1.22912 4.79433 1.32915 4.81302 1.42986 4.81123C1.53056 4.80944 1.62987 4.78719 1.72187 4.74583C1.81387 4.70447 1.89667 4.64483 1.96533 4.57047L3.93533 2.58258V8.57652C3.93533 8.99428 4.27133 9.33333 4.68533 9.33333Z"
																fill="#878787"
															/>
														</svg>
													</span>
													<p className="text-[10px] text-[#878787] ">
														Ascending
													</p>
												</button>
												<button
													onClick={handleNewestClick}
													className={`flex w-[115px] h-[1.5rem] justify-center items-center rounded-lg border-2 ${
														isNewestClick
															? "border-gold bg-[#d9b285]"
															: "hover:border-gold hover:bg-[#d9b285]"
													}`}
												>
													<span className="group mr-2">
														<svg
															width="8"
															height="10"
															viewBox="0 0 8 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M4.01871 0C4.21762 0 4.40839 0.0854311 4.54904 0.237498C4.68969 0.389565 4.76871 0.595813 4.76871 0.810868V7.23295L6.73871 5.10307C6.88088 4.95983 7.06893 4.88186 7.26323 4.88556C7.45753 4.88927 7.64292 4.97437 7.78033 5.12294C7.91774 5.2715 7.99646 5.47193 7.99988 5.682C8.00331 5.89207 7.93119 6.09538 7.79871 6.24909L4.54871 9.76286C4.40808 9.91471 4.21746 10 4.01871 10C3.81996 10 3.62933 9.91471 3.48871 9.76286L0.238708 6.24909C0.165021 6.17486 0.105919 6.08534 0.0649274 5.98587C0.0239354 5.88641 0.00189351 5.77903 0.000116722 5.67016C-0.00166006 5.56128 0.0168645 5.45314 0.0545855 5.35217C0.0923065 5.2512 0.148451 5.15948 0.21967 5.08248C0.290889 5.00548 0.375723 4.94478 0.469111 4.904C0.562499 4.86322 0.662528 4.84319 0.763231 4.84511C0.863934 4.84703 0.963247 4.87086 1.05525 4.91518C1.14725 4.9595 1.23005 5.0234 1.29871 5.10307L3.26871 7.23295V0.810868C3.26871 0.363269 3.60471 0 4.01871 0Z"
																fill="#878787"
															/>
														</svg>
													</span>
													<p className="text-[10px] text-[#878787] ">
														Descending
													</p>
												</button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
					<AnimatePresence>
						{activeLabel && (
							<motion.div
								initial={{ x: -250, y: -150, opacity: 0, scale: 0 }}
								animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
								exit={{ x: -250, y: -150, opacity: 0, scale: 0 }}
								transition={{ linear: true, duration: 0.15 }}
								className=" absolute mt-2 z-10 h-max w-max rounded-[1.5rem] bg-[#ffffffec] p-6 shadow-md drop-shadow"
							>
								<div className="flex gap-x-6">
									<div className="space-y-1">
										<p className="text-[13px] font-semibold ml-2">
											Choose Type
										</p>
										<div className="flex flex-col gap-x-2 space-y-1">
											{type.map((type, index) => (
												<div key={index} className="">
													<button
														value={type.value}
														onClick={() => handleTagClick(type.value)}
														className={`text-[12px] hover:bg-[#E4D1BC] font-medium text-start pl-2 w-full rounded-full py-1 pr-5  hover:text-gold ${
															selectedTags.includes(type.value)
																? "bg-[#E4D1BC] text-gold"
																: ""
														}`}
													>
														{type.label}
													</button>
												</div>
											))}
										</div>
									</div>
									<div className="border-l-2 pl-4 space-y-1">
										<p className="text-[13px] font-semibold ml-1">
											Choose Style
										</p>
										<div className="flex flex-col gap-x-2 space-y-1 ">
											{style.map((style, index) => (
												<div key={index} className="">
													<button
														value={style.value}
														onClick={() => handleTagClick(style.value)}
														className={`text-[12px] hover:bg-[#E4D1BC] text-start pl-1 font-medium w-full rounded-full py-1 pr-5  hover:text-gold ${
															selectedTags.includes(style.value)
																? "bg-[#E4D1BC] text-gold"
																: ""
														}`}
													>
														{style.label}
													</button>
												</div>
											))}
										</div>
									</div>
									<div className="border-l-2 pr-3 pl-4 relative">
										<p className="text-[13px] font-semibold ml-[5px] pb-1">
											Location
										</p>
										<div className="flex flex-col justify-center items-center mt-[5px] ">
											<div>
												<input
													type="text"
													value={value}
													onChange={(e) => {
														setValue(e.target.value);
														setShowSuggestions(e.target.value !== ""); // Show suggestions only when there's a search term
													}}
													className="text-[13px] border-2 w-[234px] h-[29px] rounded-md pl-2 border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F]"
												/>
											</div>
											<div className="">
												{showSuggestions && value && (
													<div className=" bg-white left-4 border-[1px] w-[234px] rounded-md  px-2 py-2 mt-1 absolute">
														{province.map((item, index) => {
															const provinceLabel = item.label.toLowerCase();
															const matchingCities = item.city.filter(
																(city) => {
																	const search = value.toLowerCase();
																	const cityLabel = city.label.toLowerCase();

																	return cityLabel.includes(search);
																},
															);

															if (
																provinceLabel.includes(value.toLowerCase()) ||
																matchingCities.length > 0
															) {
																return (
																	<div key={index} className="text-[13px]">
																		<div
																			onClick={() => {
																				onSearch(item.label);
																				setSelectedProvinces((prevSelected) => [
																					...prevSelected,
																					item.label,
																				]); // Add selected province to array
																			}}
																			className="flex justify-between py-1 hover:bg-[#F0F0F0]"
																		>
																			<div className="px-2 flex justify-between w-full">
																				<p className="text-gold">
																					{item.label}
																				</p>
																				<p className="text-[10px] text-black/50 my-auto">
																					Province
																				</p>
																			</div>
																		</div>
																		{matchingCities.map((city, cityIndex) => (
																			<div
																				onClick={() => {
																					onSearch(city.label);
																					setSelectedProvinces(
																						(prevSelected) => [
																							...prevSelected,
																							city.label,
																						],
																					); // Add selected province to array
																				}}
																				key={cityIndex}
																				className="flex cursor-pointer justify-between py-1 hover:bg-[#F0F0F0]"
																			>
																				<div className="px-2 cursor-pointer flex justify-between w-full">
																					<p className="text-gold cursor-pointer">
																						{city.label}
																					</p>
																					<p className="cursor-pointer text-[10px] text-black/50 my-auto ">
																						City
																					</p>
																				</div>
																			</div>
																		))}
																	</div>
																);
															}

															return null;
														})}
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<div className="max-w-max  pt-5">
					<div className=" flex flex-grow flex-row flex-wrap justify-center gap-[1.1rem]">
						{designerData.slice(0, visibleItems).map((designerData, idx) => {
							return (
								<div
									key={idx}
									className={`relative   rounded-[1.5625rem] transition-all overflow-hidden duration-300 h-[21rem] w-[15.46875rem]`}
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
									</div>
									<motion.div
										animate={{ opacity: hover && index == idx ? 1 : 0 }}
										transition={{ ease: "easeIn", duration: 0.2 }}
										className={` ${
											hover && index == idx
												? "absolute top-0 h-full w-full bg-[#00000035]"
												: ""
										}`}
									></motion.div>
									<motion.div
										layout
										transition={{ duration: 0.2 }}
										className={` rounded-t-[1.5625rem]  text-[#4B4B4B]  ${
											hover && index == idx
												? "p-6 absolute bottom-0  w-full bg-[#ffffffe7]"
												: "p-2 space-y-1 absolute bottom-0 w-full bg-[#ffffffc0]"
										}`}
									>
										<div
											className={`flex   ${
												hover && index == idx
													? "justify-between items-start"
													: "justify-center items-center text-center"
											}`}
										>
											<span className="flex flex-col space-y-2">
												<p
													className={`align-middle  font-semibold ${
														hover && index == idx
															? " text-[#4B4B4B] text-[1.0625rem]"
															: " text-[0.875rem] text-black truncate px-4 w-[13.125rem]"
													}`}
												>
													{designerData.nama}
												</p>
											</span>
											{hover && index == idx && (
												<span className="flex   items-center space-x-1 font-semibold">
													<p className=" text-[0.9375rem] mt-[0.06rem]  text-black">
														{designerData.follower}
													</p>
													<div className=" w-[0.875rem] h-[0.6875rem]  ">
														<svg
															width="14"
															height="11"
															viewBox="0 0 14 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<g clip-path="url(#clip0_2340_2331)">
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M10 7C10.9133 7.62 11.5533 8.46 11.5533 9.58V11.58H14.22V9.58C14.22 8.12667 11.84 7.26667 10 7Z"
																	fill="black"
																/>
																<path
																	d="M6.00001 5.33333C7.47277 5.33333 8.66668 4.13943 8.66668 2.66667C8.66668 1.19391 7.47277 0 6.00001 0C4.52725 0 3.33334 1.19391 3.33334 2.66667C3.33334 4.13943 4.52725 5.33333 6.00001 5.33333Z"
																	fill="black"
																/>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M9.99984 6.33382C11.4732 6.33382 12.6665 5.14049 12.6665 3.66716C12.6665 2.19382 11.4732 1.00049 9.99984 1.00049C9.6865 1.00049 9.39317 1.06715 9.11317 1.16049C9.68685 1.86997 9.99982 2.75476 9.99982 3.66716C9.99982 4.57955 9.68685 5.46434 9.11317 6.17382C9.39317 6.26716 9.6865 6.33382 9.99984 6.33382ZM5.99984 7.00049C4.21984 7.00049 0.666504 7.89382 0.666504 9.66716V11.6672H11.3332V9.66716C11.3332 7.89382 7.77984 7.00049 5.99984 7.00049Z"
																	fill="black"
																/>
															</g>
															<defs>
																<clipPath id="clip0_2340_2331">
																	<rect width="14" height="11" fill="white" />
																</clipPath>
															</defs>
														</svg>
													</div>
												</span>
											)}
										</div>
										{hover && index == idx && (
											<div className="-pt-2 mb-2 space-y-1">
												<p className="text-[0.75rem]">{designerData.city}</p>
												<ShowRating rate={designerData.rating}></ShowRating>
											</div>
										)}
										<div
											className={` flex  space-x-1  text-[0.5625rem] text-[#B17C3F] 
                    ${
											hover && index == idx
												? "justify-start"
												: " justify-center "
										}
                    `}
										>
											{designerData.tag.slice(0, 2).map((tag, idx) => {
												return (
													<div
														key={idx}
														className="transition-all duration-300 rounded-full border-[#B17C3F] border-[0.0001rem] px-2"
													>
														<p className="font-medium">{tag}</p>
													</div>
												);
											})}
										</div>
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className=" mt-10 flex items-center justify-center">
				{visibleItems < designerData.length && (
					<motion.button
						whileTap={{ scale: 0.9 }}
						className=" py-1 px-4 rounded-3xl border-2 border-[#B17C3F] bg-white text-[0.8rem] text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] font-semibold hover:text-white"
						onClick={loadMore}
					>
						Load More
					</motion.button>
				)}
			</div>
		</div>
	);
}
