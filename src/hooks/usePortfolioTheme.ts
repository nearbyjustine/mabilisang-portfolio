import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "hybrid";

interface ThemeConfig {
	theme: ThemeMode;
	// For "light sections" (Hero, Experiences, AboutMe)
	isLightSection: (sectionType: "light" | "dark") => boolean;
	// Get background class for a section
	getSectionBg: (hybridDefault: "light" | "dark") => string;
	getSectionText: (hybridDefault: "light" | "dark") => string;
}

export function usePortfolioTheme(): ThemeConfig {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const currentTheme = (mounted ? theme : "hybrid") as ThemeMode;

	const isLightSection = (sectionType: "light" | "dark"): boolean => {
		if (currentTheme === "light") return true;
		if (currentTheme === "dark") return false;
		// hybrid: use the section's natural state
		return sectionType === "light";
	};

	const getSectionBg = (hybridDefault: "light" | "dark"): string => {
		if (currentTheme === "light") return "bg-zinc-50";
		if (currentTheme === "dark") return "bg-zinc-950";
		// hybrid: use the section's original design
		return hybridDefault === "light" ? "bg-zinc-50" : "bg-zinc-950";
	};

	const getSectionText = (hybridDefault: "light" | "dark"): string => {
		if (currentTheme === "light") return "text-zinc-900";
		if (currentTheme === "dark") return "text-zinc-200";
		return hybridDefault === "light" ? "text-zinc-900" : "text-zinc-200";
	};

	return {
		theme: currentTheme,
		isLightSection,
		getSectionBg,
		getSectionText,
	};
}
