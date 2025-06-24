// Imports
import { useState, useEffect } from "react";
import { Link } from "react-router";
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
        <div className='dash-container'>
            <h1>All Funkollectors</h1>
            {users.length === 0 ? (
                <h2>No Users Yet.</h2>
            ) : (
                <div className="user-list">
                    {users.map(user => (
                        <div
                        key={user._id}
                        className="user-card"
                        >
                            <Link to={`/users/${user._id}`}
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                                <p>
                                    {user.firstname} {user.lastname}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};




// Export UserProfile
export default UserList;