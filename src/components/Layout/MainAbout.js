import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import chef1 from '../../images/chef2.jpg';
const MainAbout = () => {
	return (
		<Box padding="4rem 0" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Typography variant="h4" sx={{ fontFamily: 'fantasy', letterSpacing: '1.4px' }}>
				<span className="char">A</span>bout Us
			</Typography>
			<Typography variant="h3" sx={{ letterSpacing: '1px', fontWeight: '600', textAlign: 'center' }}>
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
					<Typography variant="h4" className="font-dance " margin="2rem 0" textAlign="left" width="80%">
						<span className="char">W</span>ord from our Chef
					</Typography>
					<Typography variant="p" textAlign="left" margin="0 3.5rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas
						commodo ante et odio varius, at placerat mi tristique. Etiam et neque et magna finibus vestibulum. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas commodo ante et odio varius, at placerat
						mi tristique. Etiam et neque et magna finibus vestibulum.
					</Typography>
					<Typography variant="h4" textAlign="left" alignSelf="flex-start" margin="4rem 0 1rem 3.5rem">
						Name ABC
					</Typography>
					<Box
						width="80%"
						display={'flex'}
						alignItems={'center'}
						justifyContent={'space-between'}
						gap={2}
						marginBottom={5}
						sx={{
							'@media (max-width:500px)': {
								flexDirection: 'column',
								alignItems: 'flex-start',
							},
						}}
					>
						<Typography variant="h5">
							Chef <sapn className="char">&</sapn> Founder
						</Typography>
						<Button
							sx={{
								padding: '0.5rem',
								border: '1px solid black',
								color: 'black',
								fontWeight: '700',
								boxShadow: ' 0 0 10px rgba(0,0,0,0.4)',
								'&:hover': { backgroundColor: 'goldenrod' },
								transition: '0.2s ease-in',
							}}
						>
							Show more
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainAbout;
