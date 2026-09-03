import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

function AboutMe() {
	const { getSectionBg, getSectionText } = usePortfolioTheme();
	
	return (
		<section 
			className={cn(
				"py-24 px-6 md:px-12 lg:px-20 transition-colors duration-300",
				getSectionBg("light"),
				getSectionText("light")
			)} 
			id="me"
		>
			<div className="max-w-4xl mx-auto flex flex-col justify-center">
				<div className="flex items-center gap-2 mb-4">
					<span className="h-px w-8 bg-teal-600/70" />
					<span className="text-teal-600 font-medium tracking-wider text-sm uppercase">
						About Me
					</span>
				</div>
				
				<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
					Behind the <span className="text-teal-600">Code.</span>
				</h2>
				
				<div className="space-y-4 opacity-70 text-lg leading-relaxed">
					<p>
						I&apos;m a lead software engineer who stays close to the code. I turn
						ambiguous operational problems into dependable products—shaping the
						architecture, breaking work into clear sprints, reviewing changes,
						and helping developers ship with confidence.
					</p>
					<p>
						Beyond tech, I&apos;m a music director who finds joy in leading worship
						and mentoring musicians at our local church. Music, like
						development, is about harmony and connection—and I'm passionate
						about creating experiences that bring people together, whether
						through code or song.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
