import React from 'react';
import { MenuList } from '../data/data';
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import back from '../images/kishan_backgroound.png';
const Carrier = () => {
	return (
		<Layout>
			<Box sx={{ minHeight: '75vh' }}>
				<div style={{ backgroundImage: `url(${back})`, height: '100vh' }}>
					<div style={{ marginTop: '25px' }}>
						<Typography color={'white'}>helolo asdjbasjkdjbasjk </Typography>
					</div>
				</div>
			</Box>
		</Layout>
	);
};

export default Carrier;
