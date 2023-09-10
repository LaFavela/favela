import React, { use, useEffect } from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Image from "next/image";
import { projectData, reviewData } from "@/data/formList";
import IMGPreview from "@/components/imgPreview";
import calculate from "@/tools/calculate";
import { supabase } from "@/lib/supabase";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { toCapitalize } from "@/tools/uppercase";
import { useRouter } from "next/router";
import { Database } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	context.res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate");
	const params = context.query.u;

	const { data: profile } = await supabase
		.from("profiles")
		.select("*")
		.eq("username", params)
		.single();

	if (profile == null) {
		return {
			notFound: true,
		};
	}

	const { data: role } = await supabase
		.from("roles")
		.select("role_name")
		.eq("id", profile?.role_id)
		.single();

	const { data: profile_detail, error: errorProfile_detail } = await supabase
		.from("profile_detail")
		.select("*")
		.eq("user_id", profile?.id)
		.single();

	const { data: provinsi } = await supabase
		.from("provinsi")
		.select("*")
		.eq("id", profile_detail?.province)
		.single();

	const { data: kota, error } = await supabase
		.from("kabupaten_kota")
		.select("*")
		.eq("id", profile_detail?.city)
		.single();

	return {
		props: { profile, profile_detail, role, provinsi, kota },
	};
};

const data = [
	{
		id: 1,
		name: "Ramadhani Al-Qadri",
		rating: 4,
	},
];

const designData = [
	{
		id: 1,
		name: "Blue Resort Bali",
		bed: 3,
		bath: 2,
		area: 323,
		price: 476,
	},
	{
		id: 2,
		name: "Blue Resort Bali",
		bed: 3,
		bath: 2,
		area: 323,
		price: 476,
	},
];

const other = [
	{
		id: 1,
		name: "Ali An-Nuur",
		role: "Designer",
		photo: "/assets/profile/ali.jpg",
	},
	{
		id: 2,
		name: "Dhira Wahyu Fabian",
		role: "Contractor",
		photo: "/assets/profile/dhira.jpg",
	},
	{
		id: 3,
		name: "Yan Saputra",
		role: "Designer",
		photo: "/assets/profile/yan.jpg",
	},
	{
		id: 4,
		name: "Dzulhi Raihan",
		role: "Contractor",
		photo: "/assets/profile/raihan.jpg",
	},
	{
		id: 5,
		name: "Dwimas Catur Nugraha",
		role: "Designer",
		photo: "/assets/profile/dwimas.jpg",
	},
];

// Komen bentar bang ndk bisa saya buka
// const media = [
// 	{
// 		type: "image",
// 		url: require("../../public/assets/landing/Build1.jpg"),
// 	},
// 	{
// 		type: "image",
// 		url: require("../../public/assets/landing/Build1.jpg"),
// 	},
// 	{
// 		type: "image",
// 		url: require("../../public/assets/landing/Build1.jpg"),
// 	},
// ];

// Variabel Sementara buat nyoba

const userVisitor = {
	id: "1a13bac5-6c13-4090-a80a-f6924877f9a9x",
	isLogin: true,
};

const property_type = [
	{
		type_name: "Rumah",
	},
	{
		type_name: "Rumah",
	},
	{
		type_name: "Rumah",
	},
	{
		type_name: "Rumah",
	},
	{
		type_name: "Rumah",
	},
	{
		type_name: "Rumah",
	},
];
const property_style = [
	{
		style_name: "Modern",
	},
];

const education = [
	{
		institution: "Universitas Indonesia",
	},
	{
		institution: "Universitas Mataram",
	},
	{
		institution: "universitas Cordova",
	},
];
const experience = [
	{
		institution: "Software Tokopedia",
	},
	{
		institution: "Shopee Product Manager",
	},
];

// Variabel Sementara buat nyoba

type Design = Database["public"]["Tables"]["design"]["Row"];
type Project = Database["public"]["Tables"]["project"]["Row"];
type Experience = Database["public"]["Tables"]["experience"]["Row"];
type Members = Database["public"]["Tables"]["member_contractor"]["Row"];
type Education = Database["public"]["Tables"]["education"]["Row"];
type Property_type = Database["public"]["Tables"]["property_type"]["Row"];
type Property_style = Database["public"]["Tables"]["property_style"]["Row"];

export default function Profile({
	profile,
	profile_detail,
	role,
	provinsi,
	kota,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	// Visible Item For Member and Review
	const [visibleItemMembers, setVisibleItemMembers] = useState(3);
	const [visibleItemReview, setVisibleItemReview] = useState(3);
	const [visibleItemDesign, setVisibleItemDesign] = useState(3);
	// show Project or Transaction list pop up
	const [showTransactionList, setShowTransactionList] = useState(false);
	const handleOnCloseTransactionList = () => setShowTransactionList(false);
	const [transaction_data, setTransaction_data] = useState([
		{
			id: 1,
			transaction_type: "Build",
			property_name: "Rumah Mewah",
			contractor_id: "",
			created_at: "16 January 2023",
		},
		{
			id: 1,
			transaction_type: "Build",
			property_name: "Rumah Mewah",
			contractor_id: "",
			created_at: "16 January 2023",
		},
	]);
	const handleContractorPick = (transaction_id: any) => {
		const temp = [...transaction_data];
		const index = transaction_data.findIndex(
			(item) => item.id === transaction_id,
		);
		temp[index].contractor_id = profile.id;
		setTransaction_data(temp);
		transaction_data.map((item) => {
			console.log(item.contractor_id);
		});
	};

	// Daftar ID Follower
	const [follower, setFollower] = useState([
		"asudbave6qtdb783yehdn88udjjdhdn",
		"wertyuiohvvbj",
	]);

	const handleFollower = () => {
		setFollower([...follower, userVisitor.id]);
	};
	const handleUnfollow = () => {
		setFollower(follower.filter((item) => item !== userVisitor.id));
	};

	const [design, setDesign] = useState<Design[]>([]);
	const [project, setProject] = useState<Project[]>([]);
	const [experience, setExperience] = useState<Experience[]>([]);
	const [members, setMembers] = useState<Members[]>([]);
	const [education, setEducation] = useState<Education[]>([]);
	const [property_type, setProperty_type] = useState<Property_type[]>([]);
	const [property_style, setProperty_style] = useState<Property_style[]>([]);


	const [session, setSession] = useState<string>();
	useEffect(() => {
		const fetch = async () => {
			const data = await supabase.rpc("get_current_user_id");
			if (data && data.data) setSession(data.data);
			const { data: property_style } = await supabase
				.from("property_style")
				.select("*")
				.in("id", profile_detail?.property_style!);
			// komen bentar bang error soalnya bang
			if (property_style) setProperty_style(property_style);

			const { data: property_type } = await supabase
				.from("property_type")
				.select("*")
				.in("id", profile_detail?.property_type!);
			// sama
			if (property_type) setProperty_type(property_type);

			const { data: project, error: errorProject } = await supabase
				.from("project")
				.select("*")
				.eq("user_id", profile?.id);
			if (project) setProject(project);

			if (role?.role_name == "designer") {
				const { data: design } = await supabase
					.from("design")
					.select("*")
					.eq("created_by", profile?.id);
				if (design) setDesign(design);

				const { data: experience } = await supabase
					.from("experience")
					.select("*")
					.eq("user_id", profile?.id);
				if (experience) setExperience(experience);

				const { data: education } = await supabase
					.from("education")
					.select("*")
					.eq("user_id", profile?.id);
				if (education) setEducation(education);
			} else if (role?.role_name == "contractor") {
				const { data: members } = await supabase
					.from("member_contractor")
					.select("*")
					.eq("user_id", profile?.id);
				if (members) setMembers(members);
			}
		};
		if (role?.role_name === "contractor" || role?.role_name === "designer") {
			fetch();
		}
	}, [profile, profile_detail, role]);
	const Router = useRouter();

	const [reviewLikes, setReviewLikes] = useState(
		new Array(reviewData.length).fill(false),
	);

	const handleIconClick = (index: any) => {
		const newReviewLikes = [...reviewLikes]; // Create a copy of the reviewLikes array
		newReviewLikes[index] = !newReviewLikes[index]; // Toggle the like state for the clicked review
		setReviewLikes(newReviewLikes); // Update the state
	};

	const [srcIMG, setSrcIMG] = useState<any>("" as any);
	const [showIMG, setShowIMG] = useState(false);
	const handleOnCloseIMG = () => setShowIMG(false);

	return (
		<div>
			<div className=" container mx-auto mt-20 flex max-w-[1320px] justify-between ">
				<div className="container max-w-[884px] gap-y-5 ">
					<div className="relative h-[457px] w-full rounded-3xl bg-white drop-shadow-landingShado">
						<div className="h-[254px] relative ">
							<Image
								src={profile_detail.banner? profile_detail.banner:" "}
								alt=""
								// style={{
								//   maxWidth: "884",
								//   maxHeight: "254",
								//   width: "100%",
								//   height: "100%",
								// }}
								priority={true}
								fill={true}
								style={{ objectFit: "cover" }}
								className="rounded-t-3xl "
							/>
						</div>
						<div className="absolute bottom-0 pb-4  left-8 flex items-center justify-center">
							<div className="flex h-[215px] w-[215px] items-center  justify-center rounded-full ">
								<Image
									src={profile?.avatar_url!}
									alt=""
									style={{
										maxWidth: "200px",
										maxHeight: "200px",
										width: "100%",
										height: "100%",
									}}
									// height={200}
									// width={200}
									fill={true}
									objectFit="cover"
									className="h-[200px] w-[200px] rounded-full border-4 border-white"
								/>
							</div>
							<div>
								<div className="ml-7 mt-6 flex items-center  gap-x-3">
									<p className="text-[20px] font-semibold">
										{`${profile?.first_name} ${profile?.last_name}`}
									</p>
									<span className="">
										<svg
											width="5"
											height="5"
											viewBox="0 0 5 5"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="2.5" cy="2.5" r="2.5" fill="#B17C3F" />
										</svg>
									</span>
									<p className="text-[14px]">
										{toCapitalize(role?.role_name!)}
									</p>
								</div>
								<div className="flex items-start ">
									<div className="ml-8   ">
										{property_type.length != 0 || property_style.length != 0 ? (
											<div className="mt-1 mb-3 flex space-x-2 w-[18.5rem] overflow-x-scroll no-scrollbar rounded-full">
												{/* saya komen bentar bang ndk ngerti soalnya */}
												{/* {property_type?.map((item, index) => { */}
												{property_type.map((item, index) => {
													return (
														<span
															key={index}
															className="flex items-center rounded-full bg-[#E4D1BC] px-3 py-[2px]"
														>
															<p className="text-[11px] text-gold">
																{item.type_name}
															</p>
														</span>
													);
												})}
												{/* {property_style?.map((item, index) => { */}
												{property_style.map((item, index) => {
													return (
														<span
															key={index}
															className="flex items-center rounded-full bg-[#E4D1BC] px-3 py-[2px]"
														>
															<p className="text-[11px] text-gold">
																{item.style_name}
															</p>
														</span>
													);
												})}
											</div>
										) : null}

										<div className=" flex ">
											<span className="text-[11px]">
												<Rating
													className="gap-[2px]"
													name="half-rating"
													defaultValue={data[0].rating}
													precision={0.5}
													icon={
														<Image
															src={"/assets/profile/fill.png"}
															alt="Custom Icon"
															style={{
																maxWidth: "12px",
																maxHeight: "12px",
																width: "100%",
																height: "100%",
															}}
															width={12}
															height={12}
														/>
													}
													emptyIcon={
														<Image
															src="/assets/profile/empty.png"
															alt="Custom Icon"
															style={{
																maxWidth: "12px",
																maxHeight: "12px",
																width: "100%",
																height: "100%",
															}}
															width={12}
															height={12}
														/>
													}
													readOnly
												/>
											</span>
											<p className="ml-2 text-[11px]">500 Review</p>
										</div>
										<div className="mt-1 flex">
											<span>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M11.1133 8.75342C12.0266 9.37342 12.6666 10.2134 12.6666 11.3334V13.3334H15.3333V11.3334C15.3333 9.88008 12.9533 9.02008 11.1133 8.75342Z"
														fill="black"
													/>
													<path
														d="M6.00016 8.00008C7.47292 8.00008 8.66683 6.80617 8.66683 5.33341C8.66683 3.86066 7.47292 2.66675 6.00016 2.66675C4.5274 2.66675 3.3335 3.86066 3.3335 5.33341C3.3335 6.80617 4.5274 8.00008 6.00016 8.00008Z"
														fill="black"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M9.99984 9.00008C11.4732 9.00008 12.6665 7.80675 12.6665 6.33341C12.6665 4.86008 11.4732 3.66675 9.99984 3.66675C9.6865 3.66675 9.39317 3.73341 9.11317 3.82675C9.68685 4.53623 9.99982 5.42102 9.99982 6.33341C9.99982 7.24581 9.68685 8.1306 9.11317 8.84008C9.39317 8.93341 9.6865 9.00008 9.99984 9.00008ZM5.99984 9.66675C4.21984 9.66675 0.666504 10.5601 0.666504 12.3334V14.3334H11.3332V12.3334C11.3332 10.5601 7.77984 9.66675 5.99984 9.66675Z"
														fill="black"
													/>
												</svg>
											</span>
											<p className="ml-3 text-[11px]">500k Followers</p>
										</div>
										<div>
											<p className="mt-1 text-[13px] w-[18.5rem] text-[#9C9797]">
												{kota?.kabupaten!}, {provinsi?.provinsi!}, Indonesia
											</p>
										</div>
									</div>
									<div className="ml-4 mt-3">
										<div className="">
											{experience.length > 0 && (
												<div className="flex gap-2 ">
													<span className="ml-1 ">
														<svg
															width="14"
															height="14"
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M5 0C4.53587 0 4.09075 0.184374 3.76256 0.512563C3.43437 0.840752 3.25 1.28587 3.25 1.75V3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H10.75V1.75C10.75 1.28587 10.5656 0.840752 10.2374 0.512563C9.90925 0.184374 9.46413 0 9 0H5ZM9.25 3V1.75C9.25 1.6837 9.22366 1.62011 9.17678 1.57322C9.12989 1.52634 9.0663 1.5 9 1.5H5C4.9337 1.5 4.87011 1.52634 4.82322 1.57322C4.77634 1.62011 4.75 1.6837 4.75 1.75V3H9.25ZM2 4.5H12C12.1326 4.5 12.2598 4.55268 12.3536 4.64645C12.4473 4.74021 12.5 4.86739 12.5 5V6H1.5V5C1.5 4.86739 1.55268 4.74021 1.64645 4.64645C1.74021 4.55268 1.86739 4.5 2 4.5ZM1.5 7.5V12C1.5 12.1326 1.55268 12.2598 1.64645 12.3536C1.74021 12.4473 1.86739 12.5 2 12.5H12C12.1326 12.5 12.2598 12.4473 12.3536 12.3536C12.4473 12.2598 12.5 12.1326 12.5 12V7.5H8V9H6V7.5H1.5Z"
																fill="black"
															/>
														</svg>
													</span>
													<p className="ml-[2px] text-[11px]">
														{experience?.[0].institution}
														{/* {experience?.[0].title} */}
													</p>
												</div>
											)}
											{education.length > 0 && (
												<div className="mt-2 flex gap-2 ">
													<span>
														<svg
															width="20"
															height="16"
															viewBox="0 0 20 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.0002 0.5L0.833496 5.5L4.16683 7.31667V12.3167L10.0002 15.5L15.8335 12.3167V7.31667L17.5002 6.40833V12.1667H19.1668V5.5L10.0002 0.5ZM15.6835 5.5L10.0002 8.6L4.31683 5.5L10.0002 2.4L15.6835 5.5ZM14.1668 11.3333L10.0002 13.6L5.8335 11.3333V8.225L10.0002 10.5L14.1668 8.225V11.3333Z"
																fill="black"
															/>
														</svg>
													</span>
													<p className="text-[11px]">
														{education[0] ? education?.[0].institution : ""}
													</p>
												</div>
											)}
											{session !== profile?.id && (
												<div className="mt-3 flex gap-3">
													{follower.find((item) => item === userVisitor.id) ? (
														<AnimatePresence>
															<motion.button
																initial={{ opacity: 0, scaleX: 0.5 }}
																animate={{ opacity: 1, scaleX: 1 }}
																transition={{ duration: 0.25 }}
																onClick={() => {
																	handleUnfollow();
																}}
																className=" flex space-x-1 rounded-full  border border-gold px-3 py-1 hover:bg-goldhov "
															>
																<span className="mt-[4px]">
																	<svg
																		width="15"
																		height="15"
																		viewBox="0 0 15 15"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M12.3625 1.375L15 4.0125L5.275 13.75L0 8.46875L2.6375 5.83125L5.275 8.46875L12.3625 1.375ZM12.3625 3.125L5.275 10.225L2.6375 7.61875L1.75625 8.46875L5.275 11.9812L13.2438 4.0125L12.3625 3.125Z"
																			fill="#B17C3F"
																		/>
																	</svg>
																</span>
																<p className="text-[13px]  text-gold mt-[2px]">
																	Followed
																</p>
															</motion.button>
														</AnimatePresence>
													) : (
														<motion.button
															initial={{ opacity: 0, scaleX: 0.5 }}
															animate={{ opacity: 1, scaleX: 1 }}
															transition={{ duration: 0.25 }}
															onClick={() => {
																handleFollower();
															}}
															className=" flex gap-2 rounded-full border border-gold bg-gold px-3 py-1 hover:bg-goldhov "
														>
															<span className="mt-[4px]">
																<svg
																	width="13"
																	height="12"
																	viewBox="0 0 13 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M12.1252 6.806H7.43921V11.558H5.56921V6.806H0.905211V5.112H5.56921V0.337999H7.43921V5.112H12.1252V6.806Z"
																		fill="white"
																	/>
																</svg>
															</span>
															<p className="text-[13px] font-light text-white mt-[2px]">
																Follow
															</p>
														</motion.button>
													)}

													{role?.role_name === "contractor" ? (
														<button
															onClick={() => {
																setShowTransactionList(true);
															}}
															className="flex gap-2 rounded-full border-2 border-gold bg-white px-3 py-1 hover:bg-[#E0C8AD] hover:border-[#E0C8AD] "
														>
															<span className="mt-[4px]">
																<svg
																	width="13"
																	height="11"
																	viewBox="0 0 13 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M11.0827 0.686451C11.2347 0.624041 11.4011 0.602516 11.5645 0.624117C11.7279 0.645717 11.8824 0.709654 12.0119 0.809271C12.1414 0.908889 12.2412 1.04055 12.3008 1.19054C12.3605 1.34053 12.3778 1.50338 12.3511 1.66212L10.9559 9.91693C10.8206 10.7132 9.92499 11.1698 9.17639 10.7732C8.55019 10.4414 7.62012 9.93013 6.78355 9.39669C6.36526 9.12967 5.08395 8.27461 5.24142 7.66616C5.37675 7.14593 7.52969 5.19098 8.75995 4.0287C9.24282 3.57206 9.0226 3.30864 8.45238 3.72867C7.03575 4.77155 4.76285 6.35747 4.01117 6.8039C3.34806 7.19753 3.00236 7.26473 2.589 7.19753C1.83485 7.07512 1.13545 6.88551 0.564617 6.65449C-0.206751 6.34247 -0.169229 5.30799 0.564002 5.00677L11.0827 0.686451Z"
																		fill="#B17C3F"
																	/>
																</svg>
															</span>
															<p className="text-[13px] font-light text-gold">
																Add to Project
															</p>
														</button>
													) : (
														<button className="flex gap-2 rounded-full border border-gold bg-white px-3 py-1 hover:bg-[#E0C8AD] hover:border-[#E0C8AD] ">
															<span className="mt-[4px]">
																<svg
																	width="13"
																	height="11"
																	viewBox="0 0 13 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M11.0827 0.686451C11.2347 0.624041 11.4011 0.602516 11.5645 0.624117C11.7279 0.645717 11.8824 0.709654 12.0119 0.809271C12.1414 0.908889 12.2412 1.04055 12.3008 1.19054C12.3605 1.34053 12.3778 1.50338 12.3511 1.66212L10.9559 9.91693C10.8206 10.7132 9.92499 11.1698 9.17639 10.7732C8.55019 10.4414 7.62012 9.93013 6.78355 9.39669C6.36526 9.12967 5.08395 8.27461 5.24142 7.66616C5.37675 7.14593 7.52969 5.19098 8.75995 4.0287C9.24282 3.57206 9.0226 3.30864 8.45238 3.72867C7.03575 4.77155 4.76285 6.35747 4.01117 6.8039C3.34806 7.19753 3.00236 7.26473 2.589 7.19753C1.83485 7.07512 1.13545 6.88551 0.564617 6.65449C-0.206751 6.34247 -0.169229 5.30799 0.564002 5.00677L11.0827 0.686451Z"
																		fill="#B17C3F"
																	/>
																</svg>
															</span>
															<p className="text-[13px] font-light text-gold">
																Request
															</p>
														</button>
													)}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* BATAS ABOUT */}
					{profile_detail?.about != "" && (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">About</p>
								<p className="text-justify text-[15px]">
									{profile_detail?.about}
								</p>
							</div>
						</div>
					)}

					{/* BATAS DESIGN */}
					{role?.role_name === "designer" && (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">Design</p>

								{design?.slice(0, visibleItemDesign).map((design, index) => {
									return (
										<Link
											href={`/design/${design.id}`}
											className="container flex items-center pl-4 space-x-4 max-w-[791px] rounded-xl border-2 border-gray-200 cursor-pointer hover:bg-[#e4d1bc]"
											key={index}
										>
											<div className="relative w-[7.5rem] rounded-xl overflow-hidden h-[8.75rem]">
												<Image
													src={design.preview_image?.[0]!}
													alt=""
													fill={true}
													// style={{
													// 	maxWidth: "120px",
													// 	maxHeight: "140px",
													// 	width: "100%",
													// 	height: "100%",
													// }}
													// width={120}
													// height={140}
												/>
											</div>
											<div className="my-4 w-[605px]">
												<div className="flex justify-between">
													<p className="text-[17px] font-medium text-[#4B4B4B]">
														{design.name}
													</p>
													<p className="text-[21px] font-semibold text-[#4B4B4B]">
														Rp{calculate(design.price)}
													</p>
												</div>

												<div className="flex gap-2">
													<span className="flex gap-1">
														<svg
															width="16"
															height="15"
															viewBox="0 0 16 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															className="mt-1"
														>
															<path
																d="M1.125 13.1666V7.49992C1.125 7.12419 1.27426 6.76386 1.53993 6.49818C1.80561 6.23251 2.16594 6.08325 2.54167 6.08325M2.54167 6.08325H13.875M2.54167 6.08325V3.24992C2.54167 2.8742 2.69092 2.51386 2.9566 2.24818C3.22228 1.98251 3.58261 1.83325 3.95833 1.83325H12.4583C12.8341 1.83325 13.1944 1.98251 13.4601 2.24818C13.7257 2.51386 13.875 2.8742 13.875 3.24992V6.08325M13.875 6.08325C14.2507 6.08325 14.6111 6.23251 14.8767 6.49818C15.1424 6.76386 15.2917 7.12419 15.2917 7.49992V13.1666M8.20833 1.83325V6.08325M1.125 11.7499H15.2917"
																stroke="#4B4B4B"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<p className="text-[#4B4B4B]">3</p>
													</span>

													<span className=" flex gap-1">
														<svg
															width="15"
															height="15"
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															className="mt-1"
														>
															<path
																d="M14.2508 8.91675V9.62508C14.2508 10.978 13.4929 12.1538 12.3737 12.7488L12.8341 14.5834H11.4175L11.0633 13.1667H4.68831L4.33415 14.5834H2.91748L3.3779 12.7488C2.81065 12.4479 2.33616 11.9981 2.00543 11.4477C1.67469 10.8973 1.50024 10.2672 1.50081 9.62508V8.91675H0.79248V7.50008H13.5425V2.54175C13.5425 2.35389 13.4679 2.17372 13.335 2.04088C13.2022 1.90804 13.022 1.83341 12.8341 1.83341C12.48 1.83341 12.2108 2.07425 12.1258 2.393C12.5721 2.7755 12.8341 3.34216 12.8341 3.95841H8.58415C8.58415 3.39483 8.80803 2.85433 9.20655 2.45581C9.60506 2.0573 10.1456 1.83341 10.7091 1.83341H10.8296C11.12 1.01175 11.9062 0.416748 12.8341 0.416748C13.3977 0.416748 13.9382 0.640631 14.3367 1.03915C14.7353 1.43766 14.9591 1.97816 14.9591 2.54175V8.91675H14.2508ZM12.8341 8.91675H2.91748V9.62508C2.91748 10.1887 3.14136 10.7292 3.53988 11.1277C3.93839 11.5262 4.4789 11.7501 5.04248 11.7501H10.7091C11.2727 11.7501 11.8132 11.5262 12.2117 11.1277C12.6103 10.7292 12.8341 10.1887 12.8341 9.62508V8.91675Z"
																fill="#4B4B4B"
															/>
														</svg>
														<p className="text-[#4B4B4B]">2</p>
													</span>

													<span className="flex gap-1">
														<svg
															width="14"
															height="15"
															viewBox="0 0 14 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															className="mt-1"
														>
															<path
																d="M1.06982 6.79159V12.4583C1.06982 12.6461 1.14445 12.8263 1.27729 12.9591C1.41013 13.092 1.5903 13.1666 1.77816 13.1666H7.44482M1.06982 3.24992V2.54159C1.06982 2.35372 1.14445 2.17356 1.27729 2.04072C1.41013 1.90788 1.5903 1.83325 1.77816 1.83325H2.48649M6.02816 1.83325H7.44482M10.9865 1.83325H11.6948C11.8827 1.83325 12.0629 1.90788 12.1957 2.04072C12.3285 2.17356 12.4032 2.35372 12.4032 2.54159V3.24992M12.4032 6.79159V8.20825M12.4032 11.7499V12.4583C12.4032 12.6461 12.3285 12.8263 12.1957 12.9591C12.0629 13.092 11.8827 13.1666 11.6948 13.1666H10.9865"
																stroke="#4B4B4B"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M1.06982 7.5H6.02816C6.21602 7.5 6.39619 7.57463 6.52902 7.70747C6.66186 7.8403 6.73649 8.02047 6.73649 8.20833V13.1667"
																stroke="#4B4B4B"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<p className="text-[#4B4B4B]">
															{design.property_size} m2
														</p>
													</span>
												</div>
												<p className="mt-2 h-[4.6rem] break-all overflow-hidden text-ellipsis text-justify text-[12px] font-normal text-[#4B4B4B]">
													{design.description}
												</p>
											</div>
										</Link>
									);
								})}
								{design?.length > 3 && (
									<div className="flex justify-center cursor-pointer ">
										{visibleItemDesign < design?.length ? (
											<p
												className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
												onClick={() => {
													setVisibleItemDesign(visibleItemDesign + 3);
												}}
											>
												Show More
											</p>
										) : (
											<p
												className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
												onClick={() => {
													setVisibleItemDesign(3);
												}}
											>
												Show Fewer
											</p>
										)}
									</div>
								)}
							</div>
						</div>
					)}

					{/* BATAS EDUCATION */}

					{role?.role_name === "designer" && (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">Education</p>

								{education?.map((educations, index) => {
									return (
										<div
											className={`container flex  max-w-[791px] 
                    
                    ${
											index == education.length - 1
												? "bg-white"
												: "border-b-2 border-gold bg-white"
										}`}
											key={index}
										>
											<span>
												<svg
													width="64"
													height="64"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="mx-5 my-10"
												>
													<path
														d="M10.656 25.6L32 38.4L64 19.2L32 0L0 19.2H32V25.6H10.656ZM0 25.6V51.2L6.4 44.096V29.44L0 25.6ZM32 64L16 54.4L9.6 50.56V31.36L32 44.8L54.4 31.36V50.56L32 64Z"
														fill="#B17C3F"
													/>
												</svg>
											</span>
											<div className="my-4 w-[605px]">
												<div className="flex justify-between">
													<p className="text-[17px] font-medium text-black">
														{educations.institution}
													</p>
												</div>

												<div className="gap-2">
													<p className="text-[14px]">{educations.title}</p>
													<p className="text-[14px] text-[#A1A1A1]">
														{educations.start_date} -
														{educations.end_date
															? educations.end_date
															: "Sekarang"}
													</p>
												</div>
												<p className="mt-2 text-justify text-[12px] font-normal text-[#4B4B4B]">
													{educations.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}

					{/* BATAS EXPERIENCE */}
					{role?.role_name === "designer" && (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">Experience</p>

								{experience?.map((item, index) => {
									return (
										<div
											className={`container flex  max-w-[791px] 
                    
                    ${
											index === experience.length - 1
												? "bg-white"
												: "border-b-2 border-gold bg-white"
										}`}
											key={index}
										>
											<span>
												<svg
													width="51"
													height="49"
													viewBox="0 0 51 49"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="mx-5 my-10"
												>
													<path
														d="M5.16683 48.3752C3.76892 48.3752 2.57179 47.877 1.57546 46.8807C0.579125 45.8843 0.081806 44.6881 0.0835004 43.2918V15.3335C0.0835004 13.9356 0.581667 12.7385 1.578 11.7421C2.57433 10.7458 3.77061 10.2485 5.16683 10.2502H15.3335V5.16683C15.3335 3.76892 15.8317 2.57179 16.828 1.57546C17.8243 0.579125 19.0206 0.081806 20.4168 0.0835004H30.5835C31.9814 0.0835004 33.1785 0.581667 34.1749 1.578C35.1712 2.57433 35.6685 3.77061 35.6668 5.16683V10.2502H45.8335C47.2314 10.2502 48.4285 10.7483 49.4249 11.7447C50.4212 12.741 50.9185 13.9373 50.9168 15.3335V43.2918C50.9168 44.6897 50.4187 45.8869 49.4223 46.8832C48.426 47.8795 47.2297 48.3769 45.8335 48.3752H5.16683ZM20.4168 10.2502H30.5835V5.16683H20.4168V10.2502Z"
														fill="#B17C3F"
													/>
												</svg>
											</span>
											<div className="my-4 w-[605px]">
												<div className="flex justify-between">
													<p className="text-[17px] font-medium text-black">
														{item.institution}
													</p>
												</div>

												<div className="gap-2">
													<p className="text-[14px]"></p>
													<p className="text-[14px] text-[#A1A1A1]">
														{item.start_date} -{" "}
														{item.end_date ? item.end_date : "Sekarang"}
													</p>
												</div>
												<p className="mt-2 text-justify text-[12px] font-normal text-[#4B4B4B]">
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}
					{/* Member */}

					{role?.role_name === "contractor" && (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">Member</p>

								{members?.slice(0, visibleItemMembers).map((member, index) => {
									return (
										<div
											className={`container flex  items-center max-w-[791px] 
                    
                    						${
																	index == members.length - 1
																		? "bg-white"
																		: "border-b border-gray-200 bg-white"
																}`}
											key={index}
										>
											<span>
												<svg
													width="56"
													height="60"
													viewBox="0 0 56 60"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<mask
														id="mask0_1828_2631"
														// style="mask-type:luminance"
														maskUnits="userSpaceOnUse"
														x="5"
														y="5"
														width="50"
														height="50"
													>
														<path
															d="M30 25C31.1491 25 32.2869 24.7737 33.3485 24.3339C34.4101 23.8942 35.3747 23.2497 36.1872 22.4372C36.9997 21.6247 37.6442 20.6601 38.0839 19.5985C38.5237 18.5369 38.75 17.3991 38.75 16.25C38.75 15.1009 38.5237 13.9631 38.0839 12.9015C37.6442 11.8399 36.9997 10.8753 36.1872 10.0628C35.3747 9.2503 34.4101 8.60578 33.3485 8.16605C32.2869 7.72633 31.1491 7.5 30 7.5C27.6794 7.5 25.4538 8.42187 23.8128 10.0628C22.1719 11.7038 21.25 13.9294 21.25 16.25C21.25 18.5706 22.1719 20.7962 23.8128 22.4372C25.4538 24.0781 27.6794 25 30 25ZM7.5 51V52.5H52.5V51C52.5 45.4 52.5 42.6 51.41 40.46C50.4513 38.5785 48.9215 37.0487 47.04 36.09C44.9 35 42.1 35 36.5 35H23.5C17.9 35 15.1 35 12.96 36.09C11.0785 37.0487 9.54872 38.5785 8.59 40.46C7.5 42.6 7.5 45.4 7.5 51Z"
															fill="white"
															stroke="white"
															strokeWidth="4"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</mask>
													<g mask="url(#mask0_1828_2631)">
														<path d="M0 0H60V60H0V0Z" fill="#B17C3F" />
													</g>
												</svg>
											</span>
											<div className="ml-4 my-4 w-[605px]">
												<div className="flex justify-between">
													<p className="text-[17px] font-medium text-black">
														{member.name}
													</p>
												</div>

												<div className="gap-2">
													<p className="text-[14px]">{member.job}</p>
												</div>
												<p className="mt-2 text-justify text-[12px] font-normal text-[#4B4B4B]">
													{member.description}
												</p>
											</div>
										</div>
									);
								})}
								{members.length > 3 && (
									<div className="flex justify-center cursor-pointer ">
										{visibleItemMembers < members.length ? (
											<p
												className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
												onClick={() => {
													setVisibleItemMembers(visibleItemMembers + 3);
												}}
											>
												Show More
											</p>
										) : (
											<p
												className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
												onClick={() => {
													setVisibleItemMembers(3);
												}}
											>
												Show Fewer
											</p>
										)}
									</div>
								)}
							</div>
						</div>
					)}

					{/* BATAS PROJECT */}
					{role?.role_name === "designer" ||
					role?.role_name === "contractor" ? (
						<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
							<div className="flex flex-col gap-5 px-12 py-10">
								<p className="text-[25px] font-semibold">Project</p>

								{project?.map((projects, index) => {
									return (
										<div
											className={`container flex items-center max-w-[791px] 
                    
                    ${
											index == project.length - 1
												? "bg-white"
												: "border-b-2 border-gold bg-white"
										}`}
											key={index}
										>
											<span>
												<svg
													width="53"
													height="59"
													viewBox="0 0 53 59"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="mx-5 my-3"
												>
													<path
														d="M46.625 6.625H34.6075C33.4 3.29 30.2375 0.875 26.5 0.875C22.7625 0.875 19.6 3.29 18.3925 6.625H6.375C3.2125 6.625 0.625 9.2125 0.625 12.375V52.625C0.625 55.7875 3.2125 58.375 6.375 58.375H46.625C49.7875 58.375 52.375 55.7875 52.375 52.625V12.375C52.375 9.2125 49.7875 6.625 46.625 6.625ZM26.5 6.625C28.0812 6.625 29.375 7.91875 29.375 9.5C29.375 11.0813 28.0812 12.375 26.5 12.375C24.9188 12.375 23.625 11.0813 23.625 9.5C23.625 7.91875 24.9188 6.625 26.5 6.625ZM29.375 46.875H15C13.4187 46.875 12.125 45.5812 12.125 44C12.125 42.4188 13.4187 41.125 15 41.125H29.375C30.9562 41.125 32.25 42.4188 32.25 44C32.25 45.5812 30.9562 46.875 29.375 46.875ZM38 35.375H15C13.4187 35.375 12.125 34.0812 12.125 32.5C12.125 30.9188 13.4187 29.625 15 29.625H38C39.5812 29.625 40.875 30.9188 40.875 32.5C40.875 34.0812 39.5812 35.375 38 35.375ZM38 23.875H15C13.4187 23.875 12.125 22.5812 12.125 21C12.125 19.4188 13.4187 18.125 15 18.125H38C39.5812 18.125 40.875 19.4188 40.875 21C40.875 22.5812 39.5812 23.875 38 23.875Z"
														fill="#B17C3F"
													/>
												</svg>
											</span>
											<div className="my-4 w-[605px]">
												<div className="flex justify-between">
													<p className="text-[17px] font-medium text-black">
														{projects.institution}
													</p>
												</div>

												<div className="gap-2">
													<p className="text-[14px]">{projects.title}</p>
													<p className="text-[14px] text-[#A1A1A1]">
														{projects.start_date} -{" "}
														{projects.end_date ? projects.end_date : "Sekarang"}
													</p>
												</div>
												<p className="mt-2 text-justify text-[12px] font-normal text-[#4B4B4B]">
													{projects.description}
												</p>
												{/* isi gambar */}
												<div className="mt-3 flex gap-4" key={index}>
													{projects.image?.map((mediaItem, index) => (
														<div
															className=""
															key={index}
															onClick={() => {
																setSrcIMG(mediaItem);
																setShowIMG(true);
															}}
														>
															<Image
																src={mediaItem}
																alt=""
																style={{
																	maxWidth: "73.7px",
																	maxHeight: "64.56px",
																	width: "100%",
																	height: "100%",
																}}
																width={73.7}
																height={64.56}
															></Image>
														</div>
													))}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					) : null}

					{/* REVIEW  */}

					<div className=" mt-8 w-full rounded-3xl bg-white drop-shadow-landingShado">
						<div className="flex flex-col gap-5 px-12 py-10">
							<p className="text-[25px] font-semibold">Review</p>

							{reviewData.slice(0, visibleItemReview).map((review, index) => {
								return (
									<div
										className={`container flex  max-w-full  gap-x-6 
                    
                    ${
											index == reviewData.length - 1
												? "bg-white"
												: "border-b-2 border-gray-200 bg-white"
										}`}
										key={index}
									>
										<div>
											<Image
												src={review.photo}
												alt=""
												style={{
													maxWidth: "42px",
													maxHeight: "42px",
													width: "100%",
													height: "100%",
												}}
												height={42}
												width={42}
												className="rounded-full"
											></Image>
										</div>
										<div className=" mb-4 w-[605px]">
											<div className="flex">
												<p className="text-[16px] font-medium text-black">
													{review.name}
												</p>
												<p className="text-[13px] text-black/50 ml-3 my-auto">
													3 days ago
												</p>
											</div>
											<span className="text-[11px]">
												<Rating
													className="gap-2"
													name="half-rating"
													defaultValue={review.rating}
													precision={0.5}
													icon={
														<Image
															src={"/assets/profile/fill.png"}
															alt="Custom Icon"
															style={{
																maxWidth: "8.33px",
																maxHeight: "8.33px",
																width: "100%",
																height: "100%",
															}}
															width={8.33}
															height={8.33}
														/>
													}
													emptyIcon={
														<Image
															src="/assets/profile/empty.png"
															alt="Custom Icon"
															style={{
																maxWidth: "8.33px",
																maxHeight: "8.33px",
																width: "100%",
																height: "100%",
															}}
															width={8.33}
															height={8.33}
														/>
													}
													readOnly
												/>
											</span>
											<div className="gap-2">
												<p className="text-[14px]"></p>
												<p className="text-[14px] font-medium">
													{review.title}
												</p>
											</div>
											<p className="mt-2 text-justify text-[12px] font-normal text-[#4B4B4B]  w-[710px]">
												{review.content}
											</p>
											<button
												className="mt-2 flex "
												onClick={() => handleIconClick(index)}
											>
												{reviewLikes[index] ? (
													<ThumbUpAltIcon />
												) : (
													<ThumbUpOffAltIcon />
												)}
												<span className="text-[15px] text-black/50 ml-3 my-auto">
													{reviewLikes[index]
														? `${review.likes + 1}`
														: `${review.likes}`}
												</span>
											</button>
										</div>
									</div>
								);
							})}
							{reviewData.length > 3 && (
								<div className="flex justify-center cursor-pointer ">
									{visibleItemReview < reviewData.length ? (
										<p
											className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
											onClick={() => {
												setVisibleItemReview(visibleItemReview + 3);
											}}
										>
											Show More
										</p>
									) : (
										<p
											className="text-[#B17C3F] hover:bg-gray-100 rounded-lg p-1 px-2 text-[0.8rem] mt-4"
											onClick={() => {
												setVisibleItemReview(3);
											}}
										>
											Show Fewer
										</p>
									)}
								</div>
							)}
						</div>
					</div>
				</div>

				{/* BATAS CONTAINER */}

				<div className=" container w-[400px]   drop-shadow-landingShado ml-10 ">
					<div className="w-full rounded-3xl bg-white pb-10 ">
						<p className="px-8  pt-8 text-[17px]">Recomended For You</p>
						{other.map((other, index) => (
							<div
								className="mx-8 my-2 flex gap-2 border-b-[1px] border-[#E4E4E4] pb-4 pt-2"
								key={index}
							>
								<Image
									src={other.photo}
									height={66}
									width={66}
									alt=""
									style={{
										maxWidth: "66px",
										maxHeight: "66px",
										width: "100%",
										height: "100%",
									}}
									className={"rounded-full"}
								></Image>
								<div className="">
									<p className="ml-1 text-[15px] font-medium">{other.name}</p>
									<p className="text ml-1 text-[12px]">{other.role}</p>
									<button className="mt-1 flex gap-1 rounded-full border-[1px] border-gold px-4 py-[2px]">
										<svg
											width="10"
											height="10"
											viewBox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="mt-[3px]"
										>
											<path
												d="M9.02731 5.441H5.40631V9.113H3.96131V5.441H0.357309V4.132H3.96131V0.442999H5.40631V4.132H9.02731V5.441Z"
												fill="#B17C3F"
											/>
										</svg>
										<p className="text-[11px] text-gold">Ikuti</p>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<IMGPreview
					src={srcIMG}
					onClose={handleOnCloseIMG}
					visible={showIMG}
					setShowIMG={setShowIMG}
				></IMGPreview>
			</div>
			<TransactionList
				visible={showTransactionList}
				setShowTransactionList={setShowTransactionList}
				onClose={handleOnCloseTransactionList}
				handleContractorPick={handleContractorPick}
				transaction_data={transaction_data}
			/>
		</div>
	);
}

interface transactionListProps {
	visible: boolean;
	setShowTransactionList: (visible: boolean) => void;
	onClose: () => void;

	transaction_data: any;
	handleContractorPick: (value: any) => void;
}
export function TransactionList(props: transactionListProps) {
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowTransactionList(false);
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
		<div className="">
			{props.visible && (
				<div className="h-screen w-screen top-0 fixed flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						ref={wrapperRef}
						className=" bg-white rounded-[1.5625rem] h-fit w-[29.5rem]   drop-shadow-landingShado"
					>
						<div className="h-[3.3125rem] flex items-center border-b">
							<p className="text-[1.0625rem] font-medium ml-6">My Project</p>
						</div>
						{props.transaction_data.length === 0 ? (
							<div className="h-[26.625rem] flex justify-center items-center">
								<p>There is no Project here</p>
							</div>
						) : (
							<div className=" px-5 py-3 overflow-y-scroll thin-scrollbar rounded-[1.5625rem] overflow-hidden h-[26.625rem] ">
								<div>
									{props.transaction_data.map((item: any, index: any) => (
										<div
											key={index}
											onClick={() => {
												props.handleContractorPick(item.id);
												props.onClose();
											}}
											className="cursor-pointer w-[27rem]  h-[3rem] flex  hover:fill-gold justify-start items-center hover:bg-[#e4d1bc] hover:text-gold rounded-md mb-1"
										>
											{/* <div className="ml-4">
											<svg
												width="30"
												height="27"
												viewBox="0 0 19 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M16.15 5.92941V0.941176H13.3V3.38824L9.5 0L0 8.47059H2.85V16H7.6V10.3529H11.4V16H16.15V8.47059H19L16.15 5.92941ZM7.6 6.58824C7.6 5.55294 8.455 4.70588 9.5 4.70588C10.545 4.70588 11.4 5.55294 11.4 6.58824H7.6Z"
													fill="gray"
													className=""
												/>
											</svg>
										</div> */}
											<div className="flex-col justify-center w-full pr-5">
												<p className="text-[0.7rem] ml-4 font-medium">
													{item.transaction_type}
												</p>
												<div className="flex justify-between w-full items-center ">
													<p className="text-[0.9rem] ml-4 font-semibold">
														{item.property_name}
													</p>
													<p className="text-[0.6rem]">{item.created_at}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</motion.div>
				</div>
			)}
		</div>
	);
}
