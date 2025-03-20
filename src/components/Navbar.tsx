function Navbar() {
	return (
		<div className="flex bg-amber-200 justify-between px-8 py-4">
			<div>Logo</div>
			<div className="flex gap-8">
				<div>About Me</div>
				<div>Projects</div>
				<div>Skills</div>
				<div>Contact Me</div>
			</div>
			<div>Resume</div>
		</div>
	);
}

export default Navbar;
