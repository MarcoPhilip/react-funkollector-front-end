
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


const Header = () => {
  const { user } = useContext(UserContext);

    return (
        <div className='header-div'>
            <img src="/pop-header-bg.avif" alt="Funko Header"/>
            <h1>
            {user ? `Welcome, ${user.firstname}!` : 'Welcome to the Funkollector App!'}
            </h1>

        </div>
    )
}

export default Header;