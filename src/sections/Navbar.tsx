import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import DownloadButton from "../components/DownloadButton";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/types/props";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";

function Navbar(props: NavbarProps) {
	const [scrolled, setScrolled] = useState(false);
	const { getSectionBg } = usePortfolioTheme();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial state
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"flex justify-between px-6 md:px-12 lg:px-20 py-4 items-center sticky top-0 z-50 transition-all duration-300",
				scrolled
					? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
					: cn(getSectionBg("light"), "border-b border-transparent")
			)}
		>
			<div className="flex items-center gap-4">
				<a href="/">
					<img 
						src="hows-tine-logo.svg" 
						alt="hows.tine logo" 
						width={40} 
						className={cn(
							"w-10 transition-opacity",
							scrolled ? "opacity-90 hover:opacity-100 dark:invert" : "opacity-100"
						)} 
					/>
				</a>
			</div>
			<div className="md:flex gap-8 font-medium hidden text-sm tracking-wide items-center text-zinc-600 dark:text-zinc-400">
				<a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#experiences">
					Experience
				</a>
				<a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#me">
					About Me
				</a>
				<a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#projects">
					Projects
				</a>
				<a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#technologies">
					Tech Stack
				</a>
				<a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#contact">
					Contact Me
				</a>
				<div className="pl-4 border-l border-zinc-200 dark:border-zinc-800">
					<ThemeToggle />
				</div>
			</div>
			
			<div className="flex items-center gap-4 md:hidden">
				<ThemeToggle />
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="text-zinc-800 dark:text-zinc-200"
					onClick={() => props.setBurgerClicked((prev) => !prev)}
				>
					<GiHamburgerMenu className="scale-125 cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
				</div>
			</div>

			<div className="md:block hidden">
				<DownloadButton link="justine_castaneda_resume.pdf" text="Resume" />
			</div>
		</nav>
	);
}

export default Navbar;
