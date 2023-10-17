import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Carrier from './pages/Carrier';
// import Menu from './pages/Menu';
import Main from './pages/Main';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import './App.css';
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					{/* <Route path="/menu" element={<Menu />} /> */}
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/carrier" element={<Carrier />} />
					<Route path="/policy" element={<Policy />} />
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
