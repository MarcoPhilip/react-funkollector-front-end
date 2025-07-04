
import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import * as funkoService from '../../services/funkoService';
import * as collectionService from '../../services/collectionService';
import * as wishlistService from '../../services/wishlistService';
import { UserContext } from "../../contexts/UserContext";
import { Link, Outlet } from "react-router";

const FunkoDetail = ({ onDelete }) => {
  // grab the id from the route /:id
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [funko, setFunko] = useState(null);
  const [collected, setCollected] = useState(false);
  const [wished, setWished] = useState(false)

  useEffect(() => {
    // Create async function
    const fetchFunko = async () => {
      
      try {
        // Call on the funko service's show function
        const funko = await funkoService.show(id);

        // Don't forget to pass the error object to the new Error
        if (funko.err) {
          throw new Error(funko.err);
        }
        // Set funko state to the returned funko data
        setFunko(funko);


        if (user) {
          // Check if funko is in collection
          const collection = await collectionService.collectionIndex();
          // Using some function, check for true/false in the collection
          const inCollection = collection.funkos.some(funko => funko._id === id);
          // Invoke set collected state
          setCollected(inCollection);

          // Check if funko is in wishlist
          const wishlist = await wishlistService.wishlistIndex();
          // Using some function, check for true/false in the wishlist
          const inWishlist = wishlist.funkos.some(funko => funko._id === id);
          // Invoke set wishlist state
          setWished(inWishlist);
        }
      } catch (err) {
        console.log(err);
      }
    };
    // Invoke the fetchFunko function
    fetchFunko();
    // Dependency array
  }, [user, id]);

  // Define a function called handleDelete 
  const handleDelete = async () => {
    try {
      // Call for the onDelete(the handle delete function from app jsx)
      await onDelete(id);
      // Then navigate back to the funkos
      navigate('/funkos');
    } catch (err) {
      console.log(err);
    }
  }
  
  // Define handleAddCollection
  const handleAddCollection = async () => {
    try {
      // Get the addToCollection from collectionService
      await collectionService.addToCollection(funko._id);

      // Set collect to true
      setCollected(true);

    } catch (err) {
      console.log(err);
    }
  }

  // Define handleRemoveCollection
  const handleRemoveCollection = async () => {
    try {
      // get the removeFromCollection from collectionService
      await collectionService.removeFromCollection(funko._id);

      // Set collect to false
      setCollected(false);

    } catch (err) {
      console.log(err);
    }
  };


  // Define handleAddCollection
  const handleAddWishlist = async () => {
    try {
      // Get the addToCollection from collectionService
      await wishlistService.addToWishlist(funko._id);

      // Set collect to true
      setWished(true);

    } catch (err) {
      console.log(err);
    }
  }

  // Define handleRemoveCollection
  const handleRemoveWishlist = async () => {
    try {
      // get the removeFromCollection from collectionService
      await wishlistService.removeFromWishlist(funko._id);

      // Set collect to false
      setWished(false);

    } catch (err) {
      console.log(err);
    }
  };


  // return if props.selected is null
  if (!funko) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }

  return (
    <div className="funko-detail-view">
      <div className="funko-details">
        <h1 className="funko-name-title">{funko.name}</h1>
        <p><strong>Series:</strong> {funko.series}</p>
        <p><strong>Number:</strong> {funko.number}</p>
        <p><strong>Rarity:</strong> {funko.rarity} </p>
        <p><strong>Posted By:</strong> {funko.owner.firstname} {funko.owner.lastname}</p> 
      </div>

      {user && funko.owner && user._id === funko.owner._id && (
        <div className="funko-actions-1">
          <button className="btn-submit">
            <Link to={`/funkos/${funko._id}/edit`} className="link-text">
              Edit Edit
            </Link>
          </button>
          <button className='btn-cancel' onClick={() => handleDelete(funko._id)}>
            Delete Funko
          </button>
        </div>
      )}
         {user && (
          <div className="funko-actions-2">
            <button className='btn-add' onClick={collected ? handleRemoveCollection : handleAddCollection}>
              {collected ? 'Remove From Collection' : 'Add To Collection'}
            </button>
            <button className='btn-add' onClick={wished ? handleRemoveWishlist : handleAddWishlist}>
              {wished ? 'Remove From Wishlist' : 'Add To Wishlist'}
            </button>
          </div>
      )} 
    </div>
  );
};


export default FunkoDetail;