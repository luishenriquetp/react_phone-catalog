import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Route, Routes } from 'react-router-dom';
import PageCatalog from './pages/PageCatalog/PageCatalog';

const App: React.FC = () => (
	<>
		<Header />
		<div className='container' >
			<Routes>
				<Route path="/" />
				<Route path="/phones" element={<PageCatalog />} />
			</Routes>
		</div>
		<Content />
	</>
);

export default App;

