import { describe, expect, it } from "vitest";
import { experiences, projects, proofPoints } from "./portfolio";

describe("portfolio content", () => {
	it("leads with current leadership and measurable proof", () => {
		expect(experiences[0].job).toBe("Lead Software Engineer");
		expect(proofPoints.map((point) => point.value)).toEqual(["2.5+", "4", "35k+"]);
	});

	it("keeps current product work anonymous", () => {
		const text = JSON.stringify(projects);
		expect(text).toContain("AI Content Automation Platform");
		expect(text).not.toMatch(/posting-bot|fondly|flamingo|honest-engineering/i);
	});
});
