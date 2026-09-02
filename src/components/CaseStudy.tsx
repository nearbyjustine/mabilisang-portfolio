import type { ProjectProps } from "@/types/props";
import type { Surface } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { linkTargetProps, projectLinkLabel } from "@/lib/links";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type CaseStudyProps = {
	project: ProjectProps;
	index: number;
	surface: Surface;
};

/**
 * One numbered case study. Text-led by design: the work is carried by role,
 * narrative, outcome, and stack — there is no image here and no field for one.
 */
export default function CaseStudy({ project, index, surface }: CaseStudyProps) {
	const number = String(index + 1).padStart(2, "0");
	const targetProps = linkTargetProps(project.link);
	const isExternal = targetProps.target === "_blank";
	const LinkIcon = isExternal ? ArrowUpRight : ArrowRight;

	return (
		<article
			aria-labelledby={`case-study-${project.id}`}
			className={cn(
				"group grid gap-x-10 gap-y-6 border-t py-12 md:py-16 lg:grid-cols-12",
				surface.rule,
			)}
		>
			<div className="lg:col-span-4">
				<p
					className={cn(
						"font-mono text-4xl tabular-nums transition-colors md:text-5xl",
						surface.isLight
							? "text-zinc-300 group-hover:text-teal-600"
							: "text-zinc-700 group-hover:text-teal-400",
					)}
				>
					{number}
				</p>
				<dl className="mt-6 space-y-5">
					<div>
						<dt
							className={cn(
								"font-mono text-[11px] tracking-[0.18em] uppercase",
								surface.faint,
							)}
						>
							Role
						</dt>
						<dd className={cn("mt-1.5 text-sm leading-relaxed", surface.muted)}>
							{project.role}
						</dd>
					</div>
					<div>
						<dt
							className={cn(
								"font-mono text-[11px] tracking-[0.18em] uppercase",
								surface.faint,
							)}
						>
							Stack
						</dt>
						<dd className="mt-1.5">
							<ul className={cn("flex flex-wrap gap-x-2 text-sm", surface.muted)}>
								{project.stack.map((item, stackIndex) => (
									<li
										key={item}
										className={cn(
											stackIndex < project.stack.length - 1 &&
												"after:ml-2 after:content-['/']",
											surface.isLight
												? "after:text-zinc-300"
												: "after:text-zinc-700",
										)}
									>
										{item}
									</li>
								))}
							</ul>
						</dd>
					</div>
				</dl>
			</div>

			<div className="lg:col-span-8">
				<h3
					id={`case-study-${project.id}`}
					className="text-2xl font-semibold md:text-3xl"
				>
					{project.title}
				</h3>
				<p
					className={cn(
						"mt-4 max-w-prose text-base leading-relaxed md:text-lg",
						surface.muted,
					)}
				>
					{project.description}
				</p>
				<p
					className={cn(
						"mt-6 max-w-prose border-l pl-4 text-base leading-relaxed",
						surface.isLight
							? "border-teal-600/50 text-zinc-700"
							: "border-teal-400/40 text-zinc-300",
					)}
				>
					{project.outcome}
				</p>
				<a
					href={project.link}
					{...targetProps}
					className={cn(
						"mt-7 inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
						surface.accent,
						surface.accentHover,
					)}
				>
					{projectLinkLabel(project.link)}
					<LinkIcon
						size={16}
						aria-hidden="true"
						className="transition-transform group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</article>
	);
}
