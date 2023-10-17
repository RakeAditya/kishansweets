import React from 'react';
import { Box, Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { DateTimePicker } from '@mui'
const EmailBox = ({ shift1, shift2, shift3 }) => {
	const [state, setState] = React.useState(0);
	return (
		<Box
			// minHeight="650px"
			width="min(1000px,100%)"
			borderRadius={'25px'}
			padding="2rem"
			boxShadow="0 0 20px rgba(0,0,0,0.8)"
			bgcolor="rgba(255,255,255,0.6)"
			sx={{
				'@media (max-width : 400px)': {
					padding: '2rem 0.5rem',
				},
			}}
		>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column-reverse' } }}
			>
				<Box flex={2} sx={{ '@media (max-width:800px)': { width: '100%' } }}>
					<TextField
						label="Full Name"
						type="text"
						variant="standard"
						fullWidth
						sx={{
							marginTop: '2em',
							color: 'black',
							'& .MuiInputBase-input': {
								color: 'black',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'black',
							},
							'& .MuiInputLabel-root': {
								color: 'black',
							},
							'&:hover .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
							'&:focus .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
						}}
					/>
					<TextField
						label="Father's Name"
						type="text"
						variant="standard"
						fullWidth
						sx={{
							marginTop: '2em',
							color: 'black',
							'& .MuiInputBase-input': {
								color: 'black',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'black',
							},
							'& .MuiInputLabel-root': {
								color: 'black',
							},
							'&:hover .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
							'&:focus .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
						}}
					/>
				</Box>
				<Box flex={1}>
					<Box width={'200px'} height={'180px'} border="1px solid black" bgcolor="rgba(0,0,0,0.5)"></Box>
				</Box>
			</Box>
			{/* contact box */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				<TextField
					label="Contact No"
					type="number"
					variant="standard"
					fullWidth
					sx={{
						flex: 1,
						marginTop: '1em',
						color: 'black',
						'& .MuiInputBase-input': {
							color: 'black',
						},
						'& .MuiInput-underline:after': {
							borderBottomColor: 'black',
						},
						'& .MuiInputLabel-root': {
							color: 'black',
						},
						'&:hover .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
						'&:focus .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
					}}
				/>
				<TextField
					label="Alternate No"
					type="number"
					variant="standard"
					fullWidth
					sx={{
						// border: '1px solid red',
						flex: 1,
						marginTop: '1em',
						color: 'black',
						'& .MuiInputBase-input': {
							color: 'black',
						},
						'& .MuiInput-underline:after': {
							borderBottomColor: 'black',
						},
						'& .MuiInputLabel-root': {
							color: 'black',
						},
						'&:hover .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
						'&:focus .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
					}}
				/>
			</Box>
			{/* Date field */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'flex-end'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="DOB" sx={{ marginTop: '2rem', width: '100%', flex: 1 }} />
					<TextField
						label="Aadhar Number"
						type="number"
						variant="standard"
						fullWidth
						sx={{
							flex: 1,
							// marginTop: '1em',
							color: 'black',
							'& .MuiInputBase-input': {
								color: 'black',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'black',
							},
							'& .MuiInputLabel-root': {
								color: 'black',
							},
							'&:hover .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
							'&:focus .MuiInput-underline:before': {
								borderBottomColor: 'black',
							},
						}}
					/>
				</LocalizationProvider>
			</Box>
			{/* Reference name */}
			<TextField
				label="Reference Name"
				type="text"
				variant="standard"
				fullWidth
				sx={{
					marginTop: '2em',
					color: 'black',
					'& .MuiInputBase-input': {
						color: 'black',
					},
					'& .MuiInput-underline:after': {
						borderBottomColor: 'black',
					},
					'& .MuiInputLabel-root': {
						color: 'black',
					},
					'&:hover .MuiInput-underline:before': {
						borderBottomColor: 'black',
					},
					'&:focus .MuiInput-underline:before': {
						borderBottomColor: 'black',
					},
				}}
			/>
			{/* Address */}
			<TextField
				label="Address"
				type="text"
				variant="standard"
				fullWidth
				sx={{
					marginTop: '2em',
					color: 'black',
					'& .MuiInputBase-input': {
						color: 'black',
					},
					'& .MuiInput-underline:after': {
						borderBottomColor: 'black',
					},
					'& .MuiInputLabel-root': {
						color: 'black',
					},
					'&:hover .MuiInput-underline:before': {
						borderBottomColor: 'black',
					},
					'&:focus .MuiInput-underline:before': {
						borderBottomColor: 'black',
					},
				}}
			/>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				gap={2}
				sx={{ marginTop: '2rem', '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				{/* shift change */}
				<FormControl fullWidth sx={{ flex: 1 }}>
					<InputLabel id="demo-simple-select-label">State</InputLabel>
					<Select labelId="demo-simple-select-label" label="State" value={state} onChange={(e) => setState(e.target.value)}>
						{shift1 && <MenuItem value={shift1}>{shift1}</MenuItem>}
						{shift2 && <MenuItem value={shift2}>{shift2}</MenuItem>}
						{shift3 && <MenuItem value={shift3}>{shift3}</MenuItem>}
					</Select>
				</FormControl>
				{/* experience */}
				<FormControl fullWidth sx={{ flex: 1 }}>
					<InputLabel>Work Experience</InputLabel>
					<Select label="State" value={state} onChange={(e) => setState(e.target.value)}>
						<MenuItem value={0}>No Experience</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={10}>10</MenuItem>
					</Select>
				</FormControl>
			</Box>
			{/* last row */}
			<Box
				// border={'1px solid red'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ marginTop: '2rem', '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				{/* shift change */}
				<FormControl fullWidth sx={{ flex: 1 }}>
					<InputLabel>Qualifications</InputLabel>
					<Select label="State" value={state} onChange={(e) => setState(e.target.value)}>
						<MenuItem value={10}>High School</MenuItem>
						<MenuItem value={10}>Diploma</MenuItem>
						<MenuItem value={20}>Graduate</MenuItem>
						<MenuItem value={30}>Post Graduate</MenuItem>
					</Select>
				</FormControl>
				{/* Expected Salary */}
				<TextField
					label="Expected Salary"
					type="number"
					variant="standard"
					fullWidth
					sx={{
						flex: 1,
						color: 'black',
						'& .MuiInputBase-input': {
							color: 'black',
						},
						'& .MuiInput-underline:after': {
							borderBottomColor: 'black',
						},
						'& .MuiInputLabel-root': {
							color: 'black',
						},
						'&:hover .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
						'&:focus .MuiInput-underline:before': {
							borderBottomColor: 'black',
						},
					}}
				/>
			</Box>
			{/* button box */}
			<Box
				display={'flex'}
				justifyContent="center"
				alignItems="center"
				marginTop="2em"
				sx={{
					'@media (max-width:720px)': {
						flexDirection: 'column',
						marginTop: '1em',
					},
				}}
			>
				<Button
					sx={{
						width: '300px',
						padding: '8px 10px',
						fontSize: '1.1rem',
						fontWeight: '600',
						letterSpacing: '1px',
						backgroundColor: 'transparent',
						margin: '1rem 0',
						color: 'black',
						borderRadius: '10px',
						cursor: 'pointer',
						transition: '0.3 sec ease-in',
						'&:hover ': {
							backgroundColor: 'black',
							boxShadow: '0 0 10px black',
							color: 'rgb(166, 166, 166)',
						},
					}}
				>
					Apply Now
				</Button>
				<Button
					sx={{
						width: '300px',
						padding: '8px 10px',
						fontSize: '1.1rem',
						fontWeight: '600',
						letterSpacing: '1px',
						backgroundColor: 'transparent',
						margin: '1rem',
						color: 'black',
						// border: '1px solid black',
						borderRadius: '10px',
						cursor: 'pointer',
						transition: '0.3 sec ease-in',
						'&:hover ': {
							backgroundColor: 'black',
							boxShadow: '0 0 10px black',
							color: 'rgb(166, 166, 166)',
						},
					}}
				>
					Go Back
				</Button>
			</Box>
		</Box>
	);
};

export default EmailBox;
