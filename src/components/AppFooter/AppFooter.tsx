import { LinksList } from "../LinksList/LinksList";
import { Link } from "../../types/types";
import { Footer } from "../Footer/Footer";
import { srcToAltConvert } from "../../util/srcToAltConvert";

export function AppFooter() {
	const FeaturesLinks: Link[] = [
		{ href: "#", title: "Link Shortening" },
		{ href: "#", title: "Branded Links" },
		{ href: "#", title: "Analytics" },
	];

	const ResourcesLinks: Link[] = [
		{
			href: "#",
			title: "Blog",
		},
		{
			href: "#",
			title: "Developers",
		},
		{
			href: "#",
			title: "Support",
		},
	];

	const CompanyLinks: Link[] = [
		{
			href: "#",
			title: "About",
		},
		{
			href: "#",
			title: "Our Team",
		},
		{
			href: "#",
			title: "Careers",
		},
		{
			href: "#",
			title: "Contact",
		},
	];
	const IconsLinks = [
		{ icon: "/icons/icon-facebook.svg" },
		{ icon: "/icons/icon-twitter.svg" },
		{ icon: "/icons/icon-pinterest.svg" },
		{ icon: "/icons/icon-instagram.svg" },
	];

	return (
		<div className="appFooter">
			<h2>Shortly</h2>
			<LinksList title="Features" links={FeaturesLinks} />
			<LinksList title="Resources" links={ResourcesLinks} />
			<LinksList title="Company" links={CompanyLinks} />
			<div className="iconsContainer">
				<ul>
					{IconsLinks.map((iconLink, idx) => (
						<li key={idx}>
							<a>
								<img src={iconLink.icon} alt={srcToAltConvert(iconLink.icon)} />
							</a>
						</li>
					))}
				</ul>
			</div>
			<Footer />
		</div>
	);
}
