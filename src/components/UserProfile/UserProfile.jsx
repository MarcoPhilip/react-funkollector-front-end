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
        <h1>{user.firstname} {user.lastname}'s Profile</h1>

        <section>
            <h3>Collections</h3>
            {collection.length === 0 ? (
                <h4>No Collection</h4>
            ) : (
                <ul>
                    {collection.map(funko => (
                        <li key={funko._id}>
                            <Link to={`/funkos/${funko._id}`}>
                                {funko.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
            <h3>Wishlists</h3>
            {wishlist.length === 0 ? (
                <h4>No Wishlists</h4>
            ) : (
                <ul>
                    {wishlist.map(funko => (
                        <li key={funko._id}>
                            <Link to={`/funkos/${funko._id}`}>
                                {funko.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        <section>

        </section>
        </>
    )
};




// Export UserProfile
export default UserProfile;