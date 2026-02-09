import { cn } from "@/lib/utils";
import type { ProjectProps } from "@/types/props";
import { ExternalLink } from "lucide-react";

interface ExtendedProjectProps extends ProjectProps {
	isLight?: boolean;
}

function Project(props: ExtendedProjectProps) {
	const { isLight = false } = props;
	
	return (
		<div
			className={cn(
				"flex flex-col gap-8 md:gap-12 items-center w-full",
				props.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
			)}
		>
			<div className="lg:w-1/2 w-full flex justify-center">
				<div className={cn(
					"relative group w-full max-w-[550px] overflow-hidden rounded-xl border shadow-2xl transition-all duration-500",
					isLight 
						? "border-zinc-200 bg-zinc-100 hover:border-zinc-300 hover:shadow-teal-500/10"
						: "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:shadow-teal-500/10"
				)}>
					<div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
					<a href={props.link} target="_blank" rel="noreferrer" className="block relative">
						<img
							className="w-full h-auto transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
							src={props.imgSrc}
							alt={props.imgAlt}
						/>
					</a>
				</div>
			</div>
			
			<div className="flex gap-4 flex-col md:items-start items-center lg:w-1/2 w-full max-w-[550px]">
				<h3 className={cn(
					"text-2xl md:text-3xl font-semibold flex gap-3 items-center group",
					isLight ? "text-zinc-900" : "text-zinc-100"
				)}>
					{props.title}
					<a 
						href={props.link} 
						target="_blank" 
						rel="noreferrer" 
						className="text-zinc-500 hover:text-teal-600 transition-colors"
					>
						<ExternalLink size={24} />
					</a>
				</h3>
				<p className={cn(
					"leading-relaxed md:text-lg text-base text-center md:text-left",
					isLight ? "text-zinc-600" : "text-zinc-400"
				)}>
					{props.description}
				</p>
				<div className="pt-2">
					<a 
						href={props.link} 
						target="_blank" 
						rel="noreferrer" 
						className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 transition-colors"
					>
						View Project <span className="ml-1 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
