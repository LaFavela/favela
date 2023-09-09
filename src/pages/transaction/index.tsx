import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Skeleton } from "@mui/material";
import { supabase } from "@/lib/supabase";
import { Database } from "@/types";
import { getDate } from "@/tools/time";
const people = [
	{ id: 1, name: "Semua" },
	{ id: 2, name: "Property" },
	{ id: 3, name: "Design" },
	{ id: 4, name: "Build" },
];

type Transactions =
	Database["public"]["Tables"]["transaction_contributor"]["Row"] & {
		transaction_id: Database["public"]["Tables"]["transaction"]["Row"];
	};

export default function Transaction() {
	const [transactionData, setTransactionData] = useState<Transactions[]>();
	useEffect(() => {
		const fetch = async () => {
			const session = (await supabase.auth.getUser()).data.user;
			const { data, error } = await supabase
				.from("transaction_contributor")
				.select("*, transaction_id(*)")
				.or(
					`client_id.eq.${session?.id},contractor_id.eq.${session?.id},designer_id.eq.${session?.id}`,
				)
				.returns<Transactions[]>();
			if (data) setTransactionData(data);
		};
		fetch();
	}, []);

	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(1);

	return (
		<div className="flex justify-center">
			<div className="mt-[2.1875rem] w-[81.875rem] space-y-[1.3125rem]">
				<div>
					<p className="text-[1.25rem] font-medium">Transaction</p>
				</div>
				<div className="w-[55.5625rem] space-y-[1.125rem] p-[1.93rem] bg-white drop-shadow-landingShado  rounded-[1.5625rem]">
					{transactionData && transactionData.length > 0 ? (
						transactionData.map((item, idx) => (
							<div
								key={idx}
								className="w-full h-fit p-[1.375rem] border border-[#f7e6d4] bg-white cursor-pointer hover:bg-[#f7e6d4] space-y-[0.875rem] rounded-[0.9375rem]"
							>
								<Link href={`/transaction/detail/${item.transaction_id.id}`} className=" space-y-[0.875rem]">
								<div className="flex space-x-3 items-center">
									<p className="text-[0.875rem] font-semibold text-gold">
										{item.transaction_id.type}
									</p>
									<p className="text-[0.75rem]">
										{getDate(item.transaction_id.created_at)}
									</p>
									<p className="font-extralight text-gold">|</p>
									<p className="text-[0.75rem]">{item.id}</p>
								</div>
								<div className="flex space-x-3">
									<div className="relative w-[4.4375rem] h-[4.4375rem] rounded-[0.625rem] overflow-hidden">
										<Image
											src={item.transaction_id.img}
											alt="property"
											fill={true}
										/>
									</div>
									<div className="flex-col justify-between flex w-[21.5625rem]">
										<p className="text-[0.875rem] font-light">
											{item.transaction_id.name}
										</p>
										<p className="text-[0.875rem] font-light text-[#BEB8B8]">
											{item.transaction_id.property_type}
										</p>
										<p className="text-[1rem] font-semibold">
											Rp
											{item.transaction_id.price_estimated.toLocaleString(
												"id-ID",
											)}
											,00
										</p>
									</div>
									<div className="flex-col justify-start flex w-[21.5625rem]">
										<p className="text-[0.875rem] font-semibold text-gold">Status:</p>
										<p className="text-[0.75rem] font-light ">
											{item.transaction_id.status}
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
