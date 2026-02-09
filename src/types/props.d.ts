export type NavbarProps = {
	burgerClicked: boolean;
	setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
	inMobileView?: boolean;
};

export type CardProps = {
	id: number;
	job: string;
	date: string;
	details: string;
	logo: string;
	companyName: string;
	workSetup: string;
	companyWebsite: string;
};

export type ProjectProps = {
	id: number;
	imgSrc: string;
	imgAlt: string;
	link: string;
	title: string;
	description: string;
};
