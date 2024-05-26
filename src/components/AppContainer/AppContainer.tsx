import { PropsWithChildren } from "react";

type AppContainer = {
	name: "AppContainer";
};

export function AppContainer({ children }: PropsWithChildren<AppContainer>) {
	return <div className="appContainer">{children}</div>;
}
