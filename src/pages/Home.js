import React from 'react';
import Layout from './../components/Layout/Layout';
import Banner from '../images/banner.jpeg';
import '../styles/HomeStyles.css';
const Home = () => {
	return (
		<Layout>
			<div className="home">
				<div className="headerContainer">
					<h1>Kishan Sweets</h1>
					<p>Best Food In India</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
