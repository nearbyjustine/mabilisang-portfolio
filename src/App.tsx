import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { cn } from "./lib/utils";
import { container, sectionPadding } from "./lib/layout";
import BurgerNavbar from "./sections/BurgerNavbar";
import Experiences from "./sections/Experiences";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "./components/ContactForm";
import Footer from "./sections/Footer";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import Reveal from "@/components/Reveal";
import { contactEmail, socialLinks } from "@/data/navigation";

const SOCIAL_ICONS = {
	LinkedIn: FaLinkedin,
	GitHub: FaGithub,
} as const;

function App() {
	const [burgerClicked, setBurgerClicked] = useState(false);
	const [inMobileView, setInMobileView] = useState(false);
	// Opening the menu hides the subtree holding this button, so BurgerNavbar
	// needs a handle on it to give focus back on close.
	const menuTriggerRef = useRef<HTMLButtonElement>(null);
	const { getSurface } = usePortfolioTheme();
	const contactSurface = getSurface("light");

	useEffect(() => {
		const query = window.matchMedia("(max-width: 639px)");
		const sync = () => setInMobileView(query.matches);
		sync();
		query.addEventListener("change", sync);
		return () => query.removeEventListener("change", sync);
	}, []);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(contactEmail);
			toast("Email copied to clipboard");
		} catch {
			toast("Couldn't copy — the address is nearbyjustine@gmail.com");
		}
	};

	return (
		<>
			<a href="#main-content" className="skip-link">
				Skip to main content
			</a>
			<div className="relative">
				<BurgerNavbar
					burgerClicked={burgerClicked}
					setBurgerClicked={setBurgerClicked}
					inMobileView={inMobileView}
					triggerRef={menuTriggerRef}
				/>
				<div className={cn(burgerClicked && inMobileView ? "hidden" : "block")}>
					<Navbar
						burgerClicked={burgerClicked}
						setBurgerClicked={setBurgerClicked}
						triggerRef={menuTriggerRef}
					/>

					<main id="main-content">
						<Hero />
						<Reveal>
							<Experiences />
						</Reveal>
						<Reveal>
							<AboutMe />
						</Reveal>
						<Reveal>
							<TechStack />
						</Reveal>
						<Reveal>
							<Projects />
						</Reveal>

						<Reveal>
							<section
								id="contact"
								aria-labelledby="contact-title"
								className={cn(
									"transition-colors duration-300",
									sectionPadding,
									contactSurface.bg,
									contactSurface.text,
								)}
							>
								<div className={container}>
									<SectionHeading
										id="contact-title"
										title="Let's Talk"
										deck="Building something that has to run every day? Tell me what it needs to do and I'll tell you how I'd approach it."
										surface={contactSurface}
										className="mb-12 md:mb-16"
									/>

									<div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10">
										<div className="lg:col-span-4">
											<p
												className={cn(
													"font-mono text-[11px] tracking-[0.18em] uppercase",
													contactSurface.faint,
												)}
											>
												Direct
											</p>
											<div className="mt-2 flex flex-wrap items-center gap-2">
												<a
													href={`mailto:${contactEmail}`}
													className={cn(
														"text-base underline underline-offset-4 transition-colors md:text-lg",
														contactSurface.accent,
														contactSurface.accentHover,
													)}
												>
													{contactEmail}
												</a>
												<button
													type="button"
													onClick={copyEmail}
													aria-label="Copy email address"
													className={cn(
														"rounded-md p-1.5 transition-colors",
														contactSurface.faint,
														contactSurface.isLight
															? "hover:bg-zinc-200 hover:text-zinc-800"
															: "hover:bg-zinc-800 hover:text-zinc-100",
													)}
												>
													<Copy size={16} aria-hidden="true" />
												</button>
											</div>

											<p
												className={cn(
													"mt-8 font-mono text-[11px] tracking-[0.18em] uppercase",
													contactSurface.faint,
												)}
											>
												Elsewhere
											</p>
											<ul className="mt-2 space-y-2">
												{socialLinks.map(({ href, label }) => {
													const Icon =
														SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
													return (
														<li key={href}>
															<a
																href={href}
																target="_blank"
																rel="noreferrer"
																className={cn(
																	"inline-flex items-center gap-2 text-base transition-colors",
																	contactSurface.muted,
																	contactSurface.isLight
																		? "hover:text-teal-700"
																		: "hover:text-teal-300",
																)}
															>
																<Icon aria-hidden="true" className="size-4" />
																{label}
															</a>
														</li>
													);
												})}
											</ul>
										</div>

										<div className="lg:col-span-7 lg:col-start-6">
											<ContactForm />
										</div>
									</div>
								</div>
							</section>
						</Reveal>
					</main>

					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
