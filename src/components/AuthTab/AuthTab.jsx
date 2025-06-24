//Bootstrap
import  Nav  from 'react-bootstrap/Nav';

import { Outlet, Link,} from 'react-router';

const AuthTab = () => {

    return (
        <>
        <Nav
        variant='tabs'
        id="uncontrolled-tab-example"
        className='center-tabs'
        >
            <Nav.Item eventKey="sign-in" title='Sign In'>
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
        <Outlet/>
        </>
    )
}

export default AuthTab;