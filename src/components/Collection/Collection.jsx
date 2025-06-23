
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
       <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>
          {collection.funkos.map((funko) => (
              <div key={funko._id}
              style={{
                  border: '2px solid black',
                  boxSizing: 'border-box',
                  flex: '1 1 calc(33% - 1rem)',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginBottom: '0.5rem', 
                  backgroundColor: 'rgba(227, 36, 36, 0.3)', 
                  padding: '1rem',
                  textAlign: 'center'
              }}
              >
              <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
              style={{
                textDecoration: 'none',
                color: 'black'
              }}>
                <h3>{funko.name}</h3>
                <p><strong>{funko.series} #{funko.number}</strong></p>
              </Link>
              </div>
          ))}
      </div>
        </>
    )
};





// Export Collection
export default Collection;