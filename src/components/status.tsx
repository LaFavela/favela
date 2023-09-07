import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface StatusProps {
	visible: boolean;
	onClose: (value: boolean) => void;
	setShowStatus: (value: boolean) => void;
	status: string;
	tittle: string;
	description: string;
	statusHandle?: () => void;
}
export default function Status(props: StatusProps) {
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					props.setShowStatus(false);
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

	let bgColor = "bg-[#FFFFFF]";
	// let bgColor = "bg-[#FA7866]";
	if (props.status === "error") {
		bgColor = "bg-[#FA7866]";
	} else if (props.status === "confirm") {
		bgColor = "bg-[#FAB566]";
	} else if (props.status === "success") {
		bgColor = "bg-[#71BB65]";
	}
	return (
		<div className="">
			{props.visible && (
				<div className="z-50 -translate-x-1/2 -translate-y-1/2 translate transform fixed left-1/2 top-[50%] ">
					<motion.div

						initial={{ scale: 0.85}}
						animate={{ scale: 1}}
						ref={wrapperRef}
						className={
							"  flex flex-col justify-between w-[34.5625rem] h-[17.5rem] bg-white  rounded-[1.5625rem] overflow-hidden drop-shadow-landingShado"
						}
					>
						<div className={"w-full flex items-center h-[3.25rem] " + bgColor}>
							<p className="ml-10 text-[1.0625rem] font-medium text-white">
								{props.tittle}
							</p>
						</div>
						<div className="flex justify-center">
							<p className="text-[0.9rem] font-normal text-black">
								{props.description}
							</p>
						</div>
						<div
							className={
								"w-full flex items-center h-[3.25rem] border-t-2 justify-end "
							}
						>
							{props.status === "confirm" && (
								<div className="space-x-2 mr-6">
									
									<button 
									onClick={() =>{
										props.statusHandle();
										props.setShowStatus(!props.visible)
									}}
									className="w-[5.6875rem] h-[1.875rem] bg-[#FAB566] rounded-[1.5rem] text-white text-[0.75rem] hover:bg-[#d89a53]">
										Confirm
									</button>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
}
