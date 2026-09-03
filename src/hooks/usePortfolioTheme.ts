import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "hybrid";

/** The tone a section was designed to have in the hybrid theme. */
export type SectionTone = "light" | "dark";

/**
 * Resolved class names for one section's surface. Components read these instead
 * of hand-rolling `isLight ? ... : ...` ternaries, so contrast stays consistent
 * across all three themes.
 */
export type Surface = {
	isLight: boolean;
	/** Section background. */
	bg: string;
	/** Primary text. */
	text: string;
	/** Secondary text — passes AA against `bg`. */
	muted: string;
	/** Tertiary text and metadata — passes AA against `bg`. */
	faint: string;
	/** Hairline border colour. */
	rule: string;
	/** Hairline as a background, for standalone dividers. */
	ruleBg: string;
	/** Inset panel sitting on top of `bg`. */
	panel: string;
	/** Teal that keeps contrast on this surface. */
	accent: string;
	/** Teal hover for interactive text on this surface. */
	accentHover: string;
};

interface ThemeConfig {
	theme: ThemeMode;
	// For "light sections" (Hero, Experiences, AboutMe)
	isLightSection: (sectionType: SectionTone) => boolean;
	// Get background class for a section
	getSectionBg: (hybridDefault: SectionTone) => string;
	getSectionText: (hybridDefault: SectionTone) => string;
	// Full surface palette for a section
	getSurface: (hybridDefault: SectionTone) => Surface;
}

const LIGHT_SURFACE: Omit<Surface, "isLight"> = {
	bg: "bg-zinc-50",
	text: "text-zinc-900",
	muted: "text-zinc-600",
	faint: "text-zinc-500",
	rule: "border-zinc-200",
	ruleBg: "bg-zinc-200",
	panel: "bg-white",
	accent: "text-teal-700",
	accentHover: "hover:text-teal-800",
};

const DARK_SURFACE: Omit<Surface, "isLight"> = {
	bg: "bg-zinc-950",
	text: "text-zinc-100",
	muted: "text-zinc-400",
	faint: "text-zinc-500",
	rule: "border-zinc-800",
	ruleBg: "bg-zinc-800",
	panel: "bg-zinc-900/50",
	accent: "text-teal-300",
	accentHover: "hover:text-teal-200",
};

export function usePortfolioTheme(): ThemeConfig {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const currentTheme = (mounted ? theme : "hybrid") as ThemeMode;

	const isLightSection = (sectionType: SectionTone): boolean => {
		if (currentTheme === "light") return true;
		if (currentTheme === "dark") return false;
		// hybrid: use the section's natural state
		return sectionType === "light";
	};

	const getSurface = (hybridDefault: SectionTone): Surface => {
		const isLight = isLightSection(hybridDefault);
		return { isLight, ...(isLight ? LIGHT_SURFACE : DARK_SURFACE) };
	};

	const getSectionBg = (hybridDefault: SectionTone): string =>
		getSurface(hybridDefault).bg;

	const getSectionText = (hybridDefault: SectionTone): string =>
		getSurface(hybridDefault).text;

	return {
		theme: currentTheme,
		isLightSection,
		getSectionBg,
		getSectionText,
		getSurface,
	};
}
