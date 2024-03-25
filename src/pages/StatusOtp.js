import React from 'react';
import useTimer from '../hooks/useTimer';
import { Box, Typography, Button, IconButton } from '@mui/material';
import OtpInput from 'react-otp-input';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import CloseIcon from '@mui/icons-material/Close';
const StatusOtp = ({ otp, setOtp, handleOtp, handleResend, otpText }) => {
	const { seconds, minutes, reset } = useTimer();
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			marginY={'10vh'}
			marginX={'auto'}
			width="min(600px, 100%)"
			borderRadius={'25px'}
			padding="1rem 2rem"
			boxShadow="0 0 20px rgba(0,0,0,0.8)"
			bgcolor="rgba(255,255,255,0.6)"
			sx={{
				'@media (max-width : 400px)': {
					padding: '1rem 0.5rem',
				},
			}}
		>
			<IconButton disableRipple disableFocusRipple>
				<CloseIcon
					sx={{
						justifySelf: 'flex-end',
						padding: '5px',
						fontSize: '1.5rem',
						backgroundColor: 'rgba(0,10,20,0.8)',
						color: 'white',
						borderRadius: '50%',
						transition: '0.3s ease-in',
						'&:hover': {
							fontSize: '1.8rem',
							boxShadow: '0',
						},
						'&.MuiButtonBase-root:hover': {
							bgcolor: 'transparent',
						},
						position: 'absolute',
						right: '5px',
						top: '5px',
					}}
				/>
			</IconButton>
			<Box display={'flex'} justifyContent={'center'}>
				<IconButton disableRipple disableFocusRipple sx={{ cursor: 'default' }}>
					<LockOpenOutlinedIcon
						sx={{
							padding: '5px',
							fontSize: '2.5rem',
							backgroundColor: 'rgba(180,33,51,0.8)',
							color: 'white',
							borderRadius: '50%',
						}}
					/>
				</IconButton>
			</Box>
			<Typography variant="h5" color={'black'} textAlign={'center'} width={'80%'} mx={'auto'} fontWeight={600} my={2} fontSize={'2rem'}>
				OTP Verification
			</Typography>
			<Typography variant="h5" color={'black'} textAlign={'center'} width={'80%'} mx={'auto'} fontSize={'1.1rem'} my={0}>
				{otpText}
			</Typography>
			<Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3} marginTop={'1rem'}>
				<OtpInput
					value={otp}
					onChange={setOtp}
					numInputs={4}
					inputType="number"
					renderSeparator={<span>-</span>}
					renderInput={(props) => <input {...props} />}
					inputStyle={{ fontSize: '1.5rem', borderRadius: '5px', margin: '1px 5px', padding: '2px 5px', width: '30px' }}
				/>
				{!reset && (
					<Typography variant="h5" color={'rgba(0,0,0,0.7)'} textAlign={'center'} width={'80%'} mx={'auto'} fontSize={'1.1rem'} fontWeight={700}>
						The otp is valid for 0{minutes} : {seconds >= 10 ? seconds : `0${seconds}`}{' '}
					</Typography>
				)}
				<Box
					width={'80%'}
					mx={'auto'}
					display={'flex'}
					justifyContent={'space-evenly'}
					sx={{
						'@media(max-width : 500px)': {
							flexDirection: 'column',
						},
					}}
				>
					<Button
						sx={{
							padding: '8px 2rem',
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
						Verify
					</Button>
					{reset && (
						<Button
							sx={{
								padding: '8px 2rem',
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
							onClick={handleResend}
						>
							Resend
						</Button>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default StatusOtp;
