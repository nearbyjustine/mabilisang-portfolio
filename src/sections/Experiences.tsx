import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import Card from "../components/Card";

const experiences = [
	{
		id: 0,
		job: "Full-stack Developer",
		date: "May 2025 — Feb 2026",
		details:
			"Built enterprise-grade HRIS modules (Core HR, Payroll, Finance, Attendance, Project Management) using Laravel, Nuxt 3, Vue 3, and Pinia. Implemented real-time features with Soketi/Pusher/Laravel Echo, automated testing with Vitest, Playwright, and PHPUnit, and containerized environments using Docker, Traefik, and Lando. Managed AWS deployments (EC2, S3, RDS, Elastic Beanstalk) with CI/CD pipelines via GitHub Actions and Jenkins. Integrated AI tools (OpenAI, Claude, Gemini) and workflow automation with n8n.",
		logo: "rsb-logo.png",
		companyName: "RSB Consulting Inc.",
		workSetup: "Hybrid (Makati, PH)",
		companyWebsite: "https://www.linkedin.com/company/rsb-consulting-inc",
	},
	{
		id: 1,
		job: "Technical Solutions Lead",
		date: "Aug 2024 — Present",
		details:
			"Architected and deployed a Church Management System serving 120+ weekly active users for membership profiling, attendance tracking, and event planning. Built workflow automations for proposal generation and email distribution. Collaborated with non-technical stakeholders on requirements, training, and iterative feature development.",
		logo: "jcag-logo.png",
		companyName: "Jesus Christ the Awesome God Church",
		workSetup: "Hybrid (Santa Rosa, PH)",
		companyWebsite: "https://www.facebook.com/JCAGPH",
	},
	{
		id: 2,
		job: "Junior Marketing Technology Developer",
		date: "July 2024 — February 2025",
		details:
			"Managed email marketing campaigns, optimized automation with SQL, AMPscript, and JavaScript, and enhanced Salesforce Marketing Cloud solutions. Built internal tools that streamlined operations, boosting efficiency and reducing errors.",
		logo: "altus-logo.png",
		companyName: "Altus Digital",
		workSetup: "Remote (Melbourne, AU)",
		companyWebsite: "https://altus.digital/",
	},
	{
		id: 3,
		job: "Full Stack Developer Intern",
		date: "February 2024 — May 2024",
		details:
			"Led the migration to Vue.js Composition API, transitioned the codebase to TypeScript, and improved user experience with a Tooltip and Onboarding System. Promoted to Project Manager, mentored interns and ensured timely project completion.",
		logo: "mdv-logo.png",
		companyName: "MyDreamVisa LLC",
		workSetup: "Remote (Florida, USA)",
		companyWebsite: "https://mydreamvisa.com/",
	},
];

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
