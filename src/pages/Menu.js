import React from 'react';

import Layout from './../components/Layout/Layout';
import { Box } from '@mui/material';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
const Menu = () => {
	return (
		<Layout>
			<Box sx={{ margin: '1em 0 0 ', backgroundColor: '#751113' }}>
				<Box sx={{ width: '100%', paddingBottom: '0' }}>
					<img src={img1} alt="kishansweets" width="100%" style={{ objectFit: 'cover', height: '100%' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img2} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img3} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img4} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img5} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img6} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img7} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img8} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img9} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img10} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img11} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
				<Box sx={{ width: '100%' }}>
					<img src={img12} alt="kishansweets" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
			</Box>
		</Layout>
	);
};

export default Menu;
