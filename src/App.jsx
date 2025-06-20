
import './App.css'
// Import useContext
import { useContext } from 'react';
import { Routes, Route } from 'react-router'; // Import React Router
import { useState, useEffect } from 'react';

// ! COMPONENTS BELOW
// Import navbar
import NavBar from './components/NavBar/NavBar';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm';
// Import SignInForm component
import SignInForm from './components/SignInForm/SignInForm';
// Import the Landing and Dashboard components
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
// Import FunkoList component
import FunkoList from './components/FunkoList/FunkoList';
// Import FunkoDetail component
import FunkoDetail from './components/FunkoDetail/FunkoDetail';
// Import the FunkoForm component
import FunkoForm from './components/FunkoForm/FunkoForm';

// Import the UserContext
import { UserContext } from './contexts/UserContext';
// Add an import for the funkoService functions
import * as funkoService from './services/funkoService';


function App() {

  // Get the funkos
  const [funkos, setFunkos] = useState([]);
  // Get the user
  const { user } = useContext(UserContext);
  // Get a selected funko
  const [selected, setSelected] = useState(null);
  // Add a state var for funko forms
  const [isFormOpen, setIsFormOpen] = useState(false);


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

  // Selected funko handler function
  const handleSelect = (funko) => {
    setSelected(funko);
    console.log(funko);
    setIsFormOpen(false);
  };

  // Form view handler function
  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Create a function that handles adding a funko
  const handleAddFunko = async (formdata) => {
    try {
      // Call the funko service (create)
      
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <NavBar />
      <h2>Welcome to the Funkollector App!</h2>
      <Routes>

        <Route path='/' element={
          user ? 
            <Dashboard
              funkos={funkos} 
              handleSelect={handleSelect}
            /> 
          : 
            <Landing 
              funkos={funkos}
              handleSelect={handleSelect}
            />} 
        />

        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />

        <Route path='/funkos' element={
          <FunkoList 
            funkos={funkos}
            handleSelect={handleSelect}
            handleFormView={handleFormView}
            isFormOpen={isFormOpen}
          />} 
        />

        <Route path='/funkos/:id' element={
          isFormOpen ? (
            <FunkoForm />
          ) : (
            <FunkoDetail 
            funkos={funkos} 
            selected={selected}
            handleFormView={handleFormView}
            isFormOpen={isFormOpen}
          />
          )}
          
        />

        {/* <Route path='/collection' element={<Collection />} /> */}
        {/* <Route path='/wishlist' element={<Wishlist />} /> */}

        {/* <Route path='/user' element={<AllUser />} /> */}
        {/* <Router path='/user/:id' element={<User />} /> */}
        
      </Routes>
    </>
  )
}

export default App
