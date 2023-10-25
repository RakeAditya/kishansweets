import React from 'react';
import { Box, Button, TextField, Select, FormControl, InputLabel, MenuItem, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import avatar from './../../images/avatar.png';
// import { DateTimePicker } from '@mui'
const EmailBox = ({ setPop, arr, val }) => {
	const imageRef = React.useRef(null);
	// form sates
	const [image, setImage] = React.useState(null);
	const [name, setName] = React.useState('');
	const [fname, setFname] = React.useState('');
	const [mob, setMob] = React.useState('');
	const [amob, setAmob] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [selectedDate, setSelectedDate] = React.useState(null);
	const [adhNum, setAdhNum] = React.useState('');
	const [cadd, setCadd] = React.useState('');
	const [refName, setRefName] = React.useState('');
	const [refNum, setRefNum] = React.useState('');
	const [refAdd, setRefAdd] = React.useState('');
	// dropdown states
	const [shift, setShift] = React.useState('');
	const [exp, setExp] = React.useState('');
	const [qual, setQaul] = React.useState('');
	const [sal, setSal] = React.useState(0);
	// submit FOrm
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await handleImage();
			if (data == 500) return alert('Please input an mage');
			console.log('all good');

			// const formData = new FormData();
			// formData.append('api', 'sdgfwp49f4923d3287slhgw');
			// formData.append('postid', val - 1);
			// formData.append('cname', name);
			// formData.append('fname', fname);
			// // date selection
			// const dob = `${selectedDate.$D}/${selectedDate.$M + 1}/${selectedDate.$y}`;
			// formData.append('dob', dob);
			// formData.append('mob', mob);
			// formData.append('alt_mob', amob);
			// formData.append('gen', gender);
			// formData.append('aadhar', adhNum);
			// formData.append('refname', refName);
			// formData.append('cadd', cadd);
			// formData.append('shift', shift);
			// formData.append('exp_dur', exp);
			// formData.append('quali', qual);
			// formData.append('exp_sal', sal);
			// formData.append('refmob', refNum);
			// formData.append('refadd', refAdd);
			// // done
			// formData.forEach((ele) => console.log(ele));
			// const resp = await axios.post('https://kishansweets.com/apiweb/app_details.aspx', formData);
			// console.log(resp.data);
			// if (resp.data.status === 200) setPop((pre) => !pre);
		} catch (error) {
			if (error) throw error;
		}
	};
	const handleImage = async () => {
		try {
			if (image === '') throw new Error(500);
			const formData = new FormData();
			const img = image.slice(23);
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			formData.append('img', img);
			const resp = await axios.post('https://kishansweets.com/apiweb/upload_app_photo.aspx', formData);
			return resp.status;
		} catch (error) {
			if (error) return 500;
		}
	};
	// handle base 64 format
	const convertToBase64 = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			console.log('called: ', reader);
			setImage(reader.result);
		};
	};

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
				// border={'1px solid red'}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column-reverse' } }}
			>
				<Box flex={2} sx={{ '@media (max-width:800px)': { width: '100%' } }}>
					<Typography variant="h5" fontWeight="600" letterSpacing="1px" sx={{ '@media (max-width: 800px)': { textAlign: 'center' } }}>
						Opening for - <span style={{ fontSize: '1.7rem', fontWeight: '800' }}>{arr[val - 1].post_name}</span>
					</Typography>
					<TextField
						label="Full Name"
						type="text"
						variant="standard"
						fullWidth
						sx={{
							marginTop: '1.5rem',
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
						value={name}
						onChange={(e) => setName(e.target.value)}
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
						value={fname}
						onChange={(e) => setFname(e.target.value)}
					/>
				</Box>
				<Box flex={1}>
					<Box
						onClick={() => imageRef.current.click()}
						width={'200px'}
						height={'200px'}
						border="1px solid black"
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
						<input
							type="file"
							accept="image/*"
							ref={imageRef}
							hidden
							onChange={(e) => {
								convertToBase64(e.target.files[0]);
							}}
						/>
						{image ? (
							<img src={image} alt="" height="200px" width="200px" style={{ objectFit: 'cover' }} />
						) : (
							<img src={avatar} alt="" height="100px" width="100px" style={{ objectFit: 'cover' }} />
						)}
					</Box>
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
					label="Mobile Number"
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
					value={mob}
					onChange={(e) => setMob(e.target.value)}
					required
				/>
				<TextField
					label="Alternate Mobile Number"
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
					value={amob}
					onChange={(e) => setAmob(e.target.value)}
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
					<DemoContainer components={['DatePicker']}>
						<DatePicker label="Basic date picker" format="DD/MM/YY" value={selectedDate} onChange={setSelectedDate} />
					</DemoContainer>
				</LocalizationProvider>
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Gender</InputLabel>
					<Select label="Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
						<MenuItem value="other">Other</MenuItem>
					</Select>
				</FormControl>
			</Box>
			{/* Reference name */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				<TextField
					label="Aadhar Number"
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
					value={adhNum}
					onChange={(e) => setAdhNum(e.target.value)}
				/>
			</Box>

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
				value={cadd}
				onChange={(e) => setCadd(e.target.value)}
			/>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				gap={2}
				sx={{ marginTop: '2rem', '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				{/* shift change */}
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel id="demo-simple-select-label" sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>
						Shift Select
					</InputLabel>
					<Select labelId="demo-simple-select-label" label="Shift Select" value={shift} onChange={(e) => setShift(e.target.value)}>
						<MenuItem value={arr[val - 1].shift1}>{arr[val - 1].shift1}</MenuItem>
						<MenuItem value={arr[val - 1].shift2}>{arr[val - 1].shift2}</MenuItem>
						<MenuItem value={arr[val - 1].shift3}>{arr[val - 1].shift3}</MenuItem>
					</Select>
				</FormControl>
				{/* experience */}
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Work Experience</InputLabel>
					<Select label="State" value={exp} onChange={(e) => setExp(e.target.value)}>
						<MenuItem value={0}>No Experience</MenuItem>
						<MenuItem value={1}>1 years</MenuItem>
						<MenuItem value={2}>2 years</MenuItem>
						<MenuItem value={3}>3 years</MenuItem>
						<MenuItem value={4}> years</MenuItem>
						<MenuItem value={5}>5 years</MenuItem>
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
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Qualifications</InputLabel>
					<Select label="State" value={qual} onChange={(e) => setQaul(e.target.value)}>
						<MenuItem value="high school">High School</MenuItem>
						<MenuItem value="intermediate">Intermediate</MenuItem>
						<MenuItem value="graduate">Graduate</MenuItem>
						<MenuItem value="post graduate">Post Graduate</MenuItem>
					</Select>
				</FormControl>
				{/* Expected Salary */}
				<TextField
					label="Expected Salary"
					type="number"
					variant="standard"
					fullWidth
					value={sal}
					onChange={(e) => setSal(e.target.value)}
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
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				<TextField
					label="Reference Name"
					type="text"
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
					value={refName}
					onChange={(e) => setRefName(e.target.value)}
				/>
				<TextField
					label="Reference Mobile Number"
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
					value={refNum}
					onChange={(e) => setRefNum(e.target.value)}
				/>
			</Box>
			<TextField
				label="Reference Person Address"
				type="text"
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
				value={refAdd}
				onChange={(e) => setRefAdd(e.target.value)}
			/>
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
					onClick={handleSubmit}
				>
					Submit
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
					onClick={() => setPop((pre) => !pre)}
				>
					Go Back
				</Button>
			</Box>
		</Box>
	);
};

export default EmailBox;
