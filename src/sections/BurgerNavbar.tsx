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
		<div
			className={cn(
				"absolute w-full min-h-screen bg-slate-950 top-0",
				burgerClicked && inMobileView ? "flex flex-col" : "hidden",
			)}
		>
			<div className="text-white flex justify-between px-10 py-4 items-center">
				<div>
					<a href="/">
						<img
							className=""
							src="hows-tine-logo-white.svg"
							alt="hows.tine logo"
							width={40}
						/>
					</a>
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setBurgerClicked((prev) => !prev)}>
					<RxCross1 className="scale-125 cursor-pointer" />
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-6 items-center justify-center text-white">
				<a
					className="py-2 px-3 rounded-lg hover:bg-slate-800 focus:bg-slate-800 transition-all"
					href="#experiences"
				>
					Experience
				</a>
				<a
					className="py-2 px-3 rounded-lg hover:bg-slate-800 focus:bg-slate-800 transition-all"
					href="#me"
				>
					About Me
				</a>
				<a
					className="py-2 px-3 rounded-lg border-b-0 hover:bg-slate-800 focus:bg-slate-800 transition-all"
					href="#projects"
				>
					Projects
				</a>
				<a
					className="py-2 px-3 rounded-lg hover:bg-slate-800 focus:bg-slate-800 transition-all"
					href="#contact"
				>
					Contact Me
				</a>
				<DownloadButton link="justine_castaneda_resume.pdf" text="Resume" />
			</div>
		</div>
	);
}

export default BurgerNavbar;
