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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import ContactForm from "./components/ContactForm";
import Footer from "./sections/Footer";

function App() {
	const [burgerClicked, setBurgerClicked] = useState(false);
	const [inMobileView, setInMobileView] = useState(false);
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
					<section className="flex 2xl:px-20 px-10 sm:items-start items-center mb-20 mt-10 md:mt-0">
						{/* Socials */}
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
						<div className="md:block md:h-1 h-0.5 bg-black w-full md:ml-[120px] ml-5 -mt-1 sm:mt-0" />
					</section>
					<Experiences />
					<AboutMe />
					<Projects />
					<section
						id="contact"
						className="2xl:px-20 px-10 2xl:py-20 py-20 flex flex-col gap-8 items-center"
					>
						<div className="flex-col flex justify-center">
							<h1 className="md:text-4xl text-2xl">Let's talk! 🥳</h1>
							<p className="md:text-base text-small text-slate-800">
								If you want me to build something for you.
							</p>
						</div>
						<ContactForm className="md:w-[500px] w-full" />
					</section>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
