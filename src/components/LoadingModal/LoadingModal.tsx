import SPINER from "/icons/spinner-solid.svg";
export function LoadingModal() {
	return (
		<div className="loadingModal">
			<img src={SPINER} alt="" />
		</div>
	);
}
