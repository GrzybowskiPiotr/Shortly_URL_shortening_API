import { PropsWithChildren, ReactNode } from "react";

type AppContainer = { children: ReactNode };

export function AppContainer({ children }: PropsWithChildren<AppContainer>) {
	return <div className="appContainer">{children}</div>;
}
