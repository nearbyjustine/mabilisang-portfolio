import { useEffect, useState } from "react";

const SizeWidget = () => {
	const [dimensions, setDimensions] = useState([
		window.innerWidth,
		window.innerHeight,
	]);
	useEffect(() => {
		addEventListener("resize", () => {
			setDimensions([window.innerWidth, window.innerHeight]);
		});
	}, []);
	return (
		<div className="absolute top-0 right-0 text-slate-800 bg-white p-4 m-4 rounded-2xl">{`${dimensions[0]} x ${dimensions[1]}`}</div>
	);
};

export default SizeWidget;
