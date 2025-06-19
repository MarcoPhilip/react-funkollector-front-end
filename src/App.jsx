
import './App.css'
// Import useContext
import { useContext } from 'react';
import { Routes, Route } from 'react-router'; // Import React Router
// Import navbar
import NavBar from './components/NavBar/NavBar';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm';
// Import SignInForm component
import SignInForm from './components/SignInForm/SignInForm';
// Import the Landing and Dashboard components
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

// Import the UserContext
import { UserContext } from './contexts/UserContext';

function App() {

  // Get the user
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <h2>Welcome to the Funkollector App!</h2>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  )
}

export default App
