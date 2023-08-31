import { useState, useRef, useEffect } from "react";
import React from "react";
import "reactjs-popup/dist/index.css";
import Image from "next/image";
import calculate from "@/tools/calculate";
import IMGPreview from "@/components/imgPreview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShowRating from "../components/rating";
import Link from "next/link";
import {motion} from "framer-motion";
import Status from "@/components/status";

const profile = [
	{
		name: "Raihan",
		city: "Dompu",
		img: "/assets/profile/raihan.jpg",
	},
];

export const properti = [
	{
		name: "Rumah Minimalis",
		type: "Villa",
		price: 5000000000,
		regisDate: "08 January 2022",
		img: "/assets/build/desain_1.jpg",
		bedroom: 3,
		bathroom: 2,
		size: 323,
		review: 4,
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit Incidunt sapiente veniam pariatur. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur.",
		descriptionFeature:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit Incidunt sapiente veniam pariatur. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur. Rerum molestias Rerum molestias, vero tempore tempora inventore sint saepe. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit? Obcaecati reprehenderit minima soluta ducimus omnis eius pariatur oloremque. Rerum molestias, vero tempore tempora inventore sint saepe reprehenderit?. Incidunt sapiente veniam pariatur.",
	},
];

const review = [
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 5,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 1,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 4,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 3,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 3,
		posttime: "2 Days Ago",
		like: 5,
		liked: false,
		tittle: "Momen Kebersamaan",
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 2,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
		description:
			"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
	},
	{
		name: "Raihan",
		img: "/assets/profile/raihan.JPG",
		rate: 4,
		posttime: "2 Days Ago",
		tittle: "Momen Kebersamaan",
		like: 5,
		liked: false,
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
	

	const [review, setReview] = useState([
		{
			id: 0,
			name: "Raihan",
			img: "/assets/profile/raihan.JPG",
			rate: 5,
			posttime: "2 Days Ago",
			tittle: "Momen Kebersamaan",
			like: 5,
			liked: false,
			description:
				"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
		},
		{
			id: 1,
			name: "Raihan",
			img: "/assets/profile/raihan.JPG",
			rate: 1,
			posttime: "2 Days Ago",
			tittle: "Momen Kebersamaan",
			like: 5,
			liked: false,
			description:
				"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
		},
		{
			id: 2,
			name: "Raihan",
			img: "/assets/profile/raihan.JPG",
			rate: 4,
			posttime: "2 Days Ago",
			tittle: "Momen Kebersamaan",
			like: 5,
			liked: false,
			description:
				"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
		},
		{
			id: 3,
			name: "Raihan",
			img: "/assets/profile/raihan.JPG",
			rate: 4,
			posttime: "2 Days Ago",
			tittle: "Momen Kebersamaan",
			like: 5,
			liked: false,
			description:
				"Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
		},
	]);
	function handleLike(id: number) {
		setReview(
			review.map((item) => {
				if (item.id === id) {
					// Jika sudah disukai, kurangi 1, jika belum, tambahkan 1
					const newLike = item.liked ? item.like - 1 : item.like + 1;

					return { ...item, liked: !item.liked, like: newLike };
				} else {
					return { ...item };
				}
			}),
		);
	}

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

	const [avrRate, setAvrRate] = useState(0);
	// const rateAverage = Math.floor(
	//   review.reduce((total, item) => total + item.rate, 0) / review.length
	// );
	useEffect(() => {
		const rateAverage = Math.floor(
			review.reduce((total, item) => total + item.rate, 0) / review.length,
		);
		setAvrRate(rateAverage);
	}, [review]);

	const refs = useRef([]);
	refs.current = [];
	// // Carousel Design
	return (
		<div className="flex justify-center ">
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
									<ShowRating rate={avrRate}></ShowRating>
									<p className="">{review.length} Review</p>
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
							<Link
								href={"./reqDesainForm"}
								className=" flex h-[2.066875rem] w-[6.319375rem] items-center justify-center space-x-1 rounded-full bg-[#B17C3F] text-white"
							>
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
							</Link>
							
						
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
									<p className="text-[0.9375rem] font-medium ">
										{properti[0].type}
									</p>
								</div>
								{/* Hour */}
								<div className="flex space-x-2">
									<p className="text-[0.9375rem] font-normal text-[#B17C3F]">
										Registered:
									</p>
									<p className="text-[0.9375rem] font-medium ">
										{properti[0].regisDate}
									</p>
								</div>
								{/* Hour */}
								<div className="space-y-2">
									<p className="text-[0.9375rem] font-normal text-[#B17C3F]">
										Description Feature:
									</p>
									<p className="text-[0.9375rem] font-medium ">
										{properti[0].descriptionFeature}
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
						<motion.div 
						layout
						className="w-full space-y-3 rounded-[1.5625rem] bg-[#fff] p-[2.4375rem] drop-shadow-landingShado">
							<p className="text-[1.25rem] font-medium">Review</p>
							{review.length != 0 ? (
								<div>
									<div className="space-y-2">
										{review.slice(0, visibleItems).map((data, idx) => (
											<div
												key={idx}
												className="mx-6 flex h-fit space-x-4  space-y-2 border-b-[0.005rem] border-[#D0D0D0] py-2"
											>
												<Link
													href={"#"}
													className="mt-3 h-fit w-fit overflow-hidden rounded-full  "
												>
													<Image
														src={data.img}
														alt={"Review"}
														width={200}
														height={200}
														// objectFit={"contain"}
													></Image>
												</Link>
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
														<ShowRating rate={data.rate}></ShowRating>
													</div>
													<div>
														<p className="text-[0.75rem] text-[#646464]">
															{data.description}
														</p>
														<div className="flex space-x-1 mt-1">
															{!data.liked ? (
																<div
																	onClick={() => {
																		handleLike(idx);
																	}}
																	className="cursor-pointer"
																>
																	<svg
																		width="17"
																		height="15"
																		viewBox="0 0 17 15"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M3 6V15H0V6H3ZM6 15C5.60218 15 5.22064 14.842 4.93934 14.5607C4.65804 14.2794 4.5 13.8978 4.5 13.5V6C4.5 5.5875 4.665 5.2125 4.9425 4.9425L9.8775 0L10.6725 0.795C10.875 0.9975 11.0025 1.275 11.0025 1.5825L10.98 1.8225L10.2675 5.25H15C15.3978 5.25 15.7794 5.40804 16.0607 5.68934C16.342 5.97064 16.5 6.35218 16.5 6.75V8.25C16.5 8.445 16.4625 8.625 16.395 8.7975L14.13 14.085C13.905 14.625 13.3725 15 12.75 15H6ZM6 13.5H12.7725L15 8.25V6.75H8.4075L9.255 2.76L6 6.0225V13.5Z"
																			fill="#6E6E6E"
																		/>
																	</svg>
																</div>
															) : (
																<div
																	onClick={() => {
																		handleLike(idx);
																	}}
																	className="cursor-pointer"
																>
																	<svg
																		width="17"
																		height="15"
																		viewBox="0 0 17 15"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M16.5 6.75C16.5 6.35218 16.342 5.97064 16.0607 5.68934C15.7794 5.40804 15.3978 5.25 15 5.25H10.26L10.98 1.8225C10.995 1.7475 11.0025 1.665 11.0025 1.5825C11.0025 1.275 10.875 0.99 10.6725 0.7875L9.8775 0L4.9425 4.935C4.665 5.2125 4.5 5.5875 4.5 6V13.5C4.5 13.8978 4.65804 14.2794 4.93934 14.5607C5.22064 14.842 5.60218 15 6 15H12.75C13.3725 15 13.905 14.625 14.13 14.085L16.395 8.7975C16.4625 8.625 16.5 8.445 16.5 8.25V6.75ZM0 15H3V6H0V15Z"
																			fill="black"
																		/>
																	</svg>
																</div>
															)}
															<p className="text-[0.75rem] text-[#6E6E6E] inline-block align-middle">
																{data.like}
															</p>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									{review.length > 3 && (
										<div className="flex justify-center cursor-pointer ">
											{visibleItems < review.length ? (
												<p
													className="text-[#B17C3F] text-[0.8rem] mt-4"
													onClick={() => {
														setVisibleItems(visibleItems + 3);
													}}
												>
													Show More
												</p>
											) : (
												<p
													className="text-[#B17C3F] text-[0.8rem] mt-4"
													onClick={() => {
														setVisibleItems(3);
													}}
												>
													Show Fewer
												</p>
											)}
										</div>
									)}
								</div>
							) : (
								<div className="flex justify-center">
									<p className="mt-4 mb-4 text-gray-500">There is no review</p>
								</div>
							)}
						</motion.div>
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
