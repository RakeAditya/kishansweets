import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography, Button } from '@mui/material';
import Card from '../components/Layout/Card';
import axios from 'axios';
import EmailBox from '../components/Layout/EmailBox';
const Carrier = () => {
	const [cardData, setCardData] = React.useState(null);
	const [pop, setPop] = React.useState(false);
	const [val, setVal] = React.useState(-1);
	React.useEffect(() => {
		const getCardData = async () => {
			try {
				const formData = new FormData();
				formData.append('api', 'sdgfwp49f4923d3287slhgw');
				const resp = await axios.post('https://kishansweets.com/apiweb/Vacancy.aspx', formData);
				const data = resp.data;
				setCardData(data.vacancylist);
				console.log('rendereing');
			} catch (error) {
				console.error(error.message);
			}
		};
		getCardData();
	}, []);
	return (
		<Layout>
			<Box sx={{ minHeight: 'max(75vh,auto)', minWidth: '350px' }}>
				<div
					style={{
						padding: '1.5em 0',
						background: 'linear-gradient(-45deg, #e73c7e, #23d5ab)',
						display: 'flex ',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						border: '1px solid red',
						minHeight: '100vh',
					}}
				>
					{pop ? (
						<Box>
							<EmailBox setPop={setPop} arr={cardData} val={val} />
						</Box>
					) : (
						<>
							<Box
								marginBottom="2rem"
								width="100%"
								paddingX="2.5rem"
								display="flex"
								justifyContent="space-between"
								alignItems={'center'}
								flexWrap="wrap"
							>
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
											gridTemplateColumns: 'repeat(4,1fr)',
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
								'Loading'
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
