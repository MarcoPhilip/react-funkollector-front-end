// Imports
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as userService from '../../services/userService';

// Define the UserProfile function
const UserProfile = () => {
    // Get the user id from params
    const { userId } = useParams();
    // Set a state for the user profile as null
    const [profile, setProfile] = useState(null);

    // Define the useEffect function
    useEffect(() => {
        const fetchUser = async () => {
            // Use the fetchedUser function from userService
            const user = await userService.fetchedUser(userId);

            // Set profile state with the user
            setProfile(user);
            
        };
        // Invoke function
        fetchUser();
        // Dependency array
    },[userId]);

    // Show a loading message
    if (!profile) return <h2>Profile Loading</h2>;

    // Break the object apart
    const { user, collection, wishlist } = profile;


    // Render
    return (
        <>
        <h1 className="user-header">{user.firstname} {user.lastname}'s Profile</h1>
        <div className="user-profile">
        <section>
            <h2>Collections</h2>
            {collection.length === 0 ? (
                <h4>No Collection</h4>
            ) : (
                <div className='user-funko-list'>
                    {collection.map((funko) => (
                        <div key={funko._id}
                        className="user-funko-cards"
                        >
                        <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
                        className="link-text">
                            <p>{funko.name}</p>
                            <p><strong>{funko.series} #{funko.number}</strong></p>
                                </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
        <section>
            <h2>Wishlists</h2>
            {wishlist.length === 0 ? (
                <h4>No Wishlists</h4>
            ) : (
                <div className='user-funko-list'>
                    {wishlist.map((funko) => (
                        <div key={funko._id}
                        className="user-funko-cards"
                        >
                        <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
                        className="link-text">
                            <p>{funko.name}</p>
                            <p><strong>{funko.series} #{funko.number}</strong></p>
                        </Link>
                        </div>
                    ))}
                </div>
            )}
            </section>
            </div>
        </>
    )
};




// Export UserProfile
export default UserProfile;