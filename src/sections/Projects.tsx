import CaseStudy from "@/components/CaseStudy";
import SectionHeading from "@/components/SectionHeading";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container, sectionPadding } from "@/lib/layout";
import { projects } from "@/data/portfolio";

function Projects() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("dark");

	return (
		<section
			id="projects"
			aria-labelledby="projects-title"
			className={cn(
				"transition-colors duration-300",
				sectionPadding,
				surface.bg,
				surface.text,
			)}
		>
			<div className={container}>
				<SectionHeading
					id="projects-title"
					title="Featured Projects"
					deck="Four systems I led or built end to end. Client work is anonymized where the operation depends on it, so a few of these open a conversation rather than a live site."
					surface={surface}
					className="mb-4 md:mb-8"
				/>

				<div>
					{projects.map((project, index) => (
						<CaseStudy
							key={project.id}
							project={project}
							index={index}
							surface={surface}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
