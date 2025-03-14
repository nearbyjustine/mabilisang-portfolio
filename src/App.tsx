import { TriangleAlert } from "lucide-react";

function App() {
	return (
		<>
			<div className="w-screen select-none h-screen bg-slate-900 flex justify-center items-center">
				<div className="flex flex-col items-center gap-2 group">
					<TriangleAlert
						className="fill-amber-400 text-white group-hover:scale-120 transition-all ease-in-out"
						width={60}
						height={60}
					/>
					<h1 className="text-white text-2xl font-medium">
						This portfolio is still under construction.
					</h1>
				</div>
			</div>
		</>
	);
}

export default App;
