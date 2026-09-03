import { describe, expect, it } from "vitest";
import {
	externalHost,
	isInternalLink,
	linkTargetProps,
	projectLinkLabel,
} from "./links";
import { projects } from "@/data/portfolio";

describe("project links", () => {
	it("treats #contact as an internal link", () => {
		expect(isInternalLink("#contact")).toBe(true);
		expect(isInternalLink("https://app.centhris.com/")).toBe(false);
	});

	it("never opens an in-page anchor in a new tab", () => {
		expect(linkTargetProps("#contact")).toEqual({});
		expect(linkTargetProps("https://app.centhris.com/")).toEqual({
			target: "_blank",
			rel: "noreferrer",
		});
	});

	it("names the destination in the link's own terms", () => {
		expect(projectLinkLabel("#contact")).toBe("Ask me about this work");
		expect(projectLinkLabel("https://app.centhris.com/")).toBe(
			"Open app.centhris.com",
		);
	});

	it("reads the host of an external link only", () => {
		expect(externalHost("#contact")).toBeNull();
		expect(externalHost("https://www.example.com/path")).toBe("example.com");
		expect(externalHost("not a url")).toBeNull();
	});

	it("keeps every shipped project link resolvable", () => {
		for (const project of projects) {
			const target = linkTargetProps(project.link);
			if (project.link.startsWith("#")) {
				expect(target.target).toBeUndefined();
			} else {
				expect(target.target).toBe("_blank");
				expect(externalHost(project.link)).not.toBeNull();
			}
		}
	});
});
