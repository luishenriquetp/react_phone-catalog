import React from 'react';
import Router from './routes/Router.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import Footer from './components/Footer/Footer.tsx';

export function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
