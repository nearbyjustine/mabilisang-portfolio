import type { Surface } from "@/hooks/usePortfolioTheme";
import { pipelineStages } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Cycle length of the signal sweep, matched to `--sweep` in index.css. */
const SWEEP_SECONDS = 7;
/** Fraction of the cycle the pulse spends travelling the rail. */
const TRAVEL_FRACTION = 0.7;
/** Pulse height as a fraction of the rail, from `.systems-map__pulse`. */
const PULSE_HEIGHT = 0.14;

/** When the pulse's leading edge reaches the node at `index`. */
function flashDelay(index: number, total: number): string {
	const position = (index + 0.5) / total;
	const seconds =
		(SWEEP_SECONDS * TRAVEL_FRACTION * position) / (1 + PULSE_HEIGHT);
	return `${seconds.toFixed(3)}s`;
}

/**
 * The hero's schematic: the production pipeline drawn in HTML and CSS. One
 * signal sweeps the rail, each stage lights as it passes, and a dashed return
 * path carries attribution back to the top.
 */
export default function SystemsMap({ surface }: { surface: Surface }) {
	const total = pipelineStages.length;
	const halfRow = `${(50 / total).toFixed(4)}%`;

	return (
		<figure
			className={cn(
				"systems-map relative w-full max-w-lg rounded-xl border shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)]",
				surface.rule,
				surface.panel,
			)}
		>
			{/* Corner ticks — schematic plate, not decoration for its own sake. */}
			<span
				aria-hidden="true"
				className="absolute -top-px -left-px size-2.5 rounded-tl-xl border-t border-l border-teal-500"
			/>
			<span
				aria-hidden="true"
				className="absolute -top-px -right-px size-2.5 rounded-tr-xl border-t border-r border-teal-500"
			/>
			<span
				aria-hidden="true"
				className="absolute -bottom-px -left-px size-2.5 rounded-bl-xl border-b border-l border-teal-500"
			/>
			<span
				aria-hidden="true"
				className="absolute -right-px -bottom-px size-2.5 rounded-br-xl border-r border-b border-teal-500"
			/>

			<div
				className={cn(
					"flex items-baseline justify-between border-b px-5 py-3 font-mono text-[11px] tracking-[0.18em] uppercase sm:px-6",
					surface.rule,
					surface.faint,
				)}
			>
				<span>Production pipeline</span>
				<span className="tabular-nums">{total} stages</span>
			</div>

			<div className="px-4 py-5 sm:px-6">
				<ol className="relative ml-10 sm:ml-12">
					{/* Rail */}
					<span
						aria-hidden="true"
						className={cn(
							"absolute inset-y-0 left-0 w-px",
							surface.isLight ? "bg-zinc-300" : "bg-zinc-700",
						)}
					/>
					{/* Travelling signal */}
					<span
						aria-hidden="true"
						className="absolute inset-y-0 left-0 w-px overflow-visible"
					>
						<span className="systems-map__pulse" />
					</span>
					{/* Return path: attribution flows back to discovery */}
					<span
						aria-hidden="true"
						style={{ top: halfRow, bottom: halfRow }}
						className={cn(
							"absolute right-full w-8 rounded-l-md border-y border-l border-dashed sm:w-10",
							surface.isLight ? "border-teal-600/40" : "border-teal-400/35",
						)}
					>
						<span className="absolute -top-[4px] -right-[1px] size-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-teal-500" />
					</span>

					{pipelineStages.map((stage, index) => (
						<li
							key={stage.name}
							className="relative flex min-h-[3.25rem] flex-wrap items-center gap-x-3 gap-y-0.5 pl-6"
						>
							<span
								aria-hidden="true"
								style={{ animationDelay: flashDelay(index, total) }}
								className={cn(
									"systems-map__node absolute top-1/2 left-0 -mt-[3.5px] -ml-[3.5px] size-[7px] rounded-full bg-current",
									surface.isLight ? "text-zinc-400" : "text-zinc-600",
								)}
							/>
							<span
								className={cn(
									"font-mono text-[11px] tracking-[0.18em] uppercase sm:text-xs",
									surface.text,
								)}
							>
								{stage.name}
							</span>
							<span
								className={cn(
									"text-sm tabular-nums",
									surface.muted,
								)}
							>
								{stage.detail}
							</span>
						</li>
					))}
				</ol>
			</div>

			<figcaption
				className={cn(
					"border-t px-5 py-3 text-sm leading-relaxed sm:px-6",
					surface.rule,
					surface.muted,
				)}
			>
				Attribution and observability feed back into discovery, so the next
				cycle starts from what actually worked.
			</figcaption>
		</figure>
	);
}
