import React from 'react';
import { Box, Typography } from '@mui/material';
import chef1 from '../../images/image1.jpg';
const MainAbout = () => {
	return (
		<Box
			padding="4rem 0"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			// border="1px solid red"
			sx={{ background: 'linear-gradient(-45deg, #e73c7e, #23d5ab)' }}
		>
			<Typography variant="h4" color="white" sx={{ fontFamily: 'fantasy', letterSpacing: '1.4px' }}>
				<span className="char">A</span>bout Us
			</Typography>
			<Typography variant="h3" color="white" sx={{ letterSpacing: '1px', fontWeight: '600', textAlign: 'center' }}>
				Tradition <span className="char">&</span> Passion
			</Typography>
			<Box
				display={'flex'}
				maxWidth="1100px"
				justifyContent="space-between"
				gap={4}
				padding="4rem 0"
				sx={{
					'@media (max-width:1000px)': {
						flexDirection: 'column',
					},
				}}
			>
				{/* left box */}
				<Box
					boxShadow={'0 0 15px 2px rgb(0,0,0)'}
					borderRadius={'10px'}
					height="550px"
					width="50%"
					sx={{
						'@media (max-width:1000px)': {
							width: '500px',
							margin: '0 auto',
						},
						'@media (max-width:500px)': {
							width: '100%',
						},
					}}
				>
					<img src={chef1} alt="chef" width="100%" height="100%" style={{ objectFit: 'cover', borderRadius: '10px' }} />
				</Box>
				{/* right box */}
				<Box
					margin=""
					width="50%"
					alignSelf={'center'}
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="flex-start"
					sx={{
						'@media (max-width:1000px)': {
							width: '500px',
							margin: '0 auto',
						},
						'@media (max-width:500px)': {
							width: '100%',
						},
					}}
				>
					<Typography
						variant="p"
						textAlign="left"
						color="white"
						fontSize={'1.4rem'}
						letterSpacing={'1px'}
						margin="0 3.5rem"
						lineHeight={'2rem'}
						sx={{ '@media (max-width:1000px)': { textAlign: 'center' } }}
					>
						The menu of this restaurant is recommended to Chinese and Indian cuisine lovers. Order good masala dosa. Kishan Sweets - Restaurant, Best
						sweets, Best Fast Food, Best Dinner, One of the Best Restaurants in Basti. Efficient staff. The spectacular service is something these
						restaurateurs care about. Here you will pay medium prices. The exotic atmosphere makes a positive impression on customers and it also has
						4 star rating on Google.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default MainAbout;
