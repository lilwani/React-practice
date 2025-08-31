import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './pages/auth/Login';
import { useSelector } from 'react-redux';
import { getUserState } from './pages/user/userSlice';

function App() {
  const { isLoggedIn } = useSelector(getUserState);

  return (
    <div className="flex flex-col h-screen w-screen justify-between ">
      <Header />
      {!isLoggedIn ? <Login isSignup={false} /> : <Dashboard />}
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
