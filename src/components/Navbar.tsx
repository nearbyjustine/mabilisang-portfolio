import DownloadButton from "./DownloadButton";
import { Button } from "./ui/button";

function Navbar() {
	return (
		<div className="flex justify-between px-8 py-4">
			<div>Logo</div>
			<div className="flex gap-8">
				<a href="#">About Me</a>
				<a href="#">Projects</a>
				<a href="#">Skills</a>
				<a href="#">Contact Me</a>
			</div>
			<div>
				<Button>Hi</Button>
				<DownloadButton text="Resume" />
			</div>
		</div>
	);
}

export default Navbar;
