import { ShortLink } from "../../types/types.ts";

interface Props extends ShortLink {
	onCopyClick: () => void;
}

export function ShortLinkCard({
	longLink,
	shortLink,
	isLinkCopied,
	onCopyClick,
}: Props) {
	async function handleCopyButtonClick() {
		try {
			await navigator.clipboard.writeText(shortLink);
			onCopyClick();
		} catch (err) {
			console.error(`Unable to copy to clipboard. ${err}`);
			alert("Copy to clipboard faild.");
		}
	}

	return (
		<div className="linkCard card">
			<h3>{longLink}</h3>
			<hr />
			<div className="shortLinkContainer">
				<p>{shortLink}</p>
				<button
					className={`button wide_btn ${isLinkCopied ? "copied_btn" : ""}`}
					onClick={handleCopyButtonClick}>
					{isLinkCopied ? "Copied" : "Copy"}
				</button>
			</div>
		</div>
	);
}
