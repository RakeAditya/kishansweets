import React from 'react';
import { Box } from '@mui/material';
import popImg from './../../images/pop.jpg';
const OfferBox = ({ pop }) => {
	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			height="100%"
			width={'100%'}
			bgcolor={'rgba(255,255,255,0.4)'}
			zIndex={2000}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minWidth: '350px',
			}}
			scroll="none"
			onClick={pop}
		>
			<Box
				sx={{
					bgcolor: 'white',
					width: 'min(100%,1200px)',
				}}
				// onClick={}
			>
				<img src={popImg} alt="" width="100%" height={'auto'} style={{ objectFit: 'cover' }} />
			</Box>
		</Box>
	);
};

export default OfferBox;
