import SectionHeading from "@/components/SectionHeading";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container, sectionPadding } from "@/lib/layout";

function AboutMe() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");

	return (
		<section
			id="me"
			aria-labelledby="about-title"
			className={cn(
				"transition-colors duration-300",
				sectionPadding,
				surface.bg,
				surface.text,
			)}
		>
			<div className={container}>
				<SectionHeading
					id="about-title"
					title="How I Work"
					surface={surface}
					className="mb-12 md:mb-16"
				/>

				<div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
					<div className="lg:col-span-4">
						<img
							src="me-sketch-circle.webp"
							alt="Justine Castañeda"
							width={384}
							height={384}
							loading="lazy"
							className={cn(
								"w-52 rounded-full object-cover ring-1 grayscale transition-[filter] duration-500 hover:grayscale-0 md:w-64 lg:w-full",
								surface.isLight ? "ring-zinc-200" : "ring-zinc-800",
							)}
						/>
					</div>

					<div
						className={cn(
							"space-y-5 text-base leading-relaxed lg:col-span-7 lg:col-start-6 md:text-lg",
							surface.muted,
						)}
					>
						<p>
							I&apos;m a lead software engineer who stays close to the code. I turn
							ambiguous operational problems into dependable products—shaping the
							architecture, breaking work into clear sprints, reviewing changes,
							and helping developers ship with confidence.
						</p>
						<p>
							Beyond tech, I&apos;m a music director who finds joy in leading worship
							and mentoring musicians at our local church. Music, like
							development, is about harmony and connection—and I&apos;m passionate
							about creating experiences that bring people together, whether
							through code or song.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
