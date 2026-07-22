import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import Card from "../components/Card";
import { experiences } from "@/data/portfolio";

function Experiences() {
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light" || theme === "hybrid";
	
	return (
		<section
			id="experiences"
			className={cn(
				"flex flex-col justify-between py-24 px-6 md:px-12 lg:px-20 items-center md:gap-8 gap-4 transition-colors duration-300",
				getSectionBg("light"),
				getSectionText("light")
			)}
		>
			<div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
				<div className="flex items-center gap-2 mb-4">
					<span className="h-px w-8 bg-teal-600/70" />
					<span className="text-teal-600 font-medium tracking-wider text-sm uppercase">
						Career Path
					</span>
				</div>
				<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
					Work <span className="text-teal-600">Experience.</span>
				</h2>
				
				<div className="grid grid-cols-1 gap-6">
					{experiences.map((experience) => (
						<Card key={experience.id} {...experience} isLight={isLight} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Experiences;
