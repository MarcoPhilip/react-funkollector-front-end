
// Imports if necessary
import { useState, useEffect } from "react";
import { Link } from 'react-router';
import * as collectionService from '../../services/collectionService'




// Define the Collection function
const Collection = ({ handleSelect }) => {
    // Use state for collection 
    const [collection, setCollection] = useState();
    
    // Define the useEffect
    useEffect(() => {
        // Fetch the collection from collectionService
        const fetchCollection = async () => {
            try {
                // Call on the collection service's collectionIndex function
                const fetchedCollection = await collectionService.collectionIndex();

                // Set the collection state with the data
                setCollection(fetchedCollection);
            } catch (err) {
                console.log(err);
            }
        };
        // Invoke the function
        fetchCollection();
        // Add empty dependancy array
    }, []);

    if (!collection) return <h2>Loading Collection</h2>
    // Rendering
    return (
        <>
        <h1>My Collection</h1>
        <div>
            {collection.funkos.length === 0 ? (
                <h2>No Funko Collection</h2>
            ) : (
                <ul>
                    {collection.funkos.map((funko) => (     
                        <li key={`${funko._id}`}>
                        <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}>
                        {funko.name}
                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    )
};





// Export Collection
export default Collection;