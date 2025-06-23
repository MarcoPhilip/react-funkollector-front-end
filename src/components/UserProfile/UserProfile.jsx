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
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>
                    {collection.map((funko) => (
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
            )}
        </section>
            <h3>Wishlists</h3>
            {wishlist.length === 0 ? (
                <h4>No Wishlists</h4>
            ) : (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>
                    {wishlist.map((funko) => (
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
            )}
        <section>

        </section>
        </>
    )
};




// Export UserProfile
export default UserProfile;