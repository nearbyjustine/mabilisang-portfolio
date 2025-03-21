import type { LucideProps } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

type SquareButtonProps = {
	className?: string;
	icon:
		| React.ForwardRefExoticComponent<
				Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
		  >
		| IconType;
	text?: string;
	link?: string;
};

function SquareButton(props: SquareButtonProps) {
	return (
		<Button
			className={cn(
				props.className,
				"border-black border rounded-sm bg-white group hover:bg-black transition-colors w-10 h-10 md:w-14 md:h-14 cursor-pointer",
			)}
		>
			<props.icon className="group-hover:fill-white fill-black transition-colors md:scale-150" />
		</Button>
	);
}

export default SquareButton;
