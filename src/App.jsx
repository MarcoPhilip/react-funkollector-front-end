
import './App.css'
// Import useContext
import { useContext } from 'react';
import { Routes, Route } from 'react-router'; // Import React Router
import { useState, useEffect } from 'react';
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
// Add an import for the funkoService functions
import * as funkoService from './services/funkoService';

function App() {

  // Get the funkos
  const [funkos, setFunkos] = useState([]);
  // Get the user
  const { user } = useContext(UserContext);


  // Create a useEffect function
  useEffect(() => {

    const fetchFunkos = async () => {
      
      const fetchedFunkos = await funkoService.index();

      setFunkos(fetchFunkos);
    }
  });

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
