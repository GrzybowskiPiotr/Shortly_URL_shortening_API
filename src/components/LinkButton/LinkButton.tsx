type PropsType = {
	href: string;
	children: string;
};

export function LinkButton({ href, children }: PropsType) {
	return (
		<a className="button button_link"href={href}>
			{children}
		</a>
	);
}
