import ExperienceRow from "@/components/ExperienceRow";
import SectionHeading from "@/components/SectionHeading";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container, sectionPadding } from "@/lib/layout";
import { experiences } from "@/data/portfolio";

function Experiences() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");

	return (
		<section
			id="experiences"
			aria-labelledby="experiences-title"
			className={cn(
				"transition-colors duration-300",
				sectionPadding,
				surface.bg,
				surface.text,
			)}
		>
			<div className={container}>
				<SectionHeading
					id="experiences-title"
					title="Work Experience"
					deck="From marketing automation to enterprise modules to leading an engineering team — each step added a layer of ownership."
					surface={surface}
					className="mb-4 md:mb-8"
				/>

				<div>
					{experiences.map((experience) => (
						<ExperienceRow
							key={experience.id}
							experience={experience}
							surface={surface}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experiences;
