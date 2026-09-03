import { useEffect, useRef } from "react";
import DownloadButton from "@/components/DownloadButton";
import { cn } from "@/lib/utils";
import { container } from "@/lib/layout";
import type { NavbarProps } from "@/types/props";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";
import { navLinks, resumeLink } from "@/data/navigation";
import { RxCross1 } from "react-icons/rx";

function BurgerNavbar({
	burgerClicked,
	setBurgerClicked,
	inMobileView,
	triggerRef,
}: NavbarProps) {
	const { getSurface } = usePortfolioTheme();
	const surface = getSurface("light");
	const isOpen = Boolean(burgerClicked && inMobileView);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const wasOpenRef = useRef(false);

	// The trigger lives in the subtree App hides while this menu is open, so
	// focus has to move in on open and be handed back on close — otherwise it is
	// stranded on an element the user can neither see nor tab away from.
	useEffect(() => {
		if (isOpen) {
			closeButtonRef.current?.focus();
		} else if (wasOpenRef.current) {
			// preventScroll so restoring focus doesn't yank the page back to the
			// top after a menu link has jumped to its section.
			triggerRef?.current?.focus({ preventScroll: true });
		}
		wasOpenRef.current = isOpen;
	}, [isOpen, triggerRef]);

	useEffect(() => {
		if (!isOpen) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setBurgerClicked(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [isOpen, setBurgerClicked]);

	return (
		<nav
			id="mobile-menu"
			aria-label="Mobile"
			className={cn(
				"fixed inset-0 z-60 min-h-screen transition-transform duration-300 ease-out",
				surface.bg,
				surface.text,
				isOpen ? "translate-x-0" : "hidden translate-x-full",
			)}
		>
			<div
				className={cn(
					container,
					"flex items-center justify-between border-b py-4",
					surface.rule,
				)}
			>
				<a href="/" aria-label="Home">
					<img
						src={
							surface.isLight ? "hows-tine-logo.svg" : "hows-tine-logo-white.svg"
						}
						alt="hows.tine logo"
						width={40}
						height={40}
						className="w-10"
					/>
				</a>
				<button
					type="button"
					ref={closeButtonRef}
					aria-label="Close menu"
					onClick={() => setBurgerClicked(false)}
					className={cn(
						"rounded-lg p-2 transition-colors",
						surface.isLight ? "hover:bg-zinc-200" : "hover:bg-zinc-800",
					)}
				>
					<RxCross1 className="size-5" aria-hidden="true" />
				</button>
			</div>

			<div className={cn(container, "flex flex-col items-start gap-2 pt-12")}>
				{navLinks.map(({ href, label }) => (
					<a
						key={href}
						href={href}
						onClick={() => setBurgerClicked(false)}
						className={cn(
							"w-full border-b py-4 text-2xl font-medium transition-colors",
							surface.rule,
							surface.accentHover,
						)}
					>
						{label}
					</a>
				))}
				<div className="pt-8">
					<DownloadButton link={resumeLink} text="Resume" />
				</div>
			</div>
		</nav>
	);
}

export default BurgerNavbar;
