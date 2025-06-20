// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router';
// Import the useContext hook
import { useContext } from 'react';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {

    // Get the setUser function from the UserContext
    const { user, setUser } = useContext(UserContext);

    // Add the handleSignOut function
    const handleSignOut = () => {
        // Clear the token
        localStorage.removeItem('token');

        // Clear the user state
        setUser(null);
    };
    

    return (
        <nav>
            {user ? (
                <ul>
                    <li>Welcome, {user.firstname}</li>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
                    <li><Link to='/funkos'>All Funkos</Link></li>
                    <li><Link to='/collections'>My Collections</Link></li>
                    <li><Link to='/wishlists'>My Wishlists</Link></li>
                </ul>
            ) : (
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/sign-up'>Sign Up</Link></li>
                    <li><Link to='/sign-in'>Sign In</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;

