import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import { setTransparent } from "../tools/transparent";
import Image from "next/image";
import { designerData } from "./designer";
import { Skeleton } from "@mui/material";
import Head from "next/head";

export default function Landing() {
	const [isPressed, setIsPressed] = useState(false);
	const handleButtonClick = () => {
		setIsPressed(!isPressed);
	};
	const [visibleItems] = useState(3);
	const [visibleDesigner] = useState(4);
	const handleScroll = () => {
		const scrollPosition = window.pageYOffset;
		const threshold = 100;
		const transparentValue = scrollPosition < threshold;
		console.log(transparentValue);
		setTransparent(transparentValue);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className=" transition-all duration-300 ease-linear">
			<Head>
				<title>{`Hunify "Your Property at 1 Click!"`}</title>
			</Head>
			<div className="container mx-auto max-w-md sm:max-w-xl xl:max-w-5xl 2xl:max-w-7xl">
				{/* {loading? (
          <div className="pt-[8rem]">
            <Skeleton className="pt-[8rem] rounded-xl"  variant="rectangular" width="1314px" height="466px"/>
          </div>
        ):(

        )} */}
				<div className="relative pt-[8rem] ">
					<Image
						src="/assets/landing/landingBG.jpg"
						alt=""
						width={1314}
						height={466}
						className="rounded-2xl"
						// onLoad={(image)=>image.classList.add('animate-fadeIn')}
						// onLoadingComplete={}
					/>
					<div className="absolute bottom-[2rem] left-6 text-[#E3E3E3]  sm:bottom-[2.5rem] xl:bottom-24 xl:left-16 2xl:bottom-[7rem] 2xl:left-20">
						<p className="text-center text-4xl font-medium text-[#FBC68A] sm:text-5xl xl:text-[5rem] 2xl:text-[6.5rem]">
							Hunify
						</p>
						<p className=" ml-1 text-[0.8rem] font-light sm:text-[1.07rem] sm:leading-7 xl:mt-3 xl:text-[1.8rem] 2xl:mt-5 2xl:text-[2.35rem]">
							Your Property at
						</p>
						<p className="ml-1 text-[0.8rem] font-light sm:text-[1.07rem] sm:leading-7 xl:my-3 xl:text-[1.8rem] 2xl:mb-7 2xl:mt-5 2xl:text-[2.35rem]">
							One Click
						</p>
						<Link
							href={"./designer"}
							className="ml-1 rounded-lg bg-gold px-3 py-1 text-[5px] hover:bg-[#d9b285] xl:rounded-2xl xl:px-4 xl:py-2 xl:text-[11px] 2xl:rounded-3xl 2xl:px-5 2xl:py-[10px] 2xl:text-[14px]"
						>
							Explore Now
						</Link>
					</div>
				</div>

				{/* PEMBATAS 1 */}

				<div className=" mt-6 flex flex-col items-center justify-center">
					<p className="text-[11px] font-medium xl:text-[23px] 2xl:text-[30px]">
						The <span className="text-[#B17C3F]">Service</span> You Get From{" "}
						<span className="text-[#B17C3F]">Hunify</span>
					</p>

					<p className="w-[280px] text-center text-[5px] xl:mt-3 xl:w-[655px] xl:text-[12px] 2xl:w-[820px] 2xl:text-[15px]">
						There is a wide range of services we provide to help you build your
						dream property.
					</p>
				</div>

				{/* PEMBATAS 2 */}

				<div className="mt-8 flex justify-center space-x-10">
					<div className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]">
						<div className="mr-2 mt-2 flex  items-center ml-8 justify-between xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
							<p className="  text-[20px] font-medium ">Find Designer</p>
							<div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#ccb295] xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
								<svg
									width="28"
									height="28"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.5516 6.94915C27.6938 6.80731 27.8065 6.63883 27.8835 6.45335C27.9604 6.26787 28 6.06904 28 5.86824C28 5.66744 27.9604 5.46861 27.8835 5.28314C27.8065 5.09766 27.6938 4.92918 27.5516 4.78734L23.2127 0.448375C23.0708 0.306242 22.9023 0.193479 22.7169 0.116541C22.5314 0.0396025 22.3326 0 22.1318 0C21.931 0 21.7321 0.0396025 21.5467 0.116541C21.3612 0.193479 21.1927 0.306242 21.0509 0.448375L14.1668 7.33245L8.20263 1.3683C7.00673 0.1724 5.05956 0.1724 3.86367 1.3683L0.950585 4.28138C-0.245312 5.47728 -0.245312 7.42444 0.950585 8.62034L6.91474 14.5845L0 21.4992V28H6.50077L13.4308 21.0699L19.395 27.0341C20.8515 28.4906 22.814 27.954 23.734 27.0341L26.647 24.121C27.8429 22.9251 27.8429 20.9779 26.647 19.782L20.6829 13.8179L27.5516 6.94915ZM3.12773 6.44319L6.02548 3.53011L7.97265 5.47728L6.16347 7.30178L8.32528 9.4636L10.1498 7.63909L11.9896 9.47893L9.07655 12.392L3.12773 6.44319ZM20.3456 17.8502L18.5211 19.6747L20.6829 21.8365L22.5074 20.012L24.4546 21.9592L21.5415 24.8723L15.5773 18.9081L18.4904 15.995L20.3456 17.8502ZM5.22822 24.9336H3.0664V22.7718L17.8005 8.03772L19.7936 10.0309L19.9623 10.1995L5.22822 24.9336ZM19.9623 5.86058L22.1241 3.69876L24.2859 5.86058L22.1241 8.02239L19.9623 5.86058Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
            The Find Designer feature allows you to find a designer or architect according to location, design style and property style. View portfolios, read reviews, and contact directly for your project
						</p>
					</div>

					<div className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]">
						<div className="mr-2 mt-2 flex  items-center ml-8 justify-between xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
							<p className="  text-[20px] font-medium ">Buy Design</p>
							<div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#ccb295] xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
								<svg
									width="28"
									height="27"
									viewBox="0 0 28 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.2719 0.528883C12.6106 0.190239 13.07 0 13.549 0C14.028 0 14.4873 0.190239 14.8261 0.528883L18.9681 4.67091V2.33526C18.9681 2.09572 19.0633 1.86599 19.2326 1.69661C19.402 1.52723 19.6318 1.43207 19.8713 1.43207H21.6777C21.9172 1.43207 22.1469 1.52723 22.3163 1.69661C22.4857 1.86599 22.5809 2.09572 22.5809 2.33526V8.28367L26.8331 12.5341C26.9171 12.618 26.9837 12.7177 27.0291 12.8275C27.0746 12.9372 27.098 13.0548 27.098 13.1735C27.098 13.2923 27.0746 13.4099 27.0291 13.5196C26.9837 13.6293 26.9171 13.729 26.8331 13.813C26.7491 13.897 26.6494 13.9636 26.5397 14.009C26.43 14.0545 26.3124 14.0779 26.1936 14.0779C26.0749 14.0779 25.9573 14.0545 25.8476 14.009C25.7378 13.9636 25.6381 13.897 25.5542 13.813L13.549 1.80599L4.51709 10.8379V22.2054C4.51709 22.445 4.61224 22.6747 4.78162 22.8441C4.95101 23.0135 5.18073 23.1086 5.42028 23.1086H12.6458C12.8853 23.1086 13.1151 23.2038 13.2844 23.3731C13.4538 23.5425 13.549 23.7723 13.549 24.0118C13.549 24.2513 13.4538 24.4811 13.2844 24.6505C13.1151 24.8198 12.8853 24.915 12.6458 24.915H5.42028C4.70165 24.915 4.01246 24.6295 3.50432 24.1214C2.99618 23.6132 2.71071 22.924 2.71071 22.2054V12.6443L1.54379 13.813C1.45981 13.897 1.36012 13.9636 1.2504 14.009C1.14068 14.0545 1.02309 14.0779 0.90433 14.0779C0.785572 14.0779 0.667976 14.0545 0.558258 14.009C0.44854 13.9636 0.348847 13.897 0.264872 13.813C0.180897 13.729 0.114285 13.6293 0.068838 13.5196C0.0233912 13.4099 0 13.2923 0 13.1735C0 13.0548 0.0233912 12.9372 0.068838 12.8275C0.114285 12.7177 0.180897 12.618 0.264872 12.5341L12.2719 0.528883Z"
										fill="white"
									/>
									<path
										d="M19.625 22.125H19.5931C19.4358 22.125 19.285 22.0625 19.1737 21.9513C19.0625 21.84 19 21.6892 19 21.5319C19 21.3661 18.9342 21.2071 18.8169 21.0899C18.6997 20.9727 18.5408 20.9069 18.375 20.9069C18.2092 20.9069 18.0503 20.9727 17.9331 21.0899C17.8158 21.2071 17.75 21.3661 17.75 21.5319C17.75 22.0207 17.9442 22.4895 18.2898 22.8352C18.6355 23.1808 19.1043 23.375 19.5931 23.375H19.625V24C19.625 24.1658 19.6908 24.3247 19.8081 24.4419C19.9253 24.5592 20.0842 24.625 20.25 24.625C20.4158 24.625 20.5747 24.5592 20.6919 24.4419C20.8092 24.3247 20.875 24.1658 20.875 24V23.375C21.3723 23.375 21.8492 23.1775 22.2008 22.8258C22.5525 22.4742 22.75 21.9973 22.75 21.5C22.75 21.0027 22.5525 20.5258 22.2008 20.1742C21.8492 19.8225 21.3723 19.625 20.875 19.625V18.375H20.8888C21.2263 18.375 21.5 18.6488 21.5 18.9863C21.5 19.152 21.5658 19.311 21.6831 19.4282C21.8003 19.5454 21.9592 19.6113 22.125 19.6113C22.2908 19.6113 22.4497 19.5454 22.5669 19.4282C22.6842 19.311 22.75 19.152 22.75 18.9863C22.75 18.4926 22.5539 18.0192 22.2049 17.6701C21.8558 17.3211 21.3824 17.125 20.8888 17.125H20.875V16.5C20.875 16.3342 20.8092 16.1753 20.6919 16.0581C20.5747 15.9408 20.4158 15.875 20.25 15.875C20.0842 15.875 19.9253 15.9408 19.8081 16.0581C19.6908 16.1753 19.625 16.3342 19.625 16.5V17.125C19.3788 17.125 19.135 17.1735 18.9075 17.2677C18.68 17.362 18.4733 17.5001 18.2992 17.6742C18.1251 17.8483 17.987 18.055 17.8927 18.2825C17.7985 18.51 17.75 18.7538 17.75 19C17.75 19.2462 17.7985 19.49 17.8927 19.7175C17.987 19.945 18.1251 20.1517 18.2992 20.3258C18.4733 20.4999 18.68 20.638 18.9075 20.7323C19.135 20.8265 19.3788 20.875 19.625 20.875V22.125ZM20.875 22.125V20.875C21.0408 20.875 21.1997 20.9408 21.3169 21.0581C21.4342 21.1753 21.5 21.3342 21.5 21.5C21.5 21.6658 21.4342 21.8247 21.3169 21.9419C21.1997 22.0592 21.0408 22.125 20.875 22.125ZM19.625 18.375V19.625C19.4592 19.625 19.3003 19.5592 19.1831 19.4419C19.0658 19.3247 19 19.1658 19 19C19 18.8342 19.0658 18.6753 19.1831 18.5581C19.3003 18.4408 19.4592 18.375 19.625 18.375ZM20.25 26.5C16.7981 26.5 14 23.7019 14 20.25C14 16.7981 16.7981 14 20.25 14C23.7019 14 26.5 16.7981 26.5 20.25C26.5 23.7019 23.7019 26.5 20.25 26.5Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
            The Buy Design feature allows you to purchase customised home designs from trusted designers. Search for a design you like, view the details, and buy the design that fits your project
						</p>
					</div>

					<div className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]">
						<div className="mr-2 mt-2 flex  items-center ml-8 justify-between xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
							<p className="  text-[20px] font-medium ">Design Consult</p>
							<div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#ccb295] xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
								<svg
									width="28"
									height="26"
									viewBox="0 0 28 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.74 26L14 25L18 18H24C24.5304 18 25.0391 17.7893 25.4142 17.4142C25.7893 17.0391 26 16.5304 26 16V4C26 3.46957 25.7893 2.96086 25.4142 2.58579C25.0391 2.21071 24.5304 2 24 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H13V20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.421427 18.0783 0 17.0609 0 16V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H24C25.0609 0 26.0783 0.421427 26.8284 1.17157C27.5786 1.92172 28 2.93913 28 4V16C28 17.0609 27.5786 18.0783 26.8284 18.8284C26.0783 19.5786 25.0609 20 24 20H19.16L15.74 26Z"
										fill="white"
									/>
									<path d="M6 6H22V8H6V6ZM6 12H16V14H6V12Z" fill="white" />
								</svg>
							</div>
						</div>
						<p className="px-2 text-[5px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
            The Design Consult feature gives you the opportunity to consult with professional designers. Discuss your ideas, receive expert advice, and start planning your dream home project with confidence
						</p>
					</div>

					<div className=" container h-24 w-24 rounded-md bg-white drop-shadow-landingShado  xl:h-[215px] xl:w-[215px] xl:rounded-3xl 2xl:h-[281px] 2xl:w-[281px]">
						<div className="mr-2 mt-2 flex  items-center ml-8 justify-between xl:mr-4 xl:mt-4 xl:gap-[24px] 2xl:mr-6 2xl:mt-6 2xl:gap-[24px] ">
							<p className="  text-[20px] font-medium ">Build Properties</p>
							<div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#ccb295] xl:h-9 xl:w-9 2xl:h-[44px] 2xl:w-[44px]">
								<svg
									width="28"
									height="27"
									viewBox="0 0 28 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.2719 0.528883C12.6106 0.190239 13.07 0 13.549 0C14.028 0 14.4873 0.190239 14.8261 0.528883L18.9681 4.67091V2.33526C18.9681 2.09572 19.0633 1.86599 19.2326 1.69661C19.402 1.52723 19.6318 1.43207 19.8713 1.43207H21.6777C21.9172 1.43207 22.1469 1.52723 22.3163 1.69661C22.4857 1.86599 22.5809 2.09572 22.5809 2.33526V8.28367L26.8331 12.5341C26.9171 12.618 26.9837 12.7177 27.0291 12.8275C27.0746 12.9372 27.098 13.0548 27.098 13.1735C27.098 13.2923 27.0746 13.4099 27.0291 13.5196C26.9837 13.6293 26.9171 13.729 26.8331 13.813C26.7491 13.897 26.6494 13.9636 26.5397 14.009C26.43 14.0545 26.3124 14.0779 26.1936 14.0779C26.0749 14.0779 25.9573 14.0545 25.8476 14.009C25.7378 13.9636 25.6381 13.897 25.5542 13.813L13.549 1.80599L4.51709 10.8379V22.2054C4.51709 22.445 4.61224 22.6747 4.78162 22.8441C4.95101 23.0135 5.18073 23.1086 5.42028 23.1086H12.6458C12.8853 23.1086 13.1151 23.2038 13.2844 23.3731C13.4538 23.5425 13.549 23.7723 13.549 24.0118C13.549 24.2513 13.4538 24.4811 13.2844 24.6505C13.1151 24.8198 12.8853 24.915 12.6458 24.915H5.42028C4.70165 24.915 4.01246 24.6295 3.50432 24.1214C2.99618 23.6132 2.71071 22.924 2.71071 22.2054V12.6443L1.54379 13.813C1.45981 13.897 1.36012 13.9636 1.2504 14.009C1.14068 14.0545 1.02309 14.0779 0.90433 14.0779C0.785572 14.0779 0.667976 14.0545 0.558258 14.009C0.44854 13.9636 0.348847 13.897 0.264872 13.813C0.180897 13.729 0.114285 13.6293 0.068838 13.5196C0.0233912 13.4099 0 13.2923 0 13.1735C0 13.0548 0.0233912 12.9372 0.068838 12.8275C0.114285 12.7177 0.180897 12.618 0.264872 12.5341L12.2719 0.528883Z"
										fill="white"
									/>
									<path
										d="M21.6773 26.7218C23.3541 26.7218 24.9622 26.0557 26.1479 24.87C27.3335 23.6844 27.9996 22.0763 27.9996 20.3995C27.9996 18.7227 27.3335 17.1146 26.1479 15.9289C24.9622 14.7432 23.3541 14.0771 21.6773 14.0771C20.0005 14.0771 18.3924 14.7432 17.2067 15.9289C16.0211 17.1146 15.355 18.7227 15.355 20.3995C15.355 22.0763 16.0211 23.6844 17.2067 24.87C18.3924 26.0557 20.0005 26.7218 21.6773 26.7218ZM22.3168 16.1473L25.0263 18.8568C25.1959 19.0264 25.2912 19.2564 25.2912 19.4963C25.2912 19.7361 25.1959 19.9661 25.0263 20.1357C24.8567 20.3053 24.6267 20.4006 24.3869 20.4006C24.147 20.4006 23.917 20.3053 23.7474 20.1357L22.5805 18.967V24.0122C22.5805 24.2518 22.4853 24.4815 22.316 24.6509C22.1466 24.8203 21.9168 24.9154 21.6773 24.9154C21.4378 24.9154 21.208 24.8203 21.0387 24.6509C20.8693 24.4815 20.7741 24.2518 20.7741 24.0122V18.967L19.6072 20.1357C19.4378 20.3053 19.208 20.4007 18.9684 20.4009C18.7287 20.401 18.4988 20.306 18.3292 20.1366C18.1596 19.9673 18.0642 19.7375 18.064 19.4978C18.0639 19.2582 18.1589 19.0282 18.3283 18.8586L21.0378 16.1491C21.1217 16.065 21.2214 15.9982 21.3311 15.9527C21.4409 15.9072 21.5585 15.8837 21.6773 15.8837C21.7961 15.8837 21.9137 15.9072 22.0235 15.9527C22.1332 15.9982 22.2329 16.065 22.3168 16.1491V16.1473Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<p className="px-2 text-[7px] xl:mt-1 xl:px-5 xl:text-[10px] 2xl:px-8 2xl:text-[14px]">
            The Build Properties feature lets you explore ready-to-build properties. Find a property that suits you, view the details, and start planning the construction of your dream home
						</p>
					</div>
				</div>

				{/* PEMBATAS 3 */}

				<div className="mt-10 flex flex-col items-center justify-center pb-10">
					<p className="text-[30px] font-medium">
						Start <span className="text-[#B17C3F]">Consult</span> About Dream{" "}
						<span className="text-[#B17C3F]">Property</span>{" "}
					</p>
					<p className="text-[30px] font-medium">
						To The <span className="text-[#B17C3F]">Designers</span>
					</p>
					{/* <div className="w-[820px]">
            <p className="mt-4 text-center text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
				</div>

				<div className=" flex flex-grow flex-row justify-center gap-10 pl-7 pr-7">
					{designerData.slice(0, visibleDesigner).map((designerData, idx) => {
						return (
							<div key={idx} className="">
								<div className="relative flex-auto gap-20">
									<Image
										src={designerData.img}
										alt=""
										height={315}
										width={283}
										className="h-[315px] w-[283px] rounded-3xl object-cover"
									/>
									<div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
										<div className="absolute inset-0 flex justify-between">
											<div className="ml-5 mt-5 flex">
												<p className="text-[1.3rem] font-semibold text-white">
													{designerData.nama}
												</p>
											</div>
										</div>
										<div className="flex items-end">
											<Link
												href={"./designer"}
												className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
											>
												<svg
													width="44"
													height="44"
													viewBox="0 0 44 44"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
														className="fill-white hover:fill-gray-200"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* PEMBATAS 7 */}
		</div>
	);
}
