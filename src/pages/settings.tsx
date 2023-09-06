import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InputBoxSettings from "@/components/inputBoxSetting";
import CloseIcon from "@mui/icons-material/Close";
import InputPopUp from "@/components/popUpInput";
import Dropdown from "@/components/dropdwon";
import { it } from "node:test";
import { start } from "repl";

const user = {
	role: "Admin",
};

function Profile() {
	const [biodata, setBiodata] = useState<
		{
			username: string;
			first_name: string;
			last_name: string;
			provinsi: string;
			about: string;
			avatar_url: string;
			background_url: string;
			kabupaten: string;
			style_name: string[];
			type_name: string[];
		}[]
	>([]); //UNTTUK NAMPUNG SEMUA ARRAY USETATE

	const [username, setUsername] = useState("");
	const [first_name, setFirst_Name] = useState("");
	const [last_name, setLast_Name] = useState("");
	const [provinsi, setProvinsi] = useState("");
	const [about, setAbout] = useState("");
	const [kabupaten, setKabupaten] = useState("");
	const [type_name, setType_name] = useState<string[]>([""]);
	const [style_name, setStyle_name] = useState<string[]>([""]);
	const [avatar_url, setAvatar_url] = useState("");
	const [background_url, setBackground_url] = useState("");

	const handleChangeUsername = (event: any) => {
		setUsername(event.target.value);
	};

	const handleChangeFirstname = (event: any) => {
		setFirst_Name(event.target.value);
	};

	const handleChangeLastName = (event: any) => {
		setLast_Name(event.target.value);
	};

	const handleChangeProvince = (event: any) => {
		setProvinsi(event);
	};

	const handleChangeAbout = (event: any) => {
		setAbout(event.target.value);
	};

	const handleLandImageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0]; // Get the selected file
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setAvatar_url(reader.result as string);
			};
			reader.readAsDataURL(file); // Read the selected file as a data URL
		} else {
			setAvatar_url(""); // Clear the preview if no file is selected
		}
	};
	const handleClickChangeAvatar = () => {
		const fileInput = document.getElementById("profilePicture");
		if (fileInput) {
			fileInput.click();
		}
	};

	const handleBackGroundChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0]; // Get the selected file
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setBackground_url(reader.result as string);
			};
			reader.readAsDataURL(file); // Read the selected file as a data URL
		} else {
			setBackground_url(""); // Clear the preview if no file is selected
		}
	};
	const handleClickBackgroundChange = () => {
		const fileInput = document.getElementById("BackgroundPicture");
		if (fileInput) {
			fileInput.click();
		}
	};

	const handleChangePropertyType = (index: number, value: string) => {
		const updated_type_name = [...type_name];
		updated_type_name[index] = value;
		setType_name(updated_type_name);
	};

	const handleAddPropertyType = () => {
		setType_name([...type_name, ""]);
	};

	const handleDeletePropertyType = (index: number) => {
		const updated_type_name = type_name.filter((_, i) => i !== index);
		setType_name(updated_type_name);
	};

	const handleChangePropertyStyle = (index: number, value: string) => {
		const updatedPropertyStyle = [...style_name];
		updatedPropertyStyle[index] = value;
		setStyle_name(updatedPropertyStyle);
	};

	const handleAddPropertyStyle = () => {
		setStyle_name([...style_name, ""]);
	};

	const handleDeletePropertyStyle = (index: number) => {
		const updatedPropertStyle = style_name.filter((_, i) => i !== index);
		setStyle_name(updatedPropertStyle);
	};

	const handleDropdown = (city: any) => {
		setStyle_name(city);
	};

	// HANDLE BUTTON BUAT SUBMIT
	const handleBiodataSubmit = (event: any) => {
		event.preventDefault();
		const newBiodata = {
			username,
			first_name,
			last_name,
			provinsi,
			avatar_url,
			background_url,
			style_name: [...style_name],
			type_name: [...type_name],
			kabupaten,
			about,
		};

		setBiodata([...biodata, newBiodata]);
		setAvatar_url("");
		setBackground_url("");
		setUsername("");
		setFirst_Name("");
		setLast_Name("");
		setProvinsi("");
		setType_name([]);
		setStyle_name([]);
		setKabupaten("");
		setAbout("");
	};

	const [openChooseRole, setOpenChooseRole] = useState(false);
	const handleOpenChooseRole = () => {
		setOpenChooseRole(!openChooseRole);
	};

	return (
		<div>
			{openChooseRole && (
				<div className="fixed inset-0 z-10 flex items-center justify-center">
					<div
						onClick={handleOpenChooseRole}
						className="absolute bottom-0 -left-[210px] -top-[84px] z-10 flex w-screen h-[110vh] items-center justify-center bg-black/40"
					>
						<div className="modal-content w-[553px] rounded-3xl bg-white flex flex-col justify-center items-center">
							<div className="border-b-[1px] border-gold/40 w-full mt-8"></div>
							<p className="w-[316px] text-center text-[15px] mt-8">
								Complete your profile and become a contributor on Hunify by
								selecting your role here.
							</p>
							<div className="flex flex-row gap-3 mt-4 mb-8">
								<Link href={"./formReqDesainer"}>
									<button className="py-1 px-5 bg-gold rounded-full text-white text-[13px] hover:bg-goldhov">
										Designer
									</button>
								</Link>
								<Link href={"./form"}>
									<button className="py-1 px-5 bg-gold rounded-full text-white text-[13px] hover:bg-goldhov">
										Contractor
									</button>
								</Link>
							</div>
							<div className="border-b-[1px] border-gold/40 w-full mb-8"></div>
						</div>
					</div>
				</div>
			)}
			<form action="" onSubmit={handleBiodataSubmit}>
				<div className="flex px-20">
					<div className="flex gap-8 ">
						<div className="border-2 border-gold rounded-[8px]">
							<div className="w-[18]rem">
								<div className="h-[158px] w-[159px]">
									{avatar_url ? (
										<Image
											src={avatar_url}
											alt="avatar_url"
											width={159}
											height={158}
											className="h-[158px] w-[159px] rounded-[7px] object-cover rounded-b-none"
										/>
									) : (
										<div className="flex h-[158px] w-[159px] items-center justify-center rounded-[7px] rounded-b-none bg-gray-300">
											<span className="text-gray-500 text-[10px]">
												Foto Profil Tidak Tersedia
											</span>
										</div>
									)}
								</div>

								<div className="flex justify-center ">
									<button
										type="button"
										className="text-[12px] font-medium h-[28px] w-[159px] rounded-[7px] rounded-t-none border-2 border-[#B17C3F] bg-gold text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white "
										onClick={handleClickChangeAvatar}
									>
										Change Profile Image
									</button>
									<input
										type="file"
										id="profilePicture"
										accept="image/*"
										onChange={handleLandImageChange}
										className="hidden"
									/>
								</div>
							</div>
						</div>

						<div className="border-gold border-2 rounded-[8px]">
							<div className="w-[18]rem">
								<div className="h-[158px] w-[549px]">
									{background_url ? (
										<Image
											src={background_url}
											alt="Preview"
											width={549}
											height={158}
											className="h-[158px] w-[549px] rounded-[7px] object-cover rounded-b-none"
										/>
									) : (
										<div className="flex h-[158px] w-[549px] items-center justify-center rounded-[7px] rounded-b-none bg-gray-300">
											<span className="text-gray-500 text-[10px]">
												Foto Profil Tidak Tersedia
											</span>
										</div>
									)}
								</div>

								<div className="flex justify-center ">
									<button
										type="button"
										className="text-[12px] font-medium h-[28px] w-[549px] rounded-[7px] rounded-t-none border-2 border-[#B17C3F] bg-gold text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white "
										onClick={handleClickBackgroundChange}
									>
										Change Background Image
									</button>
									<input
										type="file"
										id="BackgroundPicture"
										accept="image/*"
										onChange={handleBackGroundChange}
										className="hidden"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-20 mt-8">
					<div className="">
						<InputBoxSettings
							form="biodata-Form"
							type="text"
							title="Username"
							value={username}
							placeholder={"Enter Username"}
							onChange={handleChangeUsername}
						></InputBoxSettings>
						<InputBoxSettings
							form="biodata-Form"
							type="text"
							title="Firstname"
							value={first_name}
							placeholder={"Enter Firstname"}
							onChange={handleChangeFirstname}
						></InputBoxSettings>
						<InputBoxSettings
							form="biodata-Form"
							type="text"
							title="Lastname"
							value={last_name}
							placeholder={"Enter Lastname"}
							onChange={handleChangeLastName}
						></InputBoxSettings>

						{(user.role === "Designer" ||
							user.role === "Contractor" ||
							user.role === "Admin") && (
							<div>
								<div>
									{type_name.map((item, index) => (
										<div key={index}>
											{index == 0 ? (
												<Dropdown
													form="biodata-Form"
													styleClass="text-gold text-[13px] flex gap-[48px] mt-[10px] w-full pr-1"
													styleClassTag="py-[4px] border-2 border-gold rounded-[7px] w-full"
													styleText="w-[200px] text-[15px]"
													title="Property Type"
													data={[
														{ value: "Type1", label: "Type1" },
														{ value: "Type2", label: "Type2" },
														{ value: "Type3", label: "Type3" },
														{ value: "Type4", label: "Type4" },
														{ value: "Type5", label: "Type5" },
													]}
													value={item}
													placehoder="Select Property Type"
													onChange={(e: any) =>
														handleChangePropertyType(index, e)
													}
												></Dropdown>
											) : (
												<div className="relative">
													<Dropdown
														form="biodata-Form"
														styleClass="text-gold text-[13px] flex gap-[48px] mt-2 w-full pr-1"
														styleClassTag="border-2 border-gold rounded-[7px] w-full py-[4px] ml-[147px]"
														title=""
														data={[
															{ value: "Type1", label: "Type1" },
															{ value: "Type2", label: "Type2" },
															{ value: "Type3", label: "Type3" },
															{ value: "Type4", label: "Type4" },
															{ value: "Type5", label: "Type5" },
														]}
														value={item}
														placehoder="Select Property Type"
														onChange={(e: any) =>
															handleChangePropertyType(index, e)
														}
													></Dropdown>
													<div className="flex justify-end pr-[57px]"></div>
												</div>
											)}

											<div className="ml-[187px] mt-2 flex pr-2 text-gold text-[11px]">
												{type_name.length > index + 1 ? (
													<div className="w-full flex justify-end">
														<button
															onClick={() => handleDeletePropertyType(index)}
														>
															Delete Type
														</button>
													</div>
												) : (
													<button
														onClick={handleAddPropertyType}
														className="ml-2"
													>
														+ Add Type
													</button>
												)}
											</div>
										</div>
									))}
								</div>

								<div>
									{style_name.map((item, index) => (
										<div key={index}>
											{index == 0 ? (
												<Dropdown
													form="biodata-Form"
													styleClass="text-gold text-[13px] flex gap-[48px] mt-2 w-full pr-1"
													styleClassTag="py-[4px] border-2 border-gold rounded-[7px] w-full"
													styleText="w-[200px] text-[15px]"
													title="Property Style"
													data={[
														{ value: "Style1", label: "Style1" },
														{ value: "Style2", label: "Style2" },
														{ value: "Style3", label: "Style3" },
														{ value: "Style4", label: "Style4" },
														{ value: "Style5", label: "Style5" },
													]}
													value={item}
													placehoder="Select Property Style"
													onChange={(e: any) =>
														handleChangePropertyStyle(index, e)
													}
												></Dropdown>
											) : (
												<div className="relative">
													<Dropdown
														form="biodata-Form"
														styleClass="text-gold text-[13px] flex gap-[48px] mt-2 w-full pr-1"
														styleClassTag="border-2 border-gold rounded-[7px] w-full py-[4px] ml-[147px]"
														title=""
														data={[
															{ value: "Style1", label: "Style1" },
															{ value: "Style2", label: "Style2" },
															{ value: "Style3", label: "Style3" },
															{ value: "Style4", label: "Style4" },
															{ value: "Style5", label: "Style5" },
														]}
														value={item}
														placehoder="Select Property Style"
														onChange={(e: any) =>
															handleChangePropertyStyle(index, e)
														}
													></Dropdown>
													<div className="flex justify-end pr-[57px]"></div>
												</div>
											)}

											<div className="ml-[187px] mt-2 flex pr-2 text-gold text-[11px]">
												{style_name.length > index + 1 ? (
													<div className="w-full flex justify-end">
														<button
															onClick={() => handleDeletePropertyStyle(index)}
														>
															Delete Style
														</button>
													</div>
												) : (
													<button
														onClick={handleAddPropertyStyle}
														className="ml-2"
													>
														+ Add Style
													</button>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						<Dropdown
							form="biodata-Form"
							styleClass="text-gold text-[13px] flex gap-[131px] mt-2 w-full pr-1"
							styleClassTag="border-2 py-[4px] border-gold rounded-[7px] w-full"
							styleText="text-[15px]"
							title="Province"
							data={[
								{ value: "Lombok Timur", label: "Lombok Timur" },
								{ value: "Mataram", label: "Mataram" },
								{ value: "Bima", label: "Bima" },
								{ value: "Dompu", label: "Dompu" },
								{ value: "Sumbawa", label: "Sumbawa" },
							]}
							value={provinsi}
							placehoder="Select Province"
							onChange={handleChangeProvince}
						></Dropdown>
						<Dropdown
							form="biodata-Form"
							styleClass=" text-gold text-[13px] flex gap-[165px] mt-[10px] w-full pr-1"
							styleClassTag="ml-[1px] py-[4px] border-2 border-gold rounded-[7px] w-full"
							styleText="text-[15px]"
							title="City"
							data={[
								{ value: "Lombok Timur", label: "Lombok Timur" },
								{ value: "Mataram", label: "Mataram" },
								{ value: "Bima", label: "Bima" },
								{ value: "Dompu", label: "Dompu" },
								{ value: "Sumbawa", label: "Sumbawa" },
							]}
							value={kabupaten}
							placehoder="Select City"
							onChange={handleDropdown}
						></Dropdown>
						<label className="mt-5 flex gap-[108px] pr-2">
							<span className="mt-3 w-[120px] text-[15px] text-[#B17C3F] ">
								About
							</span>
							<textarea
								form="biodata-Form"
								id="description"
								placeholder="Enter About"
								value={about}
								onChange={handleChangeAbout}
								className=" mt-1 block h-[95px] w-full rounded-md border border-[#B17C3F] bg-white px-2 py-1 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
								maxLength={500}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
									}
								}}
							></textarea>
						</label>
					</div>
					<div className="pb-20 justify-end w-full flex mt-16">
						{user.role === "" && (
							<div className="my-auto">
								<button
									onClick={handleOpenChooseRole}
									className="mr-5 text-[16px] underline text-gold"
								>
									Choose Role
								</button>
							</div>
						)}
						<button
							type="submit"
							className="bg-gold rounded-full py-[10px] px-12 text-white text-[15px] hover:bg-goldhov "
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

function Project() {
	const [projects, setProjects] = useState<
		{
			institution: string;
			title: string;
			departement: string;
			start_date: string;
			end_date: string;
			information: string;
			image: string[];
		}[]
	>([]);
	const [institution, setInstitution] = useState("");
	const [title, setTitle] = useState("");
	const [departement, setDepartement] = useState("");
	const [information, setInformation] = useState("");
	const [start_date, setStart_date] = useState("");
	const [end_date, setEnd_date] = useState("");
	const [image, setImage] = useState<string[]>([]);

	const handleInstitutionChange = (event: any) => {
		setInstitution(event.target.value);
	};

	const handleInformationChange = (event: any) => {
		setInformation(event.target.value);
	};

	const handleTitleChange = (event: any) => {
		setTitle(event.target.value);
	};

	const handleDepartementChange = (event: any) => {
		setDepartement(event.target.value);
	};
	const handleStartDateChange = (event: any) => {
		setStart_date(event.target.value);
	};

	const handleEndDateChange = (event: any) => {
		setEnd_date(event.target.value);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		inputRef.current?.click();
	};

	const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const newImages: string[] = [];

			for (let i = 0; i < files.length; i++) {
				if (newImages.length < 3) {
					newImages.push(URL.createObjectURL(files[i]));
				}
			}

			setImage((prevImages) => [...prevImages, ...newImages]);
		}
	};

	const handleImageDelete = (index: number) => {
		const updatedImages = [...image]; // Create a copy of the images array
		updatedImages.splice(index, 1); // Remove the image at the specified index
		setImage(updatedImages); // Update the state with the modified array
	};

	const handleProjectSubmit = (event: any) => {
		event.preventDefault();
		const newProjects = {
			institution,
			title,
			departement,
			start_date,
			end_date,
			information,
			image: [...image],
		};
		setProjects([...projects, newProjects]);

		setInstitution("");
		setTitle("");
		setInformation("");
		setDepartement("");
		setStart_date("");
		setEnd_date("");
		setImage([]);
	};

	const [isEditProject, setIsEditProject] = useState(false);
	const [editProjectIndex, setEditProjectIndex] = useState(-1);

	const openProjectEdit = (index: number) => {
		const projectToEdit = projects[index];
		setEditProjectIndex(index);
		setInstitution(projectToEdit.institution);
		setTitle(projectToEdit.title);
		setStart_date(projectToEdit.start_date);
		setEnd_date(projectToEdit.end_date);
		setInformation(projectToEdit.information);
		setImage(projectToEdit.image);
		setIsEditProject(true);
	};

	const handleEditProjectSave = (index: any) => {
		const updateProjects = [...projects];
		updateProjects[index] = {
			...updateProjects[index],
			institution,
			title,
			start_date,
			end_date,
			information,
			image: [...image],
		};
		setProjects(updateProjects);
		setInstitution("");
		setTitle("");
		setStart_date("");
		setEnd_date("");
		setInformation("");
		setImage([]);
		setIsEditProject(false);
	};

	const handleEditProjectClose = () => {
		setIsEditProject(false);
	};

	const handleProjectDelete = (index: number) => {
		const updatedProjects = projects.filter((_, i) => i !== index);
		setProjects(updatedProjects);
	};
	console.log(projects);
	const [projectModal, setProjectModal] = useState(false);

	const openProjectPopUp = () => {
		setProjectModal(!projectModal);
		image.length = 0;
	};

	return (
		<div>
			{projectModal && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">Detail Project</h2>
							</div>

							<form id="projectForm" onSubmit={handleProjectSubmit}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="Institution"
										value={institution}
										onChange={handleInstitutionChange}
										required
										className="bg-white"
									></InputPopUp>
									<InputPopUp
										title="Title"
										type="text"
										value={title}
										required
										className="bg-white"
										onChange={handleTitleChange}
									></InputPopUp>
									<InputPopUp
										title="From"
										type="date"
										value={start_date}
										required
										className="bg-white"
										onChange={handleStartDateChange}
									></InputPopUp>
									<InputPopUp
										title="Until"
										type="date"
										value={end_date}
										required
										className="bg-white"
										onChange={handleEndDateChange}
									></InputPopUp>
									<label className="mt-4 gap-24 pr-14">
										<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
											Additonal Information
										</span>
										<textarea
											id="description"
											value={information}
											onChange={handleInformationChange}
											placeholder="Description"
											className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
									<div>
										<p className="mb-1 ml-[2px] text-[11px] text-gold">Foto</p>
										<div className="flex gap-3">
											<div
												className="gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												onClick={handleImageClick}
											>
												{image.length > 0
													? image.map((imageUrl, index) => (
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
												{image.length < 3 ? (
													<label
														htmlFor="image-input"
														className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
													>
														<input
															id="image-input"
															type="file"
															// ref={inputRef}
															onChange={handleChangeImage}
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
														onChange={handleChangeImage}
														multiple
														accept="image/*"
														className="hidden"
													/>
												)}
											</div>
										</div>
									</div>
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
									</button>
									<button
										type="submit"
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={openProjectPopUp}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{isEditProject && editProjectIndex != -1 && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]"> Edit Detail Project</h2>
							</div>
							<div className="ml-14 py-5">
								<InputPopUp
									type="text"
									title="Institution"
									value={institution}
									onChange={handleInstitutionChange}
									required
								></InputPopUp>
								<InputPopUp
									title="Title"
									type="text"
									value={title}
									required
									onChange={handleTitleChange}
								></InputPopUp>
								<InputPopUp
									title="From"
									type="date"
									value={start_date}
									required
									onChange={handleStartDateChange}
								></InputPopUp>
								<InputPopUp
									title="Until"
									type="date"
									value={end_date}
									required
									onChange={handleEndDateChange	}
								></InputPopUp>
								<label className="mt-4 gap-24 pr-14">
									<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
										Additonal Information
									</span>
									<textarea
										id="description"
										value={information}
										onChange={handleInformationChange}
										placeholder="Description"
										className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
										maxLength={500}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
											}
										}}
									></textarea>
								</label>
								<div>
									<p className="mb-1 ml-[2px] text-[11px] text-gold">Foto</p>
									<div className="flex gap-3">
										<div
											className="gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
											onClick={handleImageClick}
										>
											{image.length > 0
												? image.map((imageUrl, index) => (
														<div key={index} className="flex relative group">
															<div>
																<Image
																	src={imageUrl}
																	alt={`Selected Image ${index + 1}`}
																	style={{
																		maxWidth: "120px",
																		maxHeight: "120px",
																		width: "100%",
																		height: "100%",
																	}}
																	width={120}
																	height={120}
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
											{image.length < 3 ? (
												<label
													htmlFor="image-input"
													className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
												>
													<input
														id="image-input"
														type="file"
														ref={inputRef}
														onChange={handleChangeImage}
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
													ref={inputRef}
													onChange={handleChangeImage}
													multiple
													accept="image/*"
													className="hidden"
												/>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-end border-t-2 border-gold/60">
								<button
									onClick={() => handleEditProjectSave(editProjectIndex)}
									className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
								>
									Save
								</button>
								<button
									className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
									onClick={handleEditProjectClose}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{projects.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{projects.map((projects, index) => (
						<div key={index} className="flex">
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-[10px]">
									<span>
										<svg
											width="53"
											height="59"
											viewBox="0 0 53 59"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M46.625 6.625H34.6075C33.4 3.29 30.2375 0.875 26.5 0.875C22.7625 0.875 19.6 3.29 18.3925 6.625H6.375C3.2125 6.625 0.625 9.2125 0.625 12.375V52.625C0.625 55.7875 3.2125 58.375 6.375 58.375H46.625C49.7875 58.375 52.375 55.7875 52.375 52.625V12.375C52.375 9.2125 49.7875 6.625 46.625 6.625ZM26.5 6.625C28.0812 6.625 29.375 7.91875 29.375 9.5C29.375 11.0813 28.0812 12.375 26.5 12.375C24.9188 12.375 23.625 11.0813 23.625 9.5C23.625 7.91875 24.9188 6.625 26.5 6.625ZM29.375 46.875H15C13.4187 46.875 12.125 45.5812 12.125 44C12.125 42.4188 13.4187 41.125 15 41.125H29.375C30.9562 41.125 32.25 42.4188 32.25 44C32.25 45.5812 30.9562 46.875 29.375 46.875ZM38 35.375H15C13.4187 35.375 12.125 34.0812 12.125 32.5C12.125 30.9188 13.4187 29.625 15 29.625H38C39.5812 29.625 40.875 30.9188 40.875 32.5C40.875 34.0812 39.5812 35.375 38 35.375ZM38 23.875H15C13.4187 23.875 12.125 22.5812 12.125 21C12.125 19.4188 13.4187 18.125 15 18.125H38C39.5812 18.125 40.875 19.4188 40.875 21C40.875 22.5812 39.5812 23.875 38 23.875Z"
												fill="#B17C3F"
											/>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{projects.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleProjectDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openProjectEdit(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p className="text-[15px]">{projects.title}</p>
										<p className="text-black/60 text-[15px]">
											{projects.start_date.substr(0, 0 + 4)} -
											{projects.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: projects.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							) : (
								<div className="flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-2xl">
									<span>
										<svg
											width="53"
											height="59"
											viewBox="0 0 53 59"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M46.625 6.625H34.6075C33.4 3.29 30.2375 0.875 26.5 0.875C22.7625 0.875 19.6 3.29 18.3925 6.625H6.375C3.2125 6.625 0.625 9.2125 0.625 12.375V52.625C0.625 55.7875 3.2125 58.375 6.375 58.375H46.625C49.7875 58.375 52.375 55.7875 52.375 52.625V12.375C52.375 9.2125 49.7875 6.625 46.625 6.625ZM26.5 6.625C28.0812 6.625 29.375 7.91875 29.375 9.5C29.375 11.0813 28.0812 12.375 26.5 12.375C24.9188 12.375 23.625 11.0813 23.625 9.5C23.625 7.91875 24.9188 6.625 26.5 6.625ZM29.375 46.875H15C13.4187 46.875 12.125 45.5812 12.125 44C12.125 42.4188 13.4187 41.125 15 41.125H29.375C30.9562 41.125 32.25 42.4188 32.25 44C32.25 45.5812 30.9562 46.875 29.375 46.875ZM38 35.375H15C13.4187 35.375 12.125 34.0812 12.125 32.5C12.125 30.9188 13.4187 29.625 15 29.625H38C39.5812 29.625 40.875 30.9188 40.875 32.5C40.875 34.0812 39.5812 35.375 38 35.375ZM38 23.875H15C13.4187 23.875 12.125 22.5812 12.125 21C12.125 19.4188 13.4187 18.125 15 18.125H38C39.5812 18.125 40.875 19.4188 40.875 21C40.875 22.5812 39.5812 23.875 38 23.875Z"
												fill="#B17C3F"
											/>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{projects.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleProjectDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openProjectEdit(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p className="text-[15px]">{projects.title}</p>
										<p className="text-black/60 text-[15px]">
											{projects.start_date.substr(0, 0 + 4)} -
											{projects.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: projects.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">No Project Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank project to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Contractor" && (
						<div className="flex flex-col items-center justify-center mt-16 pb-5">
							<p className="text-[19px] font-medium">No Project Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank project to make transactions easier.
							</p>
						</div>
					)}

					{user.role === "Designer" && (
						<div className="flex flex-col items-center justify-center mt-24 pb-5">
							<p className="text-[19px] font-medium">No Project Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank project to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<button
					onClick={openProjectPopUp}
					className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov"
				>
					Add Project
				</button>
			</div>
		</div>
	);
}

function Member() {
	//state untuk member
	const [members, setMembers] = useState<
		{ name: string; job: string; description: string }[]
	>([]);
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [description, setDescription] = useState("");
	//batas state untuk member

	//handler member
	const handleNameChange = (event: any) => {
		setName(event.target.value);
	};

	const handleJobChange = (event: any) => {
		setJob(event.target.value);
	};
	const handleDescriptionChange = (event: any) => {
		setDescription(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const newMember = { name, job, description };
		setMembers([...members, newMember]);
		setName("");
		setJob("");
		setDescription("");
	};

	const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
	const [editMemberIndex, setEditMemberIndex] = useState(-1); // Initialize with -1 to indicate no member being edited

	const openPopUpEdit = (index: number) => {
		const memberToEdit = members[index];
		setEditMemberIndex(index);
		setName(memberToEdit.name);
		setJob(memberToEdit.job);
		setDescription(memberToEdit.description);
		setIsEditPopupOpen(true);
	};

	const handleEditPopupSave = (index: any) => {
		const updatedMembers = [...members];
		updatedMembers[index] = {
			...updatedMembers[index],
			name,
			job,
			description,
		};
		setMembers(updatedMembers);
		setName("");
		setJob("");
		setDescription("");
		setIsEditPopupOpen(false);
	};

	const closeEditPopup = () => {
		setIsEditPopupOpen(false);
	};

	const handleDelete = (index: number) => {
		const updatedMembers = members.filter((_, i) => i !== index);
		setMembers(updatedMembers);
	};

	const [modal, setModal] = useState(false);

	const openPopUp = () => {
		setModal(!modal);
	};
	//batas handler member

	return (
		<div>
			{modal && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center top-0">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">Detail Member</h2>
							</div>
							<form id="memberForm" onSubmit={handleSubmit}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="nama"
										value={name}
										onChange={handleNameChange}
										className="bg-white"
										required
									></InputPopUp>
									<InputPopUp
										title="Job"
										type="text"
										value={job}
										className="bg-white"
										required
										onChange={handleJobChange}
									></InputPopUp>
									<label className="mt-4 gap-24 pr-14">
										<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
											Additonal Information
										</span>
										<textarea
											id="description"
											value={description}
											onChange={handleDescriptionChange}
											placeholder="Description"
											className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
									</button>
									<button
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={openPopUp}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{isEditPopupOpen && editMemberIndex !== -1 && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center top-0">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">Edit Detail Member</h2>
							</div>

							<div className="ml-14 py-5">
								<InputPopUp
									type="text"
									title="nama"
									value={name}
									onChange={handleNameChange}
									required
									className="bg-white"
								></InputPopUp>
								<InputPopUp
									title="Job"
									type="text"
									value={job}
									required
									className="bg-white"
									onChange={handleJobChange}
								></InputPopUp>
								<label className="mt-4 gap-24 pr-14">
									<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
										Additonal Information
									</span>
									<textarea
										id="description"
										value={description}
										onChange={handleDescriptionChange}
										placeholder="Description"
										className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
										maxLength={500}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
											}
										}}
									></textarea>
								</label>
							</div>
							<div className="flex justify-end border-t-2 border-gold/60">
								<button
									onClick={() => handleEditPopupSave(editMemberIndex)}
									className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
								>
									Save
								</button>
								<button
									className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
									onClick={closeEditPopup}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{members.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{members.map((member, index) => (
						<div className="flex" key={index}>
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-[10px]">
									<span>
										<svg
											width="53"
											height="55"
											viewBox="0 0 53 55"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.9375 54.875C4.9375 54.875 0.625 54.875 0.625 50.3125C0.625 45.75 4.9375 32.0625 26.5 32.0625C48.0625 32.0625 52.375 45.75 52.375 50.3125C52.375 54.875 48.0625 54.875 48.0625 54.875H4.9375ZM26.5 27.5C29.9312 27.5 33.2219 26.0579 35.6482 23.491C38.0744 20.9241 39.4375 17.4427 39.4375 13.8125C39.4375 10.1823 38.0744 6.70088 35.6482 4.13398C33.2219 1.56707 29.9312 0.125 26.5 0.125C23.0688 0.125 19.7781 1.56707 17.3518 4.13398C14.9256 6.70088 13.5625 10.1823 13.5625 13.8125C13.5625 17.4427 14.9256 20.9241 17.3518 23.491C19.7781 26.0579 23.0688 27.5 26.5 27.5Z"
												fill="#B17C3F"
											/>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">{member.name}</p>

											<div className="flex gap-2">
												<button onClick={() => handleDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openPopUpEdit(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
														/>
													</svg>
												</button>
											</div>
										</div>

										<p className="text-[15px]">{member.job}</p>
									</span>
								</div>
							) : (
								<div className="flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-2xl">
									<span>
										<svg
											width="64"
											height="64"
											viewBox="0 0 64 64"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_1828_1997)">
												<path
													d="M10.656 25.6L32 38.4L64 19.2L32 0L0 19.2H32V25.6H10.656ZM0 25.6V51.2L6.4 44.096V29.44L0 25.6ZM32 64L16 54.4L9.6 50.56V31.36L32 44.8L54.4 31.36V50.56L32 64Z"
													fill="#B17C3F"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1828_1997">
													<rect width="64" height="64" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">No Member Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank member to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Contractor" && (
						<div className="flex flex-col items-center justify-center mt-16 pb-5">
							<p className="text-[19px] font-medium">No Member Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank member to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<button
					onClick={openPopUp}
					className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov"
				>
					Add Member
				</button>
			</div>
		</div>
	);
}

function Education() {
	const [education, setEducation] = useState<
		{
			institution: string;
			title: string;
			departement: string;
			start_date: string;
			end_date: string;
			description: string;
		}[]
	>([]);

	const [institution, setInstitution] = useState("");
	const [title, setTitle] = useState("");
	const [departement, setDepartement] = useState("");
	const [start_date, setStart_date] = useState("");
	const [end_date, setEnd_date] = useState("");
	const [description, setDescription] = useState("");

	const handleStudyIntitutionChange = (event: any) => {
		setInstitution(event.target.value);
	};
	const handletitleChange = (event: any) => {
		setTitle(event.target.value);
	};
	const handledepartementChange = (event: any) => {
		setDepartement(event.target.value);
	};
	const handlestart_dateChange = (event: any) => {
		setStart_date(event.target.value);
	};
	const handleend_dateChange = (event: any) => {
		setEnd_date(event.target.value);
	};
	const handledescriptionChange = (event: any) => {
		setDescription(event.target.value);
	};

	const handleEducationSubmit = (event: any) => {
		event.preventDefault();
		const newEducation = {
			institution,
			title,
			departement,
			start_date,
			end_date,
			description,
		};

		setEducation([...education, newEducation]);
		setDescription("");
		setInstitution("");
		setTitle("");
		setDepartement("");
		setStart_date("");
		setEnd_date("");
	};

	const [isEditEducationOpen, setIsEditEducationOpen] = useState(false);
	const [editEducationIndex, setEditEducationIndex] = useState(-1);

	const openEditEducation = (index: number) => {
		const educationToEdit = education[index];
		setEditEducationIndex(index);
		setInstitution(educationToEdit.institution);
		setTitle(educationToEdit.title);
		setDepartement(educationToEdit.departement);
		setStart_date(educationToEdit.start_date);
		setEnd_date(educationToEdit.end_date);
		setDescription(educationToEdit.description);
		setIsEditEducationOpen(true);
	};

	const handleEditEducationSave = (index: number) => {
		const updateEducation = [...education];
		updateEducation[index] = {
			...updateEducation[index],
			institution,
			title,
			departement,
			start_date,
			end_date,
			description,
		};
		setEducation(updateEducation);
		setInstitution("");
		setTitle("");
		setDepartement("");
		setStart_date("");
		setEnd_date("");
		setDescription("");
		setIsEditEducationOpen(false);
	};

	const closeEditEducation = () => {
		setIsEditEducationOpen(false);
	};

	const handleEducationDelete = (index: number) => {
		const updateEducation = education.filter((_, i) => i !== index);
		setEducation(updateEducation);
	};

	const [isEducationOpen, setIsEducationOpen] = useState(false);
	const openEducationPopUp = () => {
		setIsEducationOpen(!isEducationOpen);
	};
	return (
		<div>
			{isEducationOpen && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">Detail Education</h2>
							</div>
							<form id="EducationForm" onSubmit={handleEducationSubmit}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="Institution"
										value={institution}
										onChange={handleStudyIntitutionChange}
										className="bg-white"
										required
									></InputPopUp>
									<InputPopUp
										title="Title"
										type="text"
										value={title}
										className="bg-white"
										required
										onChange={handletitleChange}
									></InputPopUp>
									<InputPopUp
										title="Departement"
										type="text"
										value={departement}
										className="bg-white"
										required
										onChange={handledepartementChange}
									></InputPopUp>
									<InputPopUp
										title="From"
										type="date"
										value={start_date}
										className="bg-white"
										onChange={handlestart_dateChange}
									></InputPopUp>
									<InputPopUp
										title="Until"
										type="date"
										value={end_date}
										className="bg-white"
										onChange={handleend_dateChange}
									></InputPopUp>
									<label className="mt-4 gap-24 pr-14">
										<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
											Additonal Information
										</span>
										<textarea
											id="description"
											value={description}
											onChange={handledescriptionChange}
											placeholder="Description"
											className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
									</button>
									<button
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={openEducationPopUp}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{isEditEducationOpen && editEducationIndex !== -1 && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">
									{" "}
									Edit Detail Education
								</h2>
							</div>
							<div className="ml-14 py-5">
								<InputPopUp
									type="text"
									title="Institution"
									value={institution}
									onChange={handleStudyIntitutionChange}
									className="bg-white"
									required
								></InputPopUp>
								<InputPopUp
									title="Title"
									type="text"
									value={title}
									className="bg-white"
									required
									onChange={handletitleChange}
								></InputPopUp>
								<InputPopUp
									title="Departement"
									type="text"
									value={departement}
									className="bg-white"
									required
									onChange={handledepartementChange}
								></InputPopUp>
								<InputPopUp
									title="From"
									type="date"
									value={start_date}
									className="bg-white"
									onChange={handlestart_dateChange}
								></InputPopUp>
								<InputPopUp
									title="Until"
									type="date"
									value={end_date}
									className="bg-white"
									onChange={handleend_dateChange}
								></InputPopUp>
								<label className="mt-4 gap-24 pr-14">
									<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
										Additonal Information
									</span>
									<textarea
										id="description"
										value={description}
										onChange={handledescriptionChange}
										placeholder="Description"
										className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
										maxLength={500}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
											}
										}}
									></textarea>
								</label>
							</div>
							<div className="flex justify-end border-t-2 border-gold/60">
								<button
									onClick={() => handleEditEducationSave(editEducationIndex)}
									className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
								>
									Save
								</button>
								<button
									className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
									onClick={closeEditEducation}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{education.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{education.map((education, index) => (
						<div className="flex" key={index}>
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-[10px]">
									<span>
										<svg
											width="64"
											height="64"
											viewBox="0 0 64 64"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_1828_1997)">
												<path
													d="M10.656 25.6L32 38.4L64 19.2L32 0L0 19.2H32V25.6H10.656ZM0 25.6V51.2L6.4 44.096V29.44L0 25.6ZM32 64L16 54.4L9.6 50.56V31.36L32 44.8L54.4 31.36V50.56L32 64Z"
													fill="#B17C3F"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1828_1997">
													<rect width="64" height="64" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{education.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleEducationDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openEditEducation(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p>
											{education.title} , {education.departement}
										</p>
										<p className="text-black/60">
											{education.start_date.substr(0, 0 + 4)} -
											{education.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: education.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							) : (
								<div className="flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-2xl">
									<span>
										<svg
											width="64"
											height="64"
											viewBox="0 0 64 64"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_1828_1997)">
												<path
													d="M10.656 25.6L32 38.4L64 19.2L32 0L0 19.2H32V25.6H10.656ZM0 25.6V51.2L6.4 44.096V29.44L0 25.6ZM32 64L16 54.4L9.6 50.56V31.36L32 44.8L54.4 31.36V50.56L32 64Z"
													fill="#B17C3F"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1828_1997">
													<rect width="64" height="64" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{education.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleEducationDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openEditEducation(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p>
											{education.title} , {education.departement}
										</p>
										<p className="text-black/60">
											{education.start_date.substr(0, 0 + 4)} -
											{education.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: education.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">No Education Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank education to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Designer" && (
						<div className="flex flex-col items-center justify-center mt-24 pb-5">
							<p className="text-[19px] font-medium">No Education Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank education to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<button
					onClick={openEducationPopUp}
					className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov"
				>
					Add Education
				</button>
			</div>
		</div>
	);
}

function Experience() {
	const [experience, setExperience] = useState<
		{
			institution: string;
			title: string;
			departement: string;
			start_date: string;
			end_date: string;
			information: string;
		}[]
	>([]);
	const [institution, setInstitution] = useState("");
	const [title, setTitle] = useState("");
	const [departement, setDepartement] = useState("");
	const [information, setInformation] = useState("");
	const [start_date, setStart_date] = useState("");
	const [end_date, setEnd_date] = useState("");

	const handleInstitutionChange = (event: any) => {
		setInstitution(event.target.value);
	};

	const handleInformationChange = (event: any) => {
		setInformation(event.target.value);
	};

	const handleTitleChange = (event: any) => {
		setTitle(event.target.value);
	};

	const handleDepartementChange = (event: any) => {
		setDepartement(event.target.value);
	};

	const handleDateFromChange = (event: any) => {
		setStart_date(event.target.value);
	};

	const handleDateUntilChange = (event: any) => {
		setEnd_date(event.target.value);
	};

	const handleExperienceSubmit = (event: any) => {
		event.preventDefault();
		const newExperience = {
			institution,
			title,
			departement,
			start_date,
			end_date,
			information,
		};
		setExperience([...experience, newExperience]);

		setInstitution("");
		setTitle("");
		setInformation("");
		setDepartement("");
		setStart_date("");
		setEnd_date("");
	};

	const [isEditExperience, setIsEditExperience] = useState(false);
	const [editExperienceIndex, setEditExperienceIndex] = useState(-1);

	const openExperienceEdit = (index: number) => {
		const experienceToEdit = experience[index];
		setEditExperienceIndex(index);
		setInstitution(experienceToEdit.institution);
		setTitle(experienceToEdit.title);
		setStart_date(experienceToEdit.start_date);
		setEnd_date(experienceToEdit.end_date);
		setInformation(experienceToEdit.information);

		setIsEditExperience(true);
	};

	const handleEditExperienceSave = (index: any) => {
		const updateExperience = [...experience];
		updateExperience[index] = {
			...updateExperience[index],
			institution,
			title,
			start_date,
			end_date,
			information,
		};
		setExperience(updateExperience);
		setInstitution("");
		setTitle("");
		setStart_date("");
		setEnd_date("");
		setInformation("");
		setIsEditExperience(false);
	};

	const handleEditExperienceClose = () => {
		setIsEditExperience(false);
	};

	const handleExperienceDelete = (index: number) => {
		const updatedExperience = experience.filter((_, i) => i !== index);
		setExperience(updatedExperience);
	};

	const [experienceModal, setExperienceModal] = useState(false);

	const openExperiencePopUp = () => {
		setExperienceModal(!experienceModal);
	};

	return (
		<div>
			{experienceModal && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]">Detail Experience</h2>
							</div>

							<form id="experienceForm" onSubmit={handleExperienceSubmit}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="Institution"
										value={institution}
										onChange={handleInstitutionChange}
										required
										className="bg-white"
									></InputPopUp>
									<InputPopUp
										title="Title"
										type="text"
										value={title}
										required
										className="bg-white"
										onChange={handleTitleChange}
									></InputPopUp>
									<InputPopUp
										title="Departement"
										type="text"
										value={departement}
										required
										className="bg-white"
										onChange={handleDepartementChange}
									></InputPopUp>
									<InputPopUp
										title="From"
										type="date"
										value={start_date}
										required
										className="bg-white"
										onChange={handleDateFromChange}
									></InputPopUp>
									<InputPopUp
										title="Until"
										type="date"
										value={end_date}
										required
										className="bg-white"
										onChange={handleDateUntilChange}
									></InputPopUp>
									<label className="mt-4 gap-24 pr-14">
										<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
											Additonal Information
										</span>
										<textarea
											id="description"
											value={information}
											onChange={handleInformationChange}
											placeholder="Description"
											className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</label>
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
									</button>
									<button
										type="submit"
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={openExperiencePopUp}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{isEditExperience && editExperienceIndex != -1 && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center -top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]"> Edit Detail Project</h2>
							</div>
							<div className="ml-14 py-5">
								<InputPopUp
									type="text"
									title="Institution"
									value={institution}
									onChange={handleInstitutionChange}
									required
								></InputPopUp>
								<InputPopUp
									title="Title"
									type="text"
									value={title}
									required
									onChange={handleTitleChange}
								></InputPopUp>
								<InputPopUp
									title="Departement"
									type="text"
									value={departement}
									required
									className="bg-white"
									onChange={handleDepartementChange}
								></InputPopUp>
								<InputPopUp
									title="From"
									type="date"
									value={start_date}
									required
									onChange={handleDateFromChange}
								></InputPopUp>
								<InputPopUp
									title="Until"
									type="date"
									value={end_date}
									required
									onChange={handleDateUntilChange}
								></InputPopUp>
								<label className="mt-4 gap-24 pr-14">
									<span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
										Additonal Information
									</span>
									<textarea
										id="description"
										value={information}
										onChange={handleInformationChange}
										placeholder="Description"
										className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
										maxLength={500}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
											}
										}}
									></textarea>
								</label>
							</div>
							<div className="flex justify-end border-t-2 border-gold/60">
								<button
									onClick={() => handleEditExperienceSave(editExperienceIndex)}
									className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
								>
									Save
								</button>
								<button
									className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
									onClick={handleEditExperienceClose}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{experience.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{experience.map((experience, index) => (
						<div key={index} className="flex">
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-[10px]">
									<span>
										<svg
											width="51"
											height="49"
											viewBox="0 0 51 49"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.16683 48.3749C3.76892 48.3749 2.57179 47.8768 1.57546 46.8804C0.579125 45.8841 0.081806 44.6878 0.0835004 43.2916V15.3333C0.0835004 13.9353 0.581667 12.7382 1.578 11.7419C2.57433 10.7455 3.77061 10.2482 5.16683 10.2499H15.3335V5.16659C15.3335 3.76867 15.8317 2.57155 16.828 1.57521C17.8243 0.578881 19.0206 0.0815618 20.4168 0.0832563H30.5835C31.9814 0.0832563 33.1785 0.581423 34.1749 1.57776C35.1712 2.57409 35.6685 3.77037 35.6668 5.16659V10.2499H45.8335C47.2314 10.2499 48.4285 10.7481 49.4249 11.7444C50.4212 12.7408 50.9185 13.937 50.9168 15.3333V43.2916C50.9168 44.6895 50.4187 45.8866 49.4223 46.883C48.426 47.8793 47.2297 48.3766 45.8335 48.3749H5.16683ZM20.4168 10.2499H30.5835V5.16659H20.4168V10.2499Z"
												fill="#B17C3F"
											/>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{experience.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleExperienceDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openExperienceEdit(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p className="text-[15px]">
											{experience.title}, {experience.departement}
										</p>
										<p className="text-black/60 text-[15px]">
											{experience.start_date.substr(0, 0 + 4)} -
											{experience.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: experience.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							) : (
								<div className="flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-2xl">
									<span>
										<svg
											width="51"
											height="49"
											viewBox="0 0 51 49"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.16683 48.3749C3.76892 48.3749 2.57179 47.8768 1.57546 46.8804C0.579125 45.8841 0.081806 44.6878 0.0835004 43.2916V15.3333C0.0835004 13.9353 0.581667 12.7382 1.578 11.7419C2.57433 10.7455 3.77061 10.2482 5.16683 10.2499H15.3335V5.16659C15.3335 3.76867 15.8317 2.57155 16.828 1.57521C17.8243 0.578881 19.0206 0.0815618 20.4168 0.0832563H30.5835C31.9814 0.0832563 33.1785 0.581423 34.1749 1.57776C35.1712 2.57409 35.6685 3.77037 35.6668 5.16659V10.2499H45.8335C47.2314 10.2499 48.4285 10.7481 49.4249 11.7444C50.4212 12.7408 50.9185 13.937 50.9168 15.3333V43.2916C50.9168 44.6895 50.4187 45.8866 49.4223 46.883C48.426 47.8793 47.2297 48.3766 45.8335 48.3749H5.16683ZM20.4168 10.2499H30.5835V5.16659H20.4168V10.2499Z"
												fill="#B17C3F"
											/>
										</svg>
									</span>
									<span className="ml-8 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{experience.institution}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleExperienceDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button onClick={() => openExperienceEdit(index)}>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</button>
											</div>
										</div>
										<p className="text-[15px]">
											{experience.title}, {experience.departement}
										</p>
										<p className="text-black/60 text-[15px]">
											{experience.start_date.substr(0, 0 + 4)} -
											{experience.end_date.substr(0, 0 + 4) === "2023"
												? " Now"
												: experience.end_date.substr(0, 0 + 4)}
										</p>
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">
								No Experience Registered
							</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank experience to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Designer" && (
						<div className="flex flex-col items-center justify-center mt-24 pb-5">
							<p className="text-[19px] font-medium">
								No Experience Registered
							</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank experience to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<button
					onClick={openExperiencePopUp}
					className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov"
				>
					Add Experience
				</button>
			</div>
		</div>
	);
}

function Design() {
	const designItem = [
		{
			id: 1,
			name: "Blue Resort Bali",
			bedroom: 3,
			bathroom: 2,
			area: 323,
			price: 476000000,
			image: "/assets/browse/Build14.png",
		},
		{
			id: 1,
			name: "Blue Resort Bali",
			bedroom: 3,
			bathroom: 2,
			area: 323,
			price: 476000000,
			image: "/assets/browse/Build14.png",
		},
	];

	const [design, setDesign] = useState<
		{
			name: string;
			preview_image: string[];
			price: number;
			bedroom_count: number;
			bathroom_count: number;
			property_size: number;
		}[]
	>([
		{
			name: designItem[0].name,
			preview_image: [designItem[0].image],
			price: designItem[0].price,			
			bedroom_count: designItem[0].bedroom,
			bathroom_count: designItem[0].bathroom,
			property_size: designItem[0].area
		},
	]);

	const [name, setName] = useState(designItem[0].name);
	const [preview_image, setPreview_image] = useState<string[]>([
		designItem[0].image,
	]);
	const [price, setprice] = useState(0);
	const [bedroom_count, setbedroom_count] = useState(designItem[0].bedroom);
	const [bathroom_count, setbathroom_count] = useState(designItem[0].bathroom);
	const [property_size, setProperty_size] = useState(designItem[0].price);

	const handleDesignDelete = (index: number) => {
		const updatedDesign = design.filter((_, i) => i !== index);
		setDesign(updatedDesign);
	};

	return (
		<div>
			{design.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{design.map((item, index) => (
						<div className="flex" key={index}>
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-8 py-6 rounded-2xl">
									<span>
										<Image
											className="rounded-[10px]"
											src={item.preview_image[index]}
											alt=""
											width={75}
											height={66}
										></Image>
									</span>
									<span className="ml-5 w-full ">
										<div className="flex w-full  justify-between">
											<p className="text-[17px] font-medium">
												{item.name}
											</p>

											<div className="flex gap-2">
												<button onClick={() => handleDesignDelete(index)}>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
															fill="#B17C3F"
														/>
													</svg>
												</button>

												<button
												// onClick={() => openEditEducation(index)}
												>
													<svg
														width="15"
														height="16"
														viewBox="0 0 15 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
															stroke="#B17C3F"
														/>
													</svg>
												</button>
											</div>
										</div>
										<div className=" flex gap-1">
											<span className=" flex gap-1">
												<svg
													width="16"
													height="15"
													viewBox="0 0 16 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="my-auto"
												>
													<path
														d="M1.125 13.1663V7.49967C1.125 7.12395 1.27426 6.76362 1.53993 6.49794C1.80561 6.23226 2.16594 6.08301 2.54167 6.08301M2.54167 6.08301H13.875M2.54167 6.08301V3.24967C2.54167 2.87395 2.69092 2.51362 2.9566 2.24794C3.22228 1.98226 3.58261 1.83301 3.95833 1.83301H12.4583C12.8341 1.83301 13.1944 1.98226 13.4601 2.24794C13.7257 2.51362 13.875 2.87395 13.875 3.24967V6.08301M13.875 6.08301C14.2507 6.08301 14.6111 6.23226 14.8767 6.49794C15.1424 6.76362 15.2917 7.12395 15.2917 7.49967V13.1663M8.20833 1.83301V6.08301M1.125 11.7497H15.2917"
														stroke="#4B4B4B"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<p className="my-auto text-[14px]">
													{item.bedroom_count}
												</p>
											</span>
											<span className=" flex gap-1">
												<svg
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="my-auto"
												>
													<path
														d="M14.2508 8.91699V9.62533C14.2508 10.9782 13.4929 12.1541 12.3737 12.7491L12.8341 14.5837H11.4175L11.0633 13.167H4.68831L4.33415 14.5837H2.91748L3.3779 12.7491C2.81065 12.4482 2.33616 11.9983 2.00543 11.448C1.67469 10.8976 1.50024 10.2674 1.50081 9.62533V8.91699H0.79248V7.50033H13.5425V2.54199C13.5425 2.35413 13.4679 2.17396 13.335 2.04113C13.2022 1.90829 13.022 1.83366 12.8341 1.83366C12.48 1.83366 12.2108 2.07449 12.1258 2.39324C12.5721 2.77574 12.8341 3.34241 12.8341 3.95866H8.58415C8.58415 3.39507 8.80803 2.85457 9.20655 2.45606C9.60506 2.05754 10.1456 1.83366 10.7091 1.83366H10.8296C11.12 1.01199 11.9062 0.416992 12.8341 0.416992C13.3977 0.416992 13.9382 0.640876 14.3368 1.03939C14.7353 1.43791 14.9591 1.97841 14.9591 2.54199V8.91699H14.2508ZM12.8341 8.91699H2.91748V9.62533C2.91748 10.1889 3.14136 10.7294 3.53988 11.1279C3.93839 11.5264 4.4789 11.7503 5.04248 11.7503H10.7091C11.2727 11.7503 11.8132 11.5264 12.2118 11.1279C12.6103 10.7294 12.8341 10.1889 12.8341 9.62533V8.91699Z"
														fill="#4B4B4B"
													/>
												</svg>

												<p className="my-auto text-[14px]">
													{item.bathroom_count}
												</p>
											</span>
											<span className=" flex gap-1">
												<svg
													width="14"
													height="15"
													viewBox="0 0 14 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="my-auto"
												>
													<path
														d="M1.06982 6.79134V12.458C1.06982 12.6459 1.14445 12.826 1.27729 12.9589C1.41013 13.0917 1.5903 13.1663 1.77816 13.1663H7.44482M1.06982 3.24967V2.54134C1.06982 2.35348 1.14445 2.17331 1.27729 2.04047C1.41013 1.90764 1.5903 1.83301 1.77816 1.83301H2.48649M6.02816 1.83301H7.44482M10.9865 1.83301H11.6948C11.8827 1.83301 12.0629 1.90764 12.1957 2.04047C12.3285 2.17331 12.4032 2.35348 12.4032 2.54134V3.24967M12.4032 6.79134V8.20801M12.4032 11.7497V12.458C12.4032 12.6459 12.3285 12.826 12.1957 12.9589C12.0629 13.0917 11.8827 13.1663 11.6948 13.1663H10.9865"
														stroke="#4B4B4B"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M1.06982 7.5H6.02816C6.21602 7.5 6.39619 7.57463 6.52902 7.70747C6.66186 7.8403 6.73649 8.02047 6.73649 8.20833V13.1667"
														stroke="#4B4B4B"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<p className="my-auto text-[14px]">
													{item.property_size} m2
												</p>
											</span>
										</div>
										<p className="text-[15px] font-semibold">
											Rp. {Number (item.price).toLocaleString("en-US")}.00
										</p>
									</span>
								</div>
							) : (
								// <div className="flex w-[740px] border-2 border-goldhov/70 px-10 py-6 rounded-2xl">
								// 	<span>
								// 		<svg
								// 			width="64"
								// 			height="64"
								// 			viewBox="0 0 64 64"
								// 			fill="none"
								// 			xmlns="http://www.w3.org/2000/svg"
								// 		>
								// 			<g clipPath="url(#clip0_1828_1997)">
								// 				<path
								// 					d="M10.656 25.6L32 38.4L64 19.2L32 0L0 19.2H32V25.6H10.656ZM0 25.6V51.2L6.4 44.096V29.44L0 25.6ZM32 64L16 54.4L9.6 50.56V31.36L32 44.8L54.4 31.36V50.56L32 64Z"
								// 					fill="#B17C3F"
								// 				/>
								// 			</g>
								// 			<defs>
								// 				<clipPath id="clip0_1828_1997">
								// 					<rect width="64" height="64" fill="white" />
								// 				</clipPath>
								// 			</defs>
								// 		</svg>
								// 	</span>
								// 	<span className="ml-8 w-full ">
								// 		<div className="flex w-full  justify-between">
								// 			<p className="text-[17px] font-medium">
								// 				{/* {education.studyInstitution} */}
								// 			</p>

								// 			<div className="flex gap-2">
								// 				<button
								// 				// onClick={() => handleEducationDelete(index)}
								// 				>
								// 					<svg
								// 						width="17"
								// 						height="16"
								// 						viewBox="0 0 17 16"
								// 						fill="none"
								// 						xmlns="http://www.w3.org/2000/svg"
								// 					>
								// 						<path
								// 							d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
								// 							fill="#B17C3F"
								// 						/>
								// 					</svg>
								// 				</button>

								// 				<button
								// 				// onClick={() => openEditEducation(index)}
								// 				>
								// 					<svg
								// 						width="15"
								// 						height="16"
								// 						viewBox="0 0 15 16"
								// 						fill="none"
								// 						xmlns="http://www.w3.org/2000/svg"
								// 					>
								// 						<path
								// 							d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
								// 							stroke="#B17C3F"
								// 						/>
								// 					</svg>
								// 				</button>
								// 			</div>
								// 		</div>
								// 		<p>

								// 		</p>
								// 	</span>
								// </div>
								""
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">No Design Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank design to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Designer" && (
						<div className="flex flex-col items-center justify-center mt-24 pb-5">
							<p className="text-[19px] font-medium">No Design Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank design to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<Link href={"./sellDesignForm"}>
					<button className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov">
						Add Design
					</button>
				</Link>
			</div>
		</div>
	);
}

function Account() {
	
	const data = [
		{
			email: "ramadhanialqadri12@gmail.com",
			password: "12345",
		},
	];

	//STATE EMAIL
	const [newEmail, setNewEmail] = useState("");
	const [lastEmail, setLastEmail] = useState(data[0].email);
	//BATAS STATE EMAIL

	//EVENT HANDLE EMAIL
	const handleNewEmailChange = (event: any) => {
		setNewEmail(event.target.value);
	};

	const handleSaveEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission behavior
		if (password === data[0].password) {
			setLastEmail(newEmail); // Update lastEmail with the value of newEmail
		} else {
			// Passwords don't match, show an error message or handle it accordingly
		}
	};
	//BATAS EVENT HANDLER EMAIL

	//STATE PASSWORD
	const [password, setPassword] = useState(""); // ini untuk LastPassword
	const [newPassword, setNewPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");
	//BATAS STATE PASSWORD

	//EVENT HANDLER PASSWORD

	const handlePasswordInput = (event: any) => {
		setPassword(event.target.value);
	};
	const handleNewPasswordInput = (event: any) => {
		setNewPassword(event.target.value);
	};

	const handleConfirmPasswordInput = (event: any) => {
		setConfirmedPassword(event.target.value);
	};

	const handleSavePassword = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission behavior
		if (password === data[0].password) {
			if (newPassword === confirmedPassword) {
				setPassword(newPassword); // Update LastPassword with the value of newEmail
			}
		} else {
			// Passwords don't match, show an error message or handle it accordingly
		}
	};

	//BATAS EVENT HANDLER PASSWORD

	const [isEditEmailOpen, setIsEditEmailOpen] = useState(false);
	const openEditEmailPopUp = () => {
		setIsEditEmailOpen(!isEditEmailOpen);
	};
	
	const closeEditEmail = () => {
		setIsEditEmailOpen(false);
		setPassword("");
		setNewEmail("")
	}

	const [isEditPasswordOpen, setIsEditPasswordOpen] = useState(false);
	const openEditPasswordPopUp = () => {
		setIsEditPasswordOpen(!isEditPasswordOpen);
	};
	
	const closeEditPassword = () => {
		setIsEditPasswordOpen(false);
		setPassword("");
		setNewPassword("")
		setConfirmedPassword("")
	}

	const [isSaveClcik, setIsClick] = useState(false);
	const saveClick = () => {
		if (password !== data[0].password) {
			setIsClick(true);
			setTimeout(() => {
				setIsClick(false);
			}, 2000); // Hide the message after 2 seconds
		} else {
			// Passwords match, proceed with saving
		}
	};

	console.log(password, newPassword, confirmedPassword);

	return (
		<div>
			{isEditEmailOpen && (
				<div className="fixed inset-0 z-10 flex items-center justify-center">
					<div className="absolute bottom-0 -left-[200px] -top-[164px] z-10 flex w-screen h-[100vh] items-center justify-center bg-black/40">
						<div className="modal-content w-[553px] rounded-3xl bg-white">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]"> Email</h2>
							</div>
							<form action="" onSubmit={handleSaveEmail}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="New Email"
										value={newEmail}
										onChange={handleNewEmailChange}
									></InputPopUp>
									<InputPopUp
										type="password"
										title="Current Password"
										value={password}
										onChange={handlePasswordInput}
									></InputPopUp>
									{isSaveClcik && (
										<p className="text-[10px] text-red-600 ml-1">
											Wrong Password
										</p>
									)}
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
										onClick={saveClick}
									>
										Save
									</button>
									<button
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={closeEditEmail}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{isEditPasswordOpen && (
				<div className="fixed inset-0 z-10 flex items-center justify-center">
					<div className="absolute bottom-0 -left-[200px] -top-[164px] z-10 flex w-screen h-[100vh] items-center justify-center bg-black/40">
						<div className="modal-content w-[553px] rounded-3xl bg-white">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]"> Password</h2>
							</div>
							<form action="" onSubmit={handleSavePassword}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="password"
										title="Current password"
										value={password}
										onChange={handlePasswordInput}
									></InputPopUp>
									{isSaveClcik && (
										<p className="text-[10px] text-red-600 ml-[2px]">
											Wrong Password
										</p>
									)}
									<InputPopUp
										type="password"
										title="New Password"
										value={newPassword}
										onChange={handleNewPasswordInput}
									></InputPopUp>
									<InputPopUp
										type="password"
										title="Confirm Password"
										value={confirmedPassword}
										onChange={handleConfirmPasswordInput}
									></InputPopUp>
									{newPassword !== confirmedPassword ? (
										<p className="text-[10px] text-red-600 ml-[2px]">
											Password does not match
										</p>
									) : (
										" "
									)}
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
										onClick={saveClick}
									>
										Save
									</button>
									<button
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={closeEditPassword}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			<div className="px-20  ">
				<div className="w-full flex flex-col gap-5 ">
					<div className="flex w-full">
						<p className="text-gold text-[15px] w-[187px]">Email</p>
						<span className="flex gap-5">
							<p className="text-[13px] font-medium my-auto">{lastEmail}</p>
							<button
								onClick={openEditEmailPopUp}
								className="rounded-full bg-[#EFE5D9] py-1 px-2 text-gold text-[9px]"
							>
								{" "}
								change
							</button>
						</span>
					</div>
					<div className="flex justify-between w-[234px]">
						<p className="text-gold text-[15px]">Password</p>
						<span className="flex gap-5">
							<button
								onClick={openEditPasswordPopUp}
								className="rounded-full bg-[#EFE5D9] py-1 px-2 text-gold text-[9px]"
							>
								{" "}
								change
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function BankAccount() {
	const bankAccountData = [
		{
			bankName: "Bank BRI",
			accountNumber: "1967092365",
		},
	];
	const [bankAccount, setBankAccount] = useState<
		{ bankName: string; accountNumber: string }[]
	>([]);
	const [bankName, setBankName] = useState("");
	const [accountNumber, setAccountNumber] = useState("");

	const handleBankNameChange = (event: any) => {
		setBankName(event.target.value);
	};
	const handleAccountNumberChange = (event: any) => {
		setAccountNumber(event.target.value);
	};

	const handleBankAccountSave = (event: any) => {
		event.preventDefault();
		const newBankAccount = {
			bankName,
			accountNumber,
		};
		setBankAccount([...bankAccount, newBankAccount]);
		setBankName("");
		setAccountNumber("");
	};
	const handleBankAccountDelete = (index: number) => {
		const updateBankAccount = bankAccount.filter((_, i) => i !== index);
		setBankAccount(updateBankAccount);
	};

	const [isPopUpOpen, setIsPopUpOpen] = useState(false);
	const handleOpenPopUp = () => {
		setIsPopUpOpen(!isPopUpOpen);
	};
	const handleClosePopUp = () => {
		setIsPopUpOpen(false);
	};

	return (
		<div>
			{isPopUpOpen && (
				<div className="">
				<div className="flex h-full w-full fixed left-0 justify-center top-20">
					<div className="absolute modal-content w-[553px] rounded-3xl bg-white drop-shadow-landingShado">
							<div className="border-b-2 border-gold/60">
								<h2 className="mx-8 my-4  text-[18px]"> Bank Account</h2>
							</div>
							<form action="" onSubmit={handleBankAccountSave}>
								<div className="ml-14 py-5">
									<InputPopUp
										type="text"
										title="Bank"
										value={bankName}
										onChange={handleBankNameChange}
									></InputPopUp>
									<InputPopUp
										type="password"
										title="Account Number"
										value={accountNumber}
										onChange={handleAccountNumberChange}
									></InputPopUp>
								</div>
								<div className="flex justify-end border-t-2 border-gold/60">
									<button
										type="submit"
										className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
									</button>
									<button
										className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
										onClick={handleClosePopUp}
									>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			{bankAccount.length > 0 ? (
				<div className="flex flex-col items-center justify-center">
					{bankAccount.map((item, index) => (
						<div className="flex" key={index}>
							{index >= 0 ? (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-8 py-6 rounded-[10px]">
									<div className="flex gap-4 w-full">
										<Image
											className="rounded-[10px]"
											src="/assets/form/KARTUATM.png"
											alt=""
											width={96}
											height={58}
											objectFit="content"
										></Image>
										<div className="my-auto">
											<p className="text-[13px] font-medium">{item.bankName}</p>
											<p className="text-[11px] font-normal">
												{item.accountNumber}
											</p>
										</div>
									</div>
									<div className="w-full flex justify-end items-end">
										<button
											onClick={() => handleBankAccountDelete(index)}
											className="text-[13px] border-gold border-2 rounded-full text-gold py-1 px-5 hover:bg-goldhov hover:border-goldhov"
										>
											Delete
										</button>
									</div>
								</div>
							) : (
								<div className="mb-6 flex w-[740px] border-2 border-goldhov/70 px-8 py-6 rounded-[10px]">
									<div className="flex gap-4 w-full">
										<Image
											className="rounded-[10px]"
											src="/assets/form/KARTUATM.png"
											alt=""
											width={96}
											height={58}
											objectFit="content"
										></Image>
										<div className="my-auto">
											<p className="text-[13px] font-medium">{item.bankName}</p>
											<p className="text-[11px] font-normal">
												{item.accountNumber}
											</p>
										</div>
									</div>
									<div className="w-full flex justify-end items-end">
										<button className="text-[13px] border-gold border-2 rounded-full text-gold py-1 px-5 hover:bg-goldhov hover:border-goldhov">
											Delete
										</button>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					{user.role === "" && (
						<div className="flex flex-col items-center justify-center mt-8 pb-5">
							<p className="text-[19px] font-medium">No Account Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank account to make transactions easier.
							</p>
						</div>
					)}
					{user.role === "Admin" && (
						<div className="flex flex-col items-center justify-center mt-36 pb-5">
							<p className="text-[19px] font-medium">No Account Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank account to make transactions easier.
							</p>
						</div>
					)}

					{user.role === "Designer" && (
						<div className="flex flex-col items-center justify-center mt-24 pb-5">
							<p className="text-[19px] font-medium">No Account Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank account to make transactions easier.
							</p>
						</div>
					)}

					{user.role === "Contractor" && (
						<div className="flex flex-col items-center justify-center mt-16 pb-5">
							<p className="text-[19px] font-medium">No Account Registered</p>
							<p className="text-[12px]  text-[#BEB8B8]">
								Add your bank account to make transactions easier.
							</p>
						</div>
					)}
				</div>
			)}

			<div className="flex justify-center">
				<button
					onClick={handleOpenPopUp}
					className="bg-gold rounded-full py-2 px-12 text-white text-[12px] hover:bg-goldhov"
				>
					Add Bank
				</button>
			</div>
		</div>
	);
}

export default function Setting() {
	const [selectedTab, setSelectedTab] = useState<string | null>("Profile");
	const [color, setColor] = useState([
		"#B17C3F",
		"black",
		"black",
		"black",
		"black",
		"black",
		"black",
		"black",
		"black",
	]);
	const [prevItem, setPrevItem] = useState<number>(0);

	const handleColor = (idx: number) => {
		const temp = [...color];
		temp[idx] = "#B17C3F";

		if (prevItem !== idx) {
			setPrevItem(idx);
			temp[prevItem] = "black";
		}
		setColor(temp);
	};

	const navItem = [
		{
			name: "Profile",
			role: ["Admin", "", "Designer", "Contractor"],
			icon: (
				<svg
					width="18"
					height="20"
					viewBox="0 0 18 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M1 19V18C1 14.6863 3.68629 12 7 12H11C14.3137 12 17 14.6863 17 18V19"
						stroke={color[0]}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						className="transition-all delay-75"
						d="M9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9Z"
						stroke={color[0]}
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			),
		},
		{
			name: "Project",
			role: ["Admin", "Designer", "Contractor"],
			icon: (
				<svg
					width="22"
					height="24"
					viewBox="0 0 22 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M13.5084 2.746L13.7496 3.4H14.4467H19.5556C20.3651 3.4 21 4.0495 21 4.8V21.6C21 22.3505 20.3651 23 19.5556 23H2.44444C1.63491 23 1 22.3505 1 21.6V4.8C1 4.0495 1.63491 3.4 2.44444 3.4H7.55333H8.25039L8.49157 2.746C8.86538 1.73234 9.84535 1 11 1C12.1547 1 13.1346 1.73234 13.5084 2.746ZM13.2222 3.6C13.2222 2.3705 12.2071 1.4 11 1.4C9.79287 1.4 8.77778 2.3705 8.77778 3.6C8.77778 4.8295 9.79287 5.8 11 5.8C12.2071 5.8 13.2222 4.8295 13.2222 3.6ZM6.11111 20.2H12.2222C13.4294 20.2 14.4444 19.2295 14.4444 18C14.4444 16.7705 13.4294 15.8 12.2222 15.8H6.11111C4.90398 15.8 3.88889 16.7705 3.88889 18C3.88889 19.2295 4.90398 20.2 6.11111 20.2ZM6.11111 15.4H15.8889C17.096 15.4 18.1111 14.4295 18.1111 13.2C18.1111 11.9705 17.096 11 15.8889 11H6.11111C4.90398 11 3.88889 11.9705 3.88889 13.2C3.88889 14.4295 4.90398 15.4 6.11111 15.4ZM6.11111 10.6H15.8889C17.096 10.6 18.1111 9.6295 18.1111 8.4C18.1111 7.1705 17.096 6.2 15.8889 6.2H6.11111C4.90398 6.2 3.88889 7.1705 3.88889 8.4C3.88889 9.6295 4.90398 10.6 6.11111 10.6Z"
						stroke={color[1]}
						strokeWidth="2"
					/>
				</svg>
			),
		},
		{
			name: "Member",
			role: ["Admin", "Contractor"],
			icon: (
				<svg
					width="25"
					height="18"
					viewBox="0 0 25 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M3.08035 5.5668C3.08023 4.64421 3.30893 3.73606 3.74586 2.92404C4.1828 2.11201 4.81427 1.42157 5.58347 0.914823C6.35268 0.408073 7.2355 0.100905 8.15254 0.0209455C9.06957 -0.0590136 9.99205 0.0907441 10.837 0.456749C11.682 0.822754 12.4229 1.39353 12.9932 2.11773C13.5635 2.84194 13.9452 3.69686 14.104 4.6056C14.2629 5.51435 14.1939 6.44842 13.9032 7.3238C13.6125 8.19918 13.1093 8.98841 12.4388 9.62051C13.7031 10.2354 14.8008 11.1468 15.6389 12.2775C16.4769 13.4081 17.0306 14.7246 17.2529 16.1154C17.2774 16.2701 17.2712 16.4282 17.2347 16.5806C17.1983 16.7329 17.1322 16.8766 17.0403 17.0034C16.9485 17.1302 16.8326 17.2376 16.6993 17.3194C16.566 17.4013 16.418 17.4561 16.2636 17.4807C16.1092 17.5052 15.9515 17.499 15.7994 17.4625C15.6474 17.4259 15.5041 17.3597 15.3776 17.2676C15.2511 17.1756 15.1439 17.0594 15.0622 16.9258C14.9805 16.7923 14.9259 16.6438 14.9014 16.4891C14.6634 14.9947 13.9016 13.6343 12.7529 12.6521C11.6042 11.67 10.1437 11.1305 8.63385 11.1305C7.12395 11.1305 5.66351 11.67 4.51479 12.6521C3.36607 13.6343 2.60431 14.9947 2.36633 16.4891C2.34174 16.6438 2.28698 16.7922 2.20518 16.9258C2.12337 17.0593 2.01613 17.1754 1.88956 17.2674C1.763 17.3594 1.61959 17.4255 1.46753 17.462C1.31547 17.4984 1.15774 17.5045 1.00334 17.4799C0.848935 17.4552 0.700888 17.4003 0.567648 17.3183C0.434408 17.2364 0.318585 17.1289 0.226792 17.002C0.134999 16.8752 0.0690341 16.7314 0.0326629 16.579C-0.0037083 16.4266 -0.00977317 16.2685 0.0148145 16.1138C0.237486 14.7235 0.791313 13.4076 1.62935 12.2776C2.46738 11.1475 3.56492 10.2366 4.82891 9.62211C4.27621 9.10196 3.83586 8.47369 3.5351 7.77616C3.23434 7.07863 3.07957 6.32667 3.08035 5.5668ZM17.3608 3.18132C18.2827 3.18197 19.1846 3.45082 19.957 3.95525C20.7294 4.45967 21.3391 5.17798 21.7121 6.02298C22.0851 6.86797 22.2053 7.80331 22.0582 8.71547C21.911 9.62762 21.5029 10.4774 20.8833 11.1615C21.8491 11.6421 22.7072 12.3146 23.4056 13.138C24.1039 13.9615 24.6277 14.9188 24.9453 15.9516C25.0082 16.1521 25.017 16.3657 24.9709 16.5707C24.9248 16.7757 24.8254 16.9649 24.6828 17.1189C24.5402 17.273 24.3595 17.3865 24.1589 17.448C23.9584 17.5094 23.7452 17.5166 23.541 17.4687C23.337 17.4211 23.1491 17.3205 22.9962 17.177C22.8433 17.0335 22.7308 16.8522 22.6699 16.6513C22.3856 15.7293 21.8673 14.8969 21.1659 14.2357C20.4645 13.5745 19.6039 13.1071 18.6682 12.8791C18.4084 12.8162 18.1772 12.6675 18.012 12.4569C17.8468 12.2463 17.7571 11.9861 17.7575 11.7181V11.1584C17.7573 10.9363 17.819 10.7186 17.9356 10.5298C18.0523 10.341 18.2192 10.1885 18.4175 10.0897C18.8986 9.85072 19.2849 9.4558 19.5137 8.96904C19.7425 8.48228 19.8004 7.93227 19.678 7.40836C19.5556 6.88445 19.2601 6.41741 18.8394 6.08309C18.4187 5.74877 17.8976 5.56683 17.3608 5.5668C17.0452 5.5668 16.7425 5.44113 16.5193 5.21745C16.2961 4.99377 16.1707 4.69039 16.1707 4.37406C16.1707 4.05772 16.2961 3.75435 16.5193 3.53067C16.7425 3.30698 17.0452 3.18132 17.3608 3.18132ZM8.63385 2.38616C8.21125 2.37658 7.79099 2.45172 7.39776 2.60717C7.00453 2.76262 6.64624 2.99524 6.34395 3.29138C6.04165 3.58751 5.80142 3.9412 5.63738 4.33167C5.47334 4.72214 5.38878 5.14152 5.38868 5.56519C5.38857 5.98886 5.47292 6.40828 5.63676 6.79883C5.80061 7.18938 6.04066 7.54319 6.34281 7.83948C6.64496 8.13577 7.00313 8.36857 7.39628 8.52421C7.78944 8.67986 8.20965 8.75521 8.63226 8.74584C9.46142 8.72746 10.2505 8.38448 10.8305 7.79032C11.4105 7.19615 11.7353 6.39802 11.7355 5.56678C11.7357 4.73554 11.4113 3.93724 10.8316 3.34279C10.2519 2.74833 9.463 2.40495 8.63385 2.38616Z"
						fill={color[2]}
					/>
				</svg>
			),
		},
		{
			name: "Education",
			role: ["Admin", "Designer"],
			icon: (
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M4.9 19.9738V14.5062L12.4855 19.0575L13 19.3662L13.5145 19.0575L21.1 14.5062V19.9738L13 24.8338L7.0145 21.2425L4.9 19.9738ZM14 7.8V6.8H13H3.61032L13 1.16619L24.0563 7.8L12.9999 14.4339L7.94086 11.4H13H14V10.4V7.8ZM1 18.196V12.1662L1.6 12.5262V17.53L1 18.196Z"
						stroke={color[3]}
						strokeWidth="2"
					/>
				</svg>
			),
		},
		{
			name: "Experience",
			role: ["Admin", "Designer"],
			icon: (
				<svg
					width="21"
					height="20"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.3333 3.5C16.3333 2.57174 15.9646 1.6815 15.3082 1.02513C14.6518 0.368749 13.7616 0 12.8333 0H8.16667C7.23841 0 6.34817 0.368749 5.69179 1.02513C5.03542 1.6815 4.66667 2.57174 4.66667 3.5H3.5C2.57174 3.5 1.6815 3.86875 1.02513 4.52513C0.368749 5.1815 0 6.07174 0 7V16.3333C0 17.2616 0.368749 18.1518 1.02513 18.8082C1.6815 19.4646 2.57174 19.8333 3.5 19.8333H17.5C18.4283 19.8333 19.3185 19.4646 19.9749 18.8082C20.6313 18.1518 21 17.2616 21 16.3333V7C21 6.07174 20.6313 5.1815 19.9749 4.52513C19.3185 3.86875 18.4283 3.5 17.5 3.5H16.3333ZM12.8333 2.33333H8.16667C7.85725 2.33333 7.5605 2.45625 7.34171 2.67504C7.12292 2.89383 7 3.19058 7 3.5H14C14 3.19058 13.8771 2.89383 13.6583 2.67504C13.4395 2.45625 13.1428 2.33333 12.8333 2.33333ZM3.5 5.83333H17.5C17.8094 5.83333 18.1062 5.95625 18.325 6.17504C18.5438 6.39383 18.6667 6.69058 18.6667 7V16.3333C18.6667 16.6428 18.5438 16.9395 18.325 17.1583C18.1062 17.3771 17.8094 17.5 17.5 17.5H3.5C3.19058 17.5 2.89383 17.3771 2.67504 17.1583C2.45625 16.9395 2.33333 16.6428 2.33333 16.3333V7C2.33333 6.69058 2.45625 6.39383 2.67504 6.17504C2.89383 5.95625 3.19058 5.83333 3.5 5.83333Z"
						fill={color[4]}
					/>
				</svg>
			),
		},
		{
			name: "Design",
			role: ["Admin", "Designer"],
			icon: (
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M5.61438 23.951H2.04903V20.3856L8.07687 14.3578L8.78398 13.6507L8.07687 12.9436L1.41421 6.2809L6.2809 1.41421L12.9436 8.07687L13.6507 8.78398L14.3578 8.07687L15.7354 6.6992L19.3008 10.2646L17.9231 11.6422L17.216 12.3493L17.9231 13.0564L24.5858 19.7191L19.7191 24.5858L13.0564 17.9231L12.3493 17.216L11.6422 17.9231L5.61438 23.951ZM8.54911 12.473L9.25808 13.1803L9.96433 12.4703L12.474 9.94732L13.1774 9.24022L12.4722 8.53498L10.5467 6.60954L9.83963 5.90243L9.13252 6.60954L8.25945 7.48262L7.80134 7.02451L8.67442 6.15144L9.38153 5.44433L8.67442 4.73722L6.988 3.05081L6.2809 2.3437L5.57379 3.05081L3.05081 5.57379L2.34285 6.28175L3.05166 6.98886L8.54911 12.473ZM13.5278 16.0375L12.8207 16.7446L13.5278 17.4517L19.012 22.9359L19.7191 23.643L20.4262 22.9359L22.9492 20.4129L23.6563 19.7058L22.9492 18.9987L21.2628 17.3123L20.5557 16.6052L19.8486 17.3123L18.9755 18.1854L18.5174 17.7273L19.3905 16.8542L20.0976 16.1471L19.3905 15.44L17.465 13.5145L16.7579 12.8074L16.0508 13.5145L13.5278 16.0375ZM22.137 7.43069L18.5743 3.86799L20.5306 1.91098L24.0933 5.47368L22.137 7.43069Z"
						stroke={color[5]}
						strokeWidth="2"
					/>
				</svg>
			),
		},
		{
			name: "Account",
			role: ["Admin", "", "Designer", "Contractor"],
			icon: (
				<svg
					width="21"
					height="26"
					viewBox="0 0 21 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M0.500001 11.8301V11.83V4.24766L10.5 0.533376L20.5 4.24766V11.83C20.5 15.0151 19.545 17.9074 17.6267 20.5211C15.7371 23.0957 13.3642 24.7416 10.5 25.4841C7.63491 24.7407 5.26156 23.0944 3.37196 20.5198C1.45371 17.9061 0.499154 15.0143 0.500001 11.8301ZM10 23.27V23.9461L10.6464 23.7481C12.8784 23.0644 14.7369 21.7127 16.2173 19.7159C17.6924 17.7262 18.557 15.5015 18.8068 13.0507L18.8629 12.5H18.3094H11V2.7625V2.04341L10.3259 2.29379L2.45091 5.21879L2.125 5.33984V5.6875V12.415C2.125 12.6093 2.15245 12.8375 2.19884 13.0903L2.27405 13.5H2.69063H10V23.27Z"
						fill={color[6]}
						stroke={color[6]}
					/>
				</svg>
			),
		},
		{
			name: "Bank Account",
			role: ["Admin", "", "Designer", "Contractor"],
			icon: (
				<svg
					width="26"
					height="19"
					viewBox="0 0 26 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M0 3.95833C0 2.90852 0.428012 1.9017 1.18988 1.15937C1.95175 0.417038 2.98506 0 4.0625 0H21.9375C23.0149 0 24.0483 0.417038 24.8101 1.15937C25.572 1.9017 26 2.90852 26 3.95833V15.0417C26 16.0915 25.572 17.0983 24.8101 17.8406C24.0483 18.583 23.0149 19 21.9375 19H4.0625C2.98506 19 1.95175 18.583 1.18988 17.8406C0.428012 17.0983 0 16.0915 0 15.0417V3.95833ZM4.0625 1.58333C3.41603 1.58333 2.79605 1.83356 2.33893 2.27895C1.88181 2.72435 1.625 3.32844 1.625 3.95833V6.01667H24.375V3.95833C24.375 3.32844 24.1182 2.72435 23.6611 2.27895C23.204 1.83356 22.584 1.58333 21.9375 1.58333H4.0625ZM1.625 15.0417C1.625 15.6716 1.88181 16.2756 2.33893 16.721C2.79605 17.1664 3.41603 17.4167 4.0625 17.4167H21.9375C22.584 17.4167 23.204 17.1664 23.6611 16.721C24.1182 16.2756 24.375 15.6716 24.375 15.0417V7.6H1.625V15.0417ZM17.7125 12.9833C17.497 12.9833 17.2903 13.0667 17.138 13.2152C16.9856 13.3637 16.9 13.565 16.9 13.775C16.9 13.985 16.9856 14.1863 17.138 14.3348C17.2903 14.4833 17.497 14.5667 17.7125 14.5667H21.2875C21.503 14.5667 21.7097 14.4833 21.862 14.3348C22.0144 14.1863 22.1 13.985 22.1 13.775C22.1 13.565 22.0144 13.3637 21.862 13.2152C21.7097 13.0667 21.503 12.9833 21.2875 12.9833H17.7125Z"
						fill={color[7]}
					/>
				</svg>
			),
		},
	];

	return (
		<div className="flex justify-center relative">
			<div className="mt-[2.1875rem]  w-[81.875rem] space-y-[1.3125rem]">
				<div>
					<p className="text-[1.25rem] font-medium">Setting</p>
				</div>
				<div className="flex w-full bg-white drop-shadow-landingShado p-[2.3125rem] rounded-[1.5625rem] ">
					{/* Nav Left */}
					<div className="w-[20.5625rem] space-y-6">
						{navItem.map(
							(item, idx) =>
								item.role.includes(user.role) && (
									<div
										key={idx}
										onClick={() => {
											setSelectedTab(item.name);

											handleColor(idx);
											setPrevItem(idx);
										}}
										className="cursor-pointer relative flex items-center space-x-[1.1rem]"
									>
										<div className="ml-6 flex z-10 justify-center items-center w-[1.5625rem] h-[1.5625rem]">
											{item.icon}
										</div>
										<p
											className={
												"ml-6 z-10 " +
												"text-[" +
												color[idx] +
												"] transition-all delay-75 "
											}
										>
											{item.name}
										</p>
										{selectedTab === item.name && (
											<motion.div
												layoutId="underline"
												className="-left-6 z-0 absolute w-[18.3125rem] h-[2.6875rem] bg-[#efe5d9] rounded-full"
											></motion.div>
										)}
									</div>
								), // check role
						)}
					</div>
					{/* content Right */}
					<div className="w-[58.375rem]  border-l-2">
						{selectedTab === "Profile" && <Profile />}
						{selectedTab === "Project" && <Project />}
						{selectedTab === "Member" && <Member />}
						{selectedTab === "Education" && <Education />}
						{selectedTab === "Experience" && <Experience />}
						{selectedTab === "Design" && <Design />}
						{selectedTab === "Account" && <Account />}
						{selectedTab === "Bank Account" && <BankAccount />}
					</div>
				</div>
			</div>
		</div>
	);
}

export function Content() {}
