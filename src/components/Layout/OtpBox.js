import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const OtpBox = ({ mainState, setMsg, setPop, back }) => {
	const [otp, setOtp] = React.useState('');
	const [otpError, setOtpError] = React.useState(false);

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
			if (resp.data.status === 200) {
				setMsg((pre) => !pre);
				setPop((pre) => !pre);
				back((pre) => !pre);
			}
		} catch (error) {
			if (error) console.log(error);
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
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default OtpBox;
