// src/components/Dashboard/Dashboard.jsx

//Bootstrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import  Nav  from 'react-bootstrap/Nav';
import Wishlist from '../Wishlist/Wishlist';
import FunkoList from '../FunkoList/FunkoList';
import Collection from '../Collection/Collection';
import UserList from '../UserList/UserList';
import { Outlet } from 'react-router';

import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';


const Dashboard = ({funkos, handleSelect, handleFormView}) => {
  const { user } = useContext(UserContext);

  return (
    <>
    <Tabs
      defaultActiveKey="funkos"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="funkos" title="All Funkos">
        <FunkoList
        funkos={funkos}
        user={user}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        />
      </Tab>
      <Tab eventKey="collection" title="My Collection">
        <Collection />
      </Tab>
      <Tab eventKey="wishlist" title="My Wishlist" >
        <Wishlist />
      </Tab>
      <Tab eventKey="funkollectors" title="All Funkollectors" >
        <UserList />
      </Tab>
    </Tabs>
    <Outlet />
    </>
    
  );
};

export default Dashboard;

