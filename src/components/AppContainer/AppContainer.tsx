import { PropsWithChildren } from "react";

type AppContainer = {
	name: "";
};

export function AppContainer({ children }: PropsWithChildren<AppContainer>) {
	return <div className="appContainer">{children}</div>;
}
