// src/components/Dashboard/Dashboard.jsx

//Bootstrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Wishlist from '../Wishlist/Wishlist';
import FunkoList from '../FunkoList/FunkoList';
import Collection from '../Collection/Collection';
import UserList from '../UserList/UserList';
import { Outlet, Link, useParams } from 'react-router';
import { useContext, } from 'react';
import  Nav  from 'react-bootstrap/Nav';
import { UserContext } from '../../contexts/UserContext';
import FunkoDetail from '../FunkoDetail/FunkoDetail';


const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  return (
    <>
    <Nav
      variant="tabs"
      defaultActiveKey="funkos"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Nav.Item eventKey="funkos" title="All Funkos">
        <Nav.Link to='/funkos' as={Link}> Funko List </Nav.Link>
      </Nav.Item>

      <Nav.Item eventKey="collection" title="My Collection">
        <Nav.Link to='/collections' as={Link}> My Collections </Nav.Link>
          
      </Nav.Item>

      <Nav.Item eventKey="wishlist" title="My Wishlist" >
        <Nav.Link to='/wishlists' as={Link}> My Wishlists </Nav.Link>
        
      </Nav.Item>

      <Nav.Item eventKey="funkollectors" title="All Funkollectors" >
        <Nav.Link to='/users' as={Link}> All Funkollectors </Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet />
    </>
  );
};

export default Dashboard;

