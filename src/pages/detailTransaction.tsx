import Image from "next/image";

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
		id: 0,
		name: "Ramadhani Al-Qadri",
		img: "/assets/landing/Designer3.jpg",
		role: "",
	},
	{
		id: 1,
		name: "Muhammad Dwimas ",
		img: "/assets/landing/Designer3.jpg",
		role: "Designer",
	},
	{
		id: 2,
		name: "Dzulhi Raihan",
		img: "/assets/landing/Designer3.jpg",
		role: "Contractor",
	},
];
const action = {
	tittle: "Momen Kebersamaan",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
	actionType: ["Constractor"],
};
const constractor = {
	name: "Sinar Bata",
	img: "/assets/landing/Designer3.jpg",
	role: "Contractor",
	city: "Jakarta",
	province: "DKI Jakarta",
};
const payment = [
	{
		phase: "Pre Design",
		price: 2000000,
	},
	{
		phase: "Pre Design",
		price: 2000000,
	},
	{
		phase: "Pre Design",
		price: 2000000,
	},
	{
		phase: "Design Development",
		price: 2005000,
	},
	{
		phase: "Design Development",
		price: 2005000,
	},
	{
		phase: "Design Development",
		price: 2005000,
	},
];

const status = [
	{
		id: 0,
		tittle: "Momen Kebersamaan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
		media: "/assets/landing/Designer3.jpg",
		contract: "/assets/landing/Designer3.jpg",
		extraInfo:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, saepe esse. Laborum, vel velit aperiam illo sit ipsa qui sint fugiat. Harum, explicabo. Magni fuga exercitationem totam omnis distinctio quibusdam.",
		payment: 0,
		date: "16 January 2023",
		time: "08.00 WIB",
	},
	{
		id: 1,
		tittle: "Momen Kebersamaan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
		media: "/assets/landing/Designer3.jpg",
		contract: "/assets/landing/Designer3.jpg",
		extraInfo:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, saepe esse. Laborum, vel velit aperiam illo sit ipsa qui sint fugiat. Harum, explicabo. Magni fuga exercitationem totam omnis distinctio quibusdam.",
		payment: 10000,
		date: "16 January 2023",
		time: "08.00 WIB",
	},
	{
		id: 2,
		tittle: "Momen Kebersamaan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
		media: "/assets/landing/Designer3.jpg",
		contract: "/assets/landing/Designer3.jpg",
		extraInfo: "",
		payment: 10000,
		date: "16 January 2023",
		time: "08.00 WIB",
	},
	{
		id: 3,
		tittle: "Momen Kebersamaan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Sed id pretium elit.",
		media: "/assets/landing/Designer3.jpg",
		contract: "",
		extraInfo: "",
		payment: 10000,
		date: "16 January 2023",
		time: "08.00 WIB",
	},
];
export default function DetailTransaction() {
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
								<button className="flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
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
						{/* Action */}
						<Action actionType={action.actionType}></Action>
						{/* Detail of Payment */}
						<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
							<p className="text-[0.875rem] font-medium">Detail of Payment</p>
							{payment.length > 0 ? (
								<div className="w-full">
									<div className="w-[40.3125rem] py-[0.8rem] px-[2rem] border-b-2">
										{payment.map((item, idx) => (
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
													.reduce((a, b) => a + b.price, 0)
													.toLocaleString("en-US") +
												".00"}
										</p>
									</div>
								</div>
							) : (
								<p className="text-[0.875] text-[#4B4B4B]">
									There is no data here
								</p>
							)}
						</div>
					</div>
					<div className="p-[1.4375rem]  w-[36.5625rem] h-fit space-y-[1.125rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
						<p className="text-[0.875rem] font-medium">Status</p>
						{status.length > 0 ? (
							status.map((item, idx) => (
								<div key={idx}>
									<Progress status={item}></Progress>
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
		</div>
	);
}

// interface progressProps {
// 	progress: const[];
// }
export function Progress(props: any) {
	return (
		<div className="flex    ">
			<div className="h-full">
				<p className="text-[0.75rem]  w-[10.4375rem]">
					{props.status.date}, {props.status.time}
				</p>
			</div>
			<div className=" w-[3.3rem] ">
				{status.length - 1 == props.status.id ? (
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
				<p className="text-[0.75rem] font-medium">{props.status.tittle}</p>
				<p className="text-[0.625rem] font-light mt-1">
					{props.status.description}
				</p>
				{props.status.payment != 0 && (
					<div className="flex text-[0.625rem] space-x-2">
						<p className="font-light text-[#B17C3F]">Payment at this point:</p>
						<p className="font-medium ">
							Rp. {props.status.payment.toLocaleString("en-US")}.00
						</p>
					</div>
				)}

				{(props.status.media != "" ||
					props.status.contract != "" ||
					props.status.extraInfo != "") && (
						<div className="mt-2">
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
						</div>
					)}
			</div>
		</div>
	);
}

interface actionProps {
	actionType: string[];
}
export function Action(props: actionProps) {
	return (
		<div className="space-y-[0.375rem] w-full p-[1.4375rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
			<p className="text-[0.875rem] font-medium">Action</p>
			<div className="flex ">
				<p className="text-[#B17C3F] text-[0.875rem]">Status:</p>
				<p className="text-[0.875rem] ml-2 font-medium">{action.tittle}</p>
			</div>
			<p className="text-[0.75rem] text-[#4B4B4B] ml-[3.45rem] font-light">
				{action.description}
			</p>
			<div className="flex flex-wrap    justify-center  py-6">
				{props.actionType.find((item) => item == "Updater") && (
					<p className="text-[0.875] text-[#4B4B4B]">No Action</p>
				)}
				{props.actionType.find((item) => item == "Contract") && (
					<div className="flex ">
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Download Contract
						</button>
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Upload Contract
						</button>
					</div>
				)}
				{props.actionType.find((item) => item == "Confirmation") && (
					<div className="flex   ">
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Confirm
						</button>
					</div>
				)}
				{props.actionType.find((item) => item == "Media") && (
					<div className="flex   ">
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Download Media
						</button>
					</div>
				)}
				{props.actionType.find((item) => item == "Pay") && (
					<div className="flex   ">
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Pay
						</button>
					</div>
				)}
				{props.actionType.find((item) => item == "Constractor") && (
					<div className=" ml-4 flex flex-col items-center space-y-2  ">
						<p className="w-[35.625rem] text-[0.75rem] text-[#4B4B4B]">
							Suggestion from designer:
						</p>
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
								<p className="text-[0.75rem] font-light">{constractor.role}</p>
								<p className="text-[0.625rem] font-light">
									{constractor.city},{constractor.province}
								</p>
							</div>
						</div>
						<p className="w-[35.625rem] text-[0.75rem] text-[#B17C3F]">
							Let me pick by my self
						</p>
						<button className="m-1 flex justify-center items-center text-[#B17C3F] text-[0.75rem] font-medium border-2 w-[10.25rem] border-[#B17C3F] hover:bg-[#e3d0ba] rounded-full h-[1.8125rem]">
							Confirm
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
