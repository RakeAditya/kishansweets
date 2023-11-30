import React from 'react';
import { Box, Button, TextField, Select, FormControl, InputLabel, MenuItem, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import avatar from './../../images/avatar.png';
import dayjs from 'dayjs';
const EmailBox = ({ setPop, arr, val }) => {
	// const dummyDate = new Date();
	// dummyDate.setFullYear(2020, 11, 1);
	const [btnLoad, setBtnLoad] = React.useState(false);
	const head = arr[val - 1].post_name;
	const imageRef = React.useRef(null);
	const avatar64 = avatar.slice(22);
	const [image, setImage] = React.useState('');
	const [name, setName] = React.useState('');
	const [fname, setFname] = React.useState('');
	const [mob, setMob] = React.useState('');
	const [amob, setAmob] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [selectedDate, setSelectedDate] = React.useState(dayjs());
	const [adhNum, setAdhNum] = React.useState('');
	const [cadd, setCadd] = React.useState('');
	const [refName, setRefName] = React.useState('');
	const [refNum, setRefNum] = React.useState('');
	const [refAdd, setRefAdd] = React.useState('');
	const [toggle, setToggle] = React.useState(false);
	// dropdown states
	const [shift, setShift] = React.useState('');
	const [exp, setExp] = React.useState('');
	const [qual, setQaul] = React.useState('');
	const [sal, setSal] = React.useState(0);
	//
	// Error fields
	const [err, setErr] = React.useState({
		errorName: '',
		errorFname: '',
		errorMob: '',
		errorAdh: '',
	});
	// submit FOrm
	// start image
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setBtnLoad(true);
			console.log('insode other api');
			// validation section
			if (!name && !name.length) {
				setErr({ ...err, errorName: 'Name must be alphabets only ' });
				return;
			} else {
				setErr({ ...err, errorName: '' });
			}
			if (!fname && !fname.length) {
				setErr({ ...err, errorFname: "Father's Name must be alphabets only" });
				return;
			} else {
				setErr({ ...err, errorFname: '' });
			}
			// number validation
			if (mob.length < 10) {
				setErr({ ...err, errorMob: 'Mobile Number should be of 10 digits only' });
				return;
			} else {
				setErr({ ...err, errorMob: '' });
			}
			// adhaar validation
			if (adhNum.length < 12) {
				setErr({ ...err, errorAdh: 'Aadhar number must be 12 digits only with no whitespaces' });
				return;
			} else {
				setErr({ ...err, errorAdh: '' });
			}
			setErr({ ...err, errorMob: '', errorAdh: '', errorFname: '' });
			const data = await handleImage();
			if (data.status === 200) {
				const appno = data.data.appno;
				const formData = new FormData();
				formData.append('api', 'sdgfwp49f4923d3287slhgw');
				formData.append('postid', val - 1);
				formData.append('appno', appno);
				formData.append('cname', name);
				formData.append('fname', fname);
				const dob = `${selectedDate.$D}/${selectedDate.$M + 1}/${selectedDate.$y}`;
				formData.append('dob', dob);
				formData.append('mob', mob);
				formData.append('alt_mob', amob);
				formData.append('gen', gender);
				formData.append('aadhar', adhNum);
				formData.append('refname', refName);
				formData.append('cadd', cadd);
				formData.append('shift', shift);
				formData.append('exp_dur', exp);
				formData.append('quali', qual);
				formData.append('exp_sal', sal);
				formData.append('refmob', refNum);
				formData.append('refadd', refAdd);
				formData.forEach((ele) => console.log(ele));
				const resp = await axios.post('https://kishansweets.com/apiweb/app_details.aspx', formData);
				console.log(resp);
				if (resp.data.status === 200) {
					alert('form submitted');
					setPop((pre) => !pre);
				}
			}
		} catch (error) {
			if (error) throw error;
		} finally {
			setBtnLoad(false);
		}
	};
	const handleImage = async () => {
		try {
			// console.log('inside image api', image);
			const formData = new FormData();
			formData.append('api', 'sdgfwp49f4923d3287slhgw');
			if (image === '') {
				formData.append('img', avatar64);
				formData.append('sts', 'avt');
			} else {
				const img = image.slice(23);
				formData.append('img', img);
				formData.append('sts', 'org');
			}
			const resp = await axios.post('https://kishansweets.com/apiweb/upload_app_photo.aspx', formData);
			// console.log(resp);
			return resp;
		} catch (error) {
			if (error) return 500;
		}
	};
	// handle base 64 format
	const convertToBase64 = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			console.log(reader);
			setImage(reader.result);
		};
	};

	return (
		<Box
			width="min(1000px,100%)"
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
			{/* 1st row */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column-reverse' } }}
			>
				<Box flex={2} sx={{ '@media (max-width:800px)': { width: '100%' } }}>
					<Typography
						variant="h5"
						fontWeight="600"
						letterSpacing="1px"
						marginBottom={'2rem'}
						sx={{ '@media (max-width: 800px)': { textAlign: 'center', marginBottom: '0' } }}
					>
						Opening for - <span style={{ fontSize: '1.7rem', fontWeight: '800' }}>{head}</span>
					</Typography>
					<TextField
						label="Full Name"
						type="text"
						variant="standard"
						fullWidth
						required
						sx={{
							fontSize: '1.2rem',
							fontWeight: '700',
							letterSpacing: '1px',
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
						}}
						error={Boolean(err.errorName)}
						helperText={err.errorName}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label="Father's Name"
						type="text"
						variant="standard"
						fullWidth
						required
						sx={{
							marginY: '1rem',
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
						}}
						error={Boolean(err.errorFname)}
						helperText={err.errorFname}
						value={fname}
						onChange={(e) => setFname(e.target.value)}
					/>
				</Box>
				<Box flex={1}>
					<Box
						onClick={() => imageRef.current.click()}
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
							<img src={image} alt="" height="100%" width="100%" style={{ objectFit: 'cover', borderRadius: '25px' }} />
						) : (
							<img src={avatar} alt="" height="100px" width="100px" style={{ objectFit: 'cover' }} />
						)}
					</Box>
				</Box>
			</Box>
			{/* 2nd row */}
			<Box
				display={'flex'}
				gap={1}
				justifyContent={'space-between'}
				alignItems={'center'}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column', gap: 0 } }}
			>
				<TextField
					label="Mobile Number"
					type="number"
					variant="standard"
					fullWidth
					required
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
					}}
					value={mob}
					onChange={(e) => {
						if (e.target.value.split('').length <= 10) {
							setMob(e.target.value);
						}
					}}
					error={Boolean(err.errorMob)}
					helperText={err.errorMob}
				/>
				<TextField
					label="Alternate Mobile Number"
					type="number"
					variant="standard"
					fullWidth
					sx={{
						// border: '1px solid red',
						flex: 1,
						marginY: '1rem',
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
					}}
					value={amob}
					onChange={(e) => {
						if (e.target.value.split('').length <= 10) {
							setAmob(e.target.value);
						}
					}}
				/>
			</Box>
			{/* 3rd row */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'flex-end'}
				gap={1}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				<FormControl variant="standard" fullWidth sx={{ flex: 1, '@media (min-width:800px)': { marginRight: '0.5rem' } }}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={['DatePicker']}>
							<DatePicker label="Date of Birth" format="DD/MM/YY" value={selectedDate} onChange={setSelectedDate} />
						</DemoContainer>
					</LocalizationProvider>
				</FormControl>
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Gender</InputLabel>
					<Select label="Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
						<MenuItem value="other">Other</MenuItem>
					</Select>
				</FormControl>
			</Box>
			{/* 4th row */}
			<Box>
				<TextField
					label="Aadhar Number"
					type="number"
					variant="standard"
					fullWidth
					required
					error={err.errorAdh && err.errorAdh.length ? true : false}
					helperText={err.errorAdh}
					sx={{
						flex: 1,
						marginY: '1rem',
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
					}}
					value={adhNum}
					onChange={(e) => {
						if (e.target.value.split('').length <= 12) {
							setAdhNum(e.target.value);
						}
					}}
				/>
				<TextField
					label="Address"
					type="text"
					variant="standard"
					fullWidth
					required
					sx={{
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
					}}
					value={cadd}
					onChange={(e) => setCadd(e.target.value)}
				/>
			</Box>
			{/* 5th row */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				marginTop={'1rem'}
				gap={2}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
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
			{/* 6th row */}
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={2}
				marginTop={'1rem'}
				sx={{ '@media (max-width:800px)': { flexDirection: 'column' } }}
			>
				{/* shift change */}
				<FormControl variant="standard" fullWidth sx={{ flex: 1 }}>
					<InputLabel sx={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Qualifications</InputLabel>
					<Select label="State" value={qual} onChange={(e) => setQaul(e.target.value)}>
						<MenuItem value="high school">Below High School</MenuItem>
						<MenuItem value="high school">High School</MenuItem>
						<MenuItem value="intermediate">Intermediate</MenuItem>
						<MenuItem value="graduate">Graduate</MenuItem>
						<MenuItem value="post graduate">Post Graduate</MenuItem>
					</Select>
				</FormControl>
				{/* Expected Salary */}
				{head !== 'Milk Man' && (
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
				)}
			</Box>
			{/* another row */}
			<Box width={'100%'} marginTop="1em" display={'flex'} alignItems={'center'} gap={2}>
				<Typography sx={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px', color: 'rgba(0,0,0,0.7)' }}>
					Referred By someone : -
				</Typography>
				<input type="checkbox" value={toggle} onChange={() => setToggle((pre) => !pre)} />
			</Box>
			{toggle && (
				<>
					<Box
						gap={1}
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						sx={{ '@media (max-width:800px)': { flexDirection: 'column' }, transition: '1s ease-in' }}
					>
						<TextField
							label="Reference Name"
							type="text"
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
									fontSize: '1.2rem',
									fontWeight: '600',
									letterSpacing: '1px',
									color: 'rgba(0,0,0,0.7)',
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
								flex: 1,
								color: 'black',
								'& .MuiInputBase-input': {
									color: 'black',
								},
								'& .MuiInput-underline:after': {
									borderBottomColor: 'black',
								},
								'& .MuiInputLabel-root': {
									fontSize: '1.2rem',
									fontWeight: '600',
									letterSpacing: '1px',
									color: 'rgba(0,0,0,0.7)',
								},
								'&:hover .MuiInput-underline:before': {
									borderBottomColor: 'black',
								},
								'&:focus .MuiInput-underline:before': {
									borderBottomColor: 'black',
								},
							}}
							value={refNum}
							onChange={(e) => {
								if (e.target.value.split('').length <= 10) {
									setRefNum(e.target.value);
								}
							}}
						/>
					</Box>
					<TextField
						label="Reference Person Address"
						type="text"
						variant="standard"
						fullWidth
						sx={{
							flex: 1,
							marginTop: '1rem',
							color: 'black',
							'& .MuiInputBase-input': {
								color: 'black',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'black',
							},
							'& .MuiInputLabel-root': {
								fontSize: '1.2rem',
								fontWeight: '600',
								letterSpacing: '1px',
								color: 'rgba(0,0,0,0.7)',
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
				</>
			)}
			{/* last row */}
			<Box
				display={'flex'}
				justifyContent="space-evenly"
				alignItems="center"
				sx={{
					'@media (max-width:720px)': {
						flexDirection: 'column',
					},
				}}
			>
				<Button
					disabled={btnLoad}
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
					onClick={() => setPop((pre) => !pre)}
				>
					Go Back
				</Button>
			</Box>
		</Box>
	);
};

export default EmailBox;
