import Link from "next/link";
import InputBoxForm from "./inpuBoxForm";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import InputPopUp from "./popUpInput";

export default function Footer() {
	const [showSuggest, setShowSuggest] = useState(false);
	const handleOnCloseSuggest = () => setShowSuggest(false);
	return (
		<div>
			<div className="mt-20 bottom-0 w-full">
				<div className="flex flex-col items-center">
					<svg
						className="ml-3"
						width="472"
						height="98"
						viewBox="0 0 472 98"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M471.5 98C371 98 290.766 98 232.5 98C174.234 98 99 98 0.5 98C125 83.5 132.5 5.5 232.5 0C318 5 353 81.5 471.5 98Z"
							fill="url(#paint0_linear_2954_764)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_2954_764"
								x1="236"
								y1="0"
								x2="236"
								y2="512.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="white" />
								<stop offset="1" stop-color="#ECD3B6" stop-opacity="0.36" />
							</linearGradient>
						</defs>
					</svg>

					<div className="absolute mt-10 flex flex-col items-center space-y-1">
						<motion.button
							whileTap={{ scale: 0.87 }}
							// transition={{ duration: 0.1 }}
							onClick={() => setShowSuggest(!showSuggest)}
							className="text-[0.875rem] px-4 border hover:bg-[#f1e7dd] border-gold rounded-full font-light text-gold"
						>
							Suggestion
						</motion.button>
						<p className="text-gold text-[0.6875rem]">
							Your Suggestion Will Improve Us
						</p>
					</div>
				</div>
				<div className="w-full  bg-[#FBF7F1] flex flex-col items-center">
					<Link
						href={"/"}
						className="-mt-1 relative h-[35px] w-[100px] hover:bg-gold/20 rounded-lg"
					>
						<Image
							src={"/assets/logo/logo.png"}
							alt="Picture of the author"
							fill={true}
						/>
					</Link>
					<div className="mt-1 ml-2 flex justify-between w-[20rem] ">
						<Link
							href={"/"}
							className="text-gold font-light text-[1.2rem] hover:bg-gold/20 rounded-lg px-3 py-[0.15rem]"
						>
							Home
						</Link>
						<Link
							href={"/designer"}
							className="text-gold font-light  text-[1.2rem] hover:bg-gold/20 rounded-lg px-3 py-[0.15rem]"
						>
							Build
						</Link>
						<Link
							href={"/design"}
							className="text-gold font-light  text-[1.2rem] hover:bg-gold/20 rounded-lg px-3 py-[0.15rem]"
						>
							Design
						</Link>
					</div>
					<div className="flex space-x-2 mt-2 ">
						<Link
							href={"#"}
							className="p-1 flex items-center justify-center hover:bg-gold/20 rounded-md"
						>
							<svg
								width="19"
								height="15"
								viewBox="0 0 19 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.934 0.107422H1.88155C0.846699 0.107422 0.00940776 0.916767 0.00940776 1.90597L0 12.6972C0 13.6864 0.846699 14.4958 1.88155 14.4958H16.934C17.9688 14.4958 18.8155 13.6864 18.8155 12.6972V1.90597C18.8155 0.916767 17.9688 0.107422 16.934 0.107422ZM16.934 3.70451L9.40777 8.20087L1.88155 3.70451V1.90597L9.40777 6.40232L16.934 1.90597V3.70451Z"
									fill="#B17C3F"
								/>
							</svg>
						</Link>
						<Link
							href={"#"}
							className="p-1 items-center justify-center hover:bg-gold/20 rounded-md"
						>
							<svg
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.35821 0.00102131C9.96393 -0.00130306 10.5696 0.00478476 11.1752 0.0192829L11.3362 0.0250933C11.5222 0.0317339 11.7056 0.0400346 11.9272 0.0499954C12.8104 0.0914988 13.413 0.230951 13.9418 0.435978C14.4896 0.646815 14.9511 0.932358 15.4126 1.39388C15.8346 1.80858 16.1612 2.31023 16.3697 2.86393C16.5747 3.39268 16.7142 3.99614 16.7557 4.87934C16.7656 5.10013 16.7739 5.28441 16.7806 5.47034L16.7855 5.63138C16.8003 6.23666 16.8066 6.84211 16.8046 7.44757L16.8055 8.0668V9.15419C16.8075 9.75992 16.8011 10.3657 16.7864 10.9712L16.7814 11.1322C16.7747 11.3182 16.7664 11.5016 16.7565 11.7233C16.715 12.6064 16.5739 13.2091 16.3697 13.7378C16.1619 14.2921 15.8352 14.7942 15.4126 15.2087C14.9976 15.6307 14.4957 15.9572 13.9418 16.1658C13.413 16.3708 12.8104 16.5103 11.9272 16.5518C11.7056 16.5617 11.5222 16.57 11.3362 16.5767L11.1752 16.5816C10.5697 16.5964 9.96393 16.6028 9.35821 16.6007L8.73899 16.6016H7.65245C7.04672 16.6036 6.441 16.5972 5.83546 16.5825L5.67443 16.5775C5.47738 16.5704 5.28038 16.5621 5.08343 16.5526C4.20025 16.5111 3.59763 16.37 3.06805 16.1658C2.51415 15.9577 2.01242 15.6311 1.59803 15.2087C1.17557 14.7939 0.848675 14.292 0.640146 13.7378C0.435122 13.2091 0.295673 12.6064 0.25417 11.7233C0.244926 11.5263 0.236625 11.3293 0.229268 11.1322L0.225118 10.9712C0.209815 10.3657 0.202897 9.75993 0.204367 9.15419V7.44757C0.20205 6.84212 0.208138 6.23666 0.222628 5.63138L0.228438 5.47034C0.235079 5.28441 0.243379 5.10013 0.25334 4.87934C0.294843 3.99531 0.434292 3.39351 0.639315 2.86393C0.847968 2.30996 1.1755 1.80845 1.59886 1.39471C2.01297 0.971996 2.51438 0.6448 3.06805 0.435978C3.59763 0.230951 4.19942 0.0914988 5.08343 0.0499954L5.67443 0.0250933L5.83546 0.0209431C6.44072 0.00564727 7.04616 -0.00127071 7.65162 0.000191304L9.35821 0.00102131ZM8.50491 4.15137C7.95501 4.14359 7.40904 4.24518 6.89874 4.45025C6.38844 4.65531 5.92398 4.95975 5.53236 5.34588C5.14074 5.73201 4.82976 6.19212 4.61751 6.69948C4.40525 7.20684 4.29595 7.75132 4.29595 8.30129C4.29595 8.85126 4.40525 9.39575 4.61751 9.90311C4.82976 10.4105 5.14074 10.8706 5.53236 11.2567C5.92398 11.6428 6.38844 11.9473 6.89874 12.1523C7.40904 12.3574 7.95501 12.459 8.50491 12.4512C9.60563 12.4512 10.6613 12.014 11.4396 11.2356C12.2179 10.4573 12.6552 9.40162 12.6552 8.30088C12.6552 7.20014 12.2179 6.14448 11.4396 5.36614C10.6613 4.5878 9.60563 4.15137 8.50491 4.15137ZM8.50491 5.8115C8.83569 5.80541 9.16438 5.86529 9.47176 5.98765C9.77914 6.11001 10.0591 6.2924 10.2952 6.52415C10.5313 6.75591 10.7188 7.0324 10.8469 7.33745C10.9749 7.64251 11.0409 7.97003 11.041 8.30087C11.041 8.63172 10.9751 8.95925 10.8472 9.26436C10.7192 9.56946 10.5318 9.846 10.2957 10.0778C10.0597 10.3097 9.77987 10.4922 9.47253 10.6146C9.16519 10.7371 8.83653 10.7971 8.50574 10.7911C7.84531 10.7911 7.21193 10.5287 6.74493 10.0617C6.27793 9.59472 6.01558 8.96132 6.01558 8.30088C6.01558 7.64044 6.27793 7.00704 6.74493 6.54004C7.21193 6.07303 7.84531 5.81067 8.50574 5.81067L8.50491 5.8115ZM12.8627 2.90626C12.5949 2.91698 12.3417 3.0309 12.156 3.22415C11.9703 3.41741 11.8666 3.67502 11.8666 3.94302C11.8666 4.21102 11.9703 4.46862 12.156 4.66188C12.3417 4.85514 12.5949 4.96906 12.8627 4.97977C13.1379 4.97977 13.4018 4.87046 13.5964 4.67587C13.791 4.48129 13.9003 4.21737 13.9003 3.94219C13.9003 3.667 13.791 3.40309 13.5964 3.2085C13.4018 3.01392 13.1379 2.9046 12.8627 2.9046V2.90626Z"
									fill="#B17C3F"
								/>
							</svg>
						</Link>
						<Link
							href={"#"}
							className="p-1 items-center justify-center hover:bg-gold/20 rounded-md"
						>
							<svg
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.7961 8.32178C16.7961 3.72816 13.0773 0 8.49515 0C3.91302 0 0.194183 3.72816 0.194183 8.32178C0.194183 12.3495 3.04972 15.7032 6.83496 16.4771V10.8183H5.17477V8.32178H6.83496V6.24133C6.83496 4.63523 8.13821 3.32871 9.7403 3.32871H11.8155V5.82524H10.1553C9.69879 5.82524 9.32525 6.19972 9.32525 6.65742V8.32178H11.8155V10.8183H9.32525V16.6019C13.5172 16.1859 16.7961 12.6408 16.7961 8.32178Z"
									fill="#B17C3F"
								/>
							</svg>
						</Link>
						<Link
							href={"#"}
							className="p-1 items-center justify-center hover:bg-gold/20 rounded-md"
						>
							<svg
								width="19"
								height="15"
								viewBox="0 0 19 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 1.80017C18.3074 2.0964 17.5609 2.29107 16.7874 2.38417C17.5789 1.93559 18.1905 1.22463 18.4783 0.369798C17.7318 0.792984 16.9044 1.08922 16.0319 1.25849C15.3214 0.530609 14.3231 0.107422 13.1898 0.107422C11.0762 0.107422 9.34938 1.73246 9.34938 3.73836C9.34938 4.02613 9.38535 4.30543 9.44831 4.56781C6.24643 4.41546 3.39532 2.96816 1.49758 0.776057C1.1648 1.30927 0.975924 1.93559 0.975924 2.59576C0.975924 3.85686 1.65048 4.97407 2.69379 5.60885C2.05521 5.60885 1.4616 5.43957 0.939948 5.18566V5.21105C0.939948 6.97151 2.27107 8.4442 4.0339 8.77429C3.46793 8.92004 2.87375 8.94032 2.29805 8.83353C2.54233 9.55505 3.02075 10.1864 3.66606 10.6388C4.31136 11.0912 5.0911 11.3419 5.89566 11.3557C4.53183 12.3717 2.84128 12.9209 1.10184 12.9131C0.796043 12.9131 0.490246 12.8961 0.184448 12.8623C1.89332 13.8948 3.92597 14.4958 6.10253 14.4958C13.1898 14.4958 17.0843 8.96049 17.0843 4.16155C17.0843 4.00074 17.0843 3.84839 17.0753 3.68758C17.8308 3.17976 18.4783 2.53651 19 1.80017Z"
									fill="#B17C3F"
								/>
							</svg>
						</Link>
					</div>
					<div className="w-full border-gold/20 flex justify-center py-2 mt-2 border-t">
						<p className="text-[0.8125rem] text-gold font-medium ">
							Copyrighted © 2023 by La Favela
						</p>
					</div>
				</div>
			</div>
			<Suggest
				visible={showSuggest}
				onClose={handleOnCloseSuggest}
				setShowSuggest={setShowSuggest}
			/>
		</div>
	);
}

interface SuggestionProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowSuggest: (value: boolean) => void;
}
export function Suggest(props: SuggestionProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const handleChangeTitle = (event: any) => {
		setTitle(event.target.value);
	};
	const handleChangeDescription = (event: any) => {
		setDescription(event.target.value);
	};
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowSuggest(false);
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	return (
		<div>
			{props.visible && (
				<div className="fixed top-0 bg-black/10 left-0 flex justify-center w-screen  h-screen items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.85 }}
						animate={{ opacity: 1, scale: 1 }}
						ref={wrapperRef}
						className="absolute  bg-white/95 rounded-[1.5625rem] pb-6 w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
					>
						<div className="h-[3.3125rem] flex items-center border-b">
							<p className="text-[1.0625rem] ml-6">Suggestion</p>
						</div>
						<div className="flex w-full justify-center">
							<form className="mt-2 w-[90%]">
								<p className="text-[0.625rem] text-gold">Tittle</p>
								<InputPopUp
									isWmax
									required
									type="text"
									value={title}
									onChange={handleChangeTitle}
									className="bg-transparent "
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
										}
									}}
								></InputPopUp>

								<p className="mt-2 text-[0.625rem] text-gold ">Description</p>
								<textarea
									form="biodata-Form"
									id="description"
									placeholder=""
									value={description}
									onChange={handleChangeDescription}
									className=" mt-1 block h-[95px] w-full rounded-md border border-[#B17C3F] bg-transparent px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
									maxLength={500}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
										}
									}}
								></textarea>

								<div className="mt-4 flex w-full justify-end ">
									<button
										type="submit"
										onClick={() => {
											// handleCheck();
										}}
										className="my-3  rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
}
