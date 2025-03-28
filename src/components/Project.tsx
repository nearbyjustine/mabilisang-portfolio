import { cn } from "@/lib/utils";
import type { ProjectProps } from "@/types/props";
import { ExternalLink } from "lucide-react";

function Project(props: ProjectProps) {
	return (
		<div
			className={cn(
				"flex flex-col  gap-8 md:gap-16 items-center",
				props.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
			)}
		>
			<div className="lg:w-1/2 w-fit h-fit flex justify-center">
				<div className="md:w-[500px] lg:w-[450px] xl:w-[500px] w-fit h-fit group bg-contain overflow-hidden rounded-2xl shadow-xl transition-all duration-500 shadow-slate-700">
					<a href={props.link} target="_blank" rel="noreferrer">
						<img
							className="bg-contain transition-transform group-hover:scale-105 duration-500 saturate-0"
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
				<p className="text-gray-300 md:text-base text-sm w-fit ">
					{props.description}
				</p>
			</div>
		</div>
	);
}

export default Project;
