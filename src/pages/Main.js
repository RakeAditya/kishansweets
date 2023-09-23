import React from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/Main.css';
import { EmblaCarousel } from '../components/Layout/Banner';
import MainAbout from '../components/Layout/MainAbout';
const Main = () => {
	return (
		<Layout>
			<div className="main">
				<EmblaCarousel />
			</div>
			<MainAbout />
		</Layout>
	);
};

export default Main;
