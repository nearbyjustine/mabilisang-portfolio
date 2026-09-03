import { describe, expect, it } from "vitest";
import { experiences, pipelineStages, projects, proofPoints } from "./portfolio";
import type { ProjectProps } from "@/types/props";

const IMAGE_FILE = /\.(png|jpe?g|webp|svg|gif|avif)$/i;
const IMAGE_KEY = /^(img|image|thumb|photo|screenshot|cover)/i;

describe("portfolio content", () => {
	it("leads with current leadership and measurable proof", () => {
		expect(experiences[0].job).toBe("Lead Software Engineer");
		expect(proofPoints.map((point) => point.value)).toEqual(["2.5+", "4", "35k+"]);
	});

	it("keeps current product work anonymous", () => {
		const text = JSON.stringify(projects);
		expect(text).toContain("AI Content Automation Platform");
		expect(text).not.toMatch(/posting-bot|fondly|flamingo cards|honest-engineering/i);
	});

	it("draws the hero pipeline from truthful stages", () => {
		expect(pipelineStages).toHaveLength(6);
		expect(pipelineStages.map((stage) => stage.name)).toEqual([
			"Discover",
			"Classify",
			"Transform",
			"Render",
			"Publish",
			"Observe",
		]);
		// The corpus size shown in the schematic must match the stated proof point.
		expect(JSON.stringify(pipelineStages)).toContain("35k+");
	});
});

describe("featured projects", () => {
	it("ships the current case studies, open-source work leading", () => {
		expect(projects).toHaveLength(6);
		expect(projects.map((project) => project.title)).toEqual([
			"Agentic Crew Orchestrator",
			"AI Content Automation Platform",
			"Creator Operations Platform",
			"Automated iOS Publishing Fleet",
			"Church Management System",
			"CentHRIS / Finance Modules",
		]);
	});

	it("excludes e-Dukado LMS and any thesis project", () => {
		const text = JSON.stringify(projects);
		expect(text).not.toMatch(/e-?dukado/i);
		expect(text).not.toMatch(/\bLMS\b/i);
		expect(text).not.toMatch(/thesis|capstone|learning management/i);
		expect(text).not.toMatch(/elementary school|edukado-lms\.vercel\.app/i);
	});

	it("carries no image data on any project", () => {
		for (const project of projects) {
			const keys = Object.keys(project);
			expect(keys).not.toContain("imgSrc");
			expect(keys).not.toContain("imgAlt");
			expect(keys.filter((key) => IMAGE_KEY.test(key))).toEqual([]);

			for (const value of Object.values(project)) {
				const values = Array.isArray(value) ? value : [value];
				for (const entry of values) {
					if (typeof entry !== "string") continue;
					expect(entry).not.toMatch(IMAGE_FILE);
				}
			}
		}
	});

	it("rejects image fields on the project contract", () => {
		const withImage = {
			...projects[0],
			// @ts-expect-error ProjectProps must never accept an image field again
			imgSrc: "projects/centify.png",
		} satisfies ProjectProps;

		expect(withImage.title).toBe(projects[0].title);
	});

	it("gives every case study role, outcome, and stack metadata", () => {
		for (const project of projects) {
			expect(project.role.length).toBeGreaterThan(0);
			expect(project.outcome.length).toBeGreaterThan(0);
			expect(project.stack.length).toBeGreaterThan(0);
		}
	});

	it("uses in-page anchors for private work and https for live/open-source links", () => {
		for (const project of projects) {
			expect(project.link).toMatch(/^(#|https:\/\/)/);
		}
		expect(projects.filter((project) => project.link.startsWith("#"))).toHaveLength(4);
		expect(projects[0].link).toBe("https://github.com/nearbyjustine/agentic-crew-orchestrator");
		expect(projects[5].link).toBe("https://app.centhris.com/");
	});
});
