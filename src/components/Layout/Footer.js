import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { PinDropTwoTone } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

const Footer = () => {
	return (
		<>
			<Box width={'100%'} padding="2rem" bgcolor="black" minWidth={'350px'}>
				<Box
					gap={1}
					display="flex"
					alignItems="flex-start"
					sx={{
						'@media (max-width:1000px)': {
							flexDirection: 'column',
							alignItems: 'center',
							gap: 3,
						},
					}}
				>
					{/* left box */}
					<Box flex={1} gap={1} display="flex" justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
						<Typography
							color="white"
							variant="h5"
							fontWeight="600"
							alignSelf={'flex-start'}
							sx={{
								'@media (max-width:1000px)': {
									alignSelf: 'center',
								},
							}}
						>
							<span className="char">W</span>ord from our Chef
						</Typography>
						<Typography
							marginTop="1rem"
							color="white"
							variant="h6"
							// border="1px solid red"
							sx={{
								'@media (max-width:1000px)': {
									marginX: '1rem',
									textAlign: 'center',
								},
							}}
							fontWeight={500}
						>
							When you run a kitchen, no matter how crazy and chaotic it gets, you have to be the calm one. You cannot show any sign of fear - the
							guests pick up on it. The beauty of this kitchen, though, is that everybody helps everybody.
						</Typography>
					</Box>
					{/* middle box */}
					<Box flex={1} display="flex" flexDirection="column" alignItems={'flex-start'}>
						<Typography variant="h5" alignSelf="center" color="white" fontWeight={800} marginBottom={'1rem'}>
							Quick Links
						</Typography>
						<ul style={{ margin: '0 auto 1rem', listStyle: 'none', textTransform: 'capitalize' }}>
							<li style={{ margin: ' 1rem 0' }}>
								<a href="https://kishansweets.com/privacy.aspx" className="styleLink" style={{ textDecoration: 'none', fontSize: '1.3rem' }}>
									Privacy Policy
								</a>
							</li>
						</ul>
					</Box>
					{/* third box */}
					<Box flex={1} gap="1" display="flex" flexDirection="column" alignItems="flex-start">
						<Typography variant="h5" fontWeight={800} alignSelf="center" color="white">
							Contact Info
						</Typography>
						<ul style={{ listStyle: 'none', textTransform: 'capitalize', margin: '0 2rem 1rem ' }}>
							<li style={{ margin: ' 1rem 0', color: 'white', display: 'flex' }}>
								<IconButton
									sx={{
										padding: '0.5rem',
										width: '30px',
										height: '30px',
										marginX: '1rem',
										backgroundColor: 'black',
										color: 'white',
										'& :hover': {
											color: 'gold',
										},
									}}
								>
									<PinDropTwoTone />
								</IconButton>
								<Typography>Kishan Sweets, Near District Hospital, Chiyabari Road, Basti</Typography>
							</li>
							<li style={{ margin: ' 1rem 0', color: 'white', display: 'flex' }}>
								<IconButton
									sx={{
										padding: '0.5rem',
										width: '30px',
										height: '30px',
										marginX: '1rem',
										backgroundColor: 'black',
										color: 'white',
										'& :hover': {
											color: 'gold',
										},
									}}
								>
									<CallIcon />
								</IconButton>
								<Typography>Mobile NO - 09936352424</Typography>
							</li>

							<li style={{ margin: ' 1rem 0', color: 'white', display: 'flex' }}>
								<IconButton
									sx={{
										padding: '0.5rem',
										width: '30px',
										height: '30px',
										marginX: '1rem',
										backgroundColor: 'black',
										color: 'white',
										'& :hover': {
											color: 'gold',
										},
									}}
								>
									<MailIcon />
								</IconButton>
								<Typography>kishansweetsbasti@gmail.com</Typography>
							</li>
						</ul>
					</Box>
				</Box>
				{/* 4th box */}
				<Box display="flex" marginTop="1rem" justifyContent="space-between" alignItems={'center'} gap={1}>
					<Typography
						variant="body1"
						color="white"
						sx={{
							'@media (max-width:1000px)': {
								fontSize: '14px',
							},
						}}
					>
						All right reserved © kishansweets
					</Typography>
					<Typography
						variant="body1"
						color="white"
						sx={{
							'@media (max-width:1000px)': {
								fontSize: '14px',
							},
						}}
					>
						Powered By : Infosoft Networks
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
