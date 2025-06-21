
import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import * as funkoService from '../../services/funkoService';
import { UserContext } from "../../contexts/UserContext";


const FunkoDetail = () => {
  // grab the id from the route /:id
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [funko, setFunko] = useState(null);
  const [editFunko, setEditFunko] = useState(false);
  const navigate = useNavigate();

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
        setFunko(funko)
      } catch (err) {
        console.log(err);
      }
    };

    fetchFunko();
  }, [id]);

  
  // return if props.selected is null
  if (!funko) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{funko.name}</h1>
      <h2>Series: {funko.series}</h2>
      <h2> Number: {funko.number}</h2>
      <h2>Rarity: {funko.rarity} </h2>
      <h2>Posted By: {funko.owner.firstname} {funko.owner.lastname}</h2> 
      {user && funko.owner && user._id === funko.owner._id && (
        <button onClick={() => setEditFunko(true)}>Edit Funko</button>
      )}
    </div>
  );
};


export default FunkoDetail;