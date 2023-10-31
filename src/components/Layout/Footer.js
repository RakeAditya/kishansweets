import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { PinDropTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
							Footer
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
							lasdasd asdasda sd asd as dasd as dasd asd asd asd asd as das dasdas asdasdas dasdasda sasd asdasfds sdfhba sjkdbh
						</Typography>
					</Box>
					{/* middle box */}
					<Box flex={1} display="flex" flexDirection="column" alignItems={'flex-start'}>
						<Typography variant="h5" alignSelf="center" color="white" fontWeight={800} marginBottom={'1rem'}>
							Quick Links
						</Typography>
						<ul style={{ margin: '0 auto 1rem', listStyle: 'none', textTransform: 'capitalize' }}>
							<li style={{ margin: ' 1rem 0' }}>
								<Link to="/" className="styleLink" style={{ textDecoration: 'none' }}>
									Terms and Conditions
								</Link>
							</li>
							<li style={{ margin: ' 1rem 0' }}>
								<Link to="/" className="styleLink" style={{ textDecoration: 'none' }}>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</Box>
					{/* third box */}
					<Box flex={1} gap="1" display="flex" flexDirection="column" alignItems="flex-start">
						<Typography variant="h5" fontWeight={800} alignSelf="center" color="white">
							Contact Info
						</Typography>
						<ul style={{ listStyle: 'none', textTransform: 'capitalize', margin: '0 2rem 1rem ' }}>
							<li style={{ margin: ' 1rem 0', color: 'white' }}>
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
								Address
							</li>
							<li style={{ margin: ' 1rem 0', color: 'white' }}>
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
								Mobile No.
							</li>
							<li style={{ margin: ' 1rem 0', color: 'white' }}>
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
								Email Address.
							</li>
						</ul>
					</Box>
				</Box>
				{/* 4th box */}
				<Box display="flex" marginTop="1rem" justifyContent="space-between" alignItems={'center'} gap={1}>
					<Typography
						variant="h5"
						color="white"
						sx={{
							'@media (max-width:1000px)': {
								fontSize: '18px',
							},
						}}
					>
						All right reserved © kishansweets
					</Typography>
					<Typography
						variant="h6"
						color="white"
						sx={{
							'@media (max-width:1000px)': {
								fontSize: '14px',
							},
						}}
					>
						Poweed By : Infosoft Networks
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
