import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Skeleton } from "@mui/material";
const people = [
	{ id: 1, name: "Semua" },
	{ id: 2, name: "Property" },
	{ id: 3, name: "Design" },
	{ id: 4, name: "Build" },
];
const data = [
	{
		id: "HNF29125367",
		transactionType: "Build",
		transactionDate: "16 January 2023",
		propertyName: "Ampenan Asri",
		img: "/assets/browse/Build14.png",
		propertyType: "Villa",
		price: 476000000,
		status: "PENDING",
		link: "/detailTransaction",
	},
	{
		id: "HNF29125367",
		transactionType: "Build",
		transactionDate: "16 January 2023",
		propertyName: "Perumahan Bumi Asri",
		img: "/assets/browse/Build13.png",
		propertyType: "Villa",
		price: 476000000,
		status: "FINISHED",
		link: "/detailTransaction",
	},
	{
		id: "HNF29125367",
		transactionType: "Build",
		transactionDate: "16 January 2023",
		propertyName: "BTN Ali",
		img: "/assets/browse/Build9.png",
		propertyType: "Rumah",
		price: 476000000,
		status: "PENDING",
		link: "/detailTransaction",
	},
];
export default function Transaction() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	return (
		<div className="flex justify-center">
			<div className="mt-[2.1875rem] w-[81.875rem] space-y-[1.3125rem]">
				<div>
					<p className="text-[1.25rem] font-medium">Transaction</p>
				</div>
				<div className="w-[55.5625rem] space-y-[1.125rem] p-[1.93rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
					{data.length > 0 ? (
						data.map((item, idx) => (
							<div
								key={idx}
								className="w-full h-fit p-[1.375rem] border border-[#f7e6d4] bg-white cursor-pointer hover:bg-[#f7e6d4] space-y-[0.875rem] rounded-[0.9375rem]"
							>
								<Link href={item.link} className=" space-y-[0.875rem]">
									<div className="flex space-x-3 items-center">
										<p className="text-[0.875rem] font-semibold text-gold">
											{item.transactionType}
										</p>
										<p className="text-[0.75rem]">{item.transactionDate}</p>
										<p className="font-extralight text-gold">|</p>
										<p className="text-[0.75rem]">{item.id}</p>
									</div>
									<div className="flex space-x-3">
										<div className="relative w-[4.4375rem] h-[4.4375rem] rounded-[0.625rem] overflow-hidden">
											<Image src={item.img} alt="property" fill={true} />
										</div>
										<div className="flex-col justify-between flex w-[21.5625rem]">
											<p className="text-[0.875rem] font-light">
												{item.propertyName}
											</p>
											
											<p className="text-[0.875rem] font-light text-[#BEB8B8]">
												{item.propertyType}
											</p>
											<p className="text-[1rem] font-semibold ">
												Rp. {item.price.toLocaleString("en-US")}.00
											</p>
										</div>
										<div className="flex-col flex w-[21.5625rem]">
											<p className="text-[0.875rem] font-semibold text-gold">
												Status:
											</p>
											<p className="text-[0.75rem] font-light ">
												{item.status}
											</p>
										</div>
									</div>
								</Link>
							</div>
						))
					) : (
						<div className="p-10 flex justify-center">
							<p className="text-gray-400 text-lg">
								There is no Transaction here
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
