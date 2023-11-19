import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import photu from '../images/founder.jpg';
const About = () => {
	return (
		<Layout>
			<Box
				sx={{
					background: 'linear-gradient(-45deg, #e73c7e, #23d5ab)',
					textAlign: 'center',
					color: 'white',
					minHeight: '90vh',
					padding: '3rem 0',
					'& h4': {
						fontWeight: 'bold',
						marginTop: 2,
						marginBottom: 5,
						fontSize: '2.8rem',
					},
					'& p': {
						textAlign: 'left',
						fontSize: '1.6rem',
						maxWidth: '80%',
						margin: '0 auto ',
					},
					'@media (max-width:800px)': {
						'& h4 ': {
							fontSize: '1.5rem',
						},
						'& p': {
							fontSize: '1rem',
						},
					},
					'@media (max-width:1000px)': {
						'& h4 ': {
							fontSize: '2rem',
						},
						'& p': {
							fontSize: '1.4rem',
						},
					},
				}}
			>
				<Typography variant="h4">About us </Typography>
				<Box
					display={'flex'}
					mx={'1rem'}
					sx={{
						'@media (max-width: 1000px)': {
							border: '1ps solid red',
							flexDirection: 'column',
							gap: '2',
						},
					}}
				>
					<Box flex={1} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
						<Box
							border={'1rem solid black'}
							mb={'2rem'}
							sx={{
								height: '300px',
								borderRadius: '15px',
								boxShadow: '0 0 10px  black',
								width: 'min(100%,400px)',
							}}
						>
							<img src={photu} height={'100%'} width={'100%'} style={{ objectFit: 'cover' }} alt="" />
						</Box>
						<Box>
							<Typography variant="h4" color={'black'}>
								Late Jagdish Prasad (Founder)
							</Typography>
						</Box>
					</Box>
					<Box
						flex={2}
						sx={{
							'@media (max-width: 1000px)': {
								marginTop: '3rem',
							},
						}}
					>
						<p>
							Kishan Sweets. was started by the initiative of Late Jagdish Prasad, founder and hotelier. We started our journey from Basti 1960 and
							now we have grown our presence to various branches of restaurants across Basti. Location was the key in making our decisions and they
							definitely paid off. Each location is a landmark destination in itself, thereby providing the much-needed impetus in terms of customer
							visibility.
						</p>
						<br />
						<p>
							Kishan Sweets is based on a very simple mantra; “Most delicious Indian recipes that reflect the real taste and soul of Indian Food which
							is served in a cheerful restaurant where food lovers can relax and eat with their fingers if they wish.” At Kishan Sweets we experiment
							with the finest Indian spices and ingredients along with diverse cooking techniques to recreate traditional recipes, providing each
							diner with an aromatic. visual and flavorful dining experience.
						</p>
						<br />
						<p>
							Our menu spans the breadth and depth of India, delivering the most delicious recipes that reflect the real taste and soul of Indian
							food. Our signature dishes like Bati Chokha, Chaat Tikki, Dahi Bara, Idle and Dosa from our sharing plates and combos to the grills.
						</p>
						<br />
						<p>Our curries are light and flavourful dishes like Ras-Bhari Kofta Curry, Kishan Sweets Special Dal Makhani.</p>
						<br />
						<p>
							Our desserts are unique and innovative; rather than having the regular milk-based Indian desserts, we have created memorable desserts
							like Gajar ka Halwa, Ras Malai, Baklawa, Hiramani, Kaju Barfi and Pista Roll.
						</p>
						<br />
						<p>
							We believe it’s not one man responsible for the success of the restaurant, it’s the whole team. We are a people company and the three
							most important core values we follow at Kishan Sweets are Our People, Our Product, and Our Guest.
						</p>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default About;
