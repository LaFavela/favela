import Image from "next/image";
import Link from "next/link";
import InputPopUp from "@/components/popUpInput";
import DragAndDropInput from "@/components/inputDrop";
import { useState, useRef, useEffect } from "react";
import Status from "@/components/status";
import Dropdown from "@/components/dropdwon";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";

const user = {
	id: "2113s2",
	name: "Ramadhani Al-Qadri",
	img: "/assets/landing/Designer3.jpg",
	role: "designer",
};
const transaction = {
	id: "HNF29125367",
	transactionType: "Build",
	transactionDate: "16 January 2023",

	propertyType: "Villa",
	propertyName: "Ampenan Asri",
	propertyDate: "16 January 2023",

	img: "/assets/browse/Build14.png",
};

const Contributor = [
	{
		id: "21132",
		name: "Ramadhani Al-Qadri",
		img: "/assets/landing/Designer3.jpg",
		role: "client",
	},
	{
		id: "21053",
		name: "Muhammad Dwimas ",
		img: "/assets/landing/Designer3.jpg",
		role: "designer",
	},
	{
		id: "21015",
		name: "Dzulhi Raihan",
		img: "/assets/landing/Designer3.jpg",
		role: "contractor",
	},
];
const constractor = {
	name: "Sinar Bata",
	img: "/assets/landing/Designer3.jpg",
	role: "Contractor",
	city: "Jakarta",
	province: "DKI Jakarta",
};

const bank_account = [
	{
		bank_name: "Bank Central Asia",
		bank_number: "1234567890",
		bank_password: "123456",
	},
	{
		bank_name: "Bank Mandiri",
		bank_number: "1234567890",
		bank_password: "123456",
	},
	{
		bank_name: "Bank Mandiri",
		bank_number: "1234567890",
		bank_password: "123456",
	},
	{
		bank_name: "Bank Mandiri",
		bank_number: "1234567890",
		bank_password: "123456",
	},
	{
		bank_name: "Bank Mandiri",
		bank_number: "1234567890",
		bank_password: "123456",
	},
];

export default function DetailTransaction() {
	// Review
	const [isReviewed, setReviewed] = useState(false);
	const [titleReview, setTitleReview] = useState("");
	const [descReview, setDescReview] = useState("");
	const [ratingReview, setRatingReview] = useState(0);

	// isProjectCancel?
	const [isProjectCancel, setProjectCancel] = useState(false);
	const handleProjectCancel : any = () => {
		setProjectCancel(!isProjectCancel);
	};

	// Pop up Complain
	const [complain, setShowComplain] = useState(false);
	const handleOnCloseComplain = () => setShowComplain(false);

	// Pop up Document
	const [showDocument, setShowDocument] = useState(false);
	const handleOnCloseDocument = () => setShowDocument(false);
	const [srcMedia, setSrcMedia] = useState("");
	const [srcContract, setSrcContract] = useState("");
	const [extraInfo, setExtraInfo] = useState("");

	// Pop Up Update
	const [showUpdate, setShowUpdate] = useState(false);
	const handleOnCloseUpdate = () => setShowUpdate(false);
	// Media and Contract State
	const [selectedMedia, setSelectedMedia] = useState<File | null>(null);
	const [selectedContract, setSelectedContract] = useState<File | null>(null);
	const handleMedia = (file: File | null) => {
		setSelectedMedia(file);
	};
	const handleContract = (file: File | null) => {
		setSelectedContract(file);
	};

	const [payment, setPayment] = useState([] as any);

	const [status, setStatus] = useState([
		{
			id: 0,
			tittle: "Momen Kebersamaan",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
			media: "wertyuiop",
			contract: "",
			extraInfo:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, saepe esse. Laborum, vel velit aperiam illo sit ipsa qui sint fugiat. Harum, explicabo. Magni fuga exercitationem totam omnis distinctio quibusdam.",
			payment: 0,
			date: "16 January 2023",
			time: "08.00",
			constractorId: "",
			actionType: [] as any,
			updaterId: "21053",
			isConfirmed: false,
			isPayed: false,
		},
	]);
	useEffect(() => {
		handlePaymentTrack();
	});

	function handlePaymentTrack() {
		const pay = [] as any;
		status.map((item) => {
			if (item.payment > 0) {
				const temp = {
					phase: item.tittle,
					price: item.payment as number,
				} as any;
				pay.push(temp);
				setPayment(pay);
			}
		});
	}

	const [statuspop, setShowStatus] = useState(false);
	const handleOnCloseStatus = () => {
		setShowStatus(false);
	};
	const [statustype, setStatustype] = useState("");
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");

	return (
		<div>
			<div className="flex justify-center">
				<div className="mt-[2.1875rem] w-[81.875rem] space-y-[1.3125rem]">
					<div>
						<p className="text-[1.25rem] font-medium">Detail Transaction</p>
					</div>
					<div className="flex justify-between">
						<div className="w-[44.3125rem] space-y-[1.125rem] ">
							{/* Indormation */}
							<div className="flex  justify-between w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
								<div className="flex space-x-[1.25rem]">
									<div className="relative w-[7.3125rem] h-[7.3125rem] rounded-[0.625rem] overflow-hidden">
										<Image src={transaction.img} alt="property" fill={true} />
									</div>
									<div className="  flex flex-col justify-between">
										<div className="flex ">
											<p className="text-[0.9375rem] font-light mr-1">
												Name :{" "}
											</p>
											<p className="text-[0.9375rem] font-medium">
												{transaction.propertyName}
											</p>
										</div>
										<div className="flex">
											<p className="text-[0.9375rem] font-light mr-1">
												Type :{" "}
											</p>
											<p className="text-[0.9375rem] font-medium">
												{transaction.propertyType}
											</p>
										</div>
										<div className="flex">
											<p className="text-[0.9375rem] font-light mr-1">
												ID Transaction :{" "}
											</p>
											<p className="text-[0.9375rem] font-medium">
												{transaction.id}
											</p>
										</div>
										<div className="flex">
											<p className="text-[0.9375rem] font-light mr-1">
												Request Date :{" "}
											</p>
											<p className="text-[0.9375rem] font-medium">
												{transaction.propertyDate}
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-start space-y-2">
									
									<button
										onClick={() => {
											setShowComplain(true);
										}}
										className="flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
									>
										Complain
									</button>
									<button className="flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
										Download Contract
									</button>
									{!status[status.length - 1].actionType.find(
										(item: any) => item === "Finish Project",
									) &&
										(isProjectCancel ? (
											<button
												onClick={() => {
													setShowStatus(true);
													setStatustype("confirm");
													setDescription(
														"Are You Sure Want To Open This Project?",
													);
												}}
												className="flex justify-center items-center text-white text-[0.75rem] font-medium  w-[10.25rem] bg-[#B17C3F] hover:bg-[#8d6333] rounded-full h-[1.8125rem]"
											>
												Reopen Project
											</button>
										) : (
											<button
												onClick={() => {
													setShowStatus(true);
													setStatustype("confirm");
													setDescription(
														"Are You Sure Want To Cancel This Project?",
													);
												}}
												className="flex justify-center items-center text-white text-[0.75rem] font-medium  w-[10.25rem] bg-[#B17C3F] hover:bg-[#8d6333] rounded-full h-[1.8125rem]"
											>
												Cancel Project
											</button>
										))}
								</div>
							</div>
							{/* Contributor */}
							<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
								<p className="text-[0.875rem] font-medium">Contributor</p>
								<div className="flex justify-center py-1 space-x-2">
									{Contributor.map((item, idx) => (
										<div key={idx} className="flex space-x-4">
											<Link
												href={"/merchantProfile"}
												className="flex space-x-2  h-fit p-1 rounded-full pr-3 hover:bg-[#e6e6e6]"
											>
												<div className="relative w-[1.875rem] h-[1.875rem] rounded-full overflow-hidden">
													<Image
														src={item.img}
														alt="contributor"
														fill={true}
														objectFit="cover"
													/>
												</div>
												<div className="-space-y-1 ">
													<p className="text-[0.75rem]  font-normal ">
														{item.name}
													</p>
													<p className="text-[0.625rem] capitalize text-gold">
														{item.role}
													</p>
												</div>
											</Link>
											{idx !== Contributor.length - 1 && (
												<div className="  w-[0.5rem] ">
													<div className="h-[2.4rem]  bg-gray-300 w-[0.01rem]"></div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
							{!isProjectCancel &&
								// Update
								user.role == "designer" && (
									<div className=" w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
										<p className="text-[0.875rem] font-medium">Update</p>
										{status[status.length - 1].actionType.find(
											(item: any) => item == "Payment",
										) && !status[status.length - 1].isPayed ? (
											<p className="text-[0.8rem] py-3 flex justify-center text-gray-400">
												The Current Update Must be Paid before you can Make new
												update
											</p>
										) : (
											<div className="flex flex-col items-center space-y-2 justify-center">
												<motion.div
													whileTap={{ scale: 0.85 }}
													className="flex flex-col items-center space-y-1 rounded-xl p-2 hover:bg-[#f7efe7] cursor-pointer"
													onClick={() => {
														setShowUpdate(true);
														// handlePaymentTrack();
													}}
												>
													<div>
														<svg
															width="20"
															height="20"
															viewBox="0 0 20 20"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<g clipPath="url(#clip0_1999_2583)">
																<path
																	d="M11 9H15V11H11V15H9V11H5V9H9V5H11V9ZM10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"
																	fill="#B17C3F"
																/>
															</g>
															<defs>
																<clipPath id="clip0_1999_2583">
																	<rect width="20" height="20" fill="white" />
																</clipPath>
															</defs>
														</svg>
													</div>
													<p className="text-[0.625rem] text-[#B17C3F]">
														Make Update
													</p>
												</motion.div>
											</div>
										)}
									</div>
								)}
							{/* Action */}
							{!isProjectCancel && (
								<Action
									isReviewed={isReviewed}
									setReviewed={setReviewed}
									setTitleReview={setTitleReview}
									setDescReview={setDescReview}
									setRatingReview={setRatingReview}
									status={status}
									setStatus={setStatus}
								></Action>
							)}
							{/* Review Box */}
							{isReviewed && (
								<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
									<p className="text-[0.875rem] font-medium">Review</p>
									<p className="text-[0.8rem] font-normal">{titleReview}</p>
									<Rating
										name="read-only"
										readOnly
										value={ratingReview}
										precision={0.5}
										icon={<CircleIcon sx={{ color: "black", fontSize: 13 }} />}
										emptyIcon={
											<CircleIcon style={{ opacity: 0.55, fontSize: 13 }} />
										}
									/>
									<p className="text-[0.7rem] text-gray-500 font-light break-all">
										{descReview}
									</p>
								</div>
							)}
							{/* Detail of Payment */}
							<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
								<p className="text-[0.875rem] font-medium">Detail of Payment</p>
								{payment.length > 0 ? (
									<div className="w-full">
										<div className="w-[40.3125rem] py-[0.8rem] px-[2rem] border-b-2">
											{payment.map((item: any, idx: any) => (
												<div key={idx} className="flex w-full justify-between">
													<p className="font-light text-[0.75rem]">
														{item.phase}
													</p>
													<p className="font-light text-[0.75rem]">
														Rp. {item.price.toLocaleString("en-US")}.00
													</p>
												</div>
											))}
										</div>
										<div className="w-[40.3125rem] px-[2rem] py-[0.8rem] flex justify-between">
											<p className="text-[0.75rem] font-medium">
												Total Payment
											</p>
											<p className="text-[0.75rem] font-medium">
												{"Rp. " +
													payment
														.reduce((a: number, b: any) => a + b.price, 0)
														.toLocaleString("en-US") +
													".00"}
											</p>
										</div>
									</div>
								) : (
									<p className="text-[0.8rem] text-center py-10 text-[#4B4B4B]">
										There is no payment track
									</p>
								)}
							</div>
						</div>
						<div className="p-[1.4375rem]  w-[36.5625rem] h-fit space-y-[1.125rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
							<p className="text-[0.875rem] font-medium">Status</p>
							{status.length > 0 ? (
								status.map((item, idx) => (
									<div key={idx}>
										<Progress
											status={item}
											length={status.length}
											id={idx}
											srcMedia={srcMedia}
											srcContract={srcContract}
											extraInfo={extraInfo}
											setSrcMedia={setSrcMedia}
											setSrcContract={setSrcContract}
											setExtraInfo={setExtraInfo}
											setShowDocument={setShowDocument}
										></Progress>
									</div>
								))
							) : (
								<div className="flex justify-center pb-10 pt-8">
									<p className="text-[0.875] text-[#4B4B4B]">
										There is no progress here
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className=" ">
					<Update
						selectedMedia={selectedMedia}
						setMedia={setSelectedMedia}
						selectedContract={selectedContract}
						setContract={setSelectedContract}
						handleMedia={handleMedia}
						handleContract={handleContract}
						status={status}
						setStatus={setStatus}
						visible={showUpdate}
						onClose={handleOnCloseUpdate}
						setShowUpdate={setShowUpdate}
					/>
					<ShowDocument
						visible={showDocument}
						onClose={handleOnCloseDocument}
						setShowDocument={setShowDocument}
						srcMedia={srcMedia}
						srcContract={srcContract}
						extraInfo={extraInfo}
						setSrcMedia={setSrcMedia}
						setSrcContract={setSrcContract}
						setExtraInfo={setExtraInfo}
					/>
					<Complain
						visible={complain}
						setShowComplain={setShowComplain}
						onClose={handleOnCloseComplain}
					/>
					<Status
						visible={statuspop}
						onClose={handleOnCloseStatus}
						setShowStatus={setShowStatus}
						status={statustype}
						tittle={title}
						description={description}
						statusHandle={handleProjectCancel}
					/>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

interface progressProps {
	status: StatusItem;
	length: number;
	id: number;
	srcMedia: string;
	srcContract: string;
	extraInfo: string;

	setSrcMedia: (value: string) => void;
	setSrcContract: (value: string) => void;
	setExtraInfo: (value: string) => void;
	setShowDocument: (value: boolean) => void;
}

export function Progress(props: progressProps) {
	return (
		<div className="flex    ">
			<div className="h-full">
				<p className="text-[0.75rem]  w-[10.4375rem]">
					{props.status.date}, {props.status.time}
				</p>
			</div>
			<div className=" w-[3.3rem] ">
				{props.length - 1 == props.id ? (
					<div className=" z-10 flex justify-center items-center w-[1.0625rem] h-[1.0625rem] rounded-full bg-[#b17c3f6e]">
						<div className="w-[0.5625rem] h-[0.5625rem] rounded-full bg-[#B17C3F]"></div>
					</div>
				) : (
					<div className="h-full ">
						<div className="  flex justify-center items-center w-[1.0625rem] h-[1.0625rem] rounded-full bg-[#D9D9D9]">
							<div className="w-[0.5625rem] h-[0.5625rem] rounded-full bg-[#BEB8B8]"></div>
						</div>
						<div className=" h-full   ">
							<div className="  h-full  flex justify-center">
								<div className="border-dashed border-[0.01rem]  h-full border-[#D9D9D9] "></div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className=" ml-2 ">
				<p className="text-[0.75rem] break-all  font-medium">
					{props.status.tittle}
				</p>
				<p className="text-[0.625rem] break-all w-[22rem] font-light mt-1">
					{props.status.description}
				</p>

				{props.status.payment != 0 && !isNaN(props.status.payment) && (
					<div className="flex text-[0.625rem] space-x-2">
						<p className="font-light text-[#B17C3F]">Payment at this point:</p>
						<p className="font-medium ">
							Rp. {Number(props.status.payment).toLocaleString("en-US")}.00
						</p>
					</div>
				)}

				{(props.status.media != "" ||
					props.status.contract != "" ||
					props.status.extraInfo != "") && (
					<motion.div
						whileTap={{ scale: 0.85 }}
						onClick={() => {
							props.setSrcMedia(props.status.media);
							props.setSrcContract(props.status.contract);
							props.setExtraInfo(props.status.extraInfo);
							props.setShowDocument(true);
						}}
						className="mt-2 h-fit w-fit  p-1 rounded-md hover:bg-gray-200"
					>
						<svg
							width="11"
							height="14"
							viewBox="0 0 11 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.999 0C3.46857 0 2.95986 0.210714 2.58479 0.585786C2.20971 0.960859 1.999 1.46957 1.999 2V10C1.999 10.5304 2.20971 11.0391 2.58479 11.4142C2.95986 11.7893 3.46857 12 3.999 12H9C9.53043 12 10.0391 11.7893 10.4142 11.4142C10.7893 11.0391 11 10.5304 11 10V4.5H10.998V3.414C10.9979 3.01645 10.84 2.6352 10.559 2.354L8.645 0.439C8.3638 0.157982 7.98255 8.48813e-05 7.585 0H3.999ZM9 11H3.999C3.73378 11 3.47943 10.8946 3.29189 10.7071C3.10436 10.5196 2.999 10.2652 2.999 10V2C2.999 1.73478 3.10436 1.48043 3.29189 1.29289C3.47943 1.10536 3.73378 1 3.999 1H6.999V2.5C6.999 2.89782 7.15704 3.27936 7.43834 3.56066C7.71964 3.84196 8.10118 4 8.499 4H9.999V5.061H10V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11ZM9.791 3H8.498C8.36539 3 8.23821 2.94732 8.14445 2.85355C8.05068 2.75979 7.998 2.63261 7.998 2.5V1.207L9.791 3ZM0 3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2V10C1 10.7956 1.31607 11.5587 1.87868 12.1213C2.44129 12.6839 3.20435 13 4 13H9C9 13.2652 8.89464 13.5196 8.70711 13.7071C8.51957 13.8946 8.26522 14 8 14H3.79C2.78483 14 1.82083 13.6007 1.11007 12.8899C0.399303 12.1792 0 11.2152 0 10.21V3Z"
								fill="#B17C3F"
							/>
						</svg>
					</motion.div>
				)}
			</div>
		</div>
	);
}

interface actionProps {
	isReviewed: boolean;
	status: StatusItem[];
	setStatus: (value: StatusItem[]) => void;
	setReviewed: (value: boolean) => void;
	setTitleReview: (value: string) => void;
	setDescReview: (value: string) => void;
	setRatingReview: (value: number) => void;
}
export function Action(props: actionProps) {
	const [statusPayment, setStatusPayment] = useState<any>();

	const [showPaymentPopUp, setShowPaymentPopUp] = useState(false);
	const handleOnClosePaymentPopUp = () => {
		setShowPaymentPopUp(false);
	};

	const [showReview, setShowReview] = useState(false);
	const handleOnCloseReview = () => {
		setShowReview(false);
	};

	const [statuspop, setShowStatus] = useState(false);
	const handleOnCloseStatus = () => {
		setShowStatus(false);
	};
	const [status, setStatus] = useState("");
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");

	function handleConfirm() {
		const tempStatus = props.status;
		tempStatus[tempStatus.length - 1].isConfirmed = true;
		props.setStatus(tempStatus);
	}
	function handlePayment() {
		const tempStatus = props.status;
		tempStatus[tempStatus.length - 1].isPayed = true;
		props.setStatus(tempStatus);
	}

	return (
		<div className="">
			<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
				<p className="text-[0.875rem] font-medium">Action</p>
				<div className="flex ">
					<p className="text-[#B17C3F] text-[0.875rem]">Status:</p>
					<p className="text-[0.875rem] break-all ml-2 font-medium">
						{props.status[props.status.length - 1].tittle}
					</p>
				</div>
				<p className="text-[0.75rem]  break-all  text-[#4B4B4B] ml-[3.45rem] font-light">
					{props.status[props.status.length - 1].description}
				</p>
				<div className="flex flex-wrap    justify-center  py-6">
					{/* {props.status.actionType.length === 0 && (
					<p className="text-[0.875] text-[#4B4B4B]">No Action</p>
				)} */}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Contract",
					) && (
						<div className="flex ">
							<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
								Download Contract
							</button>
							{user.id != props.status[props.status.length - 1].updaterId && (
								<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
									Upload Contract
								</button>
							)}
						</div>
					)}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Confirmation",
					) &&
						(user.id != props.status[props.status.length - 1].updaterId ? (
							props.status[props.status.length - 1].isConfirmed ? (
								<p className="text-[0.8rem] text-[#4B4B4B]">Confirmed</p>
							) : (
								<div className="flex">
									<button
										type="button"
										id="confirmButton"
										onClick={() => {
											handleConfirm();
											setShowStatus(true);
											setStatus("success");
											setDescription("lorem");
										}}
										className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
									>
										Confirm
									</button>
								</div>
							)
						) : props.status[props.status.length - 1].isConfirmed ? (
							<p className="text-[0.8rem] text-[#4B4B4B]">Confirmed</p>
						) : (
							<p className="text-[0.8rem] text-[#4B4B4B]">
								Waiting Confirmation
							</p>
						))}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Media",
					) && (
						<div className="flex   ">
							<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
								Download Media
							</button>
						</div>
					)}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Payment",
					) &&
						(user.id != props.status[props.status.length - 1].updaterId ? (
							props.status[props.status.length - 1].isPayed ? (
								<p className="text-[0.8rem] text-[#4B4B4B]">Paid</p>
							) : (
								<div className="flex   ">
									<button
										onClick={() => {
											// handlePay();
											// setShowStatus(true);
											// setStatus("success");
											// setDescription("Dah Bayar");
											setStatusPayment(props.status);
											setShowPaymentPopUp(true);
										}}
										className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
									>
										Pay
									</button>
								</div>
							)
						) : props.status[props.status.length - 1].isPayed ? (
							<p className="text-[0.8rem] text-[#4B4B4B]">Paid</p>
						) : (
							<p className="text-[0.8rem] text-[#4B4B4B]">Waiting For Paid</p>
						))}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Finish Project",
					) &&
						user.id != props.status[props.status.length - 1].updaterId && (
							<div className="flex   ">
								{!props.isReviewed && (
									<button
										onClick={() => {
											setShowReview(true);
										}}
										className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
									>
										Review
									</button>
								)}
							</div>
						)}
					{props.status[props.status.length - 1].actionType.find(
						(item) => item == "Contractor",
					) && (
						<div className=" ml-4 flex flex-col items-center space-y-2  ">
							<p className="w-[35.625rem] text-[0.75rem] text-[#4B4B4B]">
								Suggestion:
							</p>
							{constractor != null && (
								<Link href={"/merchantProfile"}>
									<div className="w-[35.625rem]  flex space-x-3 p-[1rem] rounded-[0.625rem] border-[#e3d0ba] border-[0.1rem]">
										<div className="relative w-[3.625rem] h-[3.625rem] rounded-[0.375rem] overflow-hidden">
											<Image
												src={constractor.img}
												alt="constractor"
												fill={true}
												objectFit="cover"
											></Image>
										</div>
										<div className="flex flex-col justify-between">
											<p className="text-[0.875rem] font-medium">
												{constractor.name}
											</p>
											<p className="text-[0.75rem] font-light">
												{constractor.role}
											</p>
											<p className="text-[0.625rem] font-light">
												{constractor.city}, {constractor.province}
											</p>
										</div>
									</div>
								</Link>
							)}
							{user.id != props.status[props.status.length - 1].updaterId ? (
								<div className="flex flex-col items-center">
									{props.status[props.status.length - 1].isConfirmed ? (
										<p className="text-[0.8rem] text-[#4B4B4B]">Confirmed</p>
									) : (
										<div>
											<Link href={"/constractor"} target="_blank">
												<p className="w-[35.625rem] text-[0.75rem] text-gray-400   hover:text-[#B17C3F]">
													Let me pick by my self
												</p>
											</Link>
											<div className="flex justify-center">
												<button
													onClick={() => {
														handleConfirm();
														setShowStatus(true);
														setStatus("success");
														setDescription("lorem");
													}}
													className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
												>
													Confirm
												</button>
											</div>
										</div>
									)}
								</div>
							) : props.status[props.status.length - 1].isConfirmed ? (
								<p className="text-[0.8rem] text-[#4B4B4B]">Confirmed</p>
							) : (
								<p className="text-[0.8rem] text-[#4B4B4B]">
									Waiting Confirmation
								</p>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="">
				<Status
					visible={statuspop}
					onClose={handleOnCloseStatus}
					setShowStatus={setShowStatus}
					status={status}
					tittle={title}
					description={description}
				/>
				<Review
					setReviewed={props.setReviewed}
					setTitleReview={props.setTitleReview}
					setDescReview={props.setDescReview}
					setRatingReview={props.setRatingReview}
					visible={showReview}
					onClose={handleOnCloseReview}
					setShowReview={setShowReview}
				/>
				<PaymentPopUp
					statusPayment={statusPayment}
					setStatusPayment={setStatusPayment}
					visible={showPaymentPopUp}
					onClose={handleOnClosePaymentPopUp}
					setShowPayment={setShowPaymentPopUp}
					handlePayment={handlePayment}
				/>
			</div>
		</div>
	);
}

interface StatusItem {
	id: number;
	tittle: string;
	description: string;
	media: string;
	contract: string;
	extraInfo: string;
	payment: number;
	date: string;
	time: string;
	constractorId: string;
	actionType: string[];
	updaterId: string;
	isConfirmed: boolean;
	isPayed: boolean;
}
interface updateProps {
	selectedMedia: File | null;
	setMedia: (value: File | null) => void;
	selectedContract: File | null;
	setContract: (value: File | null) => void;
	handleMedia: (e: any) => void;
	handleContract: (e: any) => void;
	status: StatusItem[];
	setStatus: (value: StatusItem[]) => void;

	visible: boolean;
	onClose: (value: boolean) => void;
	setShowUpdate: (value: boolean) => void;
}
export function Update(props: updateProps) {
	const [tittle, setTitle] = useState("");
	const handleTitleChange = (e: any) => {
		handleDateChange();
		handleTimeChange();

		setTitle(e.target.value);
	};

	const [description, setDescription] = useState("");
	const handleDescriptionChange = (e: any) => {
		setDescription(e.target.value);
	};

	const [media, setMedia] = useState("");
	const handleMediaChange = (e: any) => {
		setMedia(e.target.value);
	};

	const [contract, setContract] = useState("");
	const handleContractChange = (e: any) => {
		setContract(e.target.value);
	};

	const [extraInfo, setExtraInfo] = useState("");
	const handleExtraInfoChange = (e: any) => {
		setExtraInfo(e.target.value);
	};

	const [payment, setPayment] = useState<string>("");
	const handlePaymentChange = (e: any) => {
		setPayment(e.target.value);
	};

	const [date, setDate] = useState("");
	const handleDateChange = () => {
		const currentDate = new Date();

		const day = currentDate.getDate(); // Mendapatkan tanggal (1-31)
		const monthIndex = currentDate.getMonth(); // Mendapatkan indeks bulan (0-11)
		const year = currentDate.getFullYear(); // Mendapatkan tahun (e.g., 2023)

		// Array untuk mengonversi indeks bulan menjadi nama bulan
		const monthNames = [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		];

		// Mendapatkan nama bulan dari indeks bulan
		const monthName = monthNames[monthIndex];

		// Menggabungkan komponen tanggal menjadi satu string
		const formattedDate = `${day} ${monthName} ${year}`;
		setDate(formattedDate);
	};

	const [time, setTime] = useState("");
	const handleTimeChange = () => {
		const currentDate = new Date();

		const hour = currentDate.getHours(); // Mendapatkan tanggal (1-31)
		const minute = currentDate.getMinutes(); // Mendapatkan indeks bulan (0-11)
		// Array untuk mengonversi indeks bulan menjadi nama bulan

		// Mendapatkan nama bulan dari indeks bulan

		// Menggabungkan komponen tanggal menjadi satu string
		const formattedDate = `${hour} ${minute} `;
		setTime(formattedDate);
	};

	const [actionType, setActionType] = useState<string[]>([]);

	const [constractorId, setConstractorId] = useState("");
	const [updaterId, setUpdaterId] = useState(user.id);

	function manageCheck(checkboxId: string) {
		const checkbox = document.getElementById(checkboxId) as HTMLInputElement;

		const confirmCheck = document.getElementById(
			"ConfirmCheck",
		) as HTMLInputElement;
		const finishProjectCheck = document.getElementById(
			"FinishProjectCheck",
		) as HTMLInputElement;

		const mediaCheck = document.getElementById(
			"MediaCheck",
		) as HTMLInputElement;
		const contractCheck = document.getElementById(
			"ContractCheck",
		) as HTMLInputElement;
		const contractorCheck = document.getElementById(
			"ContractorCheck",
		) as HTMLInputElement;
		const paymentCheck = document.getElementById(
			"PaymentCheck",
		) as HTMLInputElement;

		if (checkbox.checked) {
			if (checkboxId === "ContractorCheck") {
				paymentCheck.checked = false;
				finishProjectCheck.checked = false;
				confirmCheck.checked = false;
				mediaCheck.checked = false;
				contractCheck.checked = false;
			} else if (checkboxId === "PaymentCheck") {
				contractorCheck.checked = false;
				finishProjectCheck.checked = false;
				confirmCheck.checked = false;
				contractCheck.checked = false;
			} else if (checkboxId === "ContractCheck") {
				contractorCheck.checked = false;
				finishProjectCheck.checked = false;
				confirmCheck.checked = false;
				paymentCheck.checked = false;
			} else if (checkboxId === "MediaCheck") {
				contractorCheck.checked = false;
				finishProjectCheck.checked = false;
				confirmCheck.checked = false;
			} else if (checkboxId === "FinishProjectCheck") {
				contractorCheck.checked = false;
				mediaCheck.checked = false;
				confirmCheck.checked = false;
				paymentCheck.checked = false;
				contractCheck.checked = false;
			} else if (checkboxId === "ConfirmCheck") {
				contractorCheck.checked = false;
				finishProjectCheck.checked = false;
				mediaCheck.checked = false;
				paymentCheck.checked = false;
				contractCheck.checked = false;
			}
		}
	}

	function handleCheck() {
		const confirmCheck = document.getElementById(
			"ConfirmCheck",
		) as HTMLInputElement;
		const finishProjectCheck = document.getElementById(
			"FinishProjectCheck",
		) as HTMLInputElement;

		const mediaCheck = document.getElementById(
			"MediaCheck",
		) as HTMLInputElement;
		const contractCheck = document.getElementById(
			"ContractCheck",
		) as HTMLInputElement;
		const contractorCheck = document.getElementById(
			"ContractorCheck",
		) as HTMLInputElement;
		const paymentCheck = document.getElementById(
			"PaymentCheck",
		) as HTMLInputElement;

		const updatedActionTypes = [];

		if (confirmCheck.checked) {
			updatedActionTypes.push("Confirmation");
		}
		if (finishProjectCheck.checked) {
			updatedActionTypes.push("Finish Project");
		}
		if (mediaCheck.checked) {
			updatedActionTypes.push("Media");
		}
		if (contractCheck.checked) {
			updatedActionTypes.push("Contract");
		}
		if (contractorCheck.checked) {
			updatedActionTypes.push("Contractor");
		}
		if (paymentCheck.checked) {
			updatedActionTypes.push("Payment");
		}

		setActionType(updatedActionTypes);
	}

	useEffect(() => {
		const confirmCheck = document.getElementById(
			"ConfirmCheck",
		) as HTMLInputElement;
		const finishProjectCheck = document.getElementById(
			"FinishProjectCheck",
		) as HTMLInputElement;

		const mediaCheck = document.getElementById(
			"MediaCheck",
		) as HTMLInputElement;
		const contractCheck = document.getElementById(
			"ContractCheck",
		) as HTMLInputElement;
		const contractorCheck = document.getElementById(
			"ContractorCheck",
		) as HTMLInputElement;
		const paymentCheck = document.getElementById(
			"PaymentCheck",
		) as HTMLInputElement;
	}, []);

	function handleStatus() {
		const newStatus = {
			id: props.status.length + 1,
			tittle: tittle,
			description: description,
			media: media,
			contract: contract,
			extraInfo: extraInfo,
			payment: parseInt(payment),
			date: date,
			time: time,
			constractorId: constractorId,
			actionType: actionType,
			updaterId: updaterId,
			isConfirmed: false,
			isPayed: false,
		};

		props.setStatus([...props.status, newStatus]);
		props.setShowUpdate(false);
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		handleStatus();
	}

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowUpdate(false);
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

	let checBoxClass =
		"peer relative h-4 w-4 appearance-none rounded-sm border border-[#B17C3F] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:ring-[#B17C3F] after:content-[''] checked:bg-[#B17C3F] checked:ring-[#B17C3F] hover:ring hover:ring-[#B17C3F] focus:outline-none focus:outline";
	return (
		<div>
			{props.visible && (
				<div className="flex justify-center items-center  h-screen w-screen fixed left-0">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						ref={wrapperRef}
						className="absolute bg-white rounded-[1.5625rem] w-[34.5625rem] overflow-hidden h-[38rem] drop-shadow-landingShado"
					>
						<div className="w-full flex items-center py-3 border-b-2 ">
							<p className="ml-[1.8rem] text-[1.0625rem]">Update Progress</p>
						</div>
						<form
							action=""
							className="flex pb-2 overflow-y-scroll thin-scrollbar  flex-col items-center   h-[35rem]  "
							// onSubmit={}
							onSubmit={handleSubmit}
						>
							<div className=" flex justify-center space-y-2 ">
								<div>
									{/* tittle */}
									<div className="mt-4  space-x-2  w-fit flex flex-start items-center ">
										<input
											type={"checkbox"}
											id={"ConfirmCheck"}
											onClick={() => {
												manageCheck("ConfirmCheck");
											}}
											className={checBoxClass}
										></input>
										<p className="text-[10px]  text-[#B17C3F]">
											Confirmation Request
										</p>
									</div>
									<div className=" space-x-2 mt-3 w-fit  flex flex-start items-center ">
										<input
											type={"checkbox"}
											id={"FinishProjectCheck"}
											onClick={() => {
												manageCheck("FinishProjectCheck");
											}}
											className={checBoxClass}
										></input>
										<p className="text-[10px]  text-[#B17C3F]">
											Finish Project
										</p>
									</div>
									<div className=" w-[31.2rem]   justify-center mt-2 ">
										<div>
											<InputPopUp
												isWmax
												required
												type="text"
												title="Title"
												value={tittle}
												onChange={handleTitleChange}
												className="bg-white "
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														e.preventDefault();
													}
												}}
											></InputPopUp>
										</div>
									</div>
									<div className=" w-[31.2rem] ">
										<p className="w-[120px] text-[10px]  text-[#B17C3F] ">
											Description
										</p>
										<textarea
											required
											id="description"
											value={description}
											onChange={handleDescriptionChange}
											className=" mt-1 block w-[31.2rem] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</div>
									<div className="  mt-3 w-fit  items-center ">
										<div className="flex space-x-2">
											<p className="text-[10px]  text-[#B17C3F]">
												Additional information
											</p>
										</div>
										<textarea
											id="description"
											value={extraInfo}
											onChange={handleExtraInfoChange}
											className=" mt-1 block w-[31.2rem] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
											maxLength={500}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></textarea>
									</div>
									<div className="  mt-3 w-fit  items-center ">
										<div className="flex space-x-2">
											<input
												type={"checkbox"}
												id={"MediaCheck"}
												className={checBoxClass}
												onClick={() => {
													manageCheck("MediaCheck");
												}}
											></input>
											<p className="text-[10px]  text-[#B17C3F]">
												Upload Media
											</p>
										</div>
										<div className="mt-2">
											<DragAndDropInput
												htmlId="mediaInput"
												onFileSelected={props.handleMedia}
											/>
										</div>
									</div>
									<div className="  mt-3 w-fit  items-center ">
										<div className="flex space-x-2">
											<input
												type={"checkbox"}
												id={"ContractCheck"}
												onClick={() => {
													manageCheck("ContractCheck");
												}}
												className={checBoxClass}
											></input>
											<p className="text-[10px]  text-[#B17C3F]">Contract</p>
										</div>
										<div className="mt-2">
											<DragAndDropInput
												htmlId="contractId"
												onFileSelected={props.handleContract}
											/>
										</div>
									</div>
									<div className="  mt-3 w-fit  items-center ">
										<div className="flex space-x-2 mb-2">
											<input
												type={"checkbox"}
												id={"ContractorCheck"}
												onClick={() => {
													manageCheck("ContractorCheck");
												}}
												className={checBoxClass}
											></input>
											<p className="text-[10px]  text-[#B17C3F]">
												Contractor Recommendation
											</p>
										</div>
										{constractor != null && (
											<Link href={"/merchantProfile"}>
												<div className="w-[31.2rem]  flex space-x-3 p-[1rem] rounded-[0.625rem] border-[#e3d0ba] border-[0.1rem]  hover:bg-[#e4d1bc] ">
													<div className="relative w-[3.625rem] h-[3.625rem] rounded-[0.375rem] overflow-hidden">
														<Image
															src={constractor.img}
															alt="constractor"
															fill={true}
															objectFit="cover"
														></Image>
													</div>
													<div className="flex flex-col justify-between">
														<p className="text-[0.875rem] font-medium">
															{constractor.name}
														</p>
														<p className="text-[0.75rem] font-light">
															{constractor.role}
														</p>
														<p className="text-[0.625rem] font-light">
															{constractor.city}, {constractor.province}
														</p>
													</div>
												</div>
											</Link>
										)}
										<Link href={"/constractor"} target="_blank">
											<div className="w-[31.2rem] py-1 mt-2 rounded-[8px] border border-gold hover:bg-[#e4d1bc] flex justify-center">
												<p className="text-gold text-[0.7rem] font-medium ">
													Pick Contractor
												</p>
											</div>
										</Link>
									</div>
									<div className="  mt-3 w-min items-center ">
										<div className="flex space-x-2 w-[31.2rem]">
											<input
												type={"checkbox"}
												id={"PaymentCheck"}
												className={checBoxClass}
												onClick={() => {
													manageCheck("PaymentCheck");
												}}
											></input>
											<p className="text-[10px]  text-[#B17C3F]">Payment</p>
										</div>
										<div className="mt-2 w-[31.2rem]">
											<input
												type={"number"}
												value={payment}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														e.preventDefault();
													}
												}}
												onChange={handlePaymentChange}
												className="w-[31.2rem] placeholder mt-2 rounded-[7px] border border-gold pl-7 text-gold focus:border-gold focus:text-[1rem] focus:outline-gold"
											/>

											<p className="-mt-6 bottom-0 text-[0.8rem] text-gold font-semibold ml-2">
												Rp
											</p>
										</div>
									</div>
									<div className="flex w-[31.2rem]   justify-end ">
										<button
											type="submit"
											onClick={() => {
												handleCheck();
											}}
											className="my-3  rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
										>
											Save
										</button>
									</div>
								</div>
							</div>
						</form>
					</motion.div>
				</div>
			)}
		</div>
	);
}

interface documentProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowDocument: (value: boolean) => void;

	srcMedia: string;
	srcContract: string;
	extraInfo: string;

	setSrcMedia: (value: string) => void;
	setSrcContract: (value: string) => void;
	setExtraInfo: (value: string) => void;
}

export function ShowDocument(props: documentProps) {
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowDocument(false);
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

	const handleDownloadContract = () => {
		const downloadLink = document.createElement("a");
		downloadLink.href = props.srcContract; // Ganti dengan URL file yang ingin diunduh
		downloadLink.download = "contract"; // Nama file yang akan disimpan oleh pengguna

		downloadLink.click();
	};
	const handleDownloadMedia = () => {
		const downloadLink = document.createElement("a");
		downloadLink.href = props.srcMedia; // Ganti dengan URL file yang ingin diunduh
		downloadLink.download = "Media"; // Nama file yang akan disimpan oleh pengguna

		downloadLink.click();
	};
	return (
		<div>
			{props.visible && (
				<div className="fixed h-screen w-screen left-0 flex justify-center items-center">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						ref={wrapperRef}
						className="flex space-y-6 flex-col items-center justify-center   bg-white rounded-[1.5625rem] w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
					>
						<div className="h-[3rem] w-full border-b flex  items-center">
							<p className=" ml-8">Additional Information</p>
						</div>

						<p className="text-[0.75rem] w-[29.9375rem] break-all">
							{props.extraInfo}
						</p>
						<div className="flex space-x-4">
							{props.srcMedia != "" && (
								<button
									onClick={handleDownloadMedia}
									className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
								>
									Download Media
								</button>
							)}
							{props.srcContract != "" && (
								<button
									onClick={handleDownloadContract}
									className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
								>
									Download Contract
								</button>
							)}
						</div>
						<div className="h-10px w-full border-t"></div>
					</motion.div>
				</div>
			)}
		</div>
	);
}

interface complainProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowComplain: (value: boolean) => void;
}
export function Complain(props: complainProps) {
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowComplain(false);
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

	const [category, setCategory] = useState("");
	const handleChangeCategory = (value: string) => {
		setCategory(value);
	};

	const [description, setDescription] = useState("");
	const handleChangeDescription = (event: any) => {
		setDescription(event.target.value);
	};

	const [attacth, setAtt] = useState<File | null>(null);
	const handleAtt = (file: File | null) => {
		setAtt(file);
	};

	function handleSubmit(e: any) {
		e.preventDefault();
		props.setShowComplain(false);
	}

	return (
		<div className="">
			{props.visible && (
				<div className="flex justify-center items-center  h-screen w-screen fixed left-0">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						ref={wrapperRef}
						className=" absolute bg-white rounded-[1.5625rem] h-[26.625rem] w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
					>
						<div className="h-[3.3125rem] flex items-center border-b">
							<p className="text-[1.0625rem] ml-6">Complain</p>
						</div>
						<div className="flex justify-center">
							<form action="" onSubmit={handleSubmit} className="mt-2">
								<p className="text-[0.625rem] text-gold">Category</p>
								<Dropdown
									styleClass=" text-gold text-[15px] flex gap-[36px] mt-1 w-full "
									styleClassTag="py-[3px] border border-gold rounded-[7px] w-full"
									styleText="w-[200px]"
									data={[
										{ value: "Type1", label: "Type1" },
										{ value: "Type2", label: "Type2" },
										{ value: "Type3", label: "Type3" },
										{ value: "Type4", label: "Type4" },
										{ value: "Type5", label: "Type5" },
									]}
									value={category}
									placehoder=""
									onChange={(e: any) => {
										handleChangeCategory(e);
									}}
								></Dropdown>
								<p className="mt-2 text-[0.625rem] text-gold ">Description</p>
								<textarea
									required
									id="description"
									placeholder=""
									value={description}
									onChange={handleChangeDescription}
									className=" mt-1 block h-[95px] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
									maxLength={500}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
										}
									}}
								></textarea>
								<p className="mt-2 text-[0.625rem] text-gold ">Attachment</p>

								<div className="mt-2">
									<DragAndDropInput
										htmlId="attInput"
										onFileSelected={handleAtt}
									/>
								</div>
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

interface reviewProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowReview: (value: boolean) => void;
	setReviewed: (value: boolean) => void;
	setTitleReview: (value: string) => void;
	setDescReview: (value: string) => void;
	setRatingReview: (value: number) => void;
}
export function Review(props: reviewProps) {
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowReview(false);
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

	const [tittle, setTittle] = useState("");
	const handleChangeTittle = (event: any) => {
		setTittle(event.target.value);
	};

	const [description, setDescription] = useState("");
	const handleChangeDescription = (event: any) => {
		setDescription(event.target.value);
	};
	const [hover, setHover] = useState(-1);
	const [rating, setRating] = useState(0);
	console.log(rating);

	//
	const handleSubmitReview = () => {
		props.setReviewed(true);
		props.setTitleReview(tittle);
		props.setDescReview(description);
		props.setRatingReview(rating);
	};
	return (
		<div className="">
			{props.visible && (
				<div className="flex z-20 justify-center items-center  h-screen w-screen fixed left-0 top-20">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						ref={wrapperRef}
						className=" absolute bg-white rounded-[1.5625rem] h-[26.625rem] w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
					>
						<div className="h-[3.3125rem] flex items-center border-b">
							<p className="text-[1.0625rem] ml-6">Review</p>
						</div>
						<div className="flex justify-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmitReview();
									props.setShowReview(false);
								}}
								className="mt-2 w-[31.2rem]"
							>
								<InputPopUp
									isWmax
									value={tittle}
									required
									type={"text"}
									title={"Title"}
									onChange={handleChangeTittle}
									className="bg-white "
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
									className=" mt-1 block h-[95px] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
									maxLength={500}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
										}
									}}
								></textarea>
								<p className="mt-2 text-[0.625rem] mb-1 text-gold ">Rating</p>
								<Rating
									name="hover-feedback"
									value={rating}
									precision={0.5}
									onChange={(event, newValue: any) => {
										setRating(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									icon={
										<CircleIcon fontSize="small" sx={{ color: "#B17C3F" }} />
									}
									emptyIcon={
										<CircleIcon style={{ opacity: 0.55 }} fontSize="small" />
									}
								/>

								<div className="mt-[5rem] flex w-full justify-end ">
									<button
										type="submit"
										onClick={() => {
											// handleCheck();
										}}
										className="my-3  rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Save
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

interface paymentProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowPayment: (value: boolean) => void;
	handlePayment: () => void;
	statusPayment: StatusItem[];
	setStatusPayment: (value: StatusItem[]) => void;
}
export function PaymentPopUp(props: paymentProps) {
	const [selectedBank, setSelectedBank] = useState(
		bank_account.length > 0 ? bank_account[0] : null,
	);

	const [isListBankOpen, setListBankOpen] = useState(false);

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowPayment(false);
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
				<div className="flex z-20 justify-center items-center  h-screen w-screen fixed left-0 top-20">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						ref={wrapperRef}
						className=" absolute bg-white rounded-[1.5625rem] pb-8 w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
					>
						<div className="h-[3.3125rem] flex items-center border-b">
							<p className="text-[1.0625rem] ml-6">Pay</p>
						</div>
						<div className="flex justify-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									props.handlePayment();
									props.setShowPayment(false);
								}}
								className="mt-2 w-[31.2rem]"
							>
								<p className="mb-1 mt-1 text-gold text-[0.625rem]">Pay for</p>
								<div className="">
									<p className="font-medium text-[0.625rem]">
										{props.statusPayment[props.statusPayment.length - 1].tittle}
									</p>
									<p className="w-[31.2rem] break-all text-[0.5rem] font-normal text-[#4B4B4B]">
										{
											props.statusPayment[props.statusPayment.length - 1]
												.description
										}
									</p>
									<p className="text-[0.875rem] font-semibold">
										{"Rp  " +
											Number(
												props.statusPayment[props.statusPayment.length - 1]
													.payment,
											).toLocaleString("en-Us") +
											",00"}
									</p>
								</div>

								<p className="mb-1 mt-3 text-gold text-[0.625rem]">
									Your Account
								</p>
								{bank_account.length > 0 ? (
									<div>
										<div
											onClick={() => {
												setListBankOpen(!isListBankOpen);
											}}
											className="cursor-pointer items-center justify-between px-4 flex w-[31.2rem] hover:bg-[#e4d1bc] h-[5.8125rem] border border-gold rounded-md"
										>
											<div className="flex items-center space-x-2 ">
												<PaymentTwoToneIcon
													sx={{ color: "#B17C3F", fontSize: 70 }}
												/>
												<div>
													<p className="text-[0.625rem] font-medium">
														{selectedBank?.bank_name}
													</p>
													<p className="text-[0.5rem]">
														{selectedBank?.bank_number}
													</p>
												</div>
											</div>
											<div className="h-fit w-fit ">
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7 10L12 15L17 10"
														stroke="#B17C3F"
														strokeWidth="2.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>
										{isListBankOpen && (
											<ul className="absolute bg-white mt-1 w-[31.2rem] thin-scrollbar max-h-[10rem] h- overflow-y-scroll p-2 border drop-shadow-md rounded-md ">
												{bank_account.map((item, index) => {
													return (
														<li
															key={index}
															onClick={() => {
																setSelectedBank(item);
																setListBankOpen(!isListBankOpen);
															}}
															className="cursor-pointer hover:bg-[#e4d1bc] pl-6 items-center py-1 rounded-md flex "
														>
															<div>
																<PaymentTwoToneIcon
																	sx={{ color: "#B17C3F", fontSize: 40 }}
																/>
															</div>
															<div className="ml-2">
																<p className="text-[0.625rem] font-medium">
																	{item.bank_name}
																</p>
																<p className="text-[0.5rem]">
																	{item.bank_number}
																</p>
															</div>
														</li>
													);
												})}
											</ul>
										)}
										<p className="mb-1 mt-3 text-gold text-[0.625rem]">
											Transaction Password
										</p>
										<InputPopUp
											isWmax
											required
											type="password"
											// title="Transaction Password"
											// value={tittle}
											// onChange={handleTitleChange}
											className="bg-white "
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
												}
											}}
										></InputPopUp>
									</div>
								) : (
									<div className="w-[31.2rem] flex justify-center">
										<div>
											<p className="text-[0.7rem] text-gray-400 flex justify-center">{`You Don't Have Bank Account`}</p>
											<p className="text-[0.7rem] flex justify-center text-gray-400 ">
												Add Bank Account To Pay
											</p>
										</div>
									</div>
								)}

								<div className="mt-10 flex w-full justify-end ">
									<button
										type="submit"
										className="my-3  rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
									>
										Pay
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
