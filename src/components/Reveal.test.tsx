import { describe, expect, it } from "vitest";
import Reveal from "./Reveal";

describe("Reveal", () => {
	it("exposes a delay without changing layout", () => {
		const element = Reveal({ children: "Work", delay: 120 });
		expect(element.props.className).toContain("reveal");
		expect(element.props.style).toEqual({ animationDelay: "120ms" });
	});
});
