// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router';
// Import the useContext hook
import { useContext } from 'react';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {

    const { user } = useContext(UserContext);

    return (
        <nav>
            {user ? (
                <ul>
                    <li>Welcome, {user.firstname}</li>
                </ul>
            ) : (
                <ul>
                    <li><Link to='/sign-up'>Sign Up</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;

