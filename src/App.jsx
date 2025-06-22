
import './App.css'
// Import useContext
import { useContext } from 'react';
import { Routes, Route, } from 'react-router'; // Import React Router
import { useState, useEffect, } from 'react';


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
// Import the Collection component
import Collection from './components/Collection/Collection';
// Import the Wishlist component 
import Wishlist from './components/Wishlist/Wishlist';
// Import the UserList component
import UserList from './components/UserList/UserList';
// Import the UserProfile component
import UserProfile from './components/UserProfile/UserProfile';


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
    setIsFormOpen(false);
  };

  // Form view handler function
  const handleFormView = () => {
    if (!selected?._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  // Create a function that handles adding a funko
  const handleAddFunko = async (formdata) => {

    try {
      // Call the funko service (create)
      const newFunko = await funkoService.create(formdata);
      // If new funko fails, throw a new error
      if (newFunko.err) {
        throw new Error(newFunko.err)
      };
      // Add the new funko object to the current funko arrays
      const newFunkoList = [...funkos, newFunko];
      // Set the array as the new funkos
      setFunkos(newFunkoList);
      // Close form after adding the new funko
      setIsFormOpen(false);
      return newFunko;
    } catch (err) {
      console.log(err)
    }
  };

  // Add the handlUpdate function
  const handleUpdate = async (id, updatedData) => {
    try {
      // Get the update function form funkoService
      const updatedFunko = await funkoService.update(id, updatedData);

      // If new funko fails, throw a new error
      if (updatedFunko.err) {
        throw new Error(updatedFunko.err)
      };

      const updatedFunkos = funkos.map(f =>
        f._id === updatedFunko._id ? updatedFunko : f
      );

      setFunkos(updatedFunkos);
      return updatedFunko;
    } catch (err) {
      console.log(err);
    }
  };

  // Add the handleDelete function
  const handleDelete = async (id) => {
    try {
      // Get the deleteFunko function from funkoService and use the id as params
      await funkoService.deleteFunko(id);

      // Filter out the deletedfunko and set the funkos as the new state
      const updatedFunkos = funkos.filter((funko) => funko._id !== id);

      // Set the funkos with the filtered lists of funkos
      setFunkos(updatedFunkos);

    } catch (err) {
      console.log(err);
    }
  }

  

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
            user={user}
            handleFormView={handleFormView}
            
          />} 
        />

        <Route path='/funkos/:id' element={
            <FunkoDetail 
              user={user}
              onDelete={handleDelete}
            />
        }/>

        <Route path='/funkos/new' element={
          <FunkoForm 
            handleSubmit={handleAddFunko}
            buttonText="Add Funko"
          />
        }/>

        <Route path='/funkos/:id/edit' element={
          <FunkoForm
            initialFormData={selected}
            handleSubmit={handleUpdate}
            buttonText="Update Funko"
          />
        }/>

        <Route path='/collections' element={
          user ? 
            <Collection 
            user={user}
            funkos={funkos}
            handleSelect={handleSelect}
          /> 
          : 
            <Landing 
              funkos={funkos}
              handleSelect={handleSelect}
            />}  
        />


        <Route path='/wishlists' element={
          user ? 
            <Wishlist 
            user={user}
            funkos={funkos}
            handleSelect={handleSelect}
          /> 
          : 
            <Landing 
              funkos={funkos}
              handleSelect={handleSelect}
            />} 
        />

        <Route path='/users' element={<UserList />} />
        <Router path='/user/:id' element={<UserProfile />} />


        
      </Routes>
    </>
  )
}

export default App
