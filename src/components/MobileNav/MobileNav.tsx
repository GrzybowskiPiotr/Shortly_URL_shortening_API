import { LinkButton } from "../LinkButton/LinkButton";
import { link } from "../../types/types";
export function MobileNav({ NavLinks }: { NavLinks?: link[] }) {
	return (
		<nav className="MobileNav">
			<ul>
				{NavLinks?.map((link: link) => (
					<li key={link.title}>
						<a href={link.url}>{link.title}</a>
					</li>
				))}
				<li>
					<hr />
				</li>
				<li>
					<a href="">Login</a>
				</li>
				<li>
					<LinkButton href="#">{"Sing Up"}</LinkButton>
				</li>
			</ul>
		</nav>
	);
}
