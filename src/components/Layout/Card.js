import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Card = ({ post_name, pgender, exp, shft1, shft2, shft3, extra_req, setPop, keyId, setVal }) => {
	return (
		<Box
			minHeight="400px"
			width="min(410px, 100%)"
			// border="2px solid white"
			borderRadius={'30px'}
			padding=" 2rem 1.5rem"
			boxShadow="0 0 20px rgba(0,0,0,0.8)"
			bgcolor="rgba(255,255,255,0.6)"
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
		>
			<Typography variant="h5" fontWeight="800" textTransform={'capitalize'} mb="10px" color="rgba(255,0,50,0.64)">
				{post_name}
			</Typography>
			<Typography variant="h5" mb="10px" fontWeight="800">
				Gender : <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{pgender}</span>
			</Typography>
			<Typography variant="h5" mb="10px" fontWeight="800">
				Experience : <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{exp}</span>
			</Typography>
			<Typography variant="h5" mb="10px" fontWeight="800">
				Shift 1 : <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{shft1}</span>
			</Typography>
			<Typography variant="h5" mb="10px" fontWeight="800">
				Shift 2 : <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{shft2 ? `${shft2}` : 'NA'}</span>
			</Typography>
			<Typography variant="h5" mb="10px" fontWeight="800">
				Shift 3 : <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{shft3 ? `${shft3}` : 'NA'}</span>
			</Typography>

			<Typography variant="h6" fontWeight="800" mb="1rem">
				Extra requirements : <span style={{ fontWeight: '500' }}>{extra_req ? `${extra_req}` : 'NA'}</span>
			</Typography>

			<Button
				sx={{
					padding: '0.8rem 1.5rem',
					marginTop: 'auto',
					textTransform: 'capitalize',
					alignSelf: 'flex-end',
					fontSize: '1.2rem',
					letterSpacing: '1px',
					fontWeight: '700',
					borderRadius: '10px',
					color: 'rgba(0,0,255,0.8)',
					transition: '0.3sec ease',
					'&:hover': {
						color: 'white',
						bgcolor: 'rgba(0,0,0,0.6)',
					},
				}}
				onClick={() => {
					setVal(keyId);
					setPop((pre) => !pre);
				}}
			>
				Apply Now
			</Button>
		</Box>
	);
};

export default Card;
