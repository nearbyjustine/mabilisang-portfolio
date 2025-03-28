import { cn } from "@/lib/utils";

function Footer() {
	return (
		<section
			className={cn(
				"flex justify-between 2xl:px-20 px-10 py-4 items-center bg-slate-950 text-white",
			)}
		>
			<div>
				<a href="/">
					<img src="hows-tine-logo-white.svg" alt="hows.tine logo" width={40} />
				</a>
			</div>
			<div>2025 © Justine Castaneda</div>
		</section>
	);
}

export default Footer;
