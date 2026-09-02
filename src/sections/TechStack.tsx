import SectionHeading from "@/components/SectionHeading";
import { usePortfolioTheme, type Surface } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container, sectionPadding } from "@/lib/layout";

// --- Types ---
type TechCategory = {
	name: string;
	major: string[];
	minor: string[];
};

// --- Data ---
const techStack: TechCategory[] = [
	{
		name: "Frontend",
		major: ["React 19", "TypeScript", "Vue 3", "Nuxt 3", "TailwindCSS", "Next.js"],
		minor: ["Composition API", "Pinia", "State Management"],
	},
	{
		name: "Backend",
		major: ["Python", "Firebase Cloud Functions", "Laravel", "Node.js", "Flask", "REST API Design"],
		minor: ["Service Classes", "Queues", "Events", "Observers", "Caching", "RBAC"],
	},
	{
		name: "Databases",
		major: ["Firestore", "PostgreSQL", "MySQL", "Supabase", "Redis"],
		minor: ["Query Optimization", "Schema Design"],
	},
	{
		name: "Testing",
		major: ["Vitest", "Playwright", "PHPUnit"],
		minor: ["Unit/Integration", "E2E", "Feature Testing"],
	},
	{
		name: "DevOps / Cloud",
		major: ["Firebase", "Google Cloud Run", "Docker", "AWS", "GitHub Actions"],
		minor: ["Traefik", "Portainer", "EC2", "S3", "RDS", "Jenkins", "Lando"],
	},
	{
		name: "Automation & AI",
		major: ["OpenAI", "Gemini", "n8n", "WebDriverAgent", "Pillow"],
		minor: ["Classification Pipelines", "Workflow Automation", "Private API Integrations"],
	},
	{
		name: "Other Tools",
		major: ["Git", "Nginx", "Postman"],
		minor: ["Jira"],
	},
];

const CORE_COMPETENCIES: readonly string[] = [
	"Python",
	"React",
	"TypeScript",
	"Firebase",
	"AWS",
	"Docker",
] as const;

// --- Sub-Components ---

/** A run of terms separated by hairline slashes rather than boxed into pills. */
function TermRun({
	items,
	surface,
	className,
	separatorClassName,
}: {
	items: readonly string[];
	surface: Surface;
	className?: string;
	separatorClassName?: string;
}) {
	return (
		<ul className={cn("flex flex-wrap gap-x-3 gap-y-1", className)}>
			{items.map((item, index) => (
				<li
					key={item}
					className={cn(
						index < items.length - 1 && "after:ml-3 after:content-['/']",
						separatorClassName ??
							(surface.isLight ? "after:text-zinc-300" : "after:text-zinc-700"),
					)}
				>
					{item}
				</li>
			))}
		</ul>
	);
}

// --- Main Component ---

export default function TechStack() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("dark");

	return (
		<section
			id="technologies"
			aria-labelledby="technologies-title"
			className={cn(
				"transition-colors duration-300",
				sectionPadding,
				surface.bg,
				surface.text,
			)}
		>
			<div className={container}>
				<SectionHeading
					id="technologies-title"
					title="Technical Stack"
					deck="What I actually reach for, grouped by where it sits in a system. The first line of each row is the working set; the second is the supporting detail."
					surface={surface}
					className="mb-4 md:mb-8"
				/>

				<dl>
					{techStack.map((category) => (
						<div
							key={category.name}
							className={cn(
								"grid gap-x-10 gap-y-3 border-t py-7 lg:grid-cols-12",
								surface.rule,
							)}
						>
							<dt
								className={cn(
									"font-mono text-[11px] tracking-[0.18em] uppercase lg:col-span-3 lg:pt-1",
									surface.faint,
								)}
							>
								{category.name}
							</dt>
							<dd className="lg:col-span-9">
								<TermRun
									items={category.major}
									surface={surface}
									className={cn("text-base md:text-lg", surface.text)}
								/>
								{category.minor.length > 0 ? (
									<TermRun
										items={category.minor}
										surface={surface}
										className={cn("mt-3 text-sm", surface.faint)}
									/>
								) : null}
							</dd>
						</div>
					))}
				</dl>

				<div
					className={cn(
						"grid gap-x-10 gap-y-3 border-t py-7 lg:grid-cols-12",
						surface.rule,
					)}
				>
					<p
						className={cn(
							"font-mono text-[11px] tracking-[0.18em] uppercase lg:col-span-3 lg:pt-1",
							surface.accent,
						)}
					>
						Most days
					</p>
					<TermRun
						items={CORE_COMPETENCIES}
						surface={surface}
						className={cn("text-lg font-medium lg:col-span-9", surface.text)}
					/>
				</div>
			</div>
		</section>
	);
}
