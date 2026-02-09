import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const cycleTheme = () => {
		if (theme === "hybrid") setTheme("light");
		else if (theme === "light") setTheme("dark");
		else setTheme("hybrid");
	};

	const getIcon = () => {
		if (theme === "light") return <Sun size={18} />;
		if (theme === "dark") return <Moon size={18} />;
		return <SunMoon size={18} />; // hybrid
	};

	return (
		<button
			onClick={cycleTheme}
			className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
			aria-label="Toggle Theme"
			type="button"
			title={`Current: ${theme}`}
		>
			{getIcon()}
		</button>
	);
}
