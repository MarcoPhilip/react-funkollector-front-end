// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router';
// Import the useContext hook
import { useContext, useState } from 'react';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';


const NavBar = () => {

    // Get the setUser function from the UserContext
    const { user, setUser } = useContext(UserContext);

    // Use Navigate
    const navigate = useNavigate();

    // Use state for expanded navbar
    const [opennav, setOpennav] = useState(false);

    // Add the handleSignOut function
    const handleSignOut = () => {
        // Clear the token
        localStorage.removeItem('token');

        // Clear the user state
        setUser(null);
        
        // Close navbar
        setOpennav(false)

        // Navigate 
        navigate('/');
    };

    // Handle navbar to close after click
    const handleNavClick = (path) => {
        setOpennav(false);
        navigate(path);
    }
    

    return (
             <Navbar expand="lg" expanded={opennav} className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/pop-logo.jpeg" alt="Funko Logo"
                        width="30"
                        height="30"
                        style={{marginRight: '10px'}}
                         />
                        Funkollector App
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setOpennav(nav => !nav)} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {user ? (
                            <Nav className='me-auto'>
                                <Nav.Link onClick={() => handleNavClick('/')}>Home</Nav.Link>
                                <Nav.Link onClick={() => {
                                    handleSignOut();
                                    navigate('/');
                                }}>
                                    Sign Out
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className='me-auto'>
                                <Nav.Link onClick={() => handleNavClick('/')}>Home</Nav.Link>                     
                                <Nav.Link onClick={() => handleNavClick('/sign-in')}>Sign In</Nav.Link>
                                <Nav.Link onClick={() => handleNavClick('/sign-up')}>Sign Up</Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavBar;

