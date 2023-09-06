import Image from "next/image";
import Link from "next/link";
import InputPopUp from "@/components/popUpInput";
import DragAndDropInput from "@/components/inputDrop";
import { useState, useRef, useEffect } from "react";
import Status from "@/components/status";
import Dropdown from "@/components/dropdwon";

const user = {
	id: "210swsss",
	name: "Ramadhani Al-Qadri",
	img: "/assets/landing/Designer3.jpg",
	role: "Designer",
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
		role: "",
	},
	{
		id: "21053",
		name: "Muhammad Dwimas ",
		img: "/assets/landing/Designer3.jpg",
		role: "Designer",
	},
	{
		id: "21015",
		name: "Dzulhi Raihan",
		img: "/assets/landing/Designer3.jpg",
		role: "Contractor",
	},
];
const constractor = {
	name: "Sinar Bata",
	img: "/assets/landing/Designer3.jpg",
	role: "Contractor",
	city: "Jakarta",
	province: "DKI Jakarta",
};

export default function DetailTransaction() {
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
			media: "",
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

	return (
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
										<p className="text-[0.9375rem] font-light mr-1">Name : </p>
										<p className="text-[0.9375rem] font-medium">
											{transaction.propertyName}
										</p>
									</div>
									<div className="flex">
										<p className="text-[0.9375rem] font-light mr-1">Type : </p>
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
							<div className="flex flex-col justify-between">
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
								<button className="flex justify-center items-center text-white text-[0.75rem] font-medium  w-[10.25rem] bg-[#B17C3F] hover:bg-[#8d6333] rounded-full h-[1.8125rem]">
									Cancel Project
								</button>
							</div>
						</div>
						{/* Contributor */}
						<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
							<p className="text-[0.875rem] font-medium">Contributor</p>
							<div className="flex ">
								{Contributor.map((item, idx) => (
									<div key={idx} className="flex space-x-2">
										<div className="relative w-[1.875rem] h-[1.875rem] rounded-full overflow-hidden">
											<Image
												src={item.img}
												alt="contributor"
												fill={true}
												objectFit="cover"
											/>
										</div>
										<div className="-space-y-1">
											<p className="text-[0.75rem] font-normal ">{item.name}</p>
											<p className="text-[0.625rem] text-[#BEB8B8]">
												{item.role}
											</p>
										</div>
										{idx !== Contributor.length - 1 && (
											<div className="  w-[0.5rem]">
												<div className="h-[2rem] bg-gray-300 w-[0.01rem]"></div>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
						{/* Update */}
						{user.role == "Designer" && (
							<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
								<p className="text-[0.875rem] font-medium">Update</p>
								<div className="flex flex-col items-center space-y-2 justify-center">
									<div
										className="flex flex-col items-center space-y-2"
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
									</div>
								</div>
							</div>
						)}
						{/* Action */}
						<Action status={status} setStatus={setStatus}></Action>
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
										<p className="text-[0.75rem] font-medium">Total Payment</p>
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
								<p className="text-[0.875] text-center py-10 text-[#4B4B4B]">
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
			</div>
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
					<div className="mt-2 ">
						<svg
							width="11"
							height="14"
							viewBox="0 0 11 14"
							fill="none"
							onClick={() => {
								props.setSrcMedia(props.status.media);
								props.setSrcContract(props.status.contract);
								props.setExtraInfo(props.status.extraInfo);
								props.setShowDocument(true);
							}}
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.999 0C3.46857 0 2.95986 0.210714 2.58479 0.585786C2.20971 0.960859 1.999 1.46957 1.999 2V10C1.999 10.5304 2.20971 11.0391 2.58479 11.4142C2.95986 11.7893 3.46857 12 3.999 12H9C9.53043 12 10.0391 11.7893 10.4142 11.4142C10.7893 11.0391 11 10.5304 11 10V4.5H10.998V3.414C10.9979 3.01645 10.84 2.6352 10.559 2.354L8.645 0.439C8.3638 0.157982 7.98255 8.48813e-05 7.585 0H3.999ZM9 11H3.999C3.73378 11 3.47943 10.8946 3.29189 10.7071C3.10436 10.5196 2.999 10.2652 2.999 10V2C2.999 1.73478 3.10436 1.48043 3.29189 1.29289C3.47943 1.10536 3.73378 1 3.999 1H6.999V2.5C6.999 2.89782 7.15704 3.27936 7.43834 3.56066C7.71964 3.84196 8.10118 4 8.499 4H9.999V5.061H10V10C10 10.2652 9.89464 10.5196 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11ZM9.791 3H8.498C8.36539 3 8.23821 2.94732 8.14445 2.85355C8.05068 2.75979 7.998 2.63261 7.998 2.5V1.207L9.791 3ZM0 3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2V10C1 10.7956 1.31607 11.5587 1.87868 12.1213C2.44129 12.6839 3.20435 13 4 13H9C9 13.2652 8.89464 13.5196 8.70711 13.7071C8.51957 13.8946 8.26522 14 8 14H3.79C2.78483 14 1.82083 13.6007 1.11007 12.8899C0.399303 12.1792 0 11.2152 0 10.21V3Z"
								fill="#B17C3F"
							/>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
}

interface actionProps {
	status: StatusItem[];
	setStatus: (value: StatusItem[]) => void;
}
export function Action(props: actionProps) {
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
	function handlePay() {
		const tempStatus = props.status;
		tempStatus[tempStatus.length - 1].isPayed = true;
		props.setStatus(tempStatus);
	}

	return (
		<div>
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
								<p className="text-[0.875] text-[#4B4B4B]">Confirmed</p>
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
							<p className="text-[0.875] text-[#4B4B4B]">Confirmed</p>
						) : (
							<p className="text-[0.875] text-[#4B4B4B]">
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
								<p className="text-[0.875] text-[#4B4B4B]">Paid</p>
							) : (
								<div className="flex   ">
									<button
										onClick={() => {
											handlePay();
											setShowStatus(true);
											setStatus("success");
											setDescription("Dah Bayar");
										}}
										className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
									>
										Pay
									</button>
								</div>
							)
						) : props.status[props.status.length - 1].isPayed ? (
							<p className="text-[0.875] text-[#4B4B4B]">Paid</p>
						) : (
							<p className="text-[0.875] text-[#4B4B4B]">Waiting For Paid</p>
						))}
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
									<Link href={"/constractor"} target="_blank">
										<p className="w-[35.625rem] text-[0.75rem] text-[#B17C3F]">
											Let me pick by my self
										</p>
									</Link>
									{props.status[props.status.length - 1].isConfirmed ? (
										<p className="text-[0.875] text-[#4B4B4B]">Confirmed</p>
									) : (
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
									)}
								</div>
							) : props.status[props.status.length - 1].isConfirmed ? (
								<p className="text-[0.875] text-[#4B4B4B]">Confirmed</p>
							) : (
								<p className="text-[0.875] text-[#4B4B4B]">
									Waiting Confirmation
								</p>
							)}
						</div>
					)}
				</div>
			</div>
			<Status
				visible={statuspop}
				onClose={handleOnCloseStatus}
				setShowStatus={setShowStatus}
				status={status}
				tittle={title}
				description={description}
			/>
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
				<div
					ref={wrapperRef}
					className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white rounded-[1.5625rem] w-[34.5625rem] overflow-hidden h-[38rem] drop-shadow-landingShado"
				>
					<div className="w-full flex items-center py-3 border-b-2 ">
						<p className="ml-[1.8rem] text-[1.0625rem]">Update Progress</p>
					</div>
					<form
						action=""
						className="flex pb-2 overflow-scroll no-scrollbar flex-col items-center w-[34.5625rem]  h-[35rem] bg-white drop-shadow-landingShado "
						// onSubmit={}
						onSubmit={handleSubmit}
					>
						<div className="w-full space-y-2 ">
							{/* tittle */}
							<div className="mt-4 ml-7 space-x-2  w-fit flex flex-start items-center ">
								<input
									type={"checkbox"}
									id={"ConfirmCheck"}
									className={checBoxClass}
								></input>
								<p className="text-[10px]  text-[#B17C3F]">
									Confirmation Request
								</p>
							</div>

							<div className="ml-7 space-x-2 mt-3 w-fit flex flex-start items-center ">
								<input
									type={"checkbox"}
									id={"FinishProjectCheck"}
									className={checBoxClass}
								></input>
								<p className="text-[10px]  text-[#B17C3F]">Finish Project</p>
							</div>
							<div className="ml-7 w-full mt-2 ">
								<InputPopUp
									required
									type="text"
									title="Title"
									value={tittle}
									onChange={handleTitleChange}
									className="bg-white"
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
										}
									}}
								></InputPopUp>
							</div>
							<div className="ml-7 w-full ">
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
							<div className="ml-7  mt-3 w-fit  items-center ">
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

							<div className="ml-7  mt-3 w-fit  items-center ">
								<div className="flex space-x-2">
									<input
										type={"checkbox"}
										id={"MediaCheck"}
										className={checBoxClass}
									></input>
									<p className="text-[10px]  text-[#B17C3F]">Upload Media</p>
								</div>
								<div className="mt-2">
									<DragAndDropInput
										htmlId="mediaInput"
										onFileSelected={props.handleMedia}
									/>
								</div>
							</div>
							<div className="ml-7  mt-3 w-fit  items-center ">
								<div className="flex space-x-2">
									<input
										type={"checkbox"}
										id={"ContractCheck"}
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
							<div className="ml-7  mt-3 w-fit  items-center ">
								<div className="flex space-x-2 mb-2">
									<input
										type={"checkbox"}
										id={"ContractorCheck"}
										className={checBoxClass}
									></input>
									<p className="text-[10px]  text-[#B17C3F]">
										Contractor Recommendation
									</p>
								</div>
								{constractor != null && (
									<Link href={"/merchantProfile"}>
										<div className="w-[31.2rem]  flex space-x-3 p-[1rem] rounded-[0.625rem] border-[#e3d0ba] border-[0.1rem]">
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
									<div className="w-[31.2rem] py-1 mt-2 rounded-[8px] border border-gold flex justify-center">
										<p className="text-gold text-[0.7rem] ">Pick Contractor</p>
									</div>
								</Link>
							</div>
							<div className="ml-7  mt-3 w-full  items-center ">
								<div className="flex space-x-2">
									<input
										type={"checkbox"}
										id={"PaymentCheck"}
										className={checBoxClass}
									></input>
									<p className="text-[10px]  text-[#B17C3F]">Payment</p>
								</div>
								<div className="mt-2">
									<p className="absolute mt-1 text-[0.8rem] text-gold font-semibold ml-2">
										Rp
									</p>
									<input
										type={"number"}
										value={payment}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
											}
										}}
										onChange={handlePaymentChange}
										className="w-[31.2rem] placeholder mt-2 rounded-[7px] border-2 border-gold pl-7 text-gold focus:border-gold focus:text-[1rem] focus:outline-gold"
									/>
								</div>
							</div>

							<div className="flex w-full justify-end ">
								<button
									type="submit"
									onClick={() => {
										handleCheck();
									}}
									className="my-3 mr-6 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
								>
									Save
								</button>
							</div>
						</div>
					</form>
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
				<div
					ref={wrapperRef}
					className="flex space-y-6 flex-col items-center justify-center py-12 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white rounded-[1.5625rem] w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
				>
					<div></div>

					<p className="text-[0.75rem] w-[29.9375rem]">{props.extraInfo}</p>
					<div className="flex space-x-4">
						{props.srcMedia && (
							<button
								onClick={handleDownloadMedia}
								className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
							>
								Download Media
							</button>
						)}
						{props.srcContract && (
							<button
								onClick={handleDownloadContract}
								className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]"
							>
								Download Contract
							</button>
						)}
					</div>
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

	return (
		<div>
			{props.visible && (
				<div
					ref={wrapperRef}
					className=" fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white rounded-[1.5625rem] h-[26.625rem] w-[34.5625rem] overflow-hidden  drop-shadow-landingShado"
				>
					<div className="h-[3.3125rem] flex items-center border-b">
						<p className="text-[1.0625rem] ml-6">Complain</p>
					</div>
					<div className="flex justify-center">
						<form className="mt-2">
							<p className="text-[0.625rem] text-gold">Category</p>
							<Dropdown
								styleClass="text-gold text-[15px] flex gap-[36px] mt-1 w-full "
								styleClassTag="py-[3px] border-2 border-gold rounded-[7px] w-full"
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
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
