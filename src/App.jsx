
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
    // Create async function
    const fetchFunkos = async () => {
      try {
      // Call on the funko service's index function
      const fetchedFunkos = await funkoService.index();
      
      // Don't forget to pass the error object to the new Error
      if (fetchedFunkos.err) {
        throw new Error(fetchedFunkos.err);
      }
      // Set funkos state to the returned funkos data
      setFunkos(fetchedFunkos);
      } catch (err) {
          console.log(err);
      }
    };
    // Invoke function
    fetchFunkos();
    // Add empty dependency array
  }, []);

  return (
    <>
      <NavBar />
      <h2>Welcome to the Funkollector App!</h2>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing funkos={funkos}/> } />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  )
}

export default App
