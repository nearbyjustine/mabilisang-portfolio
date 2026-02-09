import Project from "@/components/Project";
import type { ProjectProps } from "@/types/props";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

const projectList: ProjectProps[] = [
	{
		id: 0,
		imgSrc: "projects/centhris.png",
		imgAlt: "Centhris HRIS Dashboard",
		link: "https://app.centhris.com/",
		title: "Centhris",
		description:
			"Enterprise Human Resource Information System (HRIS) featuring Core HR, Payroll, Finance (COA/AR/AP), Attendance & Scheduling, and Project Management modules. Built with Laravel backend (queues, events, caching) and Nuxt 3/Vue 3 frontend with real-time capabilities via Soketi. Containerized with Docker and deployed on AWS.",
	},
	{
		id: 1,
		imgSrc: "projects/centify.png",
		imgAlt: "Centify Accounting Dashboard",
		link: "http://staging.centify.app.s3-website-ap-southeast-1.amazonaws.com",
		title: "Centify",
		description:
			"Comprehensive accounting system with Chart of Accounts, Accounts Receivable, and Accounts Payable modules. Features financial reporting, transaction management, and real-time data synchronization. Designed for enterprise scalability with modular service architecture.",
	},
	{
		id: 2,
		imgSrc: "projects/jcag-connect.png",
		imgAlt: "JCAG Connect Church Management System",
		link: "https://staging-connect.hows-tine.com",
		title: "JCAG Connect",
		description:
			"Church Management System serving 120+ weekly active users. Digitized membership profiling, streamlined attendance monitoring, and automated proposal generation workflows. Features real-time data for church leadership and automated email distribution for event planning.",
	},
	{
		id: 3,
		imgSrc: "projects/themcx.png",
		imgAlt: "themcx website",
		link: "https://themcx.app/",
		title: "themcx.app",
		description:
			"Developed a responsive and user-friendly website for Altus Digital's The MCX App, focusing on performance, accessibility, and modern UI/UX principles. Designed and implemented features that enhance user engagement while ensuring seamless navigation and scalability.",
	},
	{
		id: 4,
		imgSrc: "projects/my-dream-visa.png",
		imgAlt: "MyDreamVisa website",
		link: "https://app.mydreamvisa.com/",
		title: "MyDreamVisa",
		description:
			"Led the migration of MyDreamVisa's web platform from Vue.js Options API to the Composition API, significantly improving code maintainability and scalability. Transitioned the codebase to TypeScript, reducing runtime errors and enhancing developer efficiency. Introduced a Tooltip System and Onboarding System, streamlining user experience and onboarding.",
	},
	{
		id: 5,
		imgSrc: "projects/e-dukado.png",
		imgAlt: "E-Dukado LMS",
		link: "https://edukado-lms.vercel.app/",
		title: "E-Dukado LMS",
		description:
			"Spearheaded the development of e-Dukado, an interactive Learning Management System (LMS) for Santa Rosa Elementary School Central I. Built using Next.js and Supabase, the platform provided a responsive and engaging experience for students and educators. Collected and analyzed user feedback to continuously refine and improve the system.",
	},
	{
		id: 6,
		imgSrc: "projects/pup-otms.png",
		imgAlt: "PUPSRC OTMS",
		link: "https://github.com/nearbyjustine/PUPSRC-OTMS",
		title: "PUPSRC-OTMS",
		description:
			"Designed and developed a secure and efficient transaction management system for Polytechnic University of the Philippines Sta. Rosa. Implemented a robust authentication system to protect sensitive data and improve privacy. Optimized database structures and SQL queries for better data retrieval, ensuring a smooth and reliable user experience.",
	},
];

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
					{projectList.map((project) => (
						<Project key={project.id} {...project} isLight={isLight} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
