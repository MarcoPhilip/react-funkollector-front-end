
//Bootstrap
import  Nav  from 'react-bootstrap/Nav';

import { Link,} from 'react-router';

const UserTab = () => {

    return (
        <>
        <Nav
        variant='tabs'
        id="uncontrolled-tab-example"
        className='center-tabs'
        >
            <Nav.Item eventKey="Collections" title='Collections'>
                <Nav.Link to='/sign-in' as={Link} className='link-text'>
                    Sign In
                </Nav.Link>
            </Nav.Item>
                
            <Nav.Item  eventKey="sign-up" title='Sign Up'>
                <Nav.Link to='/sign-up' as={Link} className='link-text'>
                    Sign Up
                </Nav.Link>
            </Nav.Item>

        </Nav>
    
        </>
    )
}

export default UserTab;