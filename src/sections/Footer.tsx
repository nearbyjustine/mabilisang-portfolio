import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { cn } from "@/lib/utils";

function Footer() {
	const { theme } = usePortfolioTheme();
	const isLight = theme === "light";
	
	return (
		<section
			className={cn(
				"flex justify-between px-6 md:px-12 lg:px-20 py-8 items-center text-sm border-t transition-colors duration-300",
				isLight 
					? "bg-zinc-100 text-zinc-500 border-zinc-200" 
					: "bg-zinc-950 text-zinc-500 border-zinc-900"
			)}
		>
			<div className="opacity-70 hover:opacity-100 transition-opacity">
				<a href="/">
					<img 
						src={isLight ? "hows-tine-logo.svg" : "hows-tine-logo-white.svg"} 
						alt="hows.tine logo" 
						width={32} 
					/>
				</a>
			</div>
			<div>2025 © Justine Castañeda</div>
		</section>
	);
}

export default Footer;
