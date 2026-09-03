import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
	cleanup,
	fireEvent,
	render,
	screen,
	within,
} from "@testing-library/react";
import App from "@/App";

/**
 * App hides the whole page subtree — including the burger trigger — while the
 * mobile menu is open. Without explicit focus management that strands keyboard
 * focus on an element the user can no longer see or leave.
 */
describe("mobile menu focus management", () => {
	beforeEach(() => {
		// App reads this to decide it is in mobile view; jsdom has no implementation.
		window.matchMedia = (query: string) =>
			({
				matches: true,
				media: query,
				onchange: null,
				addEventListener: () => {},
				removeEventListener: () => {},
				addListener: () => {},
				removeListener: () => {},
				dispatchEvent: () => false,
			}) as unknown as MediaQueryList;
	});

	afterEach(cleanup);

	const trigger = () => screen.getByLabelText("Open menu");
	const closeButton = () => screen.getByLabelText("Close menu");
	const menuLink = (name: string) =>
		within(screen.getByRole("navigation", { name: "Mobile" })).getByRole(
			"link",
			{ name },
		);

	const openMenu = () => {
		const button = trigger();
		button.focus();
		fireEvent.click(button);
		return button;
	};

	it("moves focus to the close button when the menu opens", () => {
		render(<App />);

		openMenu();

		expect(document.activeElement).toBe(closeButton());
	});

	it("returns focus to the trigger when the close button is used", () => {
		render(<App />);
		const button = openMenu();
		// Focus is inside the menu; only a restore can put it back on the trigger.
		expect(document.activeElement).not.toBe(button);

		fireEvent.click(closeButton());

		expect(document.activeElement).toBe(button);
	});

	it("returns focus to the trigger when Escape closes the menu", () => {
		render(<App />);
		const button = openMenu();
		// A keyboard user who has tabbed onto a link before pressing Escape.
		menuLink("Contact").focus();
		expect(document.activeElement).not.toBe(button);

		fireEvent.keyDown(document.body, { key: "Escape" });

		expect(button.getAttribute("aria-expanded")).toBe("false");
		expect(document.activeElement).toBe(button);
	});

	it("closes the menu and restores focus when a menu link is followed", () => {
		render(<App />);
		const button = openMenu();
		const link = menuLink("Contact");
		link.focus();

		fireEvent.click(link);

		// The link keeps its href, so anchor navigation still happens.
		expect(link.getAttribute("href")).toBe("#contact");
		expect(button.getAttribute("aria-expanded")).toBe("false");
		expect(document.activeElement).toBe(button);
	});
});
