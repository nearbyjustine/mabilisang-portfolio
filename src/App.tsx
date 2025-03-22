import Navbar from "./sections/Navbar";
import SquareButton from "./components/SquareButton";
import Hero from "./sections/Hero";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { cn } from "./lib/utils";
import BurgerNavbar from "./sections/BurgerNavbar";
import Experiences from "./sections/Experiences";

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
	return (
		<>
			<div className="relative">
				<BurgerNavbar
					burgerClicked={burgerClicked}
					setBurgerClicked={setBurgerClicked}
					inMobileView={inMobileView}
				/>
				<div className={cn(burgerClicked && inMobileView ? "hidden" : "block")}>
					<Navbar
						burgerClicked={burgerClicked}
						setBurgerClicked={setBurgerClicked}
					/>

					<Hero />
					<div className="flex 2xl:px-20 px-10 items-center my-10">
						{/* Socials */}
						<div className="flex gap-4 md:-mt-[20px]">
							<SquareButton icon={FaLinkedin} />
							<SquareButton icon={FaFacebook} />
							<SquareButton icon={FaInstagram} />
						</div>
						<div className="md:block md:h-1 h-0.5 bg-black w-full md:ml-[120px] ml-5" />
					</div>
				</div>
				<Experiences className="flex flex-col justify-between 2xl:px-20 2xl:pt-20 px-10 py-10 items-center md:gap-8 gap-4" />
			</div>
		</>
	);
}

export default App;
