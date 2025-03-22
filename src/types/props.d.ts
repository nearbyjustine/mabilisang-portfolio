export type NavbarProps = {
	burgerClicked: boolean;
	setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
	inMobileView?: boolean;
};

export type CardProps = {
	id: string;
	job: string;
	date: string;
	details: string;
	logo: string;
	companyName: string;
	workSetup: string;
	companyWebsite: string;
};
