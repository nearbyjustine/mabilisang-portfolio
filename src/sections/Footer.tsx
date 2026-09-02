import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";
import { container } from "@/lib/layout";

function Footer() {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");

	return (
		<footer
			className={cn(
				"border-t transition-colors duration-300",
				surface.rule,
				surface.isLight ? "bg-zinc-100" : "bg-zinc-950",
			)}
		>
			<div
				className={cn(
					container,
					"flex flex-col items-start gap-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between",
				)}
			>
				<a href="/" aria-label="Home" className="transition-opacity hover:opacity-70">
					<img
						src={
							surface.isLight ? "hows-tine-logo.svg" : "hows-tine-logo-white.svg"
						}
						alt="hows.tine logo"
						width={32}
						height={32}
						className="w-8"
					/>
				</a>
				<p className={cn("font-mono text-xs tracking-wide", surface.faint)}>
					Built with React, TypeScript, and Tailwind
				</p>
				<p className={surface.muted}>2026 © Justine Castañeda</p>
			</div>
		</footer>
	);
}

export default Footer;
