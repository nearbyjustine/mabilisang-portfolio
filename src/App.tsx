import Navbar from "./sections/Navbar";
import SquareButton from "./components/SquareButton";
import Hero from "./sections/Hero";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";
import { cn } from "./lib/utils";
import BurgerNavbar from "./sections/BurgerNavbar";
import Experiences from "./sections/Experiences";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import ContactForm from "./components/ContactForm";
import Footer from "./sections/Footer";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";

function App() {
	const [burgerClicked, setBurgerClicked] = useState(false);
	const [inMobileView, setInMobileView] = useState(false);
	const { getSectionBg, getSectionText, theme } = usePortfolioTheme();
	const isLight = theme === "light" || theme === "hybrid";
	
	useEffect(() => {
		const inMobile = () => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			window.innerWidth < 640 ? setInMobileView(true) : setInMobileView(false);
		};
		inMobile();
		addEventListener("resize", inMobile);
	}, []);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};
	
	return (
		<>
			<div className="relative">
				<BurgerNavbar
					burgerClicked={burgerClicked}
					setBurgerClicked={setBurgerClicked}
					inMobileView={inMobileView}
				/>
				<div
					className={cn("", burgerClicked && inMobileView ? "hidden" : "block")}
				>
					<Navbar
						burgerClicked={burgerClicked}
						setBurgerClicked={setBurgerClicked}
					/>

					<Hero />
					
					{/* Socials */}
					<section className={cn(
						"flex 2xl:px-20 px-10 sm:items-start items-center pb-20 mt-10 md:mt-0 transition-colors duration-300",
						getSectionBg("light")
					)}>
						<div className="flex gap-4 md:-mt-[20px]">
							<SquareButton
								link="https://www.linkedin.com/in/nearby-justine/"
								icon={FaLinkedin}
							/>
							<SquareButton
								link="https://github.com/nearbyjustine"
								icon={FaGithub}
							/>
							<Popover>
								<PopoverTrigger
									onClick={() => copyToClipboard("nearbyjustine@gmail.com")}
								>
									<SquareButton icon={SiGmail} />
								</PopoverTrigger>
								<PopoverContent sideOffset={12}>
									Copied email to clipboard
								</PopoverContent>
							</Popover>
						</div>
						<div className={cn(
							"md:block md:h-1 h-0.5 w-full md:ml-[120px] ml-5 -mt-1 sm:mt-0",
							isLight ? "bg-zinc-300" : "bg-zinc-700"
						)} />
					</section>
					
					<Experiences />
					<AboutMe />
					<TechStack />
					<Projects />
					
					{/* Contact Section */}
					<section
						id="contact"
						className={cn(
							"py-24 px-6 md:px-12 lg:px-20 flex flex-col gap-8 items-center transition-colors duration-300",
							getSectionBg("light"),
							getSectionText("light")
						)}
					>
						<div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-8">
							<div className="flex items-center gap-2 mb-4">
								<span className="h-px w-8 bg-teal-600/70" />
								<span className="text-teal-600 font-medium tracking-wider text-sm uppercase">
									Get In Touch
								</span>
							</div>
							<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">
								Let's <span className="text-teal-600">Talk!</span> 🥳
							</h2>
							<p className="opacity-70 text-center max-w-md">
								Have a project in mind? Let's build something impactful together.
							</p>
							<ContactForm className="md:w-[500px] w-full" />
						</div>
					</section>
					
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
