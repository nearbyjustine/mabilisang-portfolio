import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";

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
	const { theme } = usePortfolioTheme();
	const isLight = theme === "light" || theme === "hybrid";
	
	const buttonClasses = cn(
		props.className,
		"border rounded-sm group transition-colors w-10 h-10 md:w-14 md:h-14 cursor-pointer items-center flex justify-center",
		isLight 
			? "border-black bg-white hover:bg-black focus:bg-black"
			: "border-zinc-600 bg-zinc-800 hover:bg-teal-600 focus:bg-teal-600"
	);
	
	const iconClasses = cn(
		"transition-colors md:scale-150",
		isLight 
			? "fill-black group-hover:fill-white group-focus:fill-white"
			: "fill-zinc-200 group-hover:fill-white group-focus:fill-white"
	);
	
	if (props.link) {
		return (
			<div className={buttonClasses}>
				<a target="_blank" rel="noreferrer" href={props.link}>
					<props.icon className={iconClasses} />
				</a>
			</div>
		);
	}
	return (
		<div className={buttonClasses}>
			<props.icon className={iconClasses} />
		</div>
	);
}

export default SquareButton;
