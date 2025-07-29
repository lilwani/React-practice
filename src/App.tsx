import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
