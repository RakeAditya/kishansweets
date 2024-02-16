import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';
import axios from 'axios';
const OtpBox = ({ mainState, setMsg, setPop, back, setMsgText, setMsgColor }) => {
	const [otp, setOtp] = React.useState('');

	const handleSubmit = async () => {
		try {
			console.log('inside main api');
			const formData = new FormData();
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			formData.append('appno', mainState.appno);
			formData.append('mob', mainState.mob);
			formData.append('otp', otp);
			const resp = await axios.post('https://kishansweets.com/apiweb/verifyotp.aspx', formData);
			console.log(resp.data);
			if (resp.data.votp === 'Invalid OTP') {
				setMsgText('Incorrect Otp');
				setMsgColor('rgba(255,0,0,0.5)');
				return;
			}
			setMsgText(`Application submitted successfully \n Application No : ${mainState.appno}`);
			setMsgColor('rgba(0,255,0,0.5)');
			setPop((pre) => !pre);
			back((pre) => !pre);
		} catch (error) {
			// if (error) console.log(error);
		} finally {
			setMsg((pre) => !pre);
		}
	};
	return (
		<Box
			marginY={'20vh'}
			marginX={'auto'}
			width="min(800px, 100%)"
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
			<Typography variant="h5" textAlign={'center'} width={'80%'} mx={'auto'}>
				An Otp has been sent to your regsitered Mobile No{' '}
			</Typography>
			<Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3} marginTop={'2rem'}>
				<OtpInput
					value={otp}
					onChange={setOtp}
					numInputs={4}
					inputType="number"
					renderSeparator={<span>-</span>}
					renderInput={(props) => <input {...props} />}
					inputStyle={{ fontSize: '1.5rem', borderRadius: '5px', margin: '1px 5px', padding: '2px 5px', width: '30px' }}
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
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default OtpBox;
