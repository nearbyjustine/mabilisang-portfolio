import DownloadButton from "@/components/DownloadButton";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/types/props";
import { RxCross1 } from "react-icons/rx";

function BurgerNavbar({
	burgerClicked,
	setBurgerClicked,
	inMobileView,
}: NavbarProps) {
	return (
		<nav
			className={cn(
				"fixed w-full min-h-screen bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl top-0 z-[60] transition-transform duration-300 ease-in-out",
				burgerClicked && inMobileView ? "translate-x-0" : "translate-x-full hidden",
			)}
		>
			<div className="text-zinc-900 dark:text-zinc-200 flex justify-between px-6 py-4 items-center border-b border-zinc-200/50 dark:border-zinc-800/50">
				<div>
					<a href="/">
						<img
							className="opacity-90 dark:invert"
							src="hows-tine-logo.svg"
							alt="hows.tine logo"
							width={40}
						/>
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<RxCross1 className="scale-125 cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-8 items-center justify-center text-zinc-900 dark:text-zinc-200 h-full mt-20">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					{" "}
					<a
						className="text-xl font-medium hover:text-indigo-400 transition-colors"
						href="#experiences"
					>
						Experience
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<a
						className="text-xl font-medium hover:text-indigo-400 transition-colors"
						href="#me"
					>
						About Me
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<a
						className="text-xl font-medium hover:text-indigo-400 transition-colors"
						href="#projects"
					>
						Projects
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<a
						className="text-xl font-medium hover:text-indigo-400 transition-colors"
						href="#technologies"
					>
						Tech Stack
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<a
						className="text-xl font-medium hover:text-indigo-400 transition-colors"
						href="#contact"
					>
						Contact Me
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)} className="mt-4">
					<DownloadButton link="justine_castaneda_resume.pdf?v=20260220" text="Resume" />
				</div>
			</div>
		</nav>
	);
}

export default BurgerNavbar;
