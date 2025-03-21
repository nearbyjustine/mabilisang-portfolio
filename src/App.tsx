import Navbar from "./sections/Navbar";
import SquareButton from "./components/SquareButton";
import Hero from "./sections/Hero";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { cn } from "./lib/utils";
import BurgerNavbar from "./sections/BurgerNavbar";

function App() {
	const [burgerClicked, setBurgerClicked] = useState(true);
	const [inMobileView, setInMobileView] = useState(false);
	useEffect(() => {
		const inMobile = () => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			window.innerWidth < 640 ? setInMobileView(true) : setInMobileView(false);
			return;
		};
		inMobile();
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
					<div className="flex 2xl:px-20 px-10">
						{/* Socials */}
						<div className="flex gap-4 md:-mt-[20px] mt-5">
							<SquareButton icon={FaLinkedin} />
							<SquareButton icon={FaFacebook} />
							<SquareButton icon={FaInstagram} />
						</div>
						<div className="md:block hidden h-1 bg-black w-full ml-[120px]" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
