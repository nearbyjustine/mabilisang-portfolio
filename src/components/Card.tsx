import type { CardProps } from "@/types/props";
import { cn } from "@/lib/utils";

interface ExtendedCardProps extends CardProps {
	isLight?: boolean;
}

function Card({
	job,
	date,
	details,
	logo,
	companyName,
	workSetup,
	companyWebsite,
	isLight = true,
}: ExtendedCardProps) {
	return (
		<a
			href={companyWebsite}
			target="_blank"
			rel="noreferrer"
			className={cn(
				"group relative flex flex-col gap-4 p-6 md:p-8 rounded-xl transition-all duration-300 w-full border",
				isLight 
					? "bg-zinc-50 border-zinc-200 hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5"
					: "bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/60"
			)}
		>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<div className="flex items-center gap-4">
					<div className={cn(
						"relative p-2 rounded-md border transition-colors",
						isLight 
							? "bg-white border-zinc-200 group-hover:border-teal-100"
							: "bg-zinc-800/50 border-transparent"
					)}>
						<img 
							className="w-12 h-12 object-contain rounded-sm" 
							src={logo} 
							alt={`${companyName} logo`} 
						/>
					</div>
					<div>
						<h3 className={cn(
							"text-xl md:text-2xl font-semibold transition-colors",
							isLight 
								? "text-zinc-900 group-hover:text-teal-700"
								: "text-zinc-200 group-hover:text-teal-400"
						)}>
							{companyName}
						</h3>
						<p className={cn("font-medium", isLight ? "text-zinc-600" : "text-zinc-400")}>
							{job}
						</p>
					</div>
				</div>
				<div className="flex flex-col md:items-end gap-1 text-sm text-zinc-500 mt-1 md:mt-0">
					<span className={cn(
						"font-mono px-2 py-1 rounded",
						isLight ? "bg-zinc-100 text-zinc-600" : "bg-zinc-800 text-zinc-400"
					)}>
						{date}
					</span>
					<span>{workSetup}</span>
				</div>
			</div>

			<hr className={cn(isLight ? "border-zinc-200" : "border-zinc-800/50")} />

			<p className={cn(
				"leading-relaxed text-base md:text-lg",
				isLight ? "text-zinc-600" : "text-zinc-400"
			)}>
				{details}
			</p>
		</a>
	);
}

export default Card;
