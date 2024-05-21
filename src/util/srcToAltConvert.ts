export function srcToAltConvert(src: string) {
	return `Shortly ${src.slice(src.indexOf("-") + 1, src.indexOf("."))}`;
}
