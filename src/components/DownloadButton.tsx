import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

function DownloadButton({ text }: { text: string }) {
	return (
		<Button className="bg-slate-950 text-white" variant={"default"}>
			{text} <DownloadIcon />
		</Button>
	);
}

export default DownloadButton;
