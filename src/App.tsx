import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './pages/auth/Login';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen justify-between ">
      <Header />
      {/* <Dashboard /> */}
      <Login isSignup={false} />
      <Footer />
    </div>
  );
}

export default App;
