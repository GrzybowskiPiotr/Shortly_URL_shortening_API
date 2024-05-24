import { useState } from "react";
import { ShortLinkCard } from "../ShortLinkCard/ShortLinkCard";
import { IsValidURL } from "../../util/IsValidURL";

export function ShorteningFormAndResultsContainer() {
	interface ShortLink {
		longlink: string;
		shortLink: string;
	}

	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState(false);

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

	function handleFormSubmit(e) {
		e.preventDefault();
		if (!IsValidURL(input)) {
			setInputError(true);
			setInput("");
		} else {
			setInputError(false);
			setInput("");
			console.log(IsValidURL(input));
		}
	}

	return (
		<div className="ShortedSection">
			<form className="card" onSubmit={(e) => handleFormSubmit(e)}>
				<label htmlFor="linkInput">
					<input
						type="text"
						id="linkInput"
						placeholder="Shorten a link here..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</label>
				<button className="button">Shorten It!</button>
				{inputError && <p>Please add a link</p>}
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
