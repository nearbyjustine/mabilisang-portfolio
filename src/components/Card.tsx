import type { CardProps } from "@/types/props";

function Card({
	job,
	date,
	details,
	logo,
	companyName,
	workSetup,
	companyWebsite,
}: CardProps) {
	return (
		<article className="md:p-10 p-4 border-2 border-slate-800 rounded-lg flex flex-col gap-4 bg-slate-950 hover:bg-slate-800 focus:bg-slate-800 transition-colors">
			<div className="flex justify-between items-center">
				<div className="flex md:gap-8 gap-4 items-center ">
					<a
						target="_blank"
						rel="noreferrer"
						className="min-w-fit min-h-fit cursor-pointer"
						href={companyWebsite}
					>
						<img className="w-15 h-15" src={logo} alt={`${companyName} logo`} />
					</a>
					<div className="flex flex-col">
						<h2 className="text-md font-medium md:text-3xl">
							{job} at{" "}
							<a
								className="hover:underline cursor-pointer"
								href={companyWebsite}
								target="_blank"
								rel="noreferrer"
							>
								{companyName}
							</a>
						</h2>
						<p className="lg:block hidden text-gray-300">{workSetup}</p>
					</div>
				</div>
				<p className="lg:block hidden text-gray-300">{date}</p>
			</div>
			<div className="md:text-lg lg:hidden block text-sm text-gray-300">
				<p>{workSetup}</p>
				<p>{date}</p>
			</div>
			<p className="md:text-lg text-gray-300 text-sm">{details}</p>
		</article>
	);
}

export default Card;
