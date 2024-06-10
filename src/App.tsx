import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import PageCatalog from './pages/PageCatalog/PageCatalog';

const App: React.FC = () => (
	<>
		<Header />
		<div className='container' >
			<Routes>
				<Route path="/" />
				<Route path="/phones" element={<PageCatalog />} />
				<Route path='/cart' element={<PageCatalog />} /> {/*Colocar o page CartItems */}
			</Routes>
		</div>
	</>
);

export default App;

