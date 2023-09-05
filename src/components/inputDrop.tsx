import { propagateServerField } from "next/dist/server/lib/render-server";
import React, { useState } from "react";

interface DragAndDropInputProps {
	htmlId: string;
	onFileSelected: (file: File | null) => void;
	placeholderText?: string;
}

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({
	onFileSelected,
	htmlId,
}) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		setSelectedFile(file);
		onFileSelected(file);
	};

	const handleFileClick = () => {
		const fileInput = document.getElementById(htmlId) as HTMLInputElement;
		if (fileInput) {
			fileInput.click();
		}
		
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		setSelectedFile(file);
		onFileSelected(file);
	};

	return (
		<div>
			<div
				className="rounded-[10px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F] cursor-pointer border-[3px] w-[31.2rem] h-[72px] flex items-center justify-center"
				onDrop={handleFileDrop}
				onDragOver={(e) => e.preventDefault()}
				onClick={handleFileClick}
			>
				{selectedFile ? (
					<p className="text-[12px] text-gold">{selectedFile.name}</p>
				) : (
					<div className="flex flex-col justify-center items-center gap-1">
						<svg
							width="17"
							height="22"
							viewBox="0 0 17 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.29232 0.76123C2.53258 0.76123 1.80396 1.06657 1.26675 1.61007C0.729538 2.15357 0.427734 2.89072 0.427734 3.65935V18.4134C0.427734 19.182 0.729538 19.9192 1.26675 20.4627C1.80396 21.0062 2.53258 21.3115 3.29232 21.3115H13.709C14.4687 21.3115 15.1973 21.0062 15.7346 20.4627C16.2718 19.9192 16.5736 19.182 16.5736 18.4134V6.78721C16.5736 6.38569 16.4444 5.99576 16.2048 5.67539L13.0819 1.49366C12.912 1.26615 12.6922 1.0816 12.4399 0.954517C12.1876 0.827431 11.9096 0.761269 11.6277 0.76123H3.29232ZM1.99023 3.65935C1.99023 2.93219 2.57357 2.34202 3.29232 2.34202H10.8444V6.97585C10.8444 7.41215 11.1944 7.76625 11.6257 7.76625H15.0111V18.4134C15.0111 19.1406 14.4277 19.7307 13.709 19.7307H3.29232C2.57357 19.7307 1.99023 19.1406 1.99023 18.4134V3.65935Z"
								fill="#B17C3F"
							/>
						</svg>
                  <p className="text-[12px] text-gold">Click or drag files to this area to upload</p>
					</div>
				)}
			</div>
			<input
				type="file"
				id={htmlId}
				className="hidden"
				onChange={handleFileInputChange}
			/>
		</div>
	);
};

export default DragAndDropInput;
