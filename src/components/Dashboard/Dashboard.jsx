// src/components/Dashboard/Dashboard.jsx

//Bootstrap
import  Nav  from 'react-bootstrap/Nav';

import { Outlet, Link,} from 'react-router';




const Dashboard = () => {

  return (
    <>
    <Nav
      variant="tabs"
      defaultActiveKey="funkos"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Nav.Item eventKey="funkos" title="All Funkos">
        <Nav.Link to='/funkos' as={Link} className='link-text'> Funko List </Nav.Link>
      </Nav.Item>

      <Nav.Item eventKey="collection" title="My Collection">
        <Nav.Link to='/collections' as={Link} className='link-text'> My Collections </Nav.Link>
          
      </Nav.Item>

      <Nav.Item eventKey="wishlist" title="My Wishlist" >
        <Nav.Link to='/wishlists' as={Link} className='link-text'> My Wishlists </Nav.Link>
        
      </Nav.Item>

      <Nav.Item eventKey="funkollectors" title="All Funkollectors" >
        <Nav.Link to='/users' as={Link} className='link-text'> All Funkollectors </Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet />
    </>
  );
};

export default Dashboard;

