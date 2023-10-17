import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import chef1 from '../../images/chef2.jpg';
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
					border="1px solid black"
					height="600px"
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
					<img src={chef1} alt="chef" width="100%" height="100%" style={{ objectFit: 'cover' }} />
				</Box>
				{/* right box */}
				<Box
					margin=""
					width="50%"
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
					<Typography variant="h4" color="white" className="font-dance " margin="2rem 0" textAlign="left" width="80%">
						<span className="char">W</span>ord from our Chef
					</Typography>
					<Typography variant="p" textAlign="left" color="white" margin="0 3.5rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas
						commodo ante et odio varius, at placerat mi tristique. Etiam et neque et magna finibus vestibulum. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas commodo ante et odio varius, at placerat
						mi tristique. Etiam et neque et magna finibus vestibulum.
					</Typography>

					<Box
						// border="1px solid red"
						width="80%"
						gap={2}
						// marginBottom={5}
						marginTop={5}
						sx={{
							'@media (max-width:500px)': {
								marginLeft: '1rem',
							},
						}}
					>
						<Typography variant="h4" textAlign="left" color="white" alignSelf="flex-start">
							Name ABC
						</Typography>
						<Box
							gap={2}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'space-between'}
							marginTop={2}
							sx={{
								'@media (max-width:400px)': {
									flexDirection: 'column',
									alignItems: 'flex-start',
									// marginLeft: '1rem',
								},
							}}
						>
							<Typography variant="h5" color="white">
								Chef <span className="char">&</span> Founder
							</Typography>
							<Button
								sx={{
									padding: '0.5rem 1rem',
									border: '1px solid black',
									color: 'white',
									fontWeight: '700',
									boxShadow: ' 0 0 10px rgba(0,0,0,0.4)',
									'&:hover': { backgroundColor: 'black' },
									transition: '0.2s ease-in',
								}}
							>
								Show more
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainAbout;
