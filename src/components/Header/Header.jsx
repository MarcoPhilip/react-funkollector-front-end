
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


const Header = () => {
  const { user } = useContext(UserContext);

    return (
        <div>
            <img src="/pop-header-bg.avif" alt="Funko Header"        
            style={{
                display: 'block',
                width: '100%',
                maxHeight: '300px',
                marginTop: '30px',
                marginBottom: '30px',
                border: '5px solid black',
                borderRadius:'10px',
                objectFit: 'cover',
                objectPosition: 'center top'
             }}
            />
            <h1 style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '2rem',
                border: '3px solid black',
                borderRadius:'8px',
                padding: '1rem'
            }}>
            {user ? `Welcome, ${user.firstname}` : 'Welcome to the Funkollector App!'}
            </h1>

        </div>
    )
}

export default Header;