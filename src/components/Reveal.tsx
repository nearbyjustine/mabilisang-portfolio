import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

/**
 * Reveals its children as they scroll into view.
 *
 * Deliberately hook-free: the observer is attached from the ref callback, which
 * runs before paint, so content is never hidden unless we can also reveal it.
 * Without IntersectionObserver the content simply starts visible.
 */
function attachObserver(node: HTMLDivElement | null) {
	if (!node) return;
	if (typeof IntersectionObserver === "undefined") {
		node.dataset.revealed = "true";
		return;
	}
	node.dataset.revealed = "false";
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.dataset.revealed = "true";
				observer.disconnect();
			}
		},
		{ rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
	);
	observer.observe(node);
	return () => observer.disconnect();
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
	return (
		<div
			ref={attachObserver}
			data-revealed="false"
			className={cn("reveal", className)}
			style={{ animationDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}
