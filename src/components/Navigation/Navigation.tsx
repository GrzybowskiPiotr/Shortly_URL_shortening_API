import LOGO from "/images/logo.svg";
import BURGERMENU from "/icons/icon-burger-menu.svg";
import { useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileNav } from "../MobileNav/MobileNav";
import { link } from "../../types/types";

export function Navigation() {
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
	const { width } = useWindowDimensions();

	const NavLinks: link[] = [
		{ url: "#", title: "Features" },
		{ url: "#", title: "Pricing" },
		{ url: "#", title: "Resources" },
	];

	function handleBurgerMenuClick() {
		setIsMenuActive((prevState: boolean) => !prevState);
	}
	return (
		<nav className="navigation">
			<img src={LOGO} alt="Shortly logo" />
			{width < 768 && (
				<img
					className="BurgerMenu"
					src={BURGERMENU}
					alt="burger menu"
					onClick={handleBurgerMenuClick}
				/>
			)}
			{width > 768 && <DesktopNav NavLinks={NavLinks}></DesktopNav>}
			{isMenuActive && <MobileNav NavLinks={NavLinks} />}
		</nav>
	);
}
