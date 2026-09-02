import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import DownloadButton from "../components/DownloadButton";
import { cn } from "@/lib/utils";
import { container } from "@/lib/layout";
import type { NavbarProps } from "@/types/props";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { navLinks, resumeLink } from "@/data/navigation";

function Navbar(props: NavbarProps) {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Check initial state
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Highlight whichever section is crossing the middle of the viewport.
	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;
		const sections = navLinks
			.map(({ href }) => document.getElementById(href.slice(1)))
			.filter((node): node is HTMLElement => node !== null);
		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				}
			},
			{ rootMargin: "-50% 0px -50% 0px", threshold: 0 },
		);
		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	}, []);

	return (
		<nav
			aria-label="Primary"
			className={cn(
				"sticky top-0 z-50 border-b transition-colors duration-300",
				surface.bg,
				scrolled ? cn(surface.rule, "shadow-sm") : "border-transparent",
			)}
		>
			<div className={cn(container, "flex items-center justify-between py-4")}>
				<a href="/" aria-label="Home" className="shrink-0">
					<img
						src={
							surface.isLight ? "hows-tine-logo.svg" : "hows-tine-logo-white.svg"
						}
						alt="hows.tine logo"
						width={40}
						height={40}
						className="w-10 transition-opacity hover:opacity-80"
					/>
				</a>

				<div
					className={cn(
						"hidden items-center gap-8 text-sm font-medium md:flex",
						surface.muted,
					)}
				>
					{navLinks.map(({ href, label }) => {
						const isActive = activeSection === href.slice(1);
						return (
							<a
								key={href}
								href={href}
								aria-current={isActive ? "true" : undefined}
								className={cn(
									"relative py-1 transition-colors",
									"after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform",
									isActive
										? cn(surface.accent, "after:scale-x-100")
										: cn(surface.accentHover, "hover:after:scale-x-100"),
								)}
							>
								{label}
							</a>
						);
					})}
					<div className={cn("border-l pl-5", surface.rule)}>
						<ThemeToggle />
					</div>
					<DownloadButton link={resumeLink} text="Resume" />
				</div>

				<div className="flex items-center gap-3 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						ref={props.triggerRef}
						aria-expanded={props.burgerClicked}
						aria-controls="mobile-menu"
						aria-label="Open menu"
						onClick={() => props.setBurgerClicked((prev) => !prev)}
						className={cn(
							"rounded-lg p-2 transition-colors",
							surface.text,
							surface.isLight ? "hover:bg-zinc-200" : "hover:bg-zinc-800",
						)}
					>
						<GiHamburgerMenu className="size-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
