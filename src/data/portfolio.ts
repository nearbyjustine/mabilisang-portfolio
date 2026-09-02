import type { PipelineStage, ProjectProps } from "@/types/props";

export const proofPoints = [
	{ value: "4", label: "developers led" },
	{ value: "3", label: "concurrent workstreams" },
	{ value: "35k+", label: "posts in the AI corpus" },
] as const;

/**
 * The production pipeline behind the current lead role, stage by stage.
 * Every stage below is drawn from work described in `experiences` and
 * `projects`; the hero renders it as an authored schematic, not an image.
 */
export const pipelineStages: PipelineStage[] = [
	{ name: "Discover", detail: "proven content" },
	{ name: "Classify", detail: "35k+ post corpus" },
	{ name: "Transform", detail: "AI remix strategies" },
	{ name: "Render", detail: "publish-ready carousels" },
	{ name: "Publish", detail: "iOS device fleet" },
	{ name: "Observe", detail: "attribution + telemetry" },
];

export const experiences = [
	{ id: 0, job: "Lead Software Engineer", date: "May 2026 — Present", details: "Promoted after two months to lead four developers across three concurrent workstreams. I own sprint planning, architecture decisions, code review, and delivery for AI content automation, creator operations, and observability systems.", logo: "hows-tine-logo.svg", companyName: "AI Content Automation Startup", workSetup: "Remote", companyWebsite: "https://howstine.vercel.app" },
	{ id: 1, job: "AI Automations Engineer / Software Engineer", date: "Mar 2026 — May 2026", details: "Built a Python and Firebase content pipeline spanning classification, AI remix strategies, Pillow-based rendering, music selection, and automated iOS publishing. Shipped React and TypeScript dashboards for auditing and operational visibility.", logo: "hows-tine-logo.svg", companyName: "AI Content Automation Startup", workSetup: "Remote", companyWebsite: "https://howstine.vercel.app" },
	{ id: 2, job: "Software Developer", date: "2025 — Feb 2026", details: "Developed enterprise HR, payroll, finance, scheduling, and project-management modules with Laravel, Nuxt, and Vue. Built automated tests, real-time features, Docker environments, CI/CD pipelines, AWS deployments, and n8n workflows.", logo: "rsb-logo.png", companyName: "RSB Consulting Inc.", workSetup: "Makati, Philippines", companyWebsite: "https://www.linkedin.com/company/rsb-consulting-inc" },
	{ id: 3, job: "Junior Marketing Technology Developer", date: "Jul 2024 — Feb 2025", details: "Built SQL-driven segmentation, AMPscript personalization, automated customer journeys, and internal Salesforce Marketing Cloud utilities.", logo: "altus-logo.png", companyName: "Altus Digital", workSetup: "Remote — Melbourne, Australia", companyWebsite: "https://altus.digital/" },
	{ id: 4, job: "Full Stack Developer Intern / Project Manager", date: "2024", details: "Migrated a Vue application to Composition API and TypeScript, built onboarding components, and later supervised two interns as project manager.", logo: "mdv-logo.png", companyName: "MyDreamVisa LLC", workSetup: "Remote — Florida, USA", companyWebsite: "https://mydreamvisa.com/" },
];

export const projects: ProjectProps[] = [
	{
		id: 0,
		title: "AI Content Automation Platform",
		role: "Lead engineer — architecture and delivery",
		description:
			"Led architecture and delivery of an end-to-end system that discovers proven content, classifies a 35k+ post corpus, applies AI transformation strategies, renders publish-ready carousels, and routes work to automated iOS devices—with attribution and observability built in.",
		outcome:
			"A 35k+ post corpus moves from discovery to published carousel without a hand-off, and every published post stays traceable.",
		stack: ["Python", "Firebase", "Pillow", "iOS automation"],
		link: "#contact",
	},
	{
		id: 1,
		title: "Creator Operations Platform",
		role: "Lead engineer — creator and executive dashboards",
		description:
			"Led creator and executive dashboards, post-to-creator attribution, IG-handle mapping, review workflows, and an automated payout pipeline. Product details are anonymized to protect client operations.",
		outcome:
			"Review and payout work that used to be manual now runs as an auditable pipeline, with attribution resolved back to the creator.",
		stack: ["React", "TypeScript", "Firebase"],
		link: "#contact",
	},
	{
		id: 2,
		title: "Automated iOS Publishing Fleet",
		role: "Engineer — device automation and reliability",
		description:
			"Built multi-device WebDriverAgent tooling for physical iPhones, publishing orchestration, health telemetry, and recovery workflows—turning fragile device automation into an observable production system.",
		outcome:
			"A fleet of physical iPhones publishes on schedule, reports its own health, and recovers from failure instead of stalling silently.",
		stack: ["Python", "WebDriverAgent", "iOS devices"],
		link: "#contact",
	},
	{
		id: 3,
		title: "CentHRIS / Finance Modules",
		role: "Software developer — payroll, finance, and Core HR",
		description:
			"Implemented payroll engines, tax rules, finance workflows, scheduling logic, Core HR features, reusable UI modules, and automated tests across a Laravel, Nuxt, Vue, PostgreSQL, Docker, and n8n stack.",
		outcome:
			"Payroll, tax, and scheduling rules ship behind automated tests, on reusable modules the wider team builds on.",
		stack: ["Laravel", "Nuxt", "Vue", "PostgreSQL", "Docker", "n8n"],
		link: "https://app.centhris.com/",
	},
];
