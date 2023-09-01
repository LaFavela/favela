import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBox from "@/components/inpuBox";
import InputPopUp from "@/components/popUpInput";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "@/components/dropdwon";
import InputBoxForm from "@/components/inpuBoxForm";
import Rating from "@mui/material/Rating";
import { properti } from "./designProduct";

export default function SellDesignForm() {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleImageClick = () => {
		inputRef.current?.click();
	};

	const inputRef2 = useRef<HTMLInputElement>(null);
	const handleImageClick2 = () => {
		inputRef2.current?.click();
	};

	const [design, setDesign] = useState<
		{
			province: string;
			city: string;
			landSize: number;
			landShape: number;
			LandImage: string[];
			budget: number;
			propertyType: string;
			style: string;
			ReferenceImage: string[];
			facilities: { facilitiesName: string; amount: number }[];
			sunOrientation: string;
			windOrientation: string;
			additionalInformation: string;
			deadline: string;
		}[]
	>([]);

	const [facilities, setFacilities] = useState<
		{ facilitiesName: string; amount: number }[]
	>([{ facilitiesName: "", amount: 0 }]);
	const [facilitiesName, setFacilitiesName] = useState("");
	const [amount, setAmount] = useState(0);
	console.log(design);
	// console.log(facilities);

	const handleFacilitiesNamesChange = (index: number, newValue: string) => {
		const updatedFacilities = [...facilities];
		updatedFacilities[index].facilitiesName = newValue;
		setFacilities(updatedFacilities);
	};

	const handleAmountChange = (index: number, newValue: number) => {
		const updatedFacilities = [...facilities];
		updatedFacilities[index].amount = newValue;
		setFacilities(updatedFacilities);
	};

	const handleIncrement = (index: number) => {
		const updatedFacilities = [...facilities];
		updatedFacilities[index].amount += 1;
		setFacilities(updatedFacilities);
	};

	const handleDecrement = (index: number) => {
		const updatedFacilities = [...facilities];
		if (updatedFacilities[index].amount > 0) {
			updatedFacilities[index].amount -= 1;
			setFacilities(updatedFacilities);
		}
	};

	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [landSize, setLandSize] = useState(0);
	const [landShape, setLandShape] = useState(0);
	const [budget, setBudget] = useState(0);
	const [propertyType, setPropertyType] = useState("");
	const [style, setStyle] = useState("");
	const [sunOrientation, setSunOrientation] = useState("");
	const [windOrientation, setWindOrientation] = useState("");
	const [additionalInformation, setAdditionalInformation] = useState("");
	const [deadline, setDeadline] = useState("");
	const [LandImage, setLandImage] = useState<string[]>([]);
	const [ReferenceImage, setReferenceImage] = useState<string[]>([]);

	const [others, setOthers] = useState<string[]>([""]);

	const handleChangeProvince = (event: any) => {
		setProvince(event);
	};
	const handleChangeCity = (event: any) => {
		setCity(event);
	};
	const handleChangeLandSize = (event: any) => {
		setLandSize(event.target.value);
	};
	const handleChangeLandShape = (event: any) => {
		setLandShape(event.target.value);
	};
	const handleChangeBudget = (event: any) => {
		setBudget(event.target.value);
	};
	const handleChangePropertyType = (event: any) => {
		setPropertyType(event);
	};
	const handleChangeStyle = (event: any) => {
		setStyle(event.target.value);
	};
	const handleChangeSunOrientation = (event: any) => {
		setSunOrientation(event.target.value);
	};
	const handleChangeWindOrientation = (event: any) => {
		setWindOrientation(event.target.value);
	};
	const handleAdditionalInformation = (event: any) => {
		setAdditionalInformation(event.target.value);
	};
	const handleChangeDeadline = (event: any) => {
		setDeadline(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const mappedFacilities = facilities.map((item) => ({
			facilitiesName: item.facilitiesName,
			amount: item.amount,
		}));
		const newDesign = {
			province,
			city,
			landSize,
			landShape,
			LandImage: [...LandImage],
			budget,
			propertyType,
			style,
			ReferenceImage: [...ReferenceImage],
			facilities: mappedFacilities,
			sunOrientation,
			windOrientation,
			additionalInformation,
			deadline,
		};

		setDesign([...design, newDesign]);

		setProvince("");
		setCity("");
		setLandSize(0);
		setLandShape(0);
		setLandImage([]);
		setBudget(0);
		setPropertyType("");
		setStyle("");
		setReferenceImage([]);
		setFacilities([]);
		setSunOrientation("");
		setWindOrientation("");
		setDeadline("");
	};

	const handleAddFacilities = () => {
		setFacilities([
			...facilities,
			{ facilitiesName: facilitiesName, amount: amount },
		]);
		setFacilitiesName(""); // Reset the facilitiesName state
		setAmount(0); // Reset the amount state
	};

	const handleDeleteFacilities = (index: number) => {
		const updatedFacilities = facilities.filter((_, i) => i !== index);
		setFacilities(updatedFacilities);
	};

	const handleReferenceImageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const files2 = event.target.files;
		if (files2) {
			const newImages: string[] = [];
			for (let i = 0; i < files2.length; i++) {
				if (newImages.length < 5) {
					newImages.push(URL.createObjectURL(files2[i]));
				}
			}
			setReferenceImage((prevImages) => [...prevImages, ...newImages]);
		}
	};

	const handleReferenceImageDelete = (index: number) => {
		const updatedImages = [...ReferenceImage];
		updatedImages.splice(index, 1);
		setReferenceImage(updatedImages);
	};

	const handleLandImageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const files = event.target.files;
		if (files) {
			const newImages: string[] = [];
			for (let i = 0; i < files.length; i++) {
				if (newImages.length < 5) {
					newImages.push(URL.createObjectURL(files[i]));
				}
			}
			setLandImage((prevImages) => [...prevImages, ...newImages]);
		}
	};
	const handleImageDelete = (index: number) => {
		const updatedImages = [...LandImage];
		updatedImages.splice(index, 1);
		setLandImage(updatedImages);
	};

	const [isActive, setIsActive] = useState(false);
	const handleActiveOutline = () => {
		setIsActive(!isActive);
	};

	const handleOutside = () => {
		setIsActive(true);
	};

	return (
		<div>
			<div>
				<div className="container relative mx-auto mt-20 flex h-10 max-w-[1320px] justify-between">
					<div className=" container relative max-w-[884px] ">
						<form onSubmit={handleSubmit}>
							<p className="text-[20px] font-medium ml-1">Request Desain</p>
							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										General Information
									</p>
									<Dropdown
										form="ReqDesainForm"
										styleClass="text-gold flex gap-[120px] mt-2 w-full pr-7"
										styleClassTag="border-2 border-gold rounded-[7px] w-full"
										title="Province"
										data={[
											{ value: "Lombok Timur", label: "Lombok Timur" },
											{ value: "Mataram", label: "Mataram" },
											{ value: "Bima", label: "Bima" },
											{ value: "Dompu", label: "Dompu" },
											{ value: "Sumbawa", label: "Sumbawa" },
										]}
										value={province}
										placehoder="Select Province"
										onChange={handleChangeProvince}
									></Dropdown>
									<Dropdown
										form="ReqDesainForm"
										styleClass="text-gold flex gap-[157px] mt-2 w-full pr-7"
										styleClassTag="border-2 border-gold rounded-[7px] w-full"
										title="City"
										data={[
											{ value: "Lombok Timur", label: "Lombok Timur" },
											{ value: "Mataram", label: "Mataram" },
											{ value: "Bima", label: "Bima" },
											{ value: "Dompu", label: "Dompu" },
											{ value: "Sumbawa", label: "Sumbawa" },
										]}
										value={city}
										placehoder="Select City"
										onChange={handleChangeCity}
									></Dropdown>

									<InputBoxForm
										form="designForm"
										type="text"
										title="Land Size"
										value={landSize}
										// placeholder="Design Name"
										onChange={handleChangeLandSize}
									></InputBoxForm>
									<InputBoxForm
										form="designForm"
										type="text"
										title="Land Shape"
										value={landShape}
										// placeholder="Design Name"
										onChange={handleChangeLandShape}
									></InputBoxForm>

									<div className="mt-5 flex ">
										<p className="text-gold">Preview Picture</p>
										<div className="flex gap-3">
											<div
												className="ml-[66px] gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												onClick={handleImageClick}
											>
												{LandImage.length > 0
													? LandImage.map((imageUrl, index) => (
															<div key={index} className="flex relative group">
																<div>
																	<Image
																		src={imageUrl}
																		alt={`Selected Image ${index + 1}`}
																		style={{
																			maxWidth: "120px",
																			maxHeight: "100px",
																			width: "100%",
																			height: "100%",
																		}}
																		width={120}
																		height={100}
																	/>
																	<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
																		<CloseIcon
																			className="text-white absolute top-2 right-2 cursor-pointer"
																			onClick={() => handleImageDelete(index)}
																		/>
																	</div>
																</div>
															</div>
													  ))
													: ""}
												{LandImage.length < 5 ? (
													<label
														htmlFor="image-input"
														className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
													>
														<input
															id="image-input"
															type="file"
															// ref={inputRef}
															onChange={handleLandImageChange}
															multiple
															accept="image/*"
															className="hidden"
														/>
														<svg
															width="44"
															height="44"
															viewBox="0 0 44 44"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M40.5 23.445V38.6117C40.5 39.7609 40.0435 40.8631 39.2308 41.6758C38.4181 42.4884 37.3159 42.945 36.1667 42.945H29.6667M40.5 23.445C26.5423 23.445 18.6058 27.7458 14.3808 32.6382M40.5 23.445V20.195M29.6667 42.945H5.83333C4.68406 42.945 3.58186 42.4884 2.7692 41.6758C1.95655 40.8631 1.5 39.7609 1.5 38.6117V32.1117M29.6667 42.945C25.9747 36.9477 20.0748 33.9577 14.3808 32.6382M14.3808 32.6382C9.38017 31.4768 4.53983 31.6047 1.5 32.1117M1.5 32.1117V8.27832C1.5 7.12905 1.95655 6.02685 2.7692 5.21419C3.58186 4.40153 4.68406 3.94499 5.83333 3.94499H23.1667M36.1667 1.77832V8.27832M36.1667 8.27832V14.7783M36.1667 8.27832H42.6667M36.1667 8.27832H29.6667M13.4167 12.6117C12.3333 12.6117 10.1667 13.2617 10.1667 15.8617C10.1667 18.4617 12.3333 19.1117 13.4167 19.1117C14.5 19.1117 16.6667 18.4617 16.6667 15.8617C16.6667 13.2617 14.5 12.6117 13.4167 12.6117Z"
																// stroke="#B17C3F"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
													</label>
												) : (
													<input
														id="image-input"
														type="file"
														// ref={inputRef}
														onChange={handleLandImageChange}
														multiple
														accept="image/*"
														className="hidden"
													/>
												)}
											</div>
										</div>
									</div>
									<div>
										<span
											className="flex mt-5  pr-14 justify-between"
											onClick={handleActiveOutline}
										>
											<p className="w-[245px] text-gold">Budget</p>
											{isActive ? (
												<span className="flex h-[29px] w-full rounded-[7px] border-2 outline-2 border-gold pl-2 text-gold ">
													<p className="">Rp. </p>
													<input
														// value={sellingPrice}
														onClick={handleActiveOutline}
														onChange={handleChangeBudget}
														value={budget}
														type="text"
														className="pl-2 w-full rounded-[7px] focus:outline-none"
													/>
												</span>
											) : (
												<span className="flex h-[29px] w-full rounded-[7px] border-[3px] border-gold pl-2 text-gold focus-within:border-gold focus-within:ring-gold focus-within:outline-gold">
													<p className="">Rp. </p>
													<input
														// value={sellingPrice}
														onClick={handleActiveOutline}
														onChange={handleChangeBudget}
														value={budget}
														type="text"
														className="pl-2 w-full rounded-[7px] focus:outline-none"
													/>
												</span>
											)}
										</span>
									</div>
								</div>
							</div>

							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										Architectural Style
									</p>
									<div className=" flex container max-w-[775px] border-gold/50 border-2 rounded-[7px] mt-7">
										<div className="ml-5 py-4">
											<Image
												src={properti[0].img}
												alt=""
												width={97}
												height={78}
												className="rounded-[9px]"
											></Image>
										</div>
										<div className="py-[26px] ml-5 ">
											<p>{properti[0].name}</p>
											<p>{properti[0].type}</p>
											<span className="text-[11px]">
												<Rating
													className="gap-[2px]"
													name="half-rating"
													defaultValue={3}
													precision={0.5}
													icon={
														<svg
															width="10"
															height="10"
															viewBox="0 0 10 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M4.99967 9.16732C4.42329 9.16732 3.88162 9.05787 3.37467 8.83898C2.86773 8.6201 2.42676 8.32329 2.05176 7.94857C1.67676 7.57357 1.37995 7.1326 1.16134 6.62565C0.94273 6.11871 0.833286 5.57704 0.833008 5.00065C0.833008 4.42426 0.942452 3.8826 1.16134 3.37565C1.38023 2.86871 1.67704 2.42773 2.05176 2.05273C2.42676 1.67773 2.86773 1.38093 3.37467 1.16232C3.88162 0.943707 4.42329 0.834262 4.99967 0.833984C5.57606 0.833984 6.11773 0.943429 6.62467 1.16232C7.13162 1.38121 7.57259 1.67801 7.94759 2.05273C8.32259 2.42773 8.61953 2.86871 8.83842 3.37565C9.05731 3.8826 9.16662 4.42426 9.16634 5.00065C9.16634 5.57704 9.0569 6.11871 8.83801 6.62565C8.61912 7.1326 8.32231 7.57357 7.94759 7.94857C7.57259 8.32357 7.13162 8.62051 6.62467 8.8394C6.11773 9.05829 5.57606 9.1676 4.99967 9.16732Z"
																fill="black"
															/>
														</svg>
													}
													emptyIcon={
														<svg
															width="10"
															height="10"
															viewBox="0 0 10 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M4.99967 9.16732C4.42329 9.16732 3.88162 9.05787 3.37467 8.83898C2.86773 8.6201 2.42676 8.32329 2.05176 7.94857C1.67676 7.57357 1.37995 7.1326 1.16134 6.62565C0.94273 6.11871 0.833286 5.57704 0.833008 5.00065C0.833008 4.42426 0.942452 3.8826 1.16134 3.37565C1.38023 2.86871 1.67704 2.42773 2.05176 2.05273C2.42676 1.67773 2.86773 1.38093 3.37467 1.16232C3.88162 0.943707 4.42329 0.834262 4.99967 0.833984C5.57606 0.833984 6.11773 0.943429 6.62467 1.16232C7.13162 1.38121 7.57259 1.67801 7.94759 2.05273C8.32259 2.42773 8.61953 2.86871 8.83842 3.37565C9.05731 3.8826 9.16662 4.42426 9.16634 5.00065C9.16634 5.57704 9.0569 6.11871 8.83801 6.62565C8.61912 7.1326 8.32231 7.57357 7.94759 7.94857C7.57259 8.32357 7.13162 8.62051 6.62467 8.8394C6.11773 9.05829 5.57606 9.16759 4.99967 9.16732Z"
																fill="#BEB8B8"
															/>
														</svg>
													}
													readOnly
												/>
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										Room Layout
									</p>
									{facilities.map((item, index) => (
										<div key={index}>
											<div className="flex pr-14 mt-5 ">
												<label className="flex gap-[125px] w-[550px]">
													<p className="text-gold">Facilities</p>
													<input
														value={item.facilitiesName}
														type="text"
														onChange={(event: any) =>
															handleFacilitiesNamesChange(
																index,
																event.target.value,
															)
														}
														className=" bg-white w-full text-[15px] py-[1px] rounded-[7px] border-2 border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
													/>
												</label>
												<div className="flex ml-10 ">
													<p className="text-gold">Amount</p>
													<div className="ml-10 flex rounded-[7px] border-gold border-2 ">
														<button
															type="button"
															onClick={() => handleDecrement(index)}
															className="bg-gold rounded-l-[4px] text-white px-2"
														>
															-
														</button>

														<div className="flex">
															<input
																type="number"
																name="Architectural-Style"
																value={item.amount}
																onChange={(event: any) =>
																	handleAmountChange(
																		index,
																		parseInt(event.target.value),
																	)
																}
																className=" bg-white w-[30px] text-[15px] py-[1px] rounded-[7px] text-center text-gold outline-none"
															/>
														</div>

														<button
															type="button"
															onClick={() => handleIncrement(index)}
															className="bg-gold rounded-r-[4px] text-white px-2"
														>
															+
														</button>
													</div>
												</div>
											</div>
											<div className="my-1 pr-1 flex  text-gold text-[11px]">
												{facilities.length > index + 1 ? (
													<div className="w-full flex justify-end pr-[284px]">
														<button
															type="button"
															onClick={() => handleDeleteFacilities(index)}
														>
															Delete
														</button>
													</div>
												) : (
													<button
														type="button"
														onClick={handleAddFacilities}
														className="pl-[194px]"
													>
														+ Add Facilities
													</button>
												)}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">Ambient</p>
									<InputBoxForm
										className=""
										form="designForm"
										type="text"
										title="Sun Orientation "
										value={sunOrientation}
										// placeholder="Design Name"
										onChange={handleChangeSunOrientation}
									></InputBoxForm>
									<InputBoxForm
										className=""
										form="designForm"
										type="text"
										title="Wind Orientation "
										value={windOrientation}
										// placeholder="Design Name"
										onChange={handleChangeWindOrientation}
									></InputBoxForm>
									<label className="mt-4 flex gap-[11px] pr-14">
										<span className="mt-3 w-[235px] text-base  text-[#B17C3F] ">
											More Information
										</span>
										<textarea
											form="biodata-Form"
											id="FeatureDescription"
											value={additionalInformation}
											onChange={handleAdditionalInformation}
											className=" mt-1 block h-[123px] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
								</div>
							</div>

							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										Timeline
									</p>
									<InputBoxForm
										className=""
										form="designForm"
										type="date"
										title="Deadline "
										value={deadline}
										// placeholder="Design Name"
										onChange={handleChangeDeadline}
									></InputBoxForm>
								</div>
							</div>
							<Link href={"./merchantProfile"}>
								<div className="pb-20 justify-end w-full flex">
									<button
										type="submit"
										className="bg-gold rounded-full py-3 px-7 text-white text-[15px] hover:bg-goldhov "
									>
										Save
									</button>
								</div>
							</Link>
						</form>
					</div>

					<div className="container max-w-[400px]">
						<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-14">
							<div className="px-7 py-6">
								<p className="text-[17px] font-medium">Lorem Ipsum</p>
								<p className="text-[15px]">
									Morbi lobortis aliquet nisl. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Pellentesque maximus felis id
									varius imperdiet. Donec condimentum bibendum tempus. Proin ac
									massa non felis ultricies varius eget ut est. Aliquam
									scelerisque velit in lorem pellentesque, a vulputate dolor
									accumsan. Nulla tortor ipsum, placerat eget risus ut, sagittis
									tincidunt lectus. Donec in dui erat. Duis eu risus tristique,
									rhoncus erat et, iaculis elit. Mauris id suscipit libero, id
									fringilla nisi. Duis a vestibulum est.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
