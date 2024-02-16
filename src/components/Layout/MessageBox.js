import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const MessageBox = ({ func, textMessage, textColor }) => {
	return (
		<Box
			position="fixed"
			top="0"
			left="0"
			height="100%"
			width={'100%'}
			bgcolor={'rgba(0,0,0,0.5)'}
			zIndex={2000}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minWidth: '350px',
			}}
			scroll="none"
			onClick={() => func((pre) => !pre)}
		>
			<Box
				sx={{
					width: 'min(100%,800px)',
					border: '1px solid black',
					padding: '2rem 1rem',
					backgroundColor: 'black',
					borderRadius: '10px',
				}}
				// onClick={}
			>
				<Typography
					variant="h4"
					lineHeight={'3rem'}
					letterSpacing={'2px'}
					fontWeight={600}
					textAlign={'center'}
					color={textColor}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					whiteSpace={'pre-wrap'}
				>
					{textColor === 'rgba(255,0,0,0.5)' ? (
						<CancelIcon sx={{ height: '2rem', width: '2rem' }} />
					) : (
						<CheckCircleIcon sx={{ height: '2rem', width: '2rem' }} />
					)}
					<span style={{ width: '10px' }}></span> {textMessage}
				</Typography>
			</Box>
		</Box>
	);
};

export default MessageBox;
