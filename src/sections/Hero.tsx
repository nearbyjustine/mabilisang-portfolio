import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

function Hero() {
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light" || theme === "hybrid";
	
	return (
		<section
			id="hero"
			className={cn(
				"w-full transition-colors duration-300",
				getSectionBg("light")
			)}
		>
			<div
				className={cn(
					"w-full md:flex-row md:gap-12 gap-8 flex-col-reverse flex justify-between py-24 px-6 md:px-12 lg:px-20 items-center max-w-7xl mx-auto",
					getSectionText("light")
				)}
			>
				<div className="md:space-y-8 space-y-4 md:w-1/2">
					<div className="space-y-2">
						<p className="text-teal-600 font-medium tracking-wider text-sm uppercase mb-2">
							Justine Castañeda
						</p>
						<h1 className="xl:text-6xl md:text-5xl text-4xl font-bold tracking-tight">
							Full-Stack <br />
							<span className="text-teal-600">Developer.</span>
						</h1>
						<h2 className="xl:text-2xl md:text-xl text-lg text-teal-600/90 font-medium pt-2">
							AI & Automation Specialist
						</h2>
					</div>
					<p className="opacity-70 md:text-lg text-base leading-relaxed max-w-xl">
						Hi, I&apos;m Justine—a problem-solver, creative thinker, and
						full-stack developer specializing in AI integrations and workflow
						automation. I build scalable enterprise applications, implement CI/CD
						pipelines, and deliver solutions for clients internationally (Canada,
						Dubai, USA, Australia). From Laravel/Vue apps to Docker deployments
						and n8n workflows—let&apos;s build something impactful together! 🚀
					</p>
					
					<div className="flex gap-4 pt-4">
						<a href="#projects" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-teal-500/20">
							View Projects
						</a>
						<a 
							href="#contact" 
							className={cn(
								"px-6 py-3 font-medium rounded-lg transition-colors border shadow-sm",
								isLight 
									? "bg-white/80 hover:bg-white text-zinc-700 border-zinc-200"
									: "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700"
							)}
						>
							Contact Me
						</a>
					</div>
				</div>
				<div className="xl:w-2/5 md:w-1/2 w-full flex justify-center">
					<img
						className={cn(
							"w-full max-w-[600px] drop-shadow-xl transition-all duration-300",
							!isLight && "invert opacity-90"
						)}
						src="kid.svg"
						alt="Child thinking, creative"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
