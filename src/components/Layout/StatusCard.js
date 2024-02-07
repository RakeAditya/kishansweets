import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Combo from './Combo';
const StatusCard = ({
	post_name,
	cname,
	fname,
	mobno,
	cimg,
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
	app_sts,
}) => {
	const printRef = React.useRef(null);
	const handlePrint = () => {
		const printElement = printRef.current;

		if (printElement) {
			const printWindow = window.open('', '_blank');

			// Copy the styles from the original document to the new window
			const styles = Array.from(document.styleSheets)
				.map((styleSheet) => {
					return `<style>${Array.from(styleSheet.cssRules)
						.map((rule) => rule.cssText)
						.join('')}</style>`;
				})
				.join('');

			printWindow.document.write(`
              <html>
                <head>
                  <title>Print</title>
                  ${styles}
                </head>
                <body>
                  ${printElement.outerHTML}
                </body>
              </html>
            `);

			printWindow.document.close();
			printWindow.print();
			printWindow.close();
		} else {
			console.error('Element with ref "printRef" not found.');
		}
	};
	return (
		<Box margin={'1rem auto'} minWidth={'350px'} border={'1px solid white'} width={'min(1000px,90%)'} bgcolor={'white'}>
			<div id="print_div" ref={printRef}>
				{/* 1st box */}
				<Box
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
							marginLeft={'0.2rem'}
							color="rgb(142,33,51)"
							sx={{ '@media (max-width: 650px)': { textAlign: 'center', marginBottom: '0', alignSelf: 'center' } }}
						>
							Applied for - <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>{post_name}</span>
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
							borderRadius="25px"
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
							<img src={cimg} alt="candidate" height="100%" width="100%" style={{ objectFit: 'cover', borderRadius: '25px' }} />
							{/* {image ? (
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
					<Combo heading={'Application Status'} content={app_sts} high={true} />
				</Box>
			</div>
			{/* last div */}
			<Box
				margin={'0 1rem'}
				display={'flex'}
				flexDirection={'row-reverse'}
				alignItems={'center'}
				sx={{
					'@media(max-width: 650px)': {
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					},
				}}
			>
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
					onClick={handlePrint}
				>
					Print
				</Button>
			</Box>
		</Box>
	);
};

export default StatusCard;
