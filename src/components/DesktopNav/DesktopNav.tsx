import { LinkButton } from "../LinkButton/LinkButton";
import { link } from "../../types/types";
export function DesktopNav({ NavLinks }: { NavLinks: link[] }) {
	return (
		<nav>
			<ul className="navLinks">
				{NavLinks.map((link: link) => (
					<li key={link.title}>
						<a href={link.url}>{link.title}</a>
					</li>
				))}
			</ul>
			<ul className="loginContainer">
				<li>
					<a href="#">Login</a>
				</li>
				<li>
					<LinkButton href="#">Sing Up</LinkButton>
				</li>
			</ul>
		</nav>
	);
}
