import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBox from "@/components/inpuBox";
import InputPopUp from "@/components/popUpInput";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "@/components/dropdwon";
import InputBoxForm from "@/components/inpuBoxForm";
import { supabase } from "@/lib/supabase";
import { v4 } from "uuid";
import { set } from "react-hook-form";

export default function SellDesignForm() {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleImageClick = () => {
		inputRef.current?.click();
	};

	const inputRef2 = useRef<HTMLInputElement>(null);
	const handleImageClick2 = () => {
		inputRef2.current?.click();
	};

	const [provinsiData, setProvinsiData] = useState<Dropdown[]>([]);
	const [kotaData, setKotaData] = useState<Dropdown[]>([]);
	const [propertyTypeData, setPropertyTypeData] = useState<Dropdown[]>([]);

	useEffect(() => {
		const init = async () => {
			const { data: provinsi } = await supabase.from("provinsi").select("*");
			let provinsiData: Dropdown[] = [];
			provinsi?.forEach((item) => {
				provinsiData.push({
					value: item.id,
					label: item.provinsi,
				});
			});
			setProvinsiData(provinsiData);

			const { data: property_type } = await supabase
				.from("property_type")
				.select("*");
			let propertyTypeData: Dropdown[] = [];
			property_type?.forEach((item) => {
				propertyTypeData.push({
					value: item.id,
					label: item.type_name as string,
				});
			});
			setPropertyTypeData(propertyTypeData);
		};
		init();
	}, []);

	const [design, setDesign] = useState<
		{
			province: number;
			city: number;
			landSize: number;
			landShape: number;
			LandImage: string[];
			budget: number;
			propertyType: number;
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

	const [province, setProvince] = useState<number>(NaN);
	const [city, setCity] = useState<number>(NaN);
	const [landSize, setLandSize] = useState(0);
	const [landShape, setLandShape] = useState(0);
	const [budget, setBudget] = useState(0);
	const [propertyType, setPropertyType] = useState<number>(NaN);
	const [style, setStyle] = useState("");
	const [sunOrientation, setSunOrientation] = useState("");
	const [windOrientation, setWindOrientation] = useState("");
	const [additionalInformation, setAdditionalInformation] = useState("");
	const [deadline, setDeadline] = useState("");
	const [LandImage, setLandImage] = useState<string[]>([]);
	const [ReferenceImage, setReferenceImage] = useState<string[]>([]);

	const [others, setOthers] = useState<string[]>([""]);

	const handleChangeProvince = async (event: any) => {
		setProvince(event);
		const { data: kota } = await supabase
			.from("kabupaten_kota")
			.select("*")
			.eq("id_provinsi", event);
		let temp: Dropdown[] = [];
		kota?.forEach((item) => {
			temp.push({
				value: item.id,
				label: item.kabupaten as string,
			});
		});
		setKotaData(temp);
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

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const uuid = v4();
		const landData: string[] = [];
		const awaitLand = await Promise.all(
			LandImage.map(async (item) => {
				const fileUuid = v4();
				let blob = await fetch(item).then((r) => r.blob());
				const { data: preview, error } = await supabase.storage
					.from("request_design")
					.upload(`${uuid}/land/${fileUuid}`, blob);
				const { publicUrl } = supabase.storage
					.from("request_design")
					.getPublicUrl(`${uuid}/land/${fileUuid}`).data;
				landData.push(publicUrl);
			}),
		).then(() => {
			setLandImage(landData);
		});

		const referenceData: string[] = [];
		const awaitReference = await Promise.all(
			ReferenceImage.map(async (item) => {
				const fileUuid = v4();
				let blob = await fetch(item).then((r) => r.blob());
				const { data: preview, error } = await supabase.storage
					.from("request_design")
					.upload(`${uuid}/reference/${fileUuid}`, blob);
				const { publicUrl } = supabase.storage
					.from("request_design")
					.getPublicUrl(`${uuid}/reference/${fileUuid}`).data;
				referenceData.push(publicUrl);
				console.log(preview, error);
			}),
		).then(() => {
			setReferenceImage(referenceData);
		});

		console.log(ReferenceImage);

		const { data: request } = await supabase
			.from("request_form")
			.insert([
				{
					budget: budget,
					land_size: landSize,
					city: city,
					deadline: deadline,
					land_image: LandImage,
					information: additionalInformation,
					property_type: propertyType,
					province: province,
					reference_image: ReferenceImage,
					style: style,
					sun_orientation: sunOrientation,
					wind_orientation: windOrientation,
				},
			])
			.select()
			.single();

		const mappedFacilities = await Promise.all(
			facilities.map(async (item) => {
				const { data: facilities } = await supabase
					.from("facilities_form_request")
					.insert([
						{
							name: item.facilitiesName,
							amount: item.amount,
							form_id: request?.id,
						},
					])
					.select();
			}),
		);
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
										data={provinsiData}
										value={province}
										placehoder="Select Province"
										onChange={handleChangeProvince}
									></Dropdown>
									<Dropdown
										form="ReqDesainForm"
										styleClass="text-gold flex gap-[157px] mt-2 w-full pr-7"
										styleClassTag="border-2 border-gold rounded-[7px] w-full"
										title="City"
										data={kotaData}
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
									<Dropdown
										styleClass="text-gold flex gap-[42px] mt-2 w-full pr-7"
										styleClassTag="border-2 border-gold rounded-[7px] w-full"
										styleText="w-[193px]"
										title="Property Type"
										data={propertyTypeData}
										value={propertyType}
										placehoder="Select Property Type"
										onChange={handleChangePropertyType}
									></Dropdown>
									<InputBoxForm
										className=""
										form="designForm"
										type="text"
										title="Style "
										value={style}
										// placeholder="Design Name"
										onChange={handleChangeStyle}
									></InputBoxForm>

									<div className="mt-5 flex ">
										<p className="text-gold">References</p>
										<div className="flex gap-3">
											<div
												className="ml-[98px] gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												onClick={handleImageClick2}
											>
												{ReferenceImage.length > 0
													? ReferenceImage.map((imageUrl, index) => (
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
																			onClick={() =>
																				handleReferenceImageDelete(index)
																			}
																		/>
																	</div>
																</div>
															</div>
													  ))
													: ""}
												{ReferenceImage.length < 5 ? (
													<label
														htmlFor="references-input"
														className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
													>
														<input
															id="references-input"
															type="file"
															// ref={inputRef}
															onChange={handleReferenceImageChange}
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
														id="references-input"
														type="file"
														// ref={inputRef}
														onChange={handleReferenceImageChange}
														multiple
														accept="image/*"
														className="hidden"
													/>
												)}
											</div>
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
														className="pl-[182px]"
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
							{/* <Link href={"./merchantProfile"}> */}
							<div className="pb-20 justify-end w-full flex">
								<button
									type="submit"
									className="bg-gold rounded-full py-3 px-7 text-white text-[15px] hover:bg-goldhov "
								>
									Save
								</button>
							</div>
							{/* </Link> */}
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

interface Dropdown {
	value: number;
	label: string;
}
