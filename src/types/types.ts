export interface Link {
	href: string;
	title: string;
}
export interface ShortLink {
	id: number;
	longLink: string;
	shortLink: string;
	isLinkCopied: boolean;
	onCopyClick?: () => void;
}
export type link = { url: string; title: string };