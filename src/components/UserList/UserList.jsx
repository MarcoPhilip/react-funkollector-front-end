// Imports
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";
import * as userService from '../../services/userService';


// Define the UserList function
const UserList = () => {
    // Store user list as an array in state 
    const [users, setUsers] = useState([]);

    // Define the useEffect
    useEffect(() => {
        // Get all users
        const fetchUsers = async () => {
            // Use the allUsers function from userService
            const fetchedUsers = await userService.allUsers();
            // Set the users state with the fetchedUsers
            setUsers(fetchedUsers);
        };

        // Invoke the function
        fetchUsers();
        // Dependency array
    }, []);


    // Render
    return (
        <>
        <h1>All Funkollectors</h1>
        {users.length === 0 ? (
            <h2>No Users Yet.</h2>
        ) : (
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <Link to={`/users/${user._id}`}>
                            {user.firstname} {user.lastname}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
        <Outlet/>
        </>
    );
};




// Export UserProfile
export default UserList;