function Hero() {
	return (
		<div className="w-full md:flex-row md:gap-0 gap-8 flex-col-reverse flex justify-between 2xl:px-20 2xl:pt-20 px-10 pt-10 items-center ">
			<div className="text-slate-900 md:space-y-8 space-y-4 md:w-1/2 ">
				<div className="md:space-y-2">
					<h1 className="xl:text-6xl md:text-4xl text-2xl">
						Justine Castañeda
					</h1>
					<h2 className="xl:text-6xl md:text-4xl text-2xl font-semibold">
						Full-Stack Developer
					</h2>
				</div>
				<p className="text-gray-500 md:text-base text-sm">
					Hi, I&apos;m Justine Castañeda—a problem-solver, creative thinker, and
					full-stack developer. I love turning complex ideas into seamless,
					functional apps, from front-end experiences to back-end architecture.
					Whether building AI-powered apps, optimizing code, or configuring
					NGINX, I thrive on challenges. If you need clean code, smart
					solutions, and a bit of humor, let&apos;s build something great
					together! 🚀
				</p>
			</div>
			<div className="2xl:w-4/12 md:w-1/2 max-w-[1500px]">
				<img
					className="2xl:w-[1500px] w-full"
					src="kid.svg"
					alt="Child thinking, creative"
				/>
			</div>
		</div>
	);
}

export default Hero;
