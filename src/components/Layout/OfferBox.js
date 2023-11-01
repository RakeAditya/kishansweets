import React from 'react';
import { Box } from '@mui/material';
import popImg from './../../images/KISHAN SWEETS -1.png';
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
					width: 'min(100%,1000px)',
				}}
				// onClick={}
			>
				<img src={popImg} alt="" width="100%" height={'auto'} style={{ objectFit: 'cover' }} />
			</Box>
		</Box>
	);
};

export default OfferBox;
