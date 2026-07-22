import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

export default function Reveal({ children, delay = 0, className }: RevealProps) {
	return <div className={cn("reveal", className)} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}
