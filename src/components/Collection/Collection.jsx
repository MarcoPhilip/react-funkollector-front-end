
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
        <div className='dash-container'>
            <h1>My Collection</h1>
            {collection.funkos.length == 0 ? (
                <h2>No Collection Yet</h2>
            ) : (
                <div className='funko-list'>
                    {collection.funkos.map((funko) => (
                        <div key={funko._id}
                        className="funko-card"
                        >
                            <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
                            className="link-text">
                                <p><strong>{funko.name}</strong></p>
                                <p><strong>{funko.series} #{funko.number}</strong></p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
};





// Export Collection
export default Collection;