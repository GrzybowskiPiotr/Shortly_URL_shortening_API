interface PropType {
	icon: string;
	heading: string;
	desc: string;
}

export function CardWithIcon({ icon, heading, desc}: PropType) {
	return (
		<div className="cardWithIcon">
			<div className="iconContainer">
				<img src={icon} alt={`${heading} image`} />
			</div>
			<h2>{heading}</h2>
			<p>{desc}</p>
		</div>
	);
}
