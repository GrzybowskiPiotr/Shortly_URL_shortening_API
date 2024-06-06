import { useState } from "react";
import { ShortLinkCard } from "../ShortLinkCard/ShortLinkCard";
import { IsValidURL } from "../../util/IsValidURL";
import { LoadingModal } from "../LoadingModal/LoadingModal.tsx";
import { KEY } from "../../constans/constans.ts";
import { APIURL } from "../../constans/constans.ts";
import { ShortLink } from "../../types/types.ts";
export function ShorteningFormAndResultsContainer() {
	type FormEvent = React.ChangeEvent<HTMLFormElement>;

	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [shortLinks, setShortLinks] = useState<ShortLink[]>([]);

	function handleCopyClick(idx: number) {
		setShortLinks((prevShortLinks) =>
			prevShortLinks.map((link) => {
				if (idx === link.id) {
					return { ...link, isLinkCopied: true };
				} else {
					return { ...link, isLinkCopied: false };
				}
			})
		);
	}

	function getShrtLnk(longLink: string) {
		setIsLoading(true);
		fetch(APIURL, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
				"api-key": KEY,
			},
			body: JSON.stringify({ url: longLink }),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				setShortLinks((prevLinks) => [
					{
						longLink: res.url,
						shortLink: res.shrtlnk,
						isLinkCopied: false,
						id: prevLinks.length + 1,
					},
					...prevLinks,
				]);

				setIsLoading(false);
			})
			
	}

	function handleFormSubmit(e: FormEvent) {
		e.preventDefault();

		if (!IsValidURL(input)) {
			setInputError(true);
			setInput("");
		} else {
			setInputError(false);
			setInput("");
			getShrtLnk(input);
		}
	}

	return (
		<div className="ShortedSection">
			<form className="card" onSubmit={(e: FormEvent) => handleFormSubmit(e)}>
				{isLoading && <LoadingModal />}
				<label htmlFor="linkInput">
					<input
						type="text"
						id="linkInput"
						placeholder="Shorten a link here..."
						value={input}
						autoComplete="off"
						onChange={(e) => setInput(e.target.value)}
					/>
				</label>
				{inputError && <p>Please add a link</p>}
				<button className="button">Shorten It!</button>
			</form>
			{shortLinks.map((link, idx) => (
				<ShortLinkCard
					key={idx}
					id={link.id}
					longLink={link.longLink}
					shortLink={link.shortLink}
					isLinkCopied={link.isLinkCopied}
					onCopyClick={() => handleCopyClick(link.id)}
				/>
			))}
		</div>
	);
}
