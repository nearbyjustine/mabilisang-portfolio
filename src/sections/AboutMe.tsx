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

				<div
					className={cn(
						"max-w-[65ch] space-y-5 text-base leading-relaxed md:text-lg",
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
		</section>
	);
}

export default AboutMe;
