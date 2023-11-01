import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Carrier from './pages/Carrier';
// import Menu from './pages/Menu';
import Main from './pages/Main';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import './App.css';
const Wrapper = ({ children }) => {
	const location = useLocation();
	React.useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Wrapper>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/carrier" element={<Carrier />} />
						<Route path="/policy" element={<Policy />} />
						<Route path="*" element={<Pagenotfound />} />
					</Routes>
				</Wrapper>
			</BrowserRouter>
		</div>
	);
}

export default App;
