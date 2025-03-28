import Project from "@/components/Project";
import type { ProjectProps } from "@/types/props";

const projectList: ProjectProps[] = [
	{
		id: 0,
		imgSrc: "projects/themcx.png",
		imgAlt: "themcx website",
		link: "https://themcx.app/",
		title: "themcx.app",
		description:
			"Developed a responsive and user-friendly website for Altus Digital's The MCX App, focusing on performance, accessibility, and modern UI/UX principles. Designed and implemented features that enhance user engagement while ensuring seamless navigation and scalability.",
	},
	{
		id: 1,
		imgSrc: "projects/my-dream-visa.png",
		imgAlt: "MyDreamVisa website",
		link: "https://app.mydreamvisa.com/",
		title: "MyDreamVisa",
		description:
			"Led the migration of MyDreamVisa’s web platform from Vue.js Options API to the Composition API, significantly improving code maintainability and scalability. Transitioned the codebase to TypeScript, reducing runtime errors and enhancing developer efficiency. Introduced a Tooltip System and Onboarding System, streamlining user experience and onboarding.",
	},
	{
		id: 2,
		imgSrc: "projects/e-dukado.png",
		imgAlt: "E-Dukado LMS",
		link: "https://edukado-lms.vercel.app/",
		title: "E-Dukado LMS",
		description:
			"Spearheaded the development of e-Dukado, an interactive Learning Management System (LMS) for Santa Rosa Elementary School Central I. Built using Next.js and Supabase, the platform provided a responsive and engaging experience for students and educators. Collected and analyzed user feedback to continuously refine and improve the system.",
	},
	{
		id: 3,
		imgSrc: "projects/pup-otms.png",
		imgAlt: "PUPSRC OTMS",
		link: "https://github.com/nearbyjustine/PUPSRC-OTMS",
		title: "PUPSRC-OTMS",
		description:
			"Designed and developed a secure and efficient transaction management system for Polytechnic University of the Philippines Sta. Rosa. Implemented a robust authentication system to protect sensitive data and improve privacy. Optimized database structures and SQL queries for better data retrieval, ensuring a smooth and reliable user experience.",
	},
];

function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col justify-between 2xl:px-20 2xl:py-20 px-10 py-10 items-center md:gap-16 gap-8 bg-slate-950 text-white"
		>
			<h1 className="md:text-4xl text-2xl">My Projects</h1>
			{projectList.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</section>
	);
}

export default Projects;
