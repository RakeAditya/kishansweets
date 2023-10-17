import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Box } from '@mui/material';
import front from '../../images/1.jpg';
import { useLocation } from 'react-router-dom';
const Layout = ({ children }) => {
	const location = useLocation();
	const currPath = location.pathname;
	return (
		<>
			<Header />
			{currPath !== '/' && (
				<Box marginTop="1rem" height="50vh" minWidth={'350px'}>
					<img src={front} alt="back" height="100%" width="100%" style={{ objectFit: 'cover' }} />
				</Box>
			)}

			<div className="main-div">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
