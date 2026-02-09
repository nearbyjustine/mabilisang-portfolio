import type { LucideIcon } from "lucide-react";
import {
	Code2,
	Database,
	Layout,
	Server,
	Settings,
	Terminal,
	Cpu,
} from "lucide-react";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

// --- Types ---
type TechCategory = {
	name: string;
	icon: LucideIcon;
	major: string[];
	minor: string[];
};

type CategoryCardProps = {
	category: TechCategory;
	isLight: boolean;
};

// --- Data ---
const techStack: TechCategory[] = [
	{
		name: "Frontend",
		icon: Layout,
		major: ["Nuxt 3", "Vue 3", "React", "TypeScript", "TailwindCSS", "NextJS"],
		minor: ["Composition API", "Pinia", "State Management"],
	},
	{
		name: "Backend",
		icon: Server,
		major: ["Laravel", "Node.js", "Express", "REST API Design", "Python", "PHP", "FastAPI", "NestJS"],
		minor: ["Service Classes", "Queues", "Events", "Observers", "Caching", "RBAC"],
	},
	{
		name: "Databases",
		icon: Database,
		major: ["PostgreSQL", "MySQL", "Supabase", "Redis"],
		minor: ["Query Optimization", "Schema Design"],
	},
	{
		name: "Testing",
		icon: Code2,
		major: ["Vitest", "Playwright", "PHPUnit"],
		minor: ["Unit/Integration", "E2E", "Feature Testing"],
	},
	{
		name: "DevOps / Cloud",
		icon: Settings,
		major: ["Docker", "Cloudflare", "AWS", "GitHub Actions"],
		minor: ["Traefik", "Portainer", "EC2", "S3", "RDS", "Jenkins", "Lando"],
	},
	{
		name: "Automation & AI",
		icon: Cpu,
		major: ["n8n", "OpenAI", "Claude", "Gemini"],
		minor: ["GitHub Copilot", "OpenRouter", "Workflow Automation"],
	},
	{
		name: "Other Tools",
		icon: Terminal,
		major: ["Git", "Nginx", "Postman"],
		minor: ["Jira"],
	},
];

const CORE_COMPETENCIES: readonly string[] = [
	"Vue 3",
	"React",
	"TypeScript",
	"Laravel",
	"AWS",
	"Docker",
] as const;

// --- Sub-Components ---

function CategoryCard({ category, isLight }: CategoryCardProps) {
	const Icon = category.icon;

	return (
		<div className={cn(
			"group flex flex-col h-full rounded-lg p-6 border transition-all duration-300",
			isLight 
				? "bg-white border-zinc-200 hover:border-teal-200 hover:shadow-lg"
				: "bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/60"
		)}>
			{/* Header */}
			<div className="flex items-center gap-3 mb-6">
				<div className={cn(
					"p-2 rounded-md transition-colors",
					isLight 
						? "bg-zinc-100 text-zinc-500 group-hover:text-teal-600 group-hover:bg-teal-50"
						: "bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-100 group-hover:bg-zinc-700"
				)}>
					<Icon size={20} />
				</div>
				<h3 className={cn(
					"text-lg font-medium tracking-tight",
					isLight ? "text-zinc-900" : "text-zinc-200"
				)}>
					{category.name}
				</h3>
			</div>

			{/* Skills Container */}
			<div className="flex flex-col gap-4">
				{/* Major Skills - Prominent */}
				<div className="flex flex-wrap gap-2">
					{category.major.map((tech) => (
						<span
							key={tech}
							className={cn(
								"px-2.5 py-1 text-xs font-medium rounded border",
								isLight 
									? "text-zinc-700 bg-zinc-100 border-zinc-200"
									: "text-zinc-100 bg-zinc-800 border-zinc-700/50"
							)}
						>
							{tech}
						</span>
					))}
				</div>

				{/* Separator if both exist */}
				{category.major.length > 0 && category.minor.length > 0 && (
					<div className={cn("h-px w-full", isLight ? "bg-zinc-200" : "bg-zinc-800/50")} />
				)}

				{/* Minor Skills - Subtle */}
				<div className="flex flex-wrap gap-x-3 gap-y-1.5">
					{category.minor.map((tech) => (
						<span
							key={tech}
							className={cn(
								"text-xs transition-colors cursor-default",
								isLight 
									? "text-zinc-500 hover:text-zinc-700"
									: "text-zinc-500 hover:text-zinc-300"
							)}
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

// --- Main Component ---

export default function TechStack() {
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light";
	
	return (
		<section
			id="technologies"
			className={cn(
				"py-24 px-6 md:px-12 lg:px-20 transition-colors duration-300",
				getSectionBg("dark"),
				getSectionText("dark")
			)}
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="mb-16 md:mb-20 space-y-4 max-w-2xl">
					<div className="flex items-center gap-2">
						<span className="h-px w-8 bg-teal-500/70" />
						<span className="text-teal-600 font-medium tracking-wider text-sm uppercase">
							Expertise
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
						Technologies & <br className="hidden md:block" />
						<span className="opacity-50">Technical Skills.</span>
					</h2>
					<p className="opacity-70 text-lg leading-relaxed pt-2">
						A comprehensive overview of the tools, languages, and frameworks I
						use to build scalable digital solutions.
					</p>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{techStack.map((category) => (
						<CategoryCard key={category.name} category={category} isLight={isLight} />
					))}
				</div>

				{/* Core Competencies / Highlight Bar */}
				<div className={cn(
					"mt-20 pt-10 border-t",
					isLight ? "border-zinc-200" : "border-zinc-900"
				)}>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<span className="text-sm font-medium opacity-50 uppercase tracking-widest">
							Core Competencies
						</span>
						<div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80">
							{CORE_COMPETENCIES.map((item) => (
								<span
									key={item}
									className="font-semibold text-lg hover:text-teal-600 transition-colors cursor-default"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
