import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Logo from '../../images/kishanlogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	// hndle menu click
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	//menu drawer
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }} className="logo-class">
				<img src={Logo} alt="logo" width={100} height={80} />
			</Typography>
			<Divider />
			<ul className="mobile-navigation">
				<li>
					<NavLink activeclassname="active" to={'/'}>
						Home
					</NavLink>
				</li>
				<li>
					{/* <a href="https://www.kishansweets.com/" rel="noopener noreferrer">
						Menu
					</a> */}
					<NavLink to={'/about'}>About Us</NavLink>
				</li>
				<li>
					<NavLink to={'/menu'}>Menu</NavLink>
				</li>
				<li>
					<NavLink to={'/carrier'}>Vacancy</NavLink>
				</li>
				<li>
					<NavLink to={'/contact'}>Contact</NavLink>
				</li>
			</ul>
		</Box>
	);
	return (
		<>
			<Box>
				<AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
					<Toolbar>
						<Typography
							color={'goldenrod'}
							variant="h4"
							className="font-dance"
							component="div"
							sx={{
								flexGrow: 1,
								display: 'flex',
								alignItems: 'center',
								'@media (max-width:1000px)': {
									fontSize: '1.5rem',
								},
							}}
						>
							<img src={Logo} alt="logo" height={'70'} width="90" style={{ margin: '5px 20px 5px 0' }} /> Kishan Sweets & Restaurent
						</Typography>
						<Box sx={{ display: { xs: 'none', md: 'block' } }}>
							<ul className="navigation-menu">
								<li>
									<NavLink activeclassname="active" to={'/'}>
										Home
									</NavLink>
								</li>
								<li>
									{/* <a href="https://www.kishansweets.com/" rel="noopener noreferrer">
										Menu
									</a> */}
									<NavLink to={'/about'}>About</NavLink>
								</li>
								<li>
									<NavLink to={'/menu'}>Menu</NavLink>
								</li>
								<li>
									<NavLink to={'/carrier'}>Vacancy</NavLink>
								</li>
								<li>
									<NavLink to={'/contact'}>Contact</NavLink>
								</li>
							</ul>
						</Box>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							sx={{
								mr: 2,
								'@media (min-width:900px)': {
									display: 'none',
								},
							}}
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						sx={{
							'@media (min-width:900px)': {
								display: 'none',
							},
							display: { xs: 'block' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: '240px',
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box>
					<Toolbar />
				</Box>
			</Box>
		</>
	);
};

export default Header;
