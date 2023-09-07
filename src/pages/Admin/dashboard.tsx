import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { type } from "os";
import { open } from "fs/promises";
import { set } from "react-hook-form";

function User() {
	const userData = [
		{
			id: 1,
			avatar_url: "/assets/profile/avatar.jpg",
			name: "Muhammad Ramadhani Al-Qadri Shafika",
			email: "muhammaddzulhiraihan@gmail.com",
			role: "Designer",
		},
		{
			id: 2,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			role: "Contractor",
		},
		{
			id: 3,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			role: "Contractor",
		},
	];

	const [user, setUser] = useState<
		{ avatar_url: string; email: string; role: string; username: string }[]
	>([
		{
			username: userData[0].name,
			email: userData[0].name,
			avatar_url: userData[0].avatar_url,
			role: userData[0].role,
		},
	]);

	const [username, setUsername] = useState(userData[0].name);
	const [avatar_url, setAvatar_url] = useState(userData[0].avatar_url);
	const [email, setEmail] = useState(userData[0].email);
	const [role, setRole] = useState(userData[0].role);

	const handleUserDelete = (index: number) => {
		const updatedUser = user.filter((_, i) => i !== index);
		setUser(updatedUser);
	};

	return (
		<div>
			<div>
				{user.length > 0 ? (
					<div>
						<div className="bg-[#F5EEE6] ml-6 h-[47px] grid grid-cols-4 text-center text-[13px] items-center text-gold font-light">
							<p>Profile</p>
							<p>Email</p>
							<p>Role</p>
							<p>Action</p>
						</div>
						<div className="ml-6 mt-6 px-1">
							{user.map((item, index) => (
								<div key={index}>
									<div className="grid grid-cols-4 gap-4 mb-5">
										<div className="flex gap-3">
											<Image
												src={item.avatar_url}
												alt=""
												height={30}
												width={30}
												className="rounded-full object-fill"
											></Image>

											<p className="my-auto text-[13px] truncate overflow-hidden">
												{item.username}
											</p>
										</div>
										<div className="flex justify-center items-center">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.email}
											</p>
										</div>
										<div className="flex justify-center items-center text-center">
											<p className="text-[13px] truncate overflow-hidden">
												{item.role}
											</p>
										</div>
										<div>
											<div className="flex gap-4 w-[222.5px] items-center justify-center">
												<button className="hover:bg-goldhov hover:border-goldhov flex gap-2 border-2 border-gold py-1 px-2 rounded-[7px]">
													<svg
														width="12"
														height="12"
														viewBox="0 0 12 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.71318 1L10 2.50129L9.01902 3.64627L7.7322 2.14498L8.71318 1ZM4 8H5.28682L8.4125 4.35337L7.12568 2.85209L4 6.49871V8Z"
															fill="#B17C3F"
														/>
														<path
															d="M10 9H4.579C4.566 9 4.5525 9.005 4.5395 9.005C4.523 9.005 4.5065 9.0005 4.4895 9H3V2H6.4235L7.4235 1H3C2.4485 1 2 1.448 2 2V9C2 9.552 2.4485 10 3 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V4.666L10 5.666V9Z"
															fill="#B17C3F"
														/>
													</svg>
													<p className="text-[9px] text-gold">Edit</p>
												</button>
												<button
													onClick={() => handleUserDelete(index)}
													className="hover:bg-[#DC7567]/50 hover:border-[#DC7567]/50 flex gap-2 border-2 bg-[#DC7567] border-[#DC7567] py-1 px-2 rounded-[7px]"
												>
													<svg
														width="9"
														height="9"
														viewBox="0 0 9 9"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.1514 8.68566C1.90369 8.68566 1.69157 8.59109 1.51503 8.40193C1.33848 8.21278 1.25036 7.98566 1.25066 7.72059V1.44761H0.800293V0.482537H3.05213V0H5.75434V0.482537H8.00618V1.44761H7.55581V7.72059C7.55581 7.98598 7.46754 8.21326 7.29099 8.40241C7.11445 8.59157 6.90247 8.68598 6.65507 8.68566H2.1514ZM6.65507 1.44761H2.1514V7.72059H6.65507V1.44761ZM3.05213 6.75552H3.95287V2.41268H3.05213V6.75552ZM4.8536 6.75552H5.75434V2.41268H4.8536V6.75552Z"
															fill="white"
														/>
													</svg>

													<p className="text-[9px] text-white">Delete</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full mt-24">
						<p className="text-[19px] font-medium">No User Registered</p>
					</div>
				)}
			</div>
		</div>
	);
}

function RoleRequest() {
	const userData = [
		{
			id: 1,
			avatar_url: "/assets/profile/avatar.jpg",
			name: "Muhammad Ramadhani Al-Qadri Shafika",
			email: "muhammaddzulhiraihan@gmail.com",
			role: "Designer",
		},
		{
			id: 2,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			role: "Contractor",
		},
		{
			id: 3,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			role: "Contractor",
		},
	];

	const [user, setUser] = useState<
		{ avatar_url: string; email: string; role: string; username: string }[]
	>([
		{
			username: userData[0].name,
			email: userData[0].name,
			avatar_url: userData[0].avatar_url,
			role: userData[0].role,
		},
	]);

	const [username, setUsername] = useState("");
	const [avatar_url, setAvatar_url] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	const handleUserAccept = (index: number) => {
		//INI HANDLE UNTUK ACCEPT
	};

	const handleUserReject = (index: number) => {
		//INI HANDLE UNTUK REJECT
	};

	return (
		<div>
			<div>
				{user.length > 0 ? (
					<div>
						<div className="bg-[#F5EEE6] ml-6 h-[47px] grid grid-cols-4 text-center text-[13px] items-center text-gold font-light">
							<p>Profile</p>
							<p>Email</p>
							<p>Request As</p>
							<p>Action</p>
						</div>
						<div className="ml-6 mt-6 px-1">
							{user.map((item, index) => (
								<div key={index}>
									<div className="grid grid-cols-4 gap-4 mb-5">
										<div className="flex gap-3">
											<Image
												src={item.avatar_url}
												alt=""
												height={30}
												width={30}
												className="rounded-full object-fill"
											></Image>

											<p className="my-auto text-[13px] truncate overflow-hidden">
												{item.username}
											</p>
										</div>
										<div className="flex justify-center items-center">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.email}
											</p>
										</div>
										<div className="flex justify-center items-center text-center">
											<p className="text-[13px] truncate overflow-hidden">
												{item.role}
											</p>
										</div>
										<div>
											<div className="flex gap-4 w-[222.5px] items-center justify-center pr-3">
												<button
													onClick={() => handleUserAccept(index)}
													className="hover:bg-goldhov hover:border-goldhov flex gap-2 border-2 border-gold py-1 px-2 rounded-[7px]"
												>
													<p className="text-[9px] text-gold">Accept</p>
												</button>
												<button
													onClick={() => handleUserReject(index)}
													className="hover:bg-[#DC7567]/70 hover:border-[#DC7567]/50 flex gap-2 border-2 bg-[#DC7567] border-[#DC7567]/50 py-1 px-2 rounded-[7px]"
												>
													<p className="text-[9px] text-white">Reject</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full mt-24">
						<p className="text-[19px] font-medium">No User Requested</p>
					</div>
				)}
			</div>
		</div>
	);
}

function Design() {
	const userData = [
		{
			id: 1,
			preview_image: "/assets/landing/Build1.jpg",
			name: "Rumah Ala Jepang",
			property_type: "Villa",
		},
		{
			id: 2,
			preview_image: "/assets/profile/raihan.jpg",
			name: "BTN Ali",
			property_type: "Apartement",
		},
		{
			id: 3,
			preview_image: "/assets/profile/raihan.jpg",
			name: "Rumah Dinamis",
			property_type: "Apartement",
		},
	];

	const [design, setDesign] = useState<
		{ preview_image: string; property_type: string; name: string }[]
	>([
		{
			name: userData[0].name,
			property_type: userData[0].name,
			preview_image: userData[0].preview_image,
		},
	]);

	const [name, setName] = useState(userData[0].name);
	const [preview_image, setPreview_image] = useState(userData[0].preview_image);
	const [property_type, setProperty_type] = useState(userData[0].property_type);

	const handleDeleteDesign = (index: number) => {
		const updatedDesign = design.filter((_, i) => i !== index);
		setDesign(updatedDesign);
	};

	return (
		<div>
			<div>
				{design.length > 0 ? (
					<div>
						<div className="bg-[#F5EEE6] ml-6 h-[47px] grid grid-cols-4 text-center text-[13px] items-center text-gold font-light">
							<p>Preview</p>
							<p>Title</p>
							<p>Type</p>
							<p>Action</p>
						</div>
						<div className="ml-6 mt-6 px-1">
							{design.map((item, index) => (
								<div key={index}>
									<div className="grid grid-cols-4 gap-4 mb-5">
										<div className="flex gap-3 items-center justify-center">
											<Image
												src={item.preview_image}
												alt=""
												height={1500}
												width={1500}
												// fill={true}
												className="rounded-[7px] object-cover h-[72px] w-[72px]"
												style={{ objectFit: "fill" }}
											></Image>
										</div>
										<div className="flex justify-center items-center">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.name}
											</p>
										</div>
										<div className="flex justify-center items-center text-center">
											<p className="text-[13px] truncate overflow-hidden">
												{item.property_type}
											</p>
										</div>
										<div className="flex items-center justify-center">
											<div className="flex gap-4 w-[222.5px] items-center justify-center pr-3">
												<button className="hover:bg-goldhov hover:border-goldhov flex gap-2 border-2 border-gold py-1 px-2 rounded-[7px]">
													<svg
														width="12"
														height="12"
														viewBox="0 0 12 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M8.71318 1L10 2.50129L9.01902 3.64627L7.7322 2.14498L8.71318 1ZM4 8H5.28682L8.4125 4.35337L7.12568 2.85209L4 6.49871V8Z"
															fill="#B17C3F"
														/>
														<path
															d="M10 9H4.579C4.566 9 4.5525 9.005 4.5395 9.005C4.523 9.005 4.5065 9.0005 4.4895 9H3V2H6.4235L7.4235 1H3C2.4485 1 2 1.448 2 2V9C2 9.552 2.4485 10 3 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V4.666L10 5.666V9Z"
															fill="#B17C3F"
														/>
													</svg>
													<p className="text-[9px] text-gold">Edit</p>
												</button>
												<button
													onClick={() => handleDeleteDesign(index)}
													className="hover:bg-[#DC7567]/50 hover:border-[#DC7567]/50 flex gap-2 border-2 bg-[#DC7567] border-[#DC7567] py-1 px-2 rounded-[7px]"
												>
													<svg
														width="9"
														height="9"
														viewBox="0 0 9 9"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.1514 8.68566C1.90369 8.68566 1.69157 8.59109 1.51503 8.40193C1.33848 8.21278 1.25036 7.98566 1.25066 7.72059V1.44761H0.800293V0.482537H3.05213V0H5.75434V0.482537H8.00618V1.44761H7.55581V7.72059C7.55581 7.98598 7.46754 8.21326 7.29099 8.40241C7.11445 8.59157 6.90247 8.68598 6.65507 8.68566H2.1514ZM6.65507 1.44761H2.1514V7.72059H6.65507V1.44761ZM3.05213 6.75552H3.95287V2.41268H3.05213V6.75552ZM4.8536 6.75552H5.75434V2.41268H4.8536V6.75552Z"
															fill="white"
														/>
													</svg>

													<p className="text-[9px] text-white">Delete</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full mt-24">
						<p className="text-[19px] font-medium">No Design Submited</p>
					</div>
				)}
			</div>
		</div>
	);
}

function Complain() {
	const userData = [
		{
			id: 1,
			avatar_url: "/assets/profile/avatar.jpg",
			name: "Muhammad Ramadhani Al-Qadri Shafika",
			email: "muhammaddzulhiraihan@gmail.com",
			category: "Service",
			description:
				"Saya ingin melaporkan penipuan yang dilakukan oleh orang ini",
		},
		{
			id: 2,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			category: "Service",
			description:
				"Saya ingin melaporkan penipuan yang dilakukan oleh orang ini karena pesanan saya belum jadi sampai sekarang dari bulan yang lalu saya pesan",
		},
		{
			id: 3,
			avatar_url: "/assets/profile/raihan.jpg",
			name: "Dzulhi Raihan",
			email: "dzulhiraihan@gmail.com",
			category: "Service",
			description:
				"Saya ingin melaporkan penipuan yang dilakukan oleh orang ini",
		},
	];

	const [user, setUser] = useState<
		{
			avatar_url: string;
			email: string;
			category: string;
			username: string;
			description: string;
		}[]
	>([
		{
			username: userData[0].name,
			email: userData[0].email,
			avatar_url: userData[0].avatar_url,
			category: userData[0].category,
			description: userData[0].description,
		},
		{
			username: userData[1].name,
			email: userData[1].email,
			avatar_url: userData[1].avatar_url,
			category: userData[1].category,
			description: userData[1].description,
		},
	]);

	const [username, setUsername] = useState("");
	const [avatar_url, setAvatar_url] = useState("");
	const [email, setEmail] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");

	const [isCheckOpen, setIsCheckOpen] = useState(false);
	const [checkIndex, setCheckIndex] = useState(-1);

	const openCheck = (index: number) => {
		const detailComplain = user[index];
		setCheckIndex(index);
		setCategory(detailComplain.category);
		setDescription(detailComplain.description);
		setIsCheckOpen(true);
	};

	const closeCheck = () => {
		setIsCheckOpen(false);
	};

	return (
		<div>
			{isCheckOpen && checkIndex !== -1 && (
				<div
					onClick={closeCheck}
					className="fixed inset-0 z-10 flex items-center justify-center"
				>
					<div className="h-[379px] w-[553px] bg-white drop-shadow-landingShado rounded-[25px] ">
						<div className="w-full h-[50px] border-gold/40 border-b-2 flex justify-end items-center pr-5">
							<CloseIcon className="text-gold" onClick={closeCheck}></CloseIcon>
						</div>
						<div className="w-full px-6 mt-3  h-[220px]">
							<p className="text-gold text-[13px]">
								Category : <span className="text-black">{category}</span>
							</p>
							<p className="text-gold text-[13px] mt-2">Description :</p>
							<p className="text-[13px] mt-2">{description}</p>
						</div>
						<div className="flex items-center justify-center">
							<button className="text-[13px] font-medium text-gold py-1 px-5 rounded-full border-gold bg-white border-2 hover:bg-goldhov">
								Download Attachment
							</button>
						</div>
					</div>
				</div>
			)}
			<div>
				{user.length > 0 ? (
					<div>
						<div className="bg-[#F5EEE6] ml-6 h-[47px] grid grid-cols-4 text-center text-[13px] items-center text-gold font-light">
							<p>Profile</p>
							<p>Email</p>
							<p>Category</p>
							<p>Action</p>
						</div>
						<div className="ml-6 mt-6 px-1">
							{user.map((item, index) => (
								<div key={index}>
									<div className="grid grid-cols-4 gap-4 mb-5">
										<div className="flex gap-3">
											<Image
												src={item.avatar_url}
												alt=""
												height={30}
												width={30}
												className="rounded-full object-fill"
											></Image>

											<p className="my-auto text-[13px] truncate overflow-hidden">
												{item.username}
											</p>
										</div>
										<div className="flex justify-center items-center">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.email}
											</p>
										</div>
										<div className="flex justify-center items-center text-center">
											<p className="text-[13px] truncate overflow-hidden">
												{item.category}
											</p>
										</div>
										<div>
											<div className="flex gap-4 w-[222.5px] items-center justify-center pr-3">
												<button
													onClick={() => openCheck(index)}
													className="hover:bg-goldhov hover:border-goldhov flex gap-2 border-2 border-gold py-1 px-2 rounded-[7px]"
												>
													<p className="text-[9px] text-gold">Check</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full mt-24">
						<p className="text-[19px] font-medium">No Users Complain</p>
					</div>
				)}
			</div>
		</div>
	);
}

function Transaction() {
	const userData = [
		{
			id: 1,
			type: "Build",
			status: "Rumah Ala Jepang",
			contributor: [
				{
					avatar_url: "/assets/profile/avatar.jpg",
					name: "Raihan",
				},
				{
					avatar_url: "/assets/profile/avatar.jpg",
					name: "Raihan",
				},
			],
		},
		{
			id: 2,
			type: "Build",
			status: "Rumah Ala Jepang",
			contributor: [
				{
					avatar_url: "/assets/profile/avatar.jpg",
					name: "Raihan",
				},
			],
		},
		{
			id: 3,
			type: "Build",
			status: "Rumah Ala Jepang",
			contributor: [
				{
					avatar_url: "/assets/profile/avatar.jpg",
					name: "Raihan",
				},
			],
		},
	];

	const [transaction, setTransaction] = useState<
		{
			type: string;
			status: string;
			contributor: { avatar_url: string; name: string }[];
		}[]
	>([
		{
			type: userData[0].type,
			status: userData[0].status,
			contributor: [
				{
					avatar_url: userData[0].contributor[0].avatar_url,
					name: userData[0].contributor[0].name,
				},
				{
					avatar_url: userData[0].contributor[1].avatar_url,
					name: userData[0].contributor[1].name,
				},
			],
		},

		{
			type: userData[1].type,
			status: userData[1].status,
			contributor: [
				{
					avatar_url: userData[1].contributor[0].avatar_url,
					name: userData[1].contributor[0].name,
				},
			],
		},
	]);

	// YANG DIATAS INI CUMAN BUAT NGECEK DATANYA MASUK APA GA

	const [type, setType] = useState("");
	const [status, setStatus] = useState("");
	const [contributor, setContributor] = useState<
		{ avatar_url: string; name: string }[]
	>([]);

	const handleDeleteTransaction = (index: number) => {
		const updatedTransaction = transaction.filter((_, i) => i !== index);
		setTransaction(updatedTransaction);
	};
	
	

	return (
		<div>
			<div>
				{transaction.length > 0 ? (
					<div>
						<div className="bg-[#F5EEE6] ml-6 h-[47px] grid grid-cols-4 text-center text-[13px] items-center text-gold font-light">
							<p>Type</p>
							<p>Status</p>
							<p>Contributor</p>
							<p>Action</p>
						</div>
						<div className="ml-6 mt-6 px-1">
							{transaction.map((item, index) => (
								<div key={index}>
									<div className="grid grid-cols-4 gap-4 mb-5">
										<div className="flex gap-3 items-start justify-center">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.type}
											</p>
										</div>
										<div className="flex justify-center items-start">
											<p className="text-[13px]  truncate overflow-hidden">
												{item.status}
											</p>
										</div>
										<div className="flex flex-col justify-center items-center text-center">
											{item.contributor.map((item, index) => (
												<div key={index}>
													<div className="flex text-[13px] mb-2">
														<Image
															src={item.avatar_url}
															alt=""
															height={30}
															width={30}
															style={{ objectFit: "fill" }}
															className="rounded-full object-fill w-[30px] h-[30px]"
														></Image>
														<p className="my-auto ml-2">{item.name}</p>
													</div>
												</div>
											))}
											{/* <p className="text-[13px] truncate overflow-hidden">
										{item.property_type}
									</p> */}
										</div>
										<div className="flex items-start justify-center">
											<div className="flex gap-4 w-[222.5px] items-center justify-center pr-3">
												<Link href={"../detailTransaction"}>
													<button className="hover:bg-goldhov hover:border-goldhov flex gap-2 border-2 border-gold py-1 px-2 rounded-[7px]">
														<p className="text-[9px] text-gold">Check</p>
													</button>
												</Link>
												<button
													onClick={() => handleDeleteTransaction(index)}
													className="hover:bg-[#DC7567]/50 hover:border-[#DC7567]/50 flex gap-2 border-2 bg-[#DC7567] border-[#DC7567] py-1 px-2 rounded-[7px]"
												>
													<svg
														width="9"
														height="9"
														viewBox="0 0 9 9"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.1514 8.68566C1.90369 8.68566 1.69157 8.59109 1.51503 8.40193C1.33848 8.21278 1.25036 7.98566 1.25066 7.72059V1.44761H0.800293V0.482537H3.05213V0H5.75434V0.482537H8.00618V1.44761H7.55581V7.72059C7.55581 7.98598 7.46754 8.21326 7.29099 8.40241C7.11445 8.59157 6.90247 8.68598 6.65507 8.68566H2.1514ZM6.65507 1.44761H2.1514V7.72059H6.65507V1.44761ZM3.05213 6.75552H3.95287V2.41268H3.05213V6.75552ZM4.8536 6.75552H5.75434V2.41268H4.8536V6.75552Z"
															fill="white"
														/>
													</svg>

													<p className="text-[9px] text-white">Delete</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full mt-24">
						<p className="text-[19px] font-medium">
							No Transactions has Been Made
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default function Dashboard() {
	const [selectedTab, setSelectedTab] = useState<string | null>("User");
	const [color, setColor] = useState([
		"#B17C3F",
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
			name: "User",
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
			name: "Role Request",
			icon: (
				<svg
					width="20"
					height="25"
					viewBox="0 0 20 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M4.53846 6.30769H8.07692M4.53846 12.5H15.1538M4.53846 16.0385H15.1538M4.53846 19.5769H8.07692M2.76923 24H16.9231C17.3923 24 17.8423 23.8136 18.1741 23.4818C18.5059 23.15 18.6923 22.7 18.6923 22.2308V2.76923C18.6923 2.3 18.5059 1.84999 18.1741 1.5182C17.8423 1.1864 17.3923 1 16.9231 1H2.76923C2.3 1 1.84999 1.1864 1.5182 1.5182C1.1864 1.84999 1 2.3 1 2.76923V22.2308C1 22.7 1.1864 23.15 1.5182 23.4818C1.84999 23.8136 2.3 24 2.76923 24Z"
						stroke={color[1]}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="transition-all delay-75"
						d="M15.1542 6.74985C15.3985 6.74985 15.5965 6.55182 15.5965 6.30754C15.5965 6.06326 15.3985 5.86523 15.1542 5.86523C14.9099 5.86523 14.7119 6.06326 14.7119 6.30754C14.7119 6.55182 14.9099 6.74985 15.1542 6.74985Z"
						fill={color[1]}
						stroke="black"
					/>
				</svg>
			),
		},
		{
			name: "Design",
			icon: (
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V6C1.69779e-06 5.45 0.196002 4.979 0.588002 4.587C0.980002 4.195 1.45067 3.99933 2 4H6L10 0L14 4H18C18.55 4 19.021 4.196 19.413 4.588C19.805 4.98 20.0007 5.45067 20 6V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H2ZM2 18H18V6H2V18ZM4 16H16L12.25 11L9.25 15L7 12L4 16ZM15.5 11C15.9167 11 16.271 10.854 16.563 10.562C16.855 10.27 17.0007 9.916 17 9.5C17 9.08333 16.854 8.729 16.562 8.437C16.27 8.145 15.916 7.99933 15.5 8C15.0833 8 14.729 8.146 14.437 8.438C14.145 8.73 13.9993 9.084 14 9.5C14 9.91667 14.146 10.271 14.438 10.563C14.73 10.855 15.084 11.0007 15.5 11ZM8.1 4H11.9L10 2.1L8.1 4Z"
						fill={color[2]}
					/>
				</svg>
			),
		},
		{
			name: "Complain",
			icon: (
				<svg
					width="23"
					height="24"
					viewBox="0 0 23 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M18.2327 0.410612C18.3482 0.218223 18.5354 0.0795948 18.7531 0.0252197C18.9708 -0.0291554 19.2012 0.00517653 19.3936 0.120664L19.397 0.12292L19.4004 0.125177L19.4117 0.131946C19.4557 0.158661 19.4987 0.187269 19.5403 0.217689C19.6192 0.272971 19.7264 0.353074 19.8528 0.456869C20.1032 0.665587 20.4304 0.9781 20.7576 1.4023C21.4142 2.25636 22.0607 3.56169 22.0607 5.35892C22.0607 7.15615 21.4142 8.46148 20.7576 9.31554C20.4304 9.73974 20.1032 10.0523 19.8528 10.261C19.7126 10.3777 19.5656 10.4862 19.4128 10.5859L19.4015 10.5927L19.397 10.5949L19.3947 10.596C19.3947 10.596 19.3936 10.5972 18.9581 9.87174L19.3936 10.5972C19.202 10.7059 18.9755 10.7356 18.7623 10.68C18.5491 10.6243 18.366 10.4877 18.2519 10.2992C18.1379 10.1106 18.1019 9.88506 18.1516 9.67039C18.2013 9.45572 18.3328 9.26892 18.5181 9.14969L18.5238 9.14518L18.5689 9.11472C18.614 9.08313 18.6828 9.03236 18.7686 8.96128C18.9412 8.81687 19.1781 8.59348 19.415 8.28436C19.8866 7.67174 20.3684 6.72066 20.3684 5.35892C20.3684 3.99718 19.8866 3.0461 19.415 2.43348C19.2249 2.18495 19.0081 1.95796 18.7686 1.75656C18.6901 1.69115 18.6084 1.62977 18.5238 1.57266L18.5181 1.56815C18.3274 1.45193 18.1904 1.26502 18.1369 1.04819C18.0834 0.831353 18.1179 0.602172 18.2327 0.410612Z"
						fill={color[3]}
					/>
					<path
						className="transition-all delay-75"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.80414 0C7.38285 0 6.01977 0.564605 5.01477 1.56961C4.00977 2.57461 3.44516 3.93769 3.44516 5.35897C3.44516 6.78026 4.00977 8.14334 5.01477 9.14834C6.01977 10.1533 7.38285 10.7179 8.80414 10.7179C10.2254 10.7179 11.5885 10.1533 12.5935 9.14834C13.5985 8.14334 14.1631 6.78026 14.1631 5.35897C14.1631 3.93769 13.5985 2.57461 12.5935 1.56961C11.5885 0.564605 10.2254 0 8.80414 0ZM5.13747 5.35897C5.13747 4.38651 5.52378 3.45388 6.21141 2.76625C6.89904 2.07862 7.83168 1.69231 8.80414 1.69231C9.7766 1.69231 10.7092 2.07862 11.3969 2.76625C12.0845 3.45388 12.4708 4.38651 12.4708 5.35897C12.4708 6.33143 12.0845 7.26406 11.3969 7.9517C10.7092 8.63933 9.7766 9.02564 8.80414 9.02564C7.83168 9.02564 6.89904 8.63933 6.21141 7.9517C5.52378 7.26406 5.13747 6.33143 5.13747 5.35897ZM8.80414 12.4103C6.5026 12.4103 4.37932 12.9405 2.79983 13.8431C1.24516 14.7321 0.0605469 16.0882 0.0605469 17.7692C0.0605469 19.4503 1.24516 20.8064 2.79983 21.6954C4.37932 22.5979 6.50373 23.1282 8.80414 23.1282C11.1057 23.1282 13.229 22.5979 14.8084 21.6954C16.3631 20.8064 17.5477 19.4503 17.5477 17.7692C17.5477 16.0882 16.3631 14.7321 14.8084 13.8431C13.229 12.9405 11.1045 12.4103 8.80414 12.4103ZM1.75285 17.7692C1.75285 16.9569 2.33614 16.0577 3.63921 15.3131C4.9186 14.5821 6.74291 14.1026 8.80414 14.1026C10.8654 14.1026 12.6897 14.5821 13.9691 15.3131C15.2721 16.0577 15.8554 16.958 15.8554 17.7692C15.8554 18.5815 15.2721 19.4807 13.9691 20.2253C12.6897 20.9564 10.8654 21.4359 8.80414 21.4359C6.74291 21.4359 4.9186 20.9564 3.63921 20.2253C2.33614 19.4807 1.75285 18.5815 1.75285 17.7692Z"
						fill={color[3]}
					/>
					<path
						className="transition-all delay-75"
						d="M17.1374 2.378C17.0421 2.32064 16.9364 2.28263 16.8264 2.26616C16.7164 2.24969 16.6042 2.25508 16.4963 2.28201C16.3883 2.30894 16.2868 2.35689 16.1974 2.42311C16.108 2.48933 16.0326 2.57253 15.9754 2.66794L16.2574 3.82323L16.2653 3.82887C16.3898 3.92246 16.501 4.03253 16.5959 4.15605C16.8576 4.50189 16.9944 4.92624 16.984 5.35984C16.9944 5.79396 16.8572 6.21877 16.5947 6.56476C16.5002 6.68821 16.3894 6.79827 16.2653 6.89194L16.2563 6.89646C16.0687 7.01506 15.9352 7.20263 15.8846 7.41872C15.834 7.63482 15.8703 7.86215 15.9857 8.05172C16.1012 8.24129 16.2865 8.37791 16.5017 8.43215C16.7169 8.48639 16.9448 8.4539 17.1363 8.34169H17.1385L17.1408 8.33943L17.1442 8.3383L17.1521 8.33266L17.1746 8.31912C17.2605 8.26418 17.3424 8.2031 17.4195 8.13636C17.565 8.01564 17.7512 7.83738 17.9373 7.59594C18.4267 6.95413 18.6868 6.16686 18.6763 5.35984C18.6868 4.55283 18.4267 3.76555 17.9373 3.12374C17.7373 2.86414 17.5009 2.63465 17.2356 2.4423C17.2155 2.42804 17.1952 2.41412 17.1746 2.40056L17.1521 2.38702L17.1442 2.38138L17.1408 2.38025L17.1385 2.37912C17.1385 2.37912 17.1374 2.378 16.7019 3.10343L17.1374 2.378Z"
						fill={color[3]}
					/>
				</svg>
			),
		},
		{
			name: "Transaction",
			icon: (
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-all delay-75"
						d="M1 6H19M15 1L20 6L15 11M21 16H3M7 11L2 16L7 21"
						stroke={color[4]}
						strokeWidth="2"
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
						{navItem.map((item, idx) => (
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
						))}
					</div>
					{/* content Right */}
					<div className="w-[58.375rem]  border-l-2">
						{selectedTab === "User" && <User />}
						{selectedTab === "Role Request" && <RoleRequest />}
						{selectedTab === "Design" && <Design />}
						{selectedTab === "Complain" && <Complain />}
						{selectedTab === "Transaction" && <Transaction />}
					</div>
				</div>
			</div>
		</div>
	);
}

export function Content() {}
