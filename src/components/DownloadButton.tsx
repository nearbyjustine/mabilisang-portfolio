import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

function DownloadButton({ text, link }: { text: string; link?: string }) {
	return (
		<div className="relative group">
			<Button
				asChild
				className="bg-slate-950 text-base text-white hover:bg-slate-800 focus:bg-slate-800 cursor-pointer"
				variant={"default"}
			>
				<a href={link} target="_blank" rel="noreferrer">
					{text} <DownloadIcon />
				</a>
			</Button>
			{/* <img
				className="absolute group-hover:-translate-x-1 group-hover:translate-y-1 opacity-0 delay-[50ms] transition-all group-hover:opacity-100 -bottom-7 -left-5 fill-black -rotate-45 w-5"
				src="arrow.svg"
				alt="arrow svg"
			/> */}
			{/* <img
				className="absolute group-hover:-translate-x-1 group-hover:translate-y-1 opacity-0 group-hover:opacity-100  transition-all -bottom-0 -left-10 fill-black -rotate-12  w-5 "
				src="arrow.svg"
				alt="arrow svg"
			/> */}
		</div>
	);
}

export default DownloadButton;
