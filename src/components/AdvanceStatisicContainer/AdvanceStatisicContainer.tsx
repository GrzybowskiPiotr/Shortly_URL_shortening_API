import { CardWithIcon } from "../CardWithIcon/CardWithIcon";
import { Section } from "../Section/Section";

interface Stat {
	icon: string;
	heading: string;
	desc: string;
}

export function AdvanceStatisicContainer() {
	const Statistic: Stat[] = [
		{
			icon: "/icons/icon-brand-recognition.svg",
			heading: "Brand Recognition",
			desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
		},
		{
			icon: "/icons/icon-detailed-records.svg",
			heading: "Detailed Records",
			desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
		},
		{
			icon: "/icons/icon-fully-customizable.svg",
			heading: "Fully Customizable",
			desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
		},
	];

	return (
		<div className="AdvanceStatisicContainer">
			<Section
				heading="Advanced Statistics"
				desc="Track how your links are performing across the web with our advanced statistics dashboard."
			/>
			<div className="statistics">
				{Statistic.map((stat, idx) => (
					<CardWithIcon
						icon={stat.icon}
						heading={stat.heading}
						desc={stat.desc}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}
