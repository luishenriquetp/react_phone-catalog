import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import PageCatalog from './pages/PageCatalog/PageCatalog';
import Footer from './components/Footer/Footer';
import PageCart from './pages/CartPage/PageCart';

const App: React.FC = () => (
	<>
		<Header />
		<div className='container' >
			<Routes>
				<Route path="/" />
				<Route path="/phones" element={<PageCatalog />} />
				<Route path='/cart' element={<PageCart />} /> {/*Colocar o page CartItems */}
			</Routes>
		</div>
		<Footer />
	</>
);

export default App;

