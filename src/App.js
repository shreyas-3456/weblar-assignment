import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
