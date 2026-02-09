import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

function AboutMe() {
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light" || theme === "hybrid";
	
	return (
		<section 
			className={cn(
				"py-24 px-6 md:px-12 lg:px-20 transition-colors duration-300",
				getSectionBg("light"),
				getSectionText("light")
			)} 
			id="me"
		>
			<div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-center gap-12 md:gap-20">
				<div className="relative group">
					<div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
					<img
						className={cn(
							"relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 shadow-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
							isLight ? "border-white" : "border-zinc-800"
						)}
						src="me-sketch-circle.webp"
						alt="Justine Castaneda"
					/>
				</div>
				
				<div className="w-full lg:w-1/2 flex flex-col justify-center">
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
							I'm a full-stack developer who loves creating seamless,
							user-friendly digital experiences. From building enterprise web
							applications to automating workflows with n8n and managing Docker
							deployments on AWS, I thrive on solving problems and making
							technology work smarter. Currently, I serve international clients
							from Canada and Dubai, delivering scalable solutions with modern
							tech stacks.
						</p>
						<p>
							Beyond tech, I'm a music director who finds joy in leading worship
							and mentoring musicians at our local church. Music, like
							development, is about harmony and connection—and I'm passionate
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
