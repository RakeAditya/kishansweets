import React from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/Main.css';
import { EmblaCarousel } from '../components/Layout/Banner';
import MainAbout from '../components/Layout/MainAbout';
import OfferBox from '../components/Layout/OfferBox';
const Main = () => {
	const [offerState, setOfferState] = React.useState(true);

	return (
		<>
			{offerState && (
				<OfferBox
					pop={() => {
						setOfferState((pre) => !pre);
					}}
				/>
			)}
			<Layout>
				<div className="main">
					<EmblaCarousel />
				</div>
				<MainAbout />
			</Layout>
		</>
	);
};

export default Main;
