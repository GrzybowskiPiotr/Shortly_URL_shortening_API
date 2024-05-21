import { Link } from "../../types/types";

type PropType = {
	title: string;
	links: Link[];
};

export function LinksList({ title, links }: PropType) {
	return (
		<div className="listLink">
			<h3>{title}</h3>
			<ul>
				{links.map((link, idx) => (
					<li key={idx}>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
