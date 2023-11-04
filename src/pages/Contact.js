import React from 'react';
import Layout from './../components/Layout/Layout';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { PinDropTwoTone } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

const Contact = () => {
	return (
		<Layout>
			<Box height="100%" minHeight="70vh" minWidth="350px" paddingTop={'1.5em'} sx={{ background: 'linear-gradient(-45deg, #e73c7e, #23d5ab)' }}>
				<Typography
					variant="h3"
					className="font-dance"
					fontWeight={'700'}
					color={'white'}
					textAlign={'center'}
					sx={{
						'@media (max-width:800px)': {
							marginTop: '1rem',
						},
					}}
				>
					Contact us via the following
				</Typography>
				<Box
					marginTop="2rem"
					width="100%"
					display={'flex'}
					justifyContent="space-evenly"
					alignItems="center"
					sx={{
						'@media (max-width:1000px)': {
							flexDirection: 'column',
							alignItems: 'normal',
						},
					}}
				>
					<Box>
						<Box
							boxShadow="0 0 15px black"
							borderRadius="15px"
							bgcolor={'rgba(255,255,255,0.6)'}
							padding={'4rem 1rem'}
							gap={1}
							sx={{
								display: 'flex',
								flexDirection: 'column',

								'@media (max-width:1000px)': {
									paddingLeft: '10em',
									borderRadius: '0px',
								},

								'@media (max-width:600px)': {
									paddingLeft: '0rem',
								},
							}}
						>
							<Typography variant="h5" fontWeight={800} letterSpacing="1.1px" color="black">
								Contact Info
							</Typography>
							<Box marginTop="1rem" display={'flex'} justifyContent="flex-start" gap={2} alignItems="flex-start">
								<IconButton>
									<CallIcon
										color="white"
										sx={{
											border: '2px solid black',
											padding: '0.7rem',
											width: '50px',
											height: '50px',
											backgroundColor: 'rgba(255,255,255,0.6)',
											color: 'black',
										}}
									/>
								</IconButton>
								<Box>
									<Typography variant="h6" fontWeight={800} letterSpacing={'0.6px'} fontFamily={'monospace'} color="rgba(255,0,0,0.7)">
										Contact Number
									</Typography>
									<Typography variant="h6" fontWeight={'500'} letterSpacing={'1x'} fontFamily={'monospace'} color="black">
										09936352424
									</Typography>
								</Box>
							</Box>
							<Box display={'flex'} justifyContent="flex-start" gap={2} alignItems="flex-start">
								<IconButton>
									<MailIcon
										color="white"
										sx={{
											border: '2px solid black',
											padding: '0.7rem',
											width: '50px',
											height: '50px',
											backgroundColor: 'rgba(255,255,255,0.6)',
											color: 'black',
										}}
									/>
								</IconButton>
								<Box>
									<Typography variant="h6" fontWeight={800} letterSpacing={'0.6px'} fontFamily={'monospace'} color={'rgba(255,0,0,0.7)'}>
										Administrative E-mail ID
									</Typography>
									<Typography variant="h6" fontWeight={'500'} letterSpacing={'1x'} fontFamily={'monospace'} color="black">
										kishansweetsbasti@gmail.Com
									</Typography>

									<Typography variant="h6" fontWeight={'800'} letterSpacing={'0.6px'} fontFamily={'monospace'} color={'rgba(255,0,0,0.7)'}>
										Corporate E-mail ID
									</Typography>
									<Typography variant="h6" fontWeight={'500'} letterSpacing={'1x'} fontFamily={'monospace'} color="black">
										contact@kishansweets.com
									</Typography>
								</Box>
							</Box>
							<Box display={'flex'} justifyContent="flex-start" gap={1} alignItems="flex-start">
								<IconButton>
									<PinDropTwoTone
										color="white"
										sx={{
											border: '2px solid black',
											padding: '0.7rem',
											width: '50px',
											height: '50px',
											backgroundColor: 'rgba(255,255,255,0.6)',
											color: 'black',
										}}
									/>
								</IconButton>
								<Box>
									<Typography variant="h6" fontWeight={800} letterSpacing={'0.6px'} fontFamily={'monospace'} color={'rgba(255,0,0,0.7)'}>
										Location
									</Typography>
									<Typography variant="h6" fontWeight={'500'} letterSpacing={'1x'} fontFamily={'monospace'} color="black">
										Kishan Sweets, Near District Hospital, Chiyabari Road, Basti
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box
						boxShadow="0 0 20px black"
						borderRadius="15px"
						padding="0"
						height="465px"
						width="50%"
						sx={{
							'@media (max-width:1000px)': {
								width: '100%',
								borderRadius: '0px',
								marginTop: '1rem',
							},
						}}
						// border={'2px solid red'}
					>
						<iframe
							style={{ borderRadius: '15px' }}
							title="map"
							width="100%"
							height="100%"
							src="https://maps.google.com/maps?q=Kishan%20Sweets,%20Near%20District%20Hospital,%20Chiyabari%20Road,%20Basti&t=&z=13&ie=UTF8&iwloc=&output=embed"
						>
							<a href="https://www.maps.ie/population/">Population calculator map</a>
						</iframe>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
};
export default Contact;
