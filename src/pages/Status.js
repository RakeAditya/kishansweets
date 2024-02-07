import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, TextField, InputLabel, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StatusCard from '../components/Layout/StatusCard';
import { toast } from 'react-toastify';
const boxStyle = {
	border: '0',
	borderBottom: '1px solid black',
	padding: '5px 10%',
	fontWeight: '600',
	outline: 'none',
	fontSize: '1rem',
	background: 'transparent',
	flex: '1',
};

const Status = () => {
	const navigate = useNavigate();
	const [appno, setAppno] = React.useState('');
	const [otp, setOtp] = React.useState(0);
	const [popOtp, setPopOtp] = React.useState(false);
	const [cardData, setCardData] = React.useState({});
	const [appSts, setAppSts] = React.useState(false);
	// to save final cards data
	const [appData, setAppData] = React.useState({
		mob: '',
	});
	// handle appno submit
	const handleSubmit = async () => {
		try {
			const formData = new FormData();
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			formData.append('appno', appno);
			const resp = await axios.post('https://kishansweets.com/apiweb/apps_genotp.aspx', formData);

			setAppData({ mob: resp.data.mobno });
			setPopOtp(true);
		} catch (error) {
			if (error) console.log(error);
		}
	};
	// handle otp verification
	const handleOtp = async () => {
		try {
			console.log(appData);
			const formData = new FormData();
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			formData.append('appno', appno);
			formData.append('otp', otp);
			formData.append('mob', appData.mob);
			const resp = await axios.post('https://kishansweets.com/apiweb/verifyotp.aspx', formData);
			console.log(resp.data);
			if (resp.data.votp === 'Application Submitted Successfully') {
				const data = await axios.post('https://kishansweets.com/apiweb/app_sts.aspx', formData);
				console.log(data.data.appsts[0]);
				setCardData(data.data.appsts[0]);
				setAppSts(true);
			} else {
				toast.error('Invalid Otp ,Please ref');
			}
		} catch (error) {
			if (error) throw error;
		}
	};
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
				<Typography variant="h4">Check your Application Status here </Typography>
				{/* form box */}
				<Box
					width={'min(800px,100%)'}
					mx={'auto'}
					borderRadius={'25px'}
					padding=" 2rem"
					boxShadow="0 0 20px rgba(0,0,0,0.8)"
					bgcolor="rgba(255,255,255,0.6)"
					sx={{
						'@media (max-width : 400px)': {
							padding: '2rem 0.5rem',
						},
					}}
				>
					<Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'column'} flexWrap={'wrap'} gap={3}>
						<InputLabel>
							<Typography variant="h5" color={'black'} fontWeight={'700'} letterSpacing={'1px'} lineHeight={'2rem'}>
								Enter Application Number
							</Typography>
						</InputLabel>
						<input
							type="number"
							name="appno"
							style={{ ...boxStyle }}
							value={appno}
							onChange={(e) => {
								setAppno(e.target.value);
							}}
						/>
					</Box>
					{/* button section */}
					<Box
						display={'flex'}
						justifyContent="space-evenly"
						alignItems="center"
						sx={{
							mt: '2rem',
							'@media (max-width:720px)': {
								flexDirection: 'column',
							},
						}}
					>
						<Button
							sx={{
								padding: '8px 2rem',
								margin: '0 1rem',
								textTransform: 'capitalize',
								fontSize: '1.2rem',
								letterSpacing: '1px',
								fontWeight: '700',
								cursor: 'pointer',
								borderRadius: '10px',
								color: 'rgba(0,0,255,0.8)',
								transition: '0.3sec ease',
								'&:hover': {
									color: 'white',
									bgcolor: 'rgba(0,0,0,0.6)',
								},
							}}
							onClick={handleSubmit}
						>
							Submit
						</Button>
						<Button
							sx={{
								padding: '8px 2rem',
								margin: '1rem',
								textTransform: 'capitalize',
								fontSize: '1.2rem',
								letterSpacing: '1px',
								fontWeight: '700',
								cursor: 'pointer',
								borderRadius: '10px',
								color: 'rgba(0,0,255,0.8)',
								transition: '0.3sec ease',
								'&:hover': {
									color: 'white',
									bgcolor: 'rgba(0,0,0,0.6)',
								},
							}}
							onClick={() => navigate('/carrier')}
						>
							Go Back
						</Button>
					</Box>
				</Box>
				{/* otp box */}
				{appSts ? (
					<StatusCard {...cardData} />
				) : (
					popOtp && (
						<Box
							marginY={'10vh'}
							marginX={'auto'}
							width="min(600px, 100%)"
							borderRadius={'25px'}
							padding="1rem 2rem"
							boxShadow="0 0 20px rgba(0,0,0,0.8)"
							bgcolor="rgba(255,255,255,0.6)"
							sx={{
								'@media (max-width : 400px)': {
									padding: '2rem 0.5rem',
								},
							}}
						>
							<Typography variant="h5" color={'black'} textAlign={'center'} width={'80%'} mx={'auto'}>
								An Otp has been sent to your regsitered Mobile No{' '}
							</Typography>
							<Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3} marginTop={'2rem'}>
								<TextField
									label=""
									placeholder="XXXXXX"
									type="number"
									required
									sx={{
										flex: 1,
										width: '18%',
										textAlign: 'center',
										color: 'black',
										'& .MuiInputBase-input': {
											color: 'black',
										},
										'& .MuiInput-underline:after': {
											borderBottomColor: 'black',
										},
										'& .MuiInputLabel-root': {
											color: 'rgba(0,0,0,0.6)',
											fontSize: '1.2rem',
											fontWeight: '700',
											letterSpacing: '1px',
										},
										'&:hover .MuiInput-underline:before': {
											borderBottomColor: 'black',
										},
										'&:focus .MuiInput-underline:before': {
											borderBottomColor: 'black',
										},
										'@media(max-width : 600px)': {
											width: '100%',
										},
									}}
									value={otp}
									onChange={(e) => {
										if (e.target.value.split('').length <= 6) {
											setOtp(e.target.value);
										}
									}}
								/>
								<Button
									sx={{
										padding: '8px 2rem',
										margin: '1rem',
										textTransform: 'capitalize',
										fontSize: '1.2rem',
										letterSpacing: '1px',
										fontWeight: '700',
										cursor: 'pointer',
										borderRadius: '10px',
										color: 'rgba(0,0,255,0.8)',
										transition: '0.3sec ease',
										'&:hover': {
											color: 'white',
											bgcolor: 'rgba(0,0,0,0.6)',
										},
									}}
									onClick={handleOtp}
								>
									Submit
								</Button>
							</Box>
						</Box>
					)
				)}
			</Box>
			{/* result box */}
		</Layout>
	);
};

export default Status;
