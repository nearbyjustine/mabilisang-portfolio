import type { LucideProps } from "lucide-react";
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
	if (props.link) {
		return (
			<div
				className={cn(
					props.className,
					"border-black border rounded-sm bg-white group hover:bg-black focus:bg-black transition-colors w-10 h-10 md:w-14 md:h-14 cursor-pointer items-center flex justify-center",
				)}
			>
				<a target="_blank" rel="noreferrer" href={props.link}>
					<props.icon className="group-hover:fill-white group-focus:fill-white fill-black transition-colors md:scale-150" />
				</a>
			</div>
		);
	}
	return (
		<div
			className={cn(
				props.className,
				"border-black border rounded-sm bg-white group hover:bg-black focus:bg-black transition-colors w-10 h-10 md:w-14 md:h-14 cursor-pointer items-center flex justify-center",
			)}
		>
			<props.icon className="group-hover:fill-white group-focus:fill-white fill-black transition-colors md:scale-150" />
		</div>
	);
}

export default SquareButton;
