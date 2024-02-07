import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './../components/Layout/Layout';
import { Box, Typography, Button } from '@mui/material';
import Card from '../components/Layout/Card';
import axios from 'axios';
import EmailBox from '../components/Layout/EmailBox';
import { MoonLoader } from 'react-spinners';
import MessageBox from '../components/Layout/MessageBox';
import OtpBox from '../components/Layout/OtpBox';
const Carrier = () => {
	const navigate = useNavigate();
	const [cardData, setCardData] = React.useState(null);
	const [pop, setPop] = React.useState(false);
	const [val, setVal] = React.useState(-1);
	const [msg, setMsg] = React.useState(false);
	const [otp, setOtp] = React.useState(false);
	const [mainState, setMainState] = React.useState({
		appno: '',
		mob: '',
	});
	React.useEffect(() => {
		const getCardData = async () => {
			try {
				const formData = new FormData();
				formData.append('api', 'sdgfwp49f4923d3287slhgw');
				const resp = await axios.post('https://kishansweets.com/apiweb/Vacancy.aspx', formData);
				const data = resp.data;
				setCardData(data.vacancylist);
				console.log('rendereing card data');
				console.log(data);
			} catch (error) {
				console.error(error.message);
			}
		};
		getCardData();
	}, []);
	return (
		<Layout>
			<Box sx={{ minWidth: '350px' }}>
				<div
					style={{
						minHeight: '70vh',
						padding: ' 0',
						background: 'linear-gradient(-45deg, #e73c7e, #23d5ab)',
						display: 'flex ',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					{msg && <MessageBox func={setMsg} />}
					{pop ? (
						otp ? (
							<Box margin={'2rem 0'}>
								<OtpBox mainState={mainState} setMsg={setMsg} setPop={setPop} back={setOtp} />
							</Box>
						) : (
							<Box margin={' 2rem 0'}>
								<EmailBox arr={cardData} val={val} next={setOtp} setPop={setPop} setMainState={setMainState} />
							</Box>
						)
					) : (
						<>
							<Box margin="2rem 0" width="100%" paddingX="2.5rem" display="flex" justifyContent="space-between" alignItems={'center'} flexWrap="wrap">
								<Typography variant="h2" fontWeight="700" color="rgba(245,245,240,0.9)">
									Vacancies
								</Typography>
								<Button
									sx={{
										color: 'rgba(0,0,255,0.8)',
										bgcolor: 'transparent',
										padding: '0.8rem 1.2rem',
										borderRadius: '15px',
										fontSize: '1.5rem',
										'&:hover': { color: 'white', bgcolor: 'rgba(0,0,0,0.6)' },
										textTransform: 'none',
										transition: '0.3s ease',
									}}
									onClick={() => {
										navigate('/status');
									}}
								>
									Application Status
								</Button>
							</Box>
							{cardData ? (
								<Box
									gap={2}
									width="min(100%,2000px)"
									sx={{
										padding: '0 1rem',
										display: 'grid',
										gridTemplateColumns: 'repeat(1,1fr)',
										'@media (min-width: 800px)': {
											gridTemplateColumns: 'repeat(2,1fr)',
										},
										'@media (min-width: 1200px)': {
											gridTemplateColumns: 'repeat(3,1fr)',
										},

										'@media (min-width: 1500px)': {
											gridTemplateColumns: 'repeat(4,1fr)',
										},

										'@media (min-width: 1800px)': {
											gridTemplateColumns: 'repeat(5,1fr)',
										},
									}}
								>
									{cardData.map((itm, index) => (
										<Box display="flex" minWidth="min(420px,100%)" justifyContent="center" key={index}>
											<Card
												keyId={itm.post_id}
												post_name={itm.post_name}
												pgender={itm.pgender}
												exp={itm.exp}
												shft1={itm.shift1}
												shft2={itm.shift2}
												shft3={itm.shift3}
												extra_req={itm.extra_req}
												setPop={setPop}
												setVal={setVal}
											/>
										</Box>
									))}
								</Box>
							) : (
								<MoonLoader color="rgba(0, 0, 0, 1)" />
							)}
							<Box margin="4rem 0" />
						</>
					)}
				</div>
			</Box>
		</Layout>
	);
};

export default Carrier;
