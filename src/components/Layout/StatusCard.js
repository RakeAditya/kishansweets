import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Combo from './Combo';
const StatusCard = ({
	cname,
	fname,
	mobno,
	alt_mobno,
	app_date,
	gender,
	aadhar_no,
	cadd,
	shift,
	exp_dur,
	exp_sal,
	quali,
	ref_name,
	ref_mob,
	ref_add,
}) => {
	return (
		<Box margin={'1rem auto'} minWidth={'350px'} border={'1px solid white'} width={'min(1000px,90%)'} bgcolor={'white'}>
			{/* 1st box */}
			<Box
				marginTop={'1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column-reverse',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				{/* left box */}
				<Box
					flex={2}
					display={'flex'}
					flexDirection={'column'}
					alignItems={'flex-start'}
					padding={'1rem'}
					width={'100%'}
					// border={'1px solid red'}
					sx={{
						'@media(max-width: 650px)': {},
					}}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						letterSpacing="1px"
						marginBottom={'1rem'}
						color="rgb(142,33,51)"
						sx={{ '@media (max-width: 650px)': { textAlign: 'center', marginBottom: '0', alignSelf: 'center' } }}
					>
						Vacancy for - <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>head</span>
					</Typography>
					<Combo heading={'Full Name'} content={cname} />
					<Combo heading={" Father's Name"} content={fname} />
				</Box>
				{/* right box */}
				<Box flex={1}>
					<Box
						width={'170px'}
						height={'190px'}
						border="1px solid black"
						borderRadius="15px"
						bgcolor="rgba(0,0,0,0.5)"
						display="flex"
						justifyContent={'center'}
						alignItems={'center'}
						sx={{
							cursor: 'pointer',
							transition: '0.4s ease-in',
							'&:hover ': {
								bgcolor: 'rgba(0,0,0,0.4)',
							},
						}}
					>
						{/* {image ? (
							<img src={image} alt="" height="100%" width="100%" style={{ objectFit: 'cover', borderRadius: '25px' }} />
						) : (
							<img src={avatar} alt="" height="100px" width="100px" style={{ objectFit: 'cover' }} />
						)} */}
					</Box>
				</Box>
			</Box>
			{/* 2nd box */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Mobile Number'} content={mobno} />
				<Combo heading={'Alternate Mobile Number'} content={alt_mobno} />
			</Box>
			{/* 3rd box */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Date of Birth'} content={app_date} />
				<Combo heading={'Gender'} content={gender} />
			</Box>
			{/* 4thbox */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					flexDirection: 'column',
					'@media(max-width: 650px)': {
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Aadhaar Number'} content={aadhar_no} />
				<Combo heading={'Address'} content={cadd} />
			</Box>
			{/* 5th box */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Shift Selected'} content={shift} />
				<Combo heading={'Work Experience'} content={exp_dur} />
			</Box>
			{/* 6th box */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Qualifications'} content={quali} />
				<Combo heading={'Expected Salary'} content={exp_sal} />
			</Box>
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Reference Name'} content={ref_name} />
				<Combo heading={'Reference Mobile Number'} content={ref_mob} />
			</Box>
			<Box
				margin={'0 1rem'}
				display={'flex'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
				<Combo heading={'Reference Address'} content={ref_add} />
			</Box>
		</Box>
	);
};

export default StatusCard;
