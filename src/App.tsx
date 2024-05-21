import { AdvanceStatisicContainer } from "./components/AdvanceStatisicContainer/AdvanceStatisicContainer";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { CTA } from "./components/CTA/CTA";

import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";
import { ShorteningFormAndResultsContainer } from "./components/ShorteningFormAndResultsContainer/ShorteningFormAndResultsContainer";
export function App() {
	return (
		<>
			<AppContainer>
				<Navigation />
				<Hero />
				<ShorteningFormAndResultsContainer />
				<AdvanceStatisicContainer />
				<CTA />
				<AppFooter />
			</AppContainer>
		</>
	);
}
