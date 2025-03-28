import { cn } from "@/lib/utils";
import type { ProjectProps } from "@/types/props";
import { ExternalLink } from "lucide-react";

function Project(props: ProjectProps) {
	return (
		<div
			className={cn(
				"flex flex-col  gap-8 md:gap-16",
				props.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
			)}
		>
			<div className="md:w-1/2 w-fit h-fit flex justify-center">
				<div className="md:w-[500px] w-fit h-fit group bg-contain overflow-hidden rounded-2xl shadow-xl transition-all delay-200 shadow-slate-700">
					<a href={props.link} target="_blank" rel="noreferrer">
						<img
							className="bg-contain transition-transform group-hover:scale-105 delay-200 saturate-0"
							src={props.imgSrc}
							alt={props.imgAlt}
						/>
					</a>
				</div>
			</div>
			<div className="flex gap-4 flex-col md:items-start items-center md:w-[500px] w-fit justify-center">
				<h1 className="md:text-4xl text-2xl flex gap-4 items-center">
					{props.title}
					<a href={props.link} target="_blank" rel="noreferrer">
						<ExternalLink />
					</a>
				</h1>
				<p className="text-slate-300 md:text-base text-sm w-fit ">
					{props.description}
				</p>
			</div>
		</div>
	);
}

export default Project;
