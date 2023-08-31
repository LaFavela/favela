import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, m } from "framer-motion";
import { useRef, useEffect } from "react";
import IMGPreview from "./imgPreview";
import { convertTime } from "@/tools/time";
import { supabase } from "@/lib/supabase";
import { Database } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import { data } from "@/pages/browse";

interface ChatProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowChat: (value: boolean) => void;
}

interface Channel {
	client_id: string & {
		id: string;
		avatar_url: string;
		first_name: string;
	};
	created_at: string;
	id: string;
	server_id: string & {
		id: string;
		avatar_url: string;
		first_name: string;
	};
}

type Message = Database["public"]["Tables"]["message"]["Row"];

export function Chat(props: ChatProps) {
	const [session, setSession] = useState<User>();
	const [channel, setChannel] = useState<Channel[]>();

	const [message, setMessage] = useState<Message[]>();
	const [activeChannel, setActiveChannel] = useState<string>();
	const listenMessage = supabase
		.channel("custom-insert-channel")
		.on(
			"postgres_changes",
			{ event: "INSERT", schema: "public", table: "message" },
			(payload) => {
				console.log("Change received!", payload);
				fetchMessage(activeChannel!);
				fetchLastMessage(channel!);
			},
		)
		.subscribe();
	const fetchMessage = async (channel: string) => {
		try {
			const { data: message, error } = await supabase
				.from("message")
				.select("*")
				.eq("channel", channel);
			setMessage(message!);
		} catch (error) {
			console.log(error);
		}
	};

	const [lastFetchMessage, setLastMessage] = useState<
		{
			channel: string;
			text: string;
		}[]
	>([]);
	const addChatMessage = async (messageContent: string, channel_id: string) => {
		try {
			const { data, error } = await supabase
				.from("message")
				.insert([{ content: messageContent, channel: channel_id }])
				.select();
			if (error) throw error;
			fetchMessage(channel_id);
			fetchLastMessage(channel!);
		} catch (error) {
			console.log(error);
		}
	};
	
	const fetchLastMessage = (channel: Channel[]) => {
		channel.map(async (channel) => {
			try {
				const { data: message, error } = await supabase
					.from("message")
					.select("*")
					.order("created_at", { ascending: false })
					.eq("channel", channel.id)
					.limit(1);
				if (error) throw error;
				if (message && message[0]?.content) {
					const temp = lastFetchMessage.filter(
						(item) => item.channel !== channel.id,
					);
					setLastMessage([
						...temp,
						{ channel: channel.id, text: message[0].content },
					]);
				}
			} catch (error) {
				console.log(error);
			}
		});
	};

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const data = (await supabase.auth.getUser()).data.user;
				setSession(data!);
			} catch (error) {
				console.log(error);
			}
		};
		const fetchChannel = async () => {
			const { data, error } = await supabase
				.from("channel")
				.select(`*,client_id(*),server_id(*)`);
			setChannel(data as any);
			fetchLastMessage(data as any);
		};
		fetchChannel();
		fetchSession();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	const lastMessage = useRef<any>(null);
	const [value, setValue] = useState("");
	const onChange = (event: any) => setValue(event.target.value);

	const [srcIMG, setSrcIMG] = useState<any>("" as any);
	const [showIMG, setShowIMG] = useState(false);
	const handleOnCloseIMG = () => setShowIMG(false);

	const [uploading, setUploading] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState<File>();

	function scrollToBottom() {
		lastMessage?.current?.scrollIntoView({ behavior: "smooth" });
	}
	useEffect(() => {
		scrollToBottom();
	});

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowChat(false);
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
		<div ref={wrapperRef} className="">
			<AnimatePresence>
				{props.visible && (
					<motion.div
						initial={{ x: 350, y: 250, scale: 0, opacity: 0 }}
						animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
						exit={{ y: 250, x: 350, scale: 0, opacity: 0 }}
						transition={{ ease: "easeIn", duration: 0.25 }}
						className="fixed bottom-0 right-0 mb-3 mr-3 "
					>
						<div className="flex h-[38rem] w-[50rem] justify-center rounded-[1rem] bg-[white] drop-shadow-landingShado">
							<div className="space-y-2">
								<div className="mt-3 flex w-[47.5rem] justify-between ">
									<p className="bg-font-normal text-[1rem] text-[#B17C3F]">
										Chat
									</p>

									<Link href={"/build"}>
										<svg
											className="cursor-pointer"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1 5V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5M1 13V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H5M13 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V5M13 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V13"
												stroke="#878787"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</Link>
								</div>
								<div className="flex w-[47.5rem] justify-between  ">
									{selectedFile != undefined && (
										<div className="absolute right-[2.6rem] top-[6.3rem] z-10 flex h-[26.7rem] w-[27.8rem] cursor-pointer items-center justify-center rounded  bg-[#000000a6]">
											<Image
												src={selectedImage}
												// width={256}
												// height={256}
												alt=""
												fill={true}
												objectFit="contain"
												className="p-4"
											></Image>
											<label
												className="absolute right-0 top-0 m-2"
												onClick={() => {
													setSelectedFile(undefined);
													setSelectedImage("");
												}}
											>
												<svg
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z"
														fill="white"
													/>
												</svg>
											</label>
										</div>
									)}
									{/* partisipant chat */}
									<div className="no-scrollbar h-[34rem] w-[16rem] overflow-y-scroll  rounded-[0.5rem] bg-white drop-shadow">
										{/* looping */}
										{channel?.map((data, idx) => (
											<motion.div
												transition={{
													ease: "easeIn",
													duration: 0.25,
													delay: idx * 0.1,
												}}
												key={idx}
												className="flex h-[4rem] w-full cursor-pointer snap-proximity items-center  hover:bg-[#D9D9D9] "
												onClick={() => {
													setActiveChannel(data.id);
													fetchMessage(data.id);
												}}
											>
												<div className="relative ml-2 h-[2.7rem] w-[2.7rem]">
													<Image
														className="rounded-full"
														src={
															channel.find((channel) => {
																return session?.id == data.server_id.id;
															})?.client_id.avatar_url! ||
															channel.find((channel) => {
																return session?.id == data.client_id.id;
															})?.server_id.avatar_url!
														}
														alt={"user"}
														fill={true}
														style={{ objectFit: "fill" }}
													/>
												</div>
												<div className="ml-2 w-[11.4rem]">
													<div className="flex w-full items-center justify-between ">
														<p className="text-[0.9rem] font-light">
															{channel.find((channel) => {
																return session?.id == data.server_id.id;
															})?.client_id.first_name ||
																channel.find((channel) => {
																	return session?.id == data.client_id.id;
																})?.server_id.first_name}
														</p>
														<p className="text-[0.5rem] font-light">{}</p>
													</div>
													<p className="truncate text-[0.63rem] font-light ">
														{
															lastFetchMessage?.find((message) => {
																return message.channel == data.id;
															})?.text
														}
													</p>
												</div>
											</motion.div>
										))}
									</div>
									{/* isi chat */}

									{activeChannel != null && (
										<div className="h-[34rem] w-[30.4rem]  overflow-hidden rounded-[0.5rem] bg-[#f4f4f4] drop-shadow">
											<div className="flex items-center border-b-[0.05rem] bg-white pb-2  pt-3">
												<div className="relative ml-4 h-[2.3125rem] w-[2.3125rem] bg-[white] rounded-full">
													<Image
														className="rounded-full"
														src={
															channel?.find((channel) => {
																return (
																	channel?.id == activeChannel &&
																	session?.id == channel.server_id.id
																);
															})?.client_id.avatar_url! ||
															channel?.find((channel) => {
																return (
																	channel?.id == activeChannel &&
																	session?.id == channel.client_id.id
																);
															})?.server_id.avatar_url!
														}
														// src="/images/Profile.png"
														alt={"user"}
														fill={true}
														style={{ objectFit: "fill" }}
													/>
												</div>
												<p className=" ml-3 text-[1rem] font-normal">
													{channel?.find((channel) => {
														return (
															channel?.id == activeChannel &&
															session?.id == channel.server_id.id
														);
													})?.client_id.first_name! ||
														channel?.find((channel) => {
															return (
																channel?.id == activeChannel &&
																session?.id == channel.client_id.id
															);
														})?.server_id.first_name!}
												</p>
											</div>

											<div className="no-scrollbar  mb-2 ml-5 mr-5 mt-2 h-[25.6rem] w-[27.8rem] snap-proximity space-y-4 overflow-hidden overflow-y-scroll">
												{message
													?.filter((msg) => msg.channel == activeChannel)
													.map((data, idx) => (
														<div
															key={idx}
															ref={
																idx ==
																message.filter(
																	(msg) => msg.channel == activeChannel,
																).length -
																	1
																	? lastMessage
																	: null
															}
															className="grid w-full "
														>
															{data.sent_by != session?.id ? (
																<div className="w-auto max-w-[16rem] snap-end space-y-2 rounded-b-lg rounded-tr-lg bg-[#E6E6E6] pb-2 pl-2 pr-2 pt-2 drop-shadow ">
																	<div className="flex justify-center ">
																		{data.img ? (
																			<div className="relative h-auto max-w-[16rem] rounded-lg ">
																				<Image
																					onClick={() => {
																						setShowIMG(true);
																						setSrcIMG(data.img);
																					}}
																					className="place-content-center rounded-sm "
																					// sizes="(max-width: 16rem)"
																					height={0}
																					width={256}
																					src={data.img}
																					// fill={true}
																					alt={"chat"}
																					style={{ objectFit: "fill" }}
																				/>
																			</div>
																		) : null}
																	</div>
																	<div className="flex justify-between text-clip ">
																		<p className="break-all text-[0.7rem]">
																			{data.content}
																		</p>
																		<p className="ml-3 place-self-end text-[0.5rem]">
																			{convertTime(data.created_at)}
																		</p>
																	</div>
																</div>
															) : (
																<div className="max-w-[16rem] snap-end justify-between space-y-2 place-self-end rounded-b-lg rounded-tl-lg bg-[#e3d0ba] pb-2 pl-2 pr-2 pt-2 drop-shadow">
																	<div className="flex justify-center ">
																		{data.img ? (
																			<div className="relative h-auto max-w-[16rem] rounded-lg ">
																				<Image
																					onClick={() => {
																						setShowIMG(true);
																						setSrcIMG(data.img);
																					}}
																					className="place-content-center rounded-sm "
																					// sizes="(max-width: 16rem)"
																					height={0}
																					width={256}
																					src={data.img}
																					// fill={true}
																					alt={"chat"}
																					style={{ objectFit: "fill" }}
																				/>
																			</div>
																		) : null}
																	</div>
																	<div className="flex justify-between  ">
																		<p className="break-all text-[0.7rem]">
																			{data.content}
																		</p>
																		<p className="ml-3 place-self-end text-[0.5rem]">
																			{convertTime(data.created_at)}
																		</p>
																	</div>
																</div>
															)}
														</div>
													))}
											</div>
											{/* input chat */}

											<form
												onSubmit={(e) => {
													e.preventDefault();
													// console.log(handleUpload())

													if (value != "" || selectedFile != undefined) {
														// handleUpload();
														addChatMessage(value, activeChannel);
														setValue("");

														setSelectedFile(undefined);
														setSelectedImage("");
													}
												}}
												className="flex w-full justify-center "
											>
												<div className="flex h-[2.625rem] w-[27.8rem] items-center justify-center space-x-2 rounded-[0.5rem] bg-white drop-shadow">
													<label className="cursor-pointer hover:bg-gray-200">
														<svg
															width="18"
															height="18"
															viewBox="0 0 18 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.6667 5.44444H11.6756M1 3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H14.3333C15.0406 1 15.7189 1.28095 16.219 1.78105C16.719 2.28115 17 2.95942 17 3.66667V14.3333C17 15.0406 16.719 15.7189 16.219 16.219C15.7189 16.719 15.0406 17 14.3333 17H3.66667C2.95942 17 2.28115 16.719 1.78105 16.219C1.28095 15.7189 1 15.0406 1 14.3333V3.66667Z"
																stroke="#B17C3F"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M1 12.5554L5.44444 8.11096C6.26933 7.31718 7.28622 7.31718 8.11111 8.11096L12.5556 12.5554"
																stroke="#B17C3F"
																strokeLinecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M10.7778 10.7779L11.6667 9.88903C12.4916 9.09526 13.5085 9.09526 14.3334 9.88903L17.0001 12.5557"
																stroke="#B17C3F"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
														<input
															type="file"
															// onClick={()=>{setSelectedImage("")}}
															accept="image"
															className="hidden"
															onChange={({ target }) => {
																if (target.files) {
																	const file = target.files[0];
																	if (file) {
																		// Periksa apakah file tidak null
																		setSelectedImage(URL.createObjectURL(file));
																		setSelectedFile(file);
																		// console.log(file);
																	}
																}
															}}
														></input>
													</label>

													<input
														className="w-[20.5625rem] bg-white pl-1 text-[0.6rem]  text-[#B17C3F] placeholder:text-[0.6rem] focus:outline-none"
														type="text"
														value={value}
														onChange={onChange}
														placeholder="Tulis Pesan Disini"
													/>
													<button
													// type="submit"
													// onClick={()=>{
													//   handleUpload();
													//   setSelectedFile(undefined);
													//   setSelectedImage("");
													//   }}

													// disabled={uploading}
													>
														<svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																className="hover:fill-[#b38f66]"
																d="M1.19351 0.0835065C0.551509 -0.22316 -0.153824 0.363507 0.0295089 1.05084L1.37351 6.07284C1.40719 6.19905 1.47721 6.31259 1.57487 6.39935C1.67254 6.48611 1.79354 6.54226 1.92284 6.56084L8.51217 7.50217C8.70284 7.52884 8.70284 7.80484 8.51217 7.83217L1.92351 8.77284C1.7942 8.79141 1.6732 8.84756 1.57554 8.93432C1.47788 9.02108 1.40786 9.13462 1.37417 9.26084L0.0295089 14.2855C-0.153824 14.9722 0.551509 15.5588 1.19351 15.2528L15.5255 8.42017C16.1582 8.11884 16.1582 7.2175 15.5255 6.9155L1.19351 0.0835065Z"
																fill="#B17C3F"
															/>
														</svg>
													</button>
												</div>
											</form>
										</div>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"></div>
			<IMGPreview
				src={srcIMG}
				onClose={handleOnCloseIMG}
				visible={showIMG}
				setShowIMG={setShowIMG}
			></IMGPreview>
		</div>
	);
}

export default function ChatButton(props: any = { login: false }) {
	const [session, setSession] = useState<User>();

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const data = (await supabase.auth.getUser()).data.user;
				setSession(data!);
			} catch (error) {
				console.log(error);
			}
		};
		fetchSession();
	}, []);

	const [showChat, setShowChat] = useState(false);
	const handleOnClose = () => setShowChat(false);
	if (!session) return;
	else
		return (
			<div className="fixed bottom-0 right-0 z-40 flex">
				<div
					onClick={() => {
						if (showChat) {
							setShowChat(false);
						} else {
							setShowChat(true);
						}
					}}
					className=" mb-[3rem] mr-[3rem] flex h-[2.75rem] w-[6.5625rem] cursor-pointer items-center justify-center space-x-[0.4rem] rounded-3xl bg-white drop-shadow-landingShado hover:bg-gray-200"
				>
					<div className=" flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#B17C3F] ">
						<svg
							width="19.65"
							height="19.65"
							viewBox="0 0 35 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.6673 14.5799C11.6673 14.1932 11.821 13.8222 12.0945 13.5487C12.3679 13.2753 12.7389 13.1216 13.1256 13.1216H21.8754C22.2621 13.1216 22.633 13.2753 22.9065 13.5487C23.18 13.8222 23.3337 14.1932 23.3337 14.5799C23.3337 14.9667 23.18 15.3377 22.9065 15.6111C22.633 15.8846 22.2621 16.0383 21.8754 16.0383H13.1256C12.7389 16.0383 12.3679 15.8846 12.0945 15.6111C11.821 15.3377 11.6673 14.9667 11.6673 14.5799ZM13.1256 18.9549C12.7389 18.9549 12.3679 19.1086 12.0945 19.3821C11.821 19.6556 11.6673 20.0265 11.6673 20.4133C11.6673 20.8 11.821 21.171 12.0945 21.4445C12.3679 21.718 12.7389 21.8716 13.1256 21.8716H18.9588C19.3455 21.8716 19.7165 21.718 19.9899 21.4445C20.2634 21.171 20.4171 20.8 20.4171 20.4133C20.4171 20.0265 20.2634 19.6556 19.9899 19.3821C19.7165 19.1086 19.3455 18.9549 18.9588 18.9549H13.1256ZM0.001007 17.4966C0.00175118 13.6438 1.27388 9.89898 3.62004 6.84299C5.96621 3.787 9.25527 1.59069 12.977 0.594777C16.6987 -0.40114 20.6451 -0.140995 24.2039 1.33486C27.7627 2.81071 30.735 5.41977 32.6597 8.7573C34.5844 12.0948 35.354 15.9743 34.849 19.7938C34.344 23.6133 32.5927 27.1595 29.8667 29.8821C27.1408 32.6047 23.5926 34.3516 19.7725 34.8519C15.9525 35.3521 12.0741 34.5776 8.73908 32.6487L1.92012 34.9237C1.66819 35.0078 1.39807 35.0215 1.13892 34.9633C0.879773 34.9052 0.641428 34.7773 0.449613 34.5936C0.257798 34.4099 0.119798 34.1773 0.0505046 33.9209C-0.0187885 33.6645 -0.0167424 33.394 0.0564222 33.1387L2.13303 25.8733C0.730199 23.3044 -0.00302708 20.4236 0.001007 17.4966ZM17.5005 2.91329C14.9257 2.91313 12.3967 3.59471 10.1707 4.88876C7.94468 6.18281 6.10095 8.04319 4.82693 10.2808C3.55291 12.5184 2.89403 15.0534 2.91726 17.6282C2.9405 20.203 3.64501 22.7257 4.95919 24.9399C5.06031 25.111 5.1254 25.3009 5.15047 25.498C5.17555 25.6951 5.16008 25.8953 5.10502 26.0862L3.62048 31.2778L8.45617 29.6678C8.66154 29.5993 8.8796 29.5774 9.0945 29.6036C9.30941 29.6298 9.51578 29.7036 9.69864 29.8195C11.6098 31.029 13.7761 31.7774 16.0262 32.0056C18.2764 32.2337 20.5488 31.9353 22.6638 31.1339C24.7788 30.3326 26.6784 29.0503 28.2125 27.3883C29.7466 25.7264 30.8731 23.7304 31.503 21.5581C32.1329 19.3858 32.2489 17.0967 31.8419 14.8719C31.4348 12.6471 30.5158 10.5474 29.1576 8.73887C27.7994 6.93035 26.0391 5.46255 24.0159 4.45149C21.9928 3.44043 19.7622 2.91382 17.5005 2.91329Z"
								fill="white"
							/>
						</svg>
					</div>
					<p className="text-[0.9375rem] font-medium text-[#B17C3F]">Chat</p>
				</div>
				<Chat
					onClose={handleOnClose}
					visible={showChat}
					setShowChat={setShowChat}
				></Chat>
			</div>
		);
}
