import React from 'react';
import Router from './routes/Router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

export function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
