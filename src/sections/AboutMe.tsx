function AboutMe() {
	return (
		<section className="2xl:px-20 px-10 2xl:py-20 py-10" id="me">
			<div className="flex md:flex-row flex-col gap-6 md:gap-12">
				<img
					className="w-[500px] md:[1200px] rounded-full border-2 border-slate-500"
					src="me-sketch-circle.webp"
					alt="placeholder"
				/>
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="md:text-4xl text-2xl">More about me...</h1>
					<p className="mt-4 text-slate-700 md:text-base text-sm">
						I’m a full-stack developer who loves creating seamless,
						user-friendly digital experiences. From building web applications to
						optimizing workflows, I thrive on solving problems and making
						technology work smarter. With experience in automation and system
						development, I enjoy bringing ideas to life in ways that are both
						efficient and impactful.
					</p>
					<p className="mt-2 text-slate-700 md:text-base text-sm">
						Beyond tech, I’m a music director who finds joy in leading worship
						and mentoring musicians at our local church. Music, like
						development, is about harmony and connection—and I’m passionate
						about creating experiences that bring people together, whether
						through code or song.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
