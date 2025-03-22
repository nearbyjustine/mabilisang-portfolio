import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

function DownloadButton({ text }: { text: string }) {
	return (
		<Button
			className="bg-slate-950 text-base text-white hover:bg-slate-800 focus:bg-slate-800 cursor-pointer"
			variant={"default"}
		>
			{text} <DownloadIcon />
		</Button>
	);
}

export default DownloadButton;
