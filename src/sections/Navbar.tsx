import { GiHamburgerMenu } from "react-icons/gi";
import DownloadButton from "../components/DownloadButton";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/types/navbar";

function Navbar(props: NavbarProps) {
	return (
		<div
			className={cn(
				"flex justify-between 2xl:px-20 px-10 py-4 items-center bg-white",
			)}
		>
			<div>
				<img src="hows-tine-logo.svg" alt="hows.tine logo" width={40} />
			</div>
			<div className="md:flex gap-8 font-semibold hidden">
				<a href="#">Experience</a>
				<a href="#">About Me</a>
				<a href="#">Projects</a>
				<a href="#">Skills</a>
				<a href="#">Contact Me</a>
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="md:hidden block"
				onClick={() => props.setBurgerClicked((prev) => !prev)}
			>
				<GiHamburgerMenu className="scale-125 cursor-pointer" />
			</div>
			<div className="md:block hidden">
				<DownloadButton text="Resume" />
			</div>
		</div>
	);
}

export default Navbar;
