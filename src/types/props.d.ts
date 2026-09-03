export type NavbarProps = {
	burgerClicked: boolean;
	setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
	inMobileView?: boolean;
	/**
	 * The burger button that opens the mobile menu. Navbar owns the element;
	 * BurgerNavbar needs it to hand focus back when the menu closes.
	 */
	triggerRef?: React.RefObject<HTMLButtonElement | null>;
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

/**
 * Featured work is text-led: a case study is carried by its role, narrative,
 * outcome, and stack. There is deliberately no image field on this contract.
 */
export type ProjectProps = {
	id: number;
	title: string;
	role: string;
	description: string;
	outcome: string;
	stack: readonly string[];
	link: string;
};

export type PipelineStage = {
	name: string;
	detail: string;
};
