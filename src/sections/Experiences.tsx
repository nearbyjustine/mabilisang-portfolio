import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types/props";

const experiences: CardProps[] = [
	{
		id: "0",
		job: "Junior Marketing Technology Developer",
		date: "July 2024 — February 2025",
		details:
			"At Altus Digital, I managed email marketing campaigns, optimized automation with SQL, AMPscript, and JavaScript, and enhanced Salesforce Marketing Cloud solutions. I also built internal tools that streamlined operations, boosting efficiency and reducing errors.",
		logo: "altus-logo.png",
		companyName: "Altus Digital",
		workSetup: "Remote (Melbourne, AU)",
		companyWebsite: "https://altus.digital/",
	},
	{
		id: "1",
		job: "Full Stack Developer Intern",
		date: "February 2024 — May 2024",
		details:
			"At MyDreamVisa LLC, I led the migration to Vue.js Composition API, transitioned the codebase to TypeScript, and improved user experience with a Tooltip and Onboarding System. Promoted to Project Manager, I mentored interns and ensured timely project completion.",
		logo: "mdv-logo.png",
		companyName: "MyDreamVisa LLC",
		workSetup: "Remote (Florida, USA)",
		companyWebsite: "https://mydreamvisa.com/",
	},
];

function Experiences({ className }: { className: string }) {
	return (
		<div id="experience" className={cn(className, "bg-slate-950 text-white")}>
			<h1 className="md:text-4xl text-2xl">Work Experience</h1>
			<div className="flex flex-col gap-4">
				{experiences.map((experience) => (
					<Card key={experience.id} {...experience} />
				))}
			</div>
		</div>
	);
}

export default Experiences;
