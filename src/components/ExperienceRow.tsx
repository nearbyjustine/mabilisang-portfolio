import type { CardProps } from "@/types/props";
import type { Surface } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ExperienceRowProps = {
	experience: CardProps;
	surface: Surface;
};

/**
 * A ledger row rather than a card: dates hold the left rail, the role and its
 * account sit on the measure, and only the company name is a link.
 */
export default function ExperienceRow({
	experience,
	surface,
}: ExperienceRowProps) {
	const { job, date, details, logo, companyName, workSetup, companyWebsite } =
		experience;

	return (
		<article
			className={cn(
				"grid gap-x-10 gap-y-4 border-t py-10 md:py-12 lg:grid-cols-12",
				surface.rule,
			)}
		>
			<div className="lg:col-span-3">
				<p
					className={cn(
						"font-mono text-sm tabular-nums",
						surface.isLight ? "text-zinc-700" : "text-zinc-300",
					)}
				>
					{date}
				</p>
				<p className={cn("mt-1.5 text-sm", surface.faint)}>{workSetup}</p>
			</div>

			<div className="lg:col-span-9">
				<div className="flex items-start gap-3">
					<span className="mt-0.5 shrink-0 rounded-md bg-white p-1.5 ring-1 ring-zinc-200">
						<img
							src={logo}
							alt=""
							width={28}
							height={28}
							loading="lazy"
							className="size-7 object-contain"
						/>
					</span>
					<div>
						<h3 className="text-xl font-semibold md:text-2xl">{job}</h3>
						<a
							href={companyWebsite}
							target="_blank"
							rel="noreferrer"
							className={cn(
								"mt-1 inline-flex items-center gap-1 text-sm font-medium transition-colors",
								surface.accent,
								surface.accentHover,
							)}
						>
							{companyName}
							<ArrowUpRight size={14} aria-hidden="true" />
						</a>
					</div>
				</div>
				<p
					className={cn(
						"mt-5 max-w-prose text-base leading-relaxed md:text-lg",
						surface.muted,
					)}
				>
					{details}
				</p>
			</div>
		</article>
	);
}
