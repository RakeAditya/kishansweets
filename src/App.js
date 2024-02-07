import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Carrier from './pages/Carrier';
// import Menu from './pages/Menu';
import Main from './pages/Main';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import './App.css';
import Status from './pages/Status';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={'Bounce'}
			/>

			<HashRouter>
				<Wrapper>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/carrier" element={<Carrier />} />
						<Route path="/policy" element={<Policy />} />
						<Route path="/status" element={<Status />} />
						<Route path="*" element={<Pagenotfound />} />
					</Routes>
				</Wrapper>
			</HashRouter>
		</div>
	);
}

export default App;
