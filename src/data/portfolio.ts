import type { ProjectProps } from "@/types/props";

export const proofPoints = [
	{ value: "4", label: "developers led" },
	{ value: "3", label: "concurrent workstreams" },
	{ value: "35k+", label: "posts in the AI corpus" },
] as const;

export const experiences = [
	{ id: 0, job: "Lead Software Engineer", date: "May 2026 — Present", details: "Promoted after two months to lead four developers across three concurrent workstreams. I own sprint planning, architecture decisions, code review, and delivery for AI content automation, creator operations, and observability systems.", logo: "hows-tine-logo.svg", companyName: "AI Content Automation Startup", workSetup: "Remote", companyWebsite: "https://howstine.vercel.app" },
	{ id: 1, job: "AI Automations Engineer / Software Engineer", date: "Mar 2026 — May 2026", details: "Built a Python and Firebase content pipeline spanning classification, AI remix strategies, Pillow-based rendering, music selection, and automated iOS publishing. Shipped React and TypeScript dashboards for auditing and operational visibility.", logo: "hows-tine-logo.svg", companyName: "AI Content Automation Startup", workSetup: "Remote", companyWebsite: "https://howstine.vercel.app" },
	{ id: 2, job: "Software Developer", date: "2025 — Feb 2026", details: "Developed enterprise HR, payroll, finance, scheduling, and project-management modules with Laravel, Nuxt, and Vue. Built automated tests, real-time features, Docker environments, CI/CD pipelines, AWS deployments, and n8n workflows.", logo: "rsb-logo.png", companyName: "RSB Consulting Inc.", workSetup: "Makati, Philippines", companyWebsite: "https://www.linkedin.com/company/rsb-consulting-inc" },
	{ id: 3, job: "Junior Marketing Technology Developer", date: "Jul 2024 — Feb 2025", details: "Built SQL-driven segmentation, AMPscript personalization, automated customer journeys, and internal Salesforce Marketing Cloud utilities.", logo: "altus-logo.png", companyName: "Altus Digital", workSetup: "Remote — Melbourne, Australia", companyWebsite: "https://altus.digital/" },
	{ id: 4, job: "Full Stack Developer Intern / Project Manager", date: "2024", details: "Migrated a Vue application to Composition API and TypeScript, built onboarding components, and later supervised two interns as project manager.", logo: "mdv-logo.png", companyName: "MyDreamVisa LLC", workSetup: "Remote — Florida, USA", companyWebsite: "https://mydreamvisa.com/" },
];

export const projects: ProjectProps[] = [
	{ id: 0, imgSrc: "projects/centify.png", imgAlt: "Abstract dashboard preview for an anonymized automation platform", link: "#contact", title: "AI Content Automation Platform", description: "Led architecture and delivery of an end-to-end system that discovers proven content, classifies a 35k+ post corpus, applies AI transformation strategies, renders publish-ready carousels, and routes work to automated iOS devices—with attribution and observability built in." },
	{ id: 1, imgSrc: "projects/jcag-connect.png", imgAlt: "Dashboard preview representing creator operations", link: "#contact", title: "Creator Operations Platform", description: "Led creator and executive dashboards, post-to-creator attribution, IG-handle mapping, review workflows, and an automated payout pipeline. Product details are anonymized to protect client operations." },
	{ id: 2, imgSrc: "projects/themcx.png", imgAlt: "Operational interface representing an automated publishing fleet", link: "#contact", title: "Automated iOS Publishing Fleet", description: "Built multi-device WebDriverAgent tooling for physical iPhones, publishing orchestration, health telemetry, and recovery workflows—turning fragile device automation into an observable production system." },
	{ id: 3, imgSrc: "projects/centhris.png", imgAlt: "CentHRIS enterprise application dashboard", link: "https://app.centhris.com/", title: "CentHRIS / Finance Modules", description: "Implemented payroll engines, tax rules, finance workflows, scheduling logic, Core HR features, reusable UI modules, and automated tests across a Laravel, Nuxt, Vue, PostgreSQL, Docker, and n8n stack." },
	{ id: 4, imgSrc: "projects/e-dukado.png", imgAlt: "e-Dukado learning management system", link: "https://edukado-lms.vercel.app/", title: "e-Dukado LMS", description: "Spearheaded a Next.js and Supabase learning platform for a public elementary school, using student and educator feedback to guide iterative UX improvements." },
];
