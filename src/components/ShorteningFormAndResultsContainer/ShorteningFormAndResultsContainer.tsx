import { useState } from "react";
import { ShortLinkCard } from "../ShortLinkCard/ShortLinkCard";

export function ShorteningFormAndResultsContainer() {
	interface ShortLink {
		longlink: string;
		shortLink: string;
	}

	const [shortLinks, setShortLinks] = useState<ShortLink[]>([
		{
			longlink: "https://www.frontendmentor.io",
			shortLink: "https://rel.ink/k4lKyk",
		},
		{
			longlink: "https://www.frontendmentor.io",
			shortLink: "https://rel.ink/k4lKyk",
		},
		{
			longlink: "https://www.frontendmentor.io",
			shortLink: "https://rel.ink/k4lKyk",
		},
	]);

	return (
		<div className="ShortedSection">
			<form className="card">
				<label htmlFor="linkInput">
					<input
						type="text"
						id="linkInput"
						placeholder="Shorten a link here..."
					/>
				</label>
				<button className="button">Shorten It!</button>
			</form>
			{shortLinks.map((link, idx) => (
				<ShortLinkCard
                    key={idx}
					longLink={link.longlink}
					shortLink={link.shortLink}
				/>
			))}
			
		</div>
	);
}
