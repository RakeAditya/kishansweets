import { Box, Typography } from '@mui/material';
import React from 'react';

const Combo = ({ heading, content, high }) => {
	return (
		<Box display={'flex'} gap={0} flexDirection={'column'} alignItems={'flex-start'} width={'100%'} margin={'1rem 0'}>
			<Typography
				variant="body3"
				margin={0}
				pl={'4px'}
				sx={{
					fontSize: '1.2rem',
					fontWeight: '900',
					letterSpacing: '1px',
					lineHeight: '0.5rem',
					wordSpacing: '1px',
					color: `${high ? 'rgb(143,33,52)' : 'rgba(0,0,0,0.6)'}`,
					textTransform: 'capitalize',
				}}
			>
				{heading}
			</Typography>
			<Typography
				variant="h5"
				mt={'0.5rem'}
				pl={'0.2rem'}
				sx={{
					fontSize: '1.2rem',
					fontWeight: '600',
					letterSpacing: '1px',
					wordSpacing: '2px',
					textTransform: 'capitalize',
					color: 'rgba(0,0,0,0.8)',
					textAlign: 'left',
				}}
			>
				{content ? content : ' NA'}
			</Typography>
		</Box>
	);
};

export default Combo;
