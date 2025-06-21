
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as funkoService from '../../services/funkoService';

const FunkoDetail = () => {
  const { id } = useParams();
  const [funko, setFunko] = useState(null);

  useEffect(() => {
    const fetchFunko = async () => {
      try {
        const funko = await funkoService.show(id);
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
    </div>
    
  );
};


export default FunkoDetail;