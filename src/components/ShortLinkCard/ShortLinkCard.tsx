interface PropsType {
	longLink: string;
	shortLink: string;
	
}

export function ShortLinkCard({ longLink, shortLink }: PropsType) {
	return (
		<div className="linkCard card">
			<h3>{longLink}</h3>
			<hr />
			<p>{shortLink}</p>
			<button className="button wide_btn">Copy</button>
		</div>
	);
}
