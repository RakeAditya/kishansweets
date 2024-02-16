import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, InputLabel, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StatusCard from '../components/Layout/StatusCard';
import MessageBox from '../components/Layout/MessageBox';
import StatusOtp from './StatusOtp';
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
	const [showFormBox, setShowFormBox] = React.useState(true);
	const [appno, setAppno] = React.useState('');
	const [otp, setOtp] = React.useState(0);
	const [popOtp, setPopOtp] = React.useState(false);
	const [otpText, setOtpText] = React.useState('');
	const [cardData, setCardData] = React.useState({});
	const [appSts, setAppSts] = React.useState(false);
	// to save final cards data
	const [appData, setAppData] = React.useState({
		mob: '',
	});
	// message box features
	const [msg, setMsg] = React.useState(false);
	const [msgText, setMsgText] = React.useState('hello friend');
	const [msgColor, setMsgColor] = React.useState('rgba(255,0,0,0.5)');
	// handle appno submit
	const handleSubmit = async () => {
		try {
			const formData = new FormData();
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			formData.append('appno', appno);
			const resp = await axios.post('https://kishansweets.com/apiweb/apps_genotp.aspx', formData);
			console.log(resp.data);
			if (resp.data.vappotp === 'Invalid Application No.') {
				setMsg(true);
				setMsgText('Invalid Application Number');
				setMsgColor('rgba(255,0,0,0.5)');
				return;
			}
			setAppData({ mob: resp.data.mobno });
			setPopOtp(true);
			setShowFormBox(false);
			setOtpText(resp.data.vappotp);
		} catch (error) {
			if (error) console.log(error.message);
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
				setPopOtp(false);
			} else {
				setMsg(true);
				setMsgText(`Incorrect OTP \n please enter again`);
				setMsgColor('rgba(255,0,0,0.5)');
				return;
			}
		} catch (error) {
			if (error) throw error;
		}
	};
	const handleResend = () => {
		handleSubmit();
		setMsg(true);
		setMsgText('A new otp has been sent to the registered mobile number');
		setMsgColor('rgba(0,255,0,0.5)');
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
				{msg && <MessageBox func={setMsg} textColor={msgColor} textMessage={msgText} />}
				{/* form box */}
				{showFormBox && (
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
				)}

				{/* otp box */}
				{popOtp && <StatusOtp otp={otp} setOtp={setOtp} handleOtp={handleOtp} handleResend={handleResend} otpText={otpText} />}
				{/* application status box */}
				{appSts && <StatusCard {...cardData} />}
			</Box>
			{/* result box */}
		</Layout>
	);
};

export default Status;
