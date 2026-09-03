import type { Surface } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	id: string;
	title: string;
	deck?: string;
	surface: Surface;
	className?: string;
};

/**
 * Every section opens the same way: a hairline, then the heading held against
 * its deck across the measure. No labels above the heading — it carries itself.
 */
export default function SectionHeading({
	id,
	title,
	deck,
	surface,
	className,
}: SectionHeadingProps) {
	return (
		<header className={cn("border-t pt-8 md:pt-10", surface.rule, className)}>
			<div className="grid gap-x-10 gap-y-4 lg:grid-cols-12">
				<h2
					id={id}
					className="text-3xl font-semibold md:text-4xl lg:col-span-5 lg:text-[2.75rem] lg:leading-[1.05]"
				>
					{title}
				</h2>
				{deck ? (
					<p
						className={cn(
							"max-w-prose text-base leading-relaxed lg:col-span-6 lg:col-start-7 lg:pt-1 md:text-lg",
							surface.muted,
						)}
					>
						{deck}
					</p>
				) : null}
			</div>
		</header>
	);
}
