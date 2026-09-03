import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container } from "@/lib/layout";
import { proofPoints } from "@/data/portfolio";
import SystemsMap from "@/components/SystemsMap";

function Hero() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");

	return (
		<section
			id="hero"
			aria-labelledby="hero-title"
			className={cn("w-full transition-colors duration-300", surface.bg, surface.text)}
		>
			<div
				className={cn(
					container,
					"grid items-center gap-14 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-12 lg:gap-12",
				)}
			>
				<div className="lg:col-span-7">
					<h1 id="hero-title" className="font-semibold">
						<span className="block text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95]">
							Justine Castañeda
						</span>
						<span
							className={cn(
								"mt-3 block text-[clamp(1.25rem,2.6vw,1.9rem)] leading-tight font-medium",
								surface.accent,
							)}
						>
							Lead Software Engineer
						</span>
					</h1>

					<p
						className={cn(
							"mt-7 max-w-[58ch] text-base leading-relaxed md:text-lg",
							surface.muted,
						)}
					>
						I turn complex automation into reliable production systems—and lead
						the teams that ship them. My work spans AI content pipelines,
						full-stack products, operational dashboards, and multi-device iOS
						automation.
					</p>

					<ul
						className={cn(
							"mt-9 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t pt-5 text-sm",
							surface.rule,
							surface.muted,
						)}
					>
						{proofPoints.map((point, index) => (
							<li
								key={point.label}
								className={cn(
									"flex items-baseline gap-2",
									index < proofPoints.length - 1 &&
										"after:ml-3 after:content-['/']",
									surface.isLight ? "after:text-zinc-300" : "after:text-zinc-700",
								)}
							>
								<span
									className={cn(
										"font-mono text-base tabular-nums",
										surface.accent,
									)}
								>
									{point.value}
								</span>
								{point.label}
							</li>
						))}
					</ul>

					<div className="mt-9 flex flex-wrap items-center gap-3">
						<a
							href="#projects"
							className="rounded-lg bg-teal-600 px-6 py-3 font-medium text-white shadow-lg shadow-teal-600/20 transition-colors hover:bg-teal-700"
						>
							See the work
						</a>
						<a
							href="#contact"
							className={cn(
								"rounded-lg border px-6 py-3 font-medium transition-colors",
								surface.rule,
								surface.isLight
									? "bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100"
									: "bg-zinc-900 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800",
							)}
						>
							Get in touch
						</a>
					</div>
				</div>

				<div className="lg:col-span-5 lg:justify-self-end">
					<SystemsMap surface={surface} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
