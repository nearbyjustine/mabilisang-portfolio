import Project from "@/components/Project";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolio";


function Projects() {
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light";
	
	return (
		<section
			id="projects"
			className={cn(
				"flex flex-col justify-between py-24 px-6 md:px-12 lg:px-20 items-center transition-colors duration-300",
				getSectionBg("dark"),
				getSectionText("dark")
			)}
		>
			<div className="max-w-7xl w-full mx-auto">
				<div className="flex flex-col items-center md:items-start mb-16 md:mb-24 space-y-4">
					<div className="flex items-center gap-2">
						<span className="h-px w-8 bg-teal-500/70" />
						<span className="text-teal-600 font-medium tracking-wider text-sm uppercase">
							Portfolio
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
						Featured <span className="opacity-50">Projects.</span>
					</h2>
				</div>
				
				<div className="flex flex-col gap-20 md:gap-32">
					{projects.map((project) => (
						<Project key={project.id} {...project} isLight={isLight} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
