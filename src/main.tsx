import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/sonner";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider attribute="class" defaultTheme="hybrid" themes={["light", "dark", "hybrid"]} enableSystem={false}>
			<Toaster />
			<App />
		</ThemeProvider>
	</StrictMode>,
);
