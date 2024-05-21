import { ReactElement } from "react";

interface PropsType {
	mainHeading?: string;
	heading?: string;
	desc: string;
	button?: ReactElement;
}
export function Section({ mainHeading, heading, desc, button }: PropsType) {
	return (
		<section>
			{mainHeading && <h1>{mainHeading}</h1>}
			{heading && <h2>{heading}</h2>}
			<p>{desc}</p>
			{button}
		</section>
	);
}
