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
			designName: string;
			designDescription: string;
			previewImage: string[];
			sellingPrice: number;
			propertyType: number;
			propertyStyle: number;
			featureDescription: string;
			floorPlanImage: string[];
			bedRoomsTotal: number;
			bathRoomsTotal: number;
			propertySize: number;
			others: string[];
		}[]
	>([]);

	const [designName, setDesignName] = useState("");
	const [designDescription, setDesignDescription] = useState("");
	const [previewImage, setPreviewImage] = useState<string[]>([]);
	const [sellingPrice, setSellingPrice] = useState(0);
	const [propertyType, setPropertyType] = useState<number>(NaN);
	const [propertyStyle, setPropertyStyle] = useState<number>(NaN);
	const [featureDescription, setFeatureDescription] = useState("");
	const [floorPlanImage, setFloorPlanImage] = useState<string[]>([]);
	const [bedRoomsTotal, setBedRoomsTotal] = useState(0);
	const [bathRoomsTotal, setBathRoomsTotal] = useState(0);
	const [propertySize, setPropertySize] = useState(0);
	const [others, setOthers] = useState<string[]>([""]);

	const [provinsiData, setProvinsiData] = useState<Dropdown[]>([]);
	const [kotaData, setKotaData] = useState<Dropdown[]>([]);
	const [propertyTypeData, setPropertyTypeData] = useState<Dropdown[]>([]);
	const [propertyStyleData, setPropertyStyleData] = useState<Dropdown[]>([]);

	useEffect(() => {
		const init = async () => {
			const user = (await supabase.auth.getSession()).data.session?.user;
			const { data: profile } = await supabase
				.from("profiles")
				.select("*")
				.eq("id", user?.id)
				.single();

			const { data: profile_detail } = await supabase
				.from("profile_detail")
				.select("*")
				.eq("user_id", user?.id)
				.single();

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

			const { data: property_style } = await supabase
				.from("property_style")
				.select("*");
			let propertyStyleData: Dropdown[] = [];
			property_style?.forEach((item) => {
				propertyStyleData.push({
					value: item.id,
					label: item.style_name as string,
				});
			});
			setPropertyStyleData(propertyStyleData);
		};
		init();
	}, []);
	const [education, setEducation] = useState<
		{
			studyInstitution: string;
			studyTitle: string;
			studyDepartement: string;
			StudyFrom: string;
			StudyUntil: string;
			studyDescription: string;
		}[]
	>([]);

	const handlePropertySzieChange = (event: any) => {
		setPropertySize(event.target.value);
	};

	const handleDesignNameChange = (event: any) => {
		setDesignName(event.target.value);
	};
	const handleDescriptionChange = (event: any) => {
		setDesignDescription(event.target.value);
	};
	const handleSellingPriceChange = (event: any) => {
		setSellingPrice(event.target.value);
	};

	const handleFeatureDescriptionsChange = (event: any) => {
		setFeatureDescription(event.target.value);
	};
	const handleBadRoomsChange = (event: any) => {
		setBedRoomsTotal(event.target.value);
	};
	const handleBathRoomsChange = (event: any) => {
		setBathRoomsTotal(event.target.value);
	};
	const handlePropertyType = (event: any) => {
		setPropertyType(event);
	};

	const handlePropertyStyle = (event: any) => {
		setPropertyStyle(event);
	};
	const handleChangeOther = (index: number, value: string) => {
		const updatedOther = [...others];
		updatedOther[index] = value;
		setOthers(updatedOther);
	};

	const handleAddOther = () => {
		setOthers([...others, ""]);
	};

	const handleDeleteOther = (index: number) => {
		const updatedOther = others.filter((_, i) => i !== index);
		setOthers(updatedOther);
	};

	const handleFloorPlanImageChange = (
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
			setFloorPlanImage((prevImages) => [...prevImages, ...newImages]);
		}
	};

	const handleImagePlanDelete = (index: number) => {
		const updatedImages = [...floorPlanImage];
		updatedImages.splice(index, 1);
		setFloorPlanImage(updatedImages);
	};

	const handlePreviewImageChange = (
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
			setPreviewImage((prevImages) => [...prevImages, ...newImages]);
		}
	};
	const handleImageDelete = (index: number) => {
		const updatedImages = [...previewImage];
		updatedImages.splice(index, 1);
		setPreviewImage(updatedImages);
	};

	const handleSubmitDesign = async (event: any) => {
		event.preventDefault();

		const user = (await supabase.auth.getSession()).data.session?.user;
		const uuid = v4();

		const previewData: string[] = [];
		const floorplanData: string[] = [];

		const awaitPreview = await Promise.all(
			previewImage.map(async (item) => {
				const fileUuid = v4();
				let blob = await fetch(item).then((r) => r.blob());
				const { data: preview, error } = await supabase.storage
					.from("design")
					.upload(`${uuid}/preview/${fileUuid}`, blob);
				const { publicUrl } = supabase.storage
					.from("design")
					.getPublicUrl(`${uuid}/preview/${fileUuid}`).data;
				previewData.push(publicUrl);
			}),
		);

		const awaitFloorplan = await Promise.all(
			floorPlanImage.map(async (item) => {
				const fileUuid = v4();
				let blob = await fetch(item).then((r) => r.blob());
				const { data: floorplan, error } = await supabase.storage
					.from("design")
					.upload(`${uuid}/floorplan/${fileUuid}`, blob);
				const { publicUrl } = supabase.storage
					.from("design")
					.getPublicUrl(`${uuid}/floorplan/${fileUuid}`).data;
				floorplanData.push(publicUrl);
			}),
		);

		const { data, error } = await supabase
			.from("design")
			.insert([
				{
					name: designName,
					bathroom_count: bathRoomsTotal,
					bedroom_count: bedRoomsTotal,
					price: sellingPrice,
					property_size: propertySize,
					description: designDescription,
					feature: featureDescription,
					property_type: propertyType,
					property_style: propertyStyle,
					other: others,
					floor_plan_image: floorplanData,
					preview_image: previewData,
				},
			])
			.select();
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
				<div className="container relative mx-auto mt-20 flex max-w-[1320px] justify-between">
					<div className=" container relative max-w-[884px] ">
						<form onSubmit={handleSubmitDesign}>
							<p className="text-[20px] font-medium ml-1">Sell Design</p>
							<div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
								<div onClick={handleOutside} className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										Design Information
									</p>
									<InputBoxForm
										form="biodata-Form"
										type="text"
										title="Design Name"
										value={designName}
										placeholder="Design Name"
										onChange={handleDesignNameChange}
									></InputBoxForm>
									<label className="mt-4 flex gap-24 pr-14">
										<span className="mt-3 w-[120px] text-base  text-[#B17C3F] ">
											Description
										</span>
										<textarea
											form="biodata-Form"
											id="description"
											value={designDescription}
											onChange={handleDescriptionChange}
											className=" mt-1 block h-[123px] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
									<div className="mt-5 flex ">
										<p className="text-gold">Preview Picture</p>
										<div className="flex gap-3">
											<div
												className="ml-16 gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												onClick={handleImageClick}
											>
												{previewImage.length > 0
													? previewImage.map((imageUrl, index) => (
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
												{previewImage.length < 5 ? (
													<label
														htmlFor="image-input"
														className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
													>
														<input
															id="image-input"
															type="file"
															// ref={inputRef}
															onChange={handlePreviewImageChange}
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
														onChange={handlePreviewImageChange}
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

							<div
								onClick={handleActiveOutline}
								className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7"
							>
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">Price</p>
									<div className="flex mt-5  pr-14 justify-between">
										<p className="w-[245px] text-gold">Selling Price</p>
										{isActive ? (
											<span className="flex h-[29px] w-full rounded-[7px] border-2 outline-2 border-gold pl-2 text-gold ">
												<p className="">Rp. </p>
												<input
													// value={sellingPrice}
													onClick={handleActiveOutline}
													onChange={handleSellingPriceChange}
													value={sellingPrice}
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
													onChange={handleSellingPriceChange}
													value={sellingPrice}
													type="text"
													className="pl-2 w-full rounded-[7px] focus:outline-none"
												/>
											</span>
										)}
									</div>
								</div>
							</div>

							<div
								onClick={handleOutside}
								className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7"
							>
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">Detail</p>
									<div>
										<Dropdown
											styleClass="text-gold flex gap-[42px] mt-2 w-full pr-7"
											styleClassTag="border-2 border-gold rounded-[7px] w-full"
											styleText="w-[190px]"
											title="Property Type"
											data={propertyTypeData}
											value={propertyType}
											placehoder="Select Property Type"
											onChange={handlePropertyType}
										></Dropdown>
										<Dropdown
											styleClass="text-gold flex gap-[42px] mt-2 w-full pr-7"
											styleClassTag="border-2 border-gold rounded-[7px] w-full"
											styleText="w-[190px]"
											title="Property Style"
											data={propertyStyleData}
											value={propertyStyle}
											placehoder="Select Property Style"
											onChange={handlePropertyStyle}
										></Dropdown>
										<label className="mt-4 flex gap-2 pr-14">
											<span className="mt-3 w-[235px] text-base  text-[#B17C3F] ">
												Feature Description
											</span>
											<textarea
												form="biodata-Form"
												id="FeatureDescription"
												value={featureDescription}
												onChange={handleFeatureDescriptionsChange}
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
									<div className="mt-5 flex ">
										<p className="text-gold">Floor Plan Picture</p>
										<div className="flex gap-3">
											<div
												className="ml-12 gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												onClick={handleImageClick2}
											>
												{floorPlanImage.length > 0
													? floorPlanImage.map((imageUrl, index) => (
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
																				handleImagePlanDelete(index)
																			}
																		/>
																	</div>
																</div>
															</div>
													  ))
													: ""}
												{floorPlanImage.length < 5 ? (
													<label
														htmlFor="Floor-ImageInput"
														className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
													>
														<input
															id="Floor-ImageInput"
															type="file"
															// ref={inputRef2}
															onChange={handleFloorPlanImageChange}
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
														id="Floor-ImageInput"
														type="file"
														// ref={inputRef2}
														onChange={handleFloorPlanImageChange}
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

							<div
								onClick={handleOutside}
								className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7"
							>
								<div className="ml-14 py-8">
									<p className="text-[15px] font-semibold text-gold">
										Facilities & Infrastructure
									</p>
									<InputBoxForm
										form="designForm"
										type="text"
										title="Bedroom Count"
										value={bedRoomsTotal}
										// placeholder="Design Name"
										onChange={handleBadRoomsChange}
									></InputBoxForm>
									<InputBoxForm
										form="designForm"
										type="text"
										title="Bathroom Count"
										value={bathRoomsTotal}
										// placeholder="Design Name"
										onChange={handleBathRoomsChange}
									></InputBoxForm>
									<InputBoxForm
										form="designForm"
										type="text"
										title="Property Size"
										value={propertySize}
										// placeholder="Design Name"
										onChange={handlePropertySzieChange}
									></InputBoxForm>
									<div className="flex mt-5 w-full ">
										<p className="text-gold">Other</p>
										<div className="w-full pr-[143px]">
											{others.map((item, index) => (
												<div
													key={index}
													className="w-full flex flex-col  ml-36 pr-[58px]"
												>
													<label className="flex">
														<input
															value={item}
															onChange={(e: any) =>
																handleChangeOther(index, e.target.value)
															}
															type="text"
															className="bg-white text-[15px] py-[1px] rounded-[7px] border-2 border-gold pl-2 text-gold focus:border-gold  focus:outline-gold w-full "
														/>
													</label>

													<div className="my-1 pr-1 flex  text-gold text-[11px]">
														{others.length > index + 1 ? (
															<div className="w-full flex justify-end">
																<button
																	onClick={() => handleDeleteOther(index)}
																>
																	Delete
																</button>
															</div>
														) : (
															<button onClick={handleAddOther}>
																+ Add Facilities
															</button>
														)}
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="pb-20 justify-end w-full flex">
								<button
									type="submit"
									className="bg-gold rounded-full py-3 px-7 text-white text-[15px] hover:bg-goldhov"
								>
									Save
								</button>
							</div>

							{/* BATAS BIODATA */}
							{/* BATAS MEMBER */}
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
