import { GiHamburgerMenu } from "react-icons/gi";
import DownloadButton from "../components/DownloadButton";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/types/props";

function Navbar(props: NavbarProps) {
	return (
		<nav
			className={cn(
				"flex justify-between 2xl:px-20 px-10 py-4 items-center bg-white",
			)}
		>
			<div>
				<a href="/">
					<img src="hows-tine-logo.svg" alt="hows.tine logo" width={40} />
				</a>
			</div>
			<div className="md:flex gap-8 font-semibold hidden">
				<a className="hover:underline" href="#experiences">
					Experience
				</a>
				<a className="hover:underline" href="#me">
					About Me
				</a>
				<a className="hover:underline" href="#projects">
					Projects
				</a>
				<a className="hover:underline" href="#contact">
					Contact Me
				</a>
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="md:hidden block"
				onClick={() => props.setBurgerClicked((prev) => !prev)}
			>
				<GiHamburgerMenu className="scale-125 cursor-pointer" />
			</div>
			<div className="md:block hidden">
				<DownloadButton link="justine_castaneda_resume.pdf" text="Resume" />
			</div>
		</nav>
	);
}

export default Navbar;
