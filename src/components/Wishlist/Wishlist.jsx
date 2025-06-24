
// Imports if necessary
import { useState, useEffect } from "react";
import { Link } from 'react-router';
import * as wishlistService from '../../services/wishlistService'




// Define the Wishlist function
const Wishlist = ({ handleSelect }) => {
    // Use state for wishlist
    const [wishlist, setWishlist] = useState();
    
    // Define the useEffect
    useEffect(() => {
        // Fetch the collection from collectionService
        const fetchWishlist = async () => {
            try {
                // Call on the wishlist service's wishlistIndex function
                const fetchedWishlist = await wishlistService.wishlistIndex();

                // Set the wishlist state with the data
                setWishlist(fetchedWishlist);
            } catch (err) {
                console.log(err);
            }
        };
        // Invoke the function
        fetchWishlist();
        // Add empty dependancy array
    }, []);

    if (!wishlist) return <h2>Loading Collection</h2>
    // Rendering
    return (
        <>
        <h1>My Wishlist</h1>
        <div>
            {wishlist.funkos.length === 0 ? (
                <h2>No Funko Wishlist</h2>
            ) : (
                <div className='funko-list'>
                    {wishlist.funkos.map((funko) => (
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
export default Wishlist;