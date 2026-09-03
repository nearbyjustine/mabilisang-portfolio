import type { PipelineStage, ProjectProps } from "@/types/props";

export const proofPoints = [
	{ value: "2.5+", label: "years professional experience" },
	{ value: "4", label: "developers led" },
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
	{ id: 0, job: "Lead Software Engineer", date: "May 2026 — Present", details: "Promoted after two months to lead four developers across three concurrent workstreams. I own sprint planning, architecture decisions, code review, and delivery for AI content automation, creator operations, and observability systems.", logo: "flamingo-logo.png", companyName: "Flamingo Cards", workSetup: "Remote — Arizona, USA", companyWebsite: "https://howstine.vercel.app" },
	{ id: 1, job: "Software Engineer", date: "Mar 2026 — May 2026", details: "Built a Python and Firebase content pipeline spanning classification, AI remix strategies, Pillow-based rendering, music selection, and automated iOS publishing. Shipped React and TypeScript dashboards for auditing and operational visibility.", logo: "flamingo-logo.png", companyName: "Flamingo Cards", workSetup: "Remote — Arizona, USA", companyWebsite: "https://howstine.vercel.app" },
	{ id: 2, job: "Full-Stack Developer", date: "Feb 2025 — Feb 2026", details: "Developed enterprise HR, payroll, finance, scheduling, and project-management modules with Laravel, Nuxt, and Vue. Built automated tests, real-time features, Docker environments, CI/CD pipelines, AWS deployments, and n8n workflows.", logo: "rsb-logo.png", companyName: "RSB Consulting Inc.", workSetup: "Makati, Philippines — Hybrid", companyWebsite: "https://www.linkedin.com/company/rsb-consulting-inc" },
	{ id: 3, job: "Junior MarTech Developer", date: "Mar 2024 — Feb 2025", details: "Built SQL-driven segmentation, AMPscript personalization, automated customer journeys, and internal Salesforce Marketing Cloud utilities.", logo: "altus-logo.png", companyName: "Altus Digital | Salesforce Partner", workSetup: "Remote — Melbourne, Australia", companyWebsite: "https://altus.digital/" },
	{ id: 4, job: "Full-Stack Developer Intern / Project Manager", date: "Feb 2024 — May 2024", details: "Led the migration from Options API to Composition API in Vue.js, moved the codebase to TypeScript, and built a system-wide Tooltip and Onboarding System. Promoted to Project Manager, mentoring two interns to on-time delivery.", logo: "mdv-logo.png", companyName: "Savorite", workSetup: "Remote — Los Angeles, USA", companyWebsite: "https://mydreamvisa.com/" },
	{ id: 5, job: "Technical Solutions Lead", date: "Aug 2024 — Present", details: "Freelance, concurrent with full-time roles. Architected and shipped a Church Management System used by 120+ weekly active users — membership profiling, attendance monitoring, and an automated proposal-generation workflow — owning the full lifecycle from requirements to deployment.", logo: "jcag-logo.png", companyName: "Jesus Christ the Awesome God Church of Laguna Inc.", workSetup: "Santa Rosa, Philippines — Hybrid, Freelance", companyWebsite: "https://howstine.vercel.app" },
];

export const projects: ProjectProps[] = [
	{
		id: 0,
		title: "Agentic Crew Orchestrator",
		role: "Creator — open-source multi-agent system",
		description:
			"A public multi-agent orchestration system built to demonstrate production agent patterns: a planner decomposes a goal into a task DAG, researcher and executor agents work the tasks with real tools, and a reviewer gates the result and can send specific steps back for repair.",
		outcome:
			"Runs fully offline in mock mode — no API key or cost required to clone and demo the full planner-to-reviewer loop.",
		stack: ["Python", "OpenAI / Claude", "FastAPI", "pytest"],
		link: "https://github.com/nearbyjustine/agentic-crew-orchestrator",
	},
	{
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
		title: "Church Management System",
		role: "Solo engineer — full lifecycle, freelance",
		description:
			"Identified operational bottlenecks in a growing church organization and architected a centralized platform for membership profiling and attendance monitoring, plus a proposal-generation tool that automated event-planning drafts and approvals.",
		outcome:
			"120+ weekly active users rely on the system for real-time attendance and membership data, replacing manual paper tracking.",
		stack: ["Full-Stack", "Automation", "Stakeholder design"],
		link: "#contact",
	},
	{
		id: 5,
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
