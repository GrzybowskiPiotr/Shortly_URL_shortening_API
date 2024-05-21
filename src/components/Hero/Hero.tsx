import { LinkButton } from "../LinkButton/LinkButton";
import { Section } from "../Section/Section";
import HERO from "/images/illustration-working.svg";
export function Hero() {
	return (
		<div className={"hero"}>
			<img src={HERO} className={"hero"} alt="ilustration working" />
			<Section
				mainHeading={"More than just shorter links"}
				desc={
					"Build your brand’s recognition and get detailed insights on how your links are performing."
				}
				button={<LinkButton>{"Get Started"}</LinkButton>}></Section>
		</div>
	);
}
