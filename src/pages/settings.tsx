import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InputBoxSettings from "@/components/inputBoxSetting";
import Dropdown from "@/components/dropdwon";

function Profile() {
	const [biodata, setBiodata] = useState<
		{
			username: string;
			firstName: string;
			lastName: string;
			province: string;
			about: string;
			preview: string;
			backgroundPreview: string;
			selectedCity: string;
			propertyType: string[];
			propertyStyle: string[];
		}[]
	>([]);

	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [province, setProvince] = useState("");
	const [about, setAbout] = useState("");
	const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city
	const [propertyType, setPropertyType] = useState<string[]>([""]);
	const [propertyStyle, setPropertyStyle] = useState<string[]>([""]);
	const [preview, setPreview] = useState("");
	const [backgroundPreview, setBackgroundPreview] = useState("");

	const handleChangeUsername = (event: any) => {
		setUsername(event.target.value);
	};

	const handleChangeFirstname = (event: any) => {
		setFirstName(event.target.value);
	};

	const handleChangeLastName = (event: any) => {
		setLastName(event.target.value);
	};

	const handleChangeProvince = (event: any) => {
		setProvince(event);
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
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(file); // Read the selected file as a data URL
		} else {
			setPreview(""); // Clear the preview if no file is selected
		}
	};
	const handleClick = () => {
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
				setBackgroundPreview(reader.result as string);
			};
			reader.readAsDataURL(file); // Read the selected file as a data URL
		} else {
			setBackgroundPreview(""); // Clear the preview if no file is selected
		}
	};
	const handleClickBackground = () => {
		const fileInput = document.getElementById("BackgroundPicture");
		if (fileInput) {
			fileInput.click();
		}
	};

	const handleChangePropertyType = (index: number, value: string) => {
		const updatedPropertyType = [...propertyType];
		updatedPropertyType[index] = value;
		setPropertyType(updatedPropertyType);
	};

	const handleAddPropertyType = () => {
		setPropertyType([...propertyType, ""]);
	};

	const handleDeletePropertyType = (index: number) => {
		const updatedPropertType = propertyType.filter((_, i) => i !== index);
		setPropertyType(updatedPropertType);
	};

	const handleChangePropertyStyle = (index: number, value: string) => {
		const updatedPropertyStyle = [...propertyStyle];
		updatedPropertyStyle[index] = value;
		setPropertyStyle(updatedPropertyStyle);
	};

	const handleAddPropertyStyle = () => {
		setPropertyStyle([...propertyStyle, ""]);
	};

	const handleDeletePropertyStyle = (index: number) => {
		const updatedPropertStyle = propertyStyle.filter((_, i) => i !== index);
		setPropertyStyle(updatedPropertStyle);
	};

	const handleDropdown = (city: any) => {
		setSelectedCity(city);
	};
	console.log(biodata)
	const handleBiodataSubmit = (event: any) => {
		event.preventDefault();
		const newBiodata = {
			username,
			firstName,
			lastName,
			province,
			preview,
			backgroundPreview,
			propertyType: [...propertyType],
			propertyStyle: [...propertyStyle],
			selectedCity,
			about,
		};

		setBiodata([...biodata, newBiodata]);
		setPreview("");
		setBackgroundPreview("");
		setUsername("");
		setFirstName("");
		setLastName("");
		setProvince("");
		setPropertyType([]);
		setPropertyStyle([]);
		setSelectedCity("");
		setAbout("");
	};

	return (
		<div>
			<form action="" onSubmit={handleBiodataSubmit}>
				<div className="flex px-20">
					<div className="flex gap-8 ">
						<div className="border-2 border-gold rounded-[8px]">
							<div className="w-[18]rem">
								<div className="h-[158px] w-[159px]">
									{preview ? (
										<Image
											src={preview}
											alt="Preview"
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
										onClick={handleClick}
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
									{backgroundPreview ? (
										<Image
											src={backgroundPreview}
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
										onClick={handleClickBackground}
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
							value={firstName}
							placeholder={"Enter Firstname"}
							onChange={handleChangeFirstname}
						></InputBoxSettings>
						<InputBoxSettings
							form="biodata-Form"
							type="text"
							title="Lastname"
							value={lastName}
							placeholder={"Enter Lastname"}
							onChange={handleChangeLastName}
						></InputBoxSettings>

						<div>
							{propertyType.map((item, index) => (
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
											onChange={(e: any) => handleChangePropertyType(index, e)}
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
										{propertyType.length > index + 1 ? (
											<div className="w-full flex justify-end">
												<button onClick={() => handleDeletePropertyType(index)}>
													Delete Type
												</button>
											</div>
										) : (
											<button onClick={handleAddPropertyType} className="ml-2">
												+ Add Type
											</button>
										)}
									</div>
								</div>
							))}
						</div>

						<div>
							{propertyStyle.map((item, index) => (
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
											onChange={(e: any) => handleChangePropertyStyle(index, e)}
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
										{propertyStyle.length > index + 1 ? (
											<div className="w-full flex justify-end">
												<button
													onClick={() => handleDeletePropertyStyle(index)}
												>
													Delete Style
												</button>
											</div>
										) : (
											<button onClick={handleAddPropertyStyle} className="ml-2">
												+ Add Style
											</button>
										)}
									</div>
								</div>
							))}
						</div>

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
							value={province}
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
							value={selectedCity}
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
						<button
							type="submit"
							className="bg-gold rounded-full py-3 px-12 text-white text-[15px] hover:bg-goldhov "
						>
							Save
						</button>
					</div>
				</div>
			</form>
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
	const user = {
		role: "Admin",
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
		{
			name: "Notification",
			role: ["Admin", "", "Designer", "Contractor"],
			icon: (
				<svg
					width="21"
					height="24"
					viewBox="0 0 21 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M14.1957 18.0625V18.875C14.1957 19.737 13.8533 20.5636 13.2438 21.1731C12.6343 21.7826 11.8076 22.125 10.9457 22.125C10.0837 22.125 9.25708 21.7826 8.64759 21.1731C8.0381 20.5636 7.69569 19.737 7.69569 18.875V18.0625M19.6638 16.4086C18.3597 14.8125 17.4391 14 17.4391 9.5998C17.4391 5.57031 15.3814 4.13473 13.6879 3.4375C13.4629 3.34508 13.2512 3.13281 13.1826 2.90176C12.8855 1.8907 12.0527 1 10.9457 1C9.83865 1 9.00533 1.89121 8.71131 2.90277C8.64276 3.13637 8.431 3.34508 8.20604 3.4375C6.51045 4.13574 4.45483 5.56625 4.45483 9.5998C4.45229 14 3.53162 14.8125 2.22756 16.4086C1.68725 17.0697 2.16053 18.0625 3.10557 18.0625H18.7909C19.7308 18.0625 20.2011 17.0667 19.6638 16.4086Z"
						stroke={color[8]}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
	];
	return (
		<div className="flex justify-center">
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
						<Profile></Profile>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Content() {}
